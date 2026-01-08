# Arquitectura PWA y Mobile-First

> **Fecha:** 2026-01-07  
> **Versión:** 1.0  
> **Estrategia:** Una app, dos experiencias

---

## 📱 Concepto General

Don Cándido IA es **UNA SOLA aplicación web** con **DOS experiencias de usuario** diferenciadas:

1. **Experiencia Desktop/Tablet** - Sistema completo ISO 9001
2. **Experiencia Mobile PWA** - App Vendedor offline-first

---

## 🏗️ Arquitectura de Rutas

```
https://doncandidoia.com/
│
├── /login                          # Autenticación universal
├── /instalar                       # Landing instalación PWA
│
├── /dashboard                      # 🖥️ DESKTOP ONLY
│   ├── (tabs superiores)
│   │   ├── Dashboard principal
│   │   ├── Madurez Organizacional
│   │   └── Mini Copiloto
│   └── (sidebar completo)
│
├── /calendario                     # 🖥️ DESKTOP ONLY
├── /crm                            # 🖥️ DESKTOP ONLY
├── /rrhh                           # 🖥️ DESKTOP ONLY
├── /documentos                     # 🖥️ DESKTOP ONLY
├── /auditorias                     # 🖥️ DESKTOP ONLY
├── /planificacion-revision-direccion  # 🖥️ DESKTOP ONLY
│
└── /vendedor                       # 📱 MOBILE PWA
    ├── layout.tsx                  # Layout móvil específico
    ├── page.tsx                    # Dashboard vendedor
    ├── /clientes                   # Lista de clientes
    ├── /clientes/[id]              # Detalle cliente
    ├── /clientes/[id]/visita       # Registro de visita
    ├── /mapa                       # Mapa de clientes
    ├── /sync                       # Estado sincronización
    └── /perfil                     # Perfil vendedor
```

---

## 🎯 Experiencia 1: Desktop/Tablet (Sistema Completo)

### **Usuarios:**
- Gerentes
- Responsables de Calidad
- Administradores
- Auditores

### **Características:**
- ✅ Sidebar completo con todos los módulos
- ✅ Tabs superiores (Dashboard, Madurez, Mini Copiloto)
- ✅ Vistas de tabla/grid complejas
- ✅ Formularios extensos
- ✅ Gráficos y dashboards analíticos

### **Layout:**
```tsx
// src/app/(dashboard)/layout.tsx
<div className="flex">
  <Sidebar />
  <main className="flex-1">
    <Header />
    <TabsNavigation />  {/* Solo en algunas páginas */}
    {children}
  </main>
</div>
```

### **Responsive:**
- Desktop: ≥1024px - Sidebar expandido
- Tablet: 768-1023px - Sidebar colapsable
- Mobile: <768px - Sidebar como drawer

---

## 📲 Experiencia 2: Mobile PWA (App Vendedor)

### **Usuarios:**
- Vendedores en campo
- Representantes comerciales

### **Características:**
- ✅ **Offline-first** - Funciona sin internet
- ✅ **GPS automático** - Ubicación de visitas
- ✅ **Captura multimedia** - Fotos y audios
- ✅ **Sincronización inteligente** - Por prioridades
- ✅ **Bottom navigation** - Navegación móvil nativa
- ✅ **Sin sidebar** - Interfaz limpia

### **Layout:**
```tsx
// src/app/(dashboard)/vendedor/layout.tsx
<div className="min-h-screen flex flex-col">
  <MobileHeader />
  <main className="flex-1 pb-20">
    {children}
  </main>
  <BottomNavigation />
</div>
```

### **Bottom Navigation:**
```
┌─────────────────────────────────┐
│                                 │
│        Contenido                │
│                                 │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│ [🏠] [👥] [🗺️] [🔄] [👤]       │
│ Inicio Clientes Mapa Sync Perfil│
└─────────────────────────────────┘
```

---

## 🔐 Scope y Seguridad

### **Manifest.json para PWA:**
```json
{
  "name": "Don Cándido - Vendedor",
  "short_name": "Vendedor",
  "start_url": "/vendedor",
  "scope": "/vendedor",
  "display": "standalone",
  "orientation": "portrait-primary"
}
```

### **Efecto del Scope:**
- La PWA instalada **solo** puede navegar dentro de `/vendedor/*`
- Intentar ir a `/dashboard` abre el navegador externo
- Es una "sandbox" de seguridad

### **Permisos por Rol:**
```typescript
// Middleware de autenticación
if (user.role === 'vendedor') {
  // Solo puede acceder a /vendedor/*
  if (!pathname.startsWith('/vendedor')) {
    return redirect('/vendedor');
  }
}
```

---

## 💾 Service Worker y Offline

### **Estrategia de Cacheo:**

| Tipo | Estrategia | Uso |
|------|-----------|-----|
| **Assets estáticos** | Cache First | Iconos, logos, manifest |
| **Páginas vendedor** | Network First + Cache Fallback | `/vendedor/*` |
| **Otras páginas** | Network Only | `/dashboard`, `/crm`, etc. |
| **API calls** | Network Only | Siempre datos frescos |

