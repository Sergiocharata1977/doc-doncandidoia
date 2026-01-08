# Checklist QA - Control de Calidad

> **Fecha:** 2026-01-08  
> **Proyecto:** Don Cándido IA - Sistema ISO 9001

---

## 📱 App Vendedor PWA (`/app-vendedor`)

### Funcionalidad Básica
- [ ] Login funciona correctamente
- [ ] Dashboard muestra estadísticas del vendedor
- [ ] Bottom navigation funciona (Inicio, Clientes, Mapa, Sync, Perfil)
- [ ] Header muestra estado de conexión (Online/Offline)
- [ ] Botón "Actualizar App" aparece cuando hay nueva versión

### Lista de Clientes
- [ ] Lista de clientes carga correctamente
- [ ] Búsqueda de clientes funciona
- [ ] Click en cliente navega al detalle
- [ ] Muestra última visita de cada cliente
- [ ] Filtros de clientes funcionan

### Registro de Visitas
- [ ] Formulario de nueva visita funciona
- [ ] Captura de ubicación GPS funciona
- [ ] Captura de fotos funciona
- [ ] Guardado de visita funciona

### PWA / Offline
- [ ] App se puede instalar en Android
- [ ] Instrucciones iOS aparecen correctamente
- [ ] Indicador Offline/Online cambia correctamente
- [ ] Service Worker se registra
- [ ] App funciona sin internet (datos cacheados)
- [ ] Sincronización funciona al volver online

### Diseño Mobile
- [ ] Responsive en iPhone 12 Pro (390px)
- [ ] Responsive en Galaxy S20 (360px)
- [ ] Touch targets ≥ 72px
- [ ] No hay scroll horizontal
- [ ] Textos legibles

---

## 🖥️ Aplicación Web Completa

### Autenticación
- [ ] Login con email/password funciona
- [ ] Logout funciona
- [ ] Redirección a login sin sesión
- [ ] Roles funcionan (admin, operario, super_admin)

### Dashboard Principal
- [ ] Tabs superiores funcionan (cuando están habilitados)
- [ ] Sidebar navegable
- [ ] Header muestra organización
- [ ] Selector de usuario funciona

### Módulo CRM
- [ ] Lista de clientes carga
- [ ] Kanban funciona (drag & drop)
- [ ] Detalle de cliente carga
- [ ] Nuevo cliente se crea correctamente
- [ ] Edición de cliente guarda
- [ ] Scoring A-E se muestra
- [ ] Historial de actividades funciona

### Calendario
- [ ] Vista mensual funciona
- [ ] Vista semanal funciona
- [ ] Eventos se muestran
- [ ] Crear evento funciona
- [ ] Editar evento funciona
- [ ] Eliminar evento funciona
- [ ] Responsive en tablet

### Documentos
- [ ] Lista de documentos carga
- [ ] Subir documento funciona
- [ ] Descargar documento funciona
- [ ] Editar documento funciona
- [ ] Vincular a registros funciona

### Auditorías
- [ ] Lista de auditorías carga
- [ ] Crear auditoría funciona
- [ ] Puntos de norma se asocian
- [ ] Hallazgos se registran
- [ ] Acciones correctivas se crean

### RRHH
- [ ] Personal lista correctamente
- [ ] Departamentos funcionan
- [ ] Puestos funcionan
- [ ] Capacitaciones funcionan
- [ ] Evaluaciones funcionan
- [ ] Matriz polivalencia funciona

### Planificación y Revisión
- [ ] Datos de contexto cargan
- [ ] AMFE funciona
- [ ] Reuniones de trabajo funcionan
- [ ] Historial funciona

### Mejora Continua
- [ ] Hallazgos funcionan
- [ ] Acciones correctivas funcionan
- [ ] Declaraciones funcionan
- [ ] Encuestas funcionan

---

## 🔧 Aspectos Técnicos

### Performance
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 4s
- [ ] Lighthouse score > 80
- [ ] Sin memory leaks evidentes
- [ ] Sin errores en consola (excepto warnings conocidos)

### Seguridad
- [ ] Rutas protegidas requieren autenticación
- [ ] Multi-tenancy funciona (organization_id)
- [ ] No hay datos de otras organizaciones visibles
- [ ] API routes validan autenticación
- [ ] Firebase rules están activas

### Compatibilidad
- [ ] Chrome 90+
- [ ] Firefox 90+
- [ ] Safari 14+
- [ ] Edge 90+
- [ ] iOS Safari 14+
- [ ] Chrome Android

### Datos
- [ ] Firestore conecta correctamente
- [ ] Datos se guardan y recuperan
- [ ] Timestamps funcionan
- [ ] Índices necesarios creados
- [ ] Queries no retornan errores

---

## 🐛 Bugs Conocidos (Pendientes)

| Bug | Prioridad | Estado |
|-----|-----------|--------|
| CRM Kanban drag & drop no funciona en móvil | Media | Pendiente |
| Calendario corta en vista móvil | Media | Pendiente |
| Meta tag `apple-mobile-web-app-capable` deprecado (warning) | Baja | Pendiente |
| Error 409 al crear usuario existente (warning en consola) | Baja | Conocido - OK |

---

## ✅ Cómo Usar Este Checklist

1. **Antes de deploy a producción:** Revisar todos los items críticos
2. **Testing semanal:** Revisar items principales
3. **Después de cada feature:** Revisar items relacionados
4. **Marcar con [x]** los items verificados OK
5. **Documentar bugs** encontrados en la tabla

---

## 📝 Notas de Testing

### Emulación Chrome DevTools
```
F12 → Ctrl+Shift+M
Dispositivos recomendados:
- iPhone 12 Pro (390x844)
- Galaxy S20 (360x800)
- iPad (768x1024)
```

### URLs de Testing
- **Desarrollo:** `http://localhost:3000`
- **Producción:** `https://app.doncandidoia.com`
- **App Vendedor:** `/app-vendedor`
- **Instalar PWA:** `/instalar`

### Credenciales de Test
- Ver archivo `.env.local` o solicitar al administrador
