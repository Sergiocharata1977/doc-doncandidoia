# Plan de Implementación: Session Cookies httpOnly

## Objetivo

Migrar el sistema de autenticación actual (cookie editable desde JavaScript) a un sistema seguro con **Session Cookies httpOnly** generadas por el backend.

---

## Problema Actual

```typescript
// AuthContext.tsx - VULNERABLE
document.cookie = `auth-token=${firebaseUser.uid}; path=/; max-age=604800; SameSite=Lax`;
sessionStorage.setItem('organization_id', fullUser.organization_id);
```

**Riesgos:**
1. Cookie accesible desde JavaScript → vulnerable a XSS
2. `organization_id` en sessionStorage → puede ser modificado por atacante
3. Token = UID directo → si se filtra, permite impersonación

---

## Solución Propuesta

### Flujo Nuevo (Seguro)

```
1. Usuario hace login en Frontend (Firebase Auth)
2. Frontend obtiene idToken de Firebase
3. Frontend envía idToken a /api/auth/session
4. Backend verifica token con Admin SDK
5. Backend crea Session Cookie con httpOnly + Secure
6. Backend retorna cookie en respuesta
7. Middleware lee cookie httpOnly para validar
```

---

## Archivos a Modificar

### 1. Crear `/api/auth/session/route.ts` (NUEVO)

**Responsabilidad:** Generar Session Cookies seguras

```typescript
import { auth } from '@/lib/firebase/admin';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const { idToken } = await request.json();
  
  // Verificar token con Admin SDK
  const decodedToken = await auth.verifyIdToken(idToken);
  
  // Crear session cookie (5 días)
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });
  
  // Setear cookie con httpOnly
  cookies().set('__session', sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: expiresIn / 1000,
    path: '/',
  });
  
  return NextResponse.json({ success: true });
}
```

---

### 2. Modificar `src/contexts/AuthContext.tsx`

**Cambios:**
- Después de login exitoso, llamar a `/api/auth/session`
- Eliminar `document.cookie` manual
- Mantener `sessionStorage` solo para UI (no para seguridad)

```typescript
// ANTES
document.cookie = `auth-token=${firebaseUser.uid}; ...`;

// DESPUÉS
const response = await fetch('/api/auth/session', {
  method: 'POST',
  body: JSON.stringify({ idToken: await firebaseUser.getIdToken() }),
});
```

---

### 3. Actualizar `src/middleware.ts`

**Cambios:**
- Leer cookie `__session` (httpOnly)
- Verificar con Firebase Admin SDK
- Extraer `organization_id` del token decodificado

```typescript
const sessionCookie = request.cookies.get('__session')?.value;

if (sessionCookie) {
  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie);
    // decodedClaims contiene uid, organization_id (custom claim)
  } catch (error) {
    // Cookie inválida, redirigir a login
  }
}
```

---

### 4. Agregar Custom Claims a Firebase

**Problema:** `organization_id` debe estar en el token, no en cookie separada

**Solución:** Usar Firebase Custom Claims

```typescript
// En /api/users/create o al asignar organización
await auth.setCustomUserClaims(userId, {
  organization_id: 'org_123',
  role: 'admin',
});
```

---

## Migración Gradual

Para no romper usuarios existentes:

1. **Fase 1:** Implementar nuevo flujo en paralelo
   - Mantener cookie antigua funcionando
   - Agregar nueva cookie `__session`
   
2. **Fase 2:** Middleware acepta ambas cookies
   - Si existe `__session`, usarla (preferencia)
   - Si no, fallback a cookie antigua
   
3. **Fase 3:** Forzar re-login
   - Después de 1 semana, invalidar cookies antiguas
   - Usuarios deben hacer logout/login

---

## Consideraciones

### ⚠️ Impacto en Velocidad

- **Mínimo:** Verificar session cookie es rápido (~10ms)
- **Caché:** Podemos cachear verificaciones por 5 min

### ⚠️ Complejidad

- **Alta:** Requiere cambios en Auth, Middleware y Admin SDK
- **Tiempo estimado:** 2-3 horas de desarrollo + testing

### ⚠️ Testing Requerido

1. Login → debe crear cookie httpOnly
2. Middleware → debe leer cookie correctamente
3. Logout → debe invalidar cookie
4. Expiración → debe redirigir a login

---

## Alternativa Simplificada (Recomendada para MVP)

Si el refactor completo es muy complejo ahora, podemos hacer una **versión intermedia**:

1. ✅ Mantener Firebase Auth en cliente
2. ✅ Crear API `/api/auth/verify` que valide el token
3. ✅ Middleware llama a esta API (con caché)
4. ⏳ Migrar a Session Cookies en versión futura

**Ventaja:** Menos cambios, más rápido
**Desventaja:** Cookie sigue siendo accesible desde JS

---

## Decisión Requerida

¿Prefieres:

**A) Implementación completa ahora** (2-3 horas, máxima seguridad)  
**B) Versión intermedia** (30 min, mejora parcial)  
**C) Posponer para después del MVP** (enfocarse en features)