### **Background Sync:**
```javascript
// Service Worker
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-visitas') {
    event.waitUntil(syncVisitas());
  }
  if (event.tag === 'sync-fotos') {
    event.waitUntil(syncFotos());
  }
});
```

### **IndexedDB para Offline:**
```typescript
// Estructura de datos local
interface VisitaLocal {
  id: string;
  clienteId: string;
  fecha: string;
  ubicacionInicio: UbicacionGPS;
  fotosIds: string[];  // Referencias a blobs en IndexedDB
  syncStatus: 'pending' | 'syncing' | 'synced' | 'error';
}
```

---

## 🚀 Flujo de Instalación PWA

### **Paso 1: Compartir Link**
```
Gerente envía por WhatsApp:
https://doncandidoia.com/instalar
```

### **Paso 2: Landing de Instalación**
```tsx
// /instalar detecta dispositivo
if (isIOS) {
  // Muestra instrucciones Safari
  "Toca Compartir → Añadir a Inicio"
} else if (isAndroid) {
  // Dispara prompt nativo
  deferredPrompt.prompt();
}
```

### **Paso 3: Instalación**
- Android: Prompt nativo "Instalar app"
- iOS: Instrucciones manuales paso a paso

### **Paso 4: Primera Apertura**
```
PWA abre en /vendedor
↓
Vendedor hace login
↓
Descarga clientes asignados a IndexedDB
↓
Listo para trabajar offline
```

---

## 📊 Sincronización de Datos

### **Prioridades de Sync:**

| Prioridad | Tipo | Descripción |
|-----------|------|-------------|
| **1 (Alta)** | Datos | Visitas, notas, checklists |
| **2 (Media)** | Ubicación | Coordenadas GPS |
| **3 (Baja)** | Archivos | Fotos, audios |

### **Estrategia:**
1. Vendedor trabaja offline todo el día
2. Al conectarse a WiFi, sync automático:
   - Primero: Datos de visitas (rápido)
   - Segundo: Ubicaciones GPS
   - Tercero: Fotos y audios (pesado)

### **Manejo de Conflictos:**
```typescript
// Last-write-wins con timestamp
if (localData.updatedAt > serverData.updatedAt) {
  // Subir datos locales
} else {
  // Descargar datos del servidor
}
```

---

## 🎨 Diseño Mobile-First

### **Principios:**
1. **Touch targets ≥72px** - Botones grandes
2. **Bottom navigation** - Pulgar alcanza fácil
3. **Scroll vertical** - Natural en móvil
4. **Formularios simples** - Pocos campos por pantalla
5. **Feedback visual** - Loading states claros

### **Componentes Específicos:**
```
src/components/vendedor/
├── BottomNav.tsx           # Navegación inferior
├── ClienteCard.tsx         # Tarjeta de cliente móvil
├── VisitaForm.tsx          # Formulario de visita
├── CameraCapture.tsx       # Captura de fotos
├── AudioRecorder.tsx       # Grabación de audios
├── GPSIndicator.tsx        # Indicador de ubicación
└── SyncStatus.tsx          # Estado de sincronización
```

---

## 🔄 Migración Desktop → Mobile

### **Problema Actual:**
- Sidebar muestra "Dashboard", "Madurez Org.", "Mini Copiloto"
- Estos son tabs de escritorio, no deberían estar en móvil

### **Solución:**
```tsx
// src/components/layout/Sidebar.tsx
const desktopOnlyTabs = [
  'Dashboard',
  'Madurez Organizacional', 
  'Mini Copiloto'
];

{!isMobile && (
  <TabsSection items={desktopOnlyTabs} />
)}
```

### **Menú Móvil Simplificado:**
- Noticias
- Calendario
- CRM
- RRHH
- Documentos
- Mejora

---

## 📈 Métricas de Éxito

| Métrica | Objetivo |
|---------|----------|
| **Tiempo de carga PWA** | <2s |
| **Funcionalidad offline** | 100% |
| **Tasa de instalación** | >60% vendedores |
| **Sync exitoso** | >95% |
| **Uso diario** | >80% vendedores |

---

## 🧪 Testing

### **Emulación Chrome DevTools:**
```
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
Dispositivos:
- iPhone 12 Pro (390x844)
- Galaxy S20 (360x800)
- iPad (768x1024)
```

### **Testing Real:**
- **Android:** Chrome (mejor soporte PWA)
- **iOS:** Safari (limitaciones PWA)

### **Checklist PWA:**
```
✅ Manifest.json válido
✅ Service Worker registrado
✅ HTTPS en producción
✅ Iconos 192x192 y 512x512
✅ Offline page funcional
✅ Add to Home Screen funciona
```

---

## 🔗 Referencias

- [Plan Corrección Mobile](./plan_correccion_mobile.md)
- [CRM Funcionalidades](./CRM_FUNCIONALIDADES.md)
- [Arquitectura Técnica](./2_ARQUITECTURA_TECNICA.md)
- [Roadmap](./4_ROADMAP_Y_PENDIENTES.md)
