# Módulos y Funcionalidades - 9001app-firebase

> **Total Módulos Dashboard:** 28  
> **Última Actualización:** 2025-12-26

---

## 📋 Módulos del Dashboard

### 🏠 Centro Principal (Vista por Defecto)

La ruta `/noticias` es ahora la **vista principal** del sistema. Contiene tabs horizontales que unifican las funciones de interacción y monitoreo más importantes:

| Tab | Contenido | Descripción |
|-----|-----------|-------------|
| **📰 Noticias** | NewsFeed + Sidebars | Feed de publicaciones con comentarios inline (estilo Facebook) |
| **📊 Madurez Org** | MaturityRadar + NextSteps | Diagnóstico dinámico de madurez ISO 9001 |
| **🤖 Mini Copilot** | MCPExecutionList + KPIs | Panel de automatización con estadísticas |

> **Nota:** Dashboard, Madurez Org. y Mini Copiloto fueron removidos del sidebar izquierdo para simplificar la navegación. Todo está accesible desde los tabs del Centro Principal.

### 🔍 Auditorías y Cumplimiento

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Auditorías** | `/auditorias` | Planificación, ejecución, informes de auditorías internas |
| **Hallazgos** | `/hallazgos` | No conformidades, observaciones, oportunidades de mejora |
| **Acciones** | `/acciones` | Acciones correctivas, preventivas, seguimiento |
| **Puntos de Norma** | `/puntos-norma` | Mapeo de requisitos ISO 9001:2015 con tabs: Dashboard, Matriz de Cumplimiento, Análisis de Gaps, Gestión |

### 📄 Documentación

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Documentos** | `/documentos` | Control de documentos, versionado, aprobaciones |
| **Políticas** | `/politicas` | Políticas de calidad y procedimientos |
| **Flujogramas** | `/flujogramas` | Diagramas de procesos visuales |
| **Conocimientos** | `/conocimientos` | Base de conocimiento organizacional |

### ⚙️ Procesos

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Dashboard Procesos** | `/dashboard` | Vista general de indicadores |
| **Relación Procesos** | `/relacion-procesos` | Mapa de interacción de procesos |
| **Análisis FODA** | `/analisis-foda` | Contexto organizacional |
| **Planificación** | `/planificacion-revision-direccion` | Revisión por la dirección |

### 👥 RRHH y Capacitaciones

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Admin** | `/admin` | Gestión de usuarios y roles |
| **Organigramas** | `/organigramas` | Estructura organizacional visual |
| **Perfil** | `/perfil` | Perfil de usuario |

### 💼 CRM y Análisis de Riesgo Crediticio

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **CRM** | `/crm` | Gestión de clientes y oportunidades |
| **Cliente Detalle** | `/crm/[id]` | Perfil completo del cliente |
| **Historial Financiero** | N/A (componente) | Estados para análisis de solvencia |
| **App Vendedor** | `/vendedor` | PWA para captura de datos en campo (Offline) |

### 🤖 MCP (Mini Copiloto)

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **MCP Dashboard** | `/mcp` o tab en Centro Principal | Panel de automatización |
| **Ejecuciones** | `/mcp` | Historial de tareas ejecutadas |

### 📰 Comunicación

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Noticias** | `/noticias` | Feed con comentarios inline (Facebook-style), reacciones, compartir |
| **Notificaciones** | `/notificaciones` | Centro de notificaciones |
| **Calendario** | `/calendario` | Eventos y recordatorios |
| **Reuniones** | `/reuniones-trabajo` | Gestión de reuniones |

---

## 💰 CRM y Análisis de Riesgo Crediticio - Funcionalidades Detalladas

### Gestión de Clientes
```
/crm
├── Vista Kanban unificada (UnifiedKanban)
├── Filtros por: Vendedor, Tipo Cliente, Zona Geográfica
├── Tarjetas de cliente con scoring
└── Drag & drop entre estados
```

### Perfil de Cliente (`/crm/[id]`)
```
├── Datos Generales
│   ├── Razón Social, CUIT, Domicilio
│   ├── Contactos (teléfono, email)
│   └── Vendedor asignado
├── Historial Financiero (Snapshots)
│   ├── Estado de Situación Patrimonial
│   ├── Estado de Resultados
│   └── Impuestos Mensuales
├── Documentos Adjuntos
└── Historial de Actividades
```

### Estados para Análisis de Riesgo (No Contabilidad Interna)

**1. Situación Patrimonial (Balance)**
- Activo Corriente: Caja, Inversiones, Créditos, Bienes de Cambio
- Activo No Corriente: Bienes de Uso, Participaciones, Intangibles
- Pasivo Corriente: Deudas Comerciales, Préstamos, Cargas Fiscales
- Pasivo No Corriente: Deudas Largo Plazo, Previsiones
- Patrimonio Neto: Capital, Reservas, Resultados
- **Cálculos automáticos** de totales (Snapshot estático)

**2. Estado de Resultados**
- Ventas Netas
- CMV (Costo Mercaderías Vendidas)
- Gastos Operativos (Comercialización, Administración)
- Resultados Financieros
- Impuesto a las Ganancias
- **Cálculo automático** de Resultado Neto

**3. Impuestos Mensuales**
- Período (Mes/Año)
- IVA Compras / IVA Ventas (saldo automático)
- Ingresos Brutos
- Formulario 931 (Cargas Sociales)
- Enlaces a comprobantes

---

## 🤖 MCP (Mini Copiloto) - Sistema de Automatización

### Concepto
Extensión Chrome + APIs para automatizar tareas en ERPs externos con registro ISO 9001.

### Flujo de Trabajo
```
Usuario da orden → MCP ejecuta en web externa → Registra en 9001app
```

### APIs Implementadas
```typescript
GET  /api/mcp/tareas         // Listar tareas pendientes
POST /api/mcp/tareas/completar // Marcar como completada
POST /api/mcp/evidencias     // Subir screenshot/PDF
POST /api/mcp/registro       // Registrar ejecución
```

### Componentes UI
- `MCPExecutionList.tsx` - Lista de ejecuciones con filtros
- `MCPEvidenceViewer.tsx` - Visor de evidencias (screenshots, PDFs)
- `ExportDropdown.tsx` - Menú de exportación
- `ExportToSheetsDialog.tsx` - Exportar a Google Sheets

---

## 📱 App de Campo para Vendedores (PWA)

### Concepto
Aplicación móvil con arquitectura **Offline-First** diseñada para vendedores que visitan campos o clientes en zonas con baja conectividad.

### Capacidades Offline
- **IndexedDB (Dexie.js)**: Almacenamiento local de clientes y visitas.
- **Sync Engine**: Cola de sincronización con reintentos y backoff exponencial.
- **Sincronización Selectiva**: Carga de clientes asignados al vendedor logueado.

### Funcionalidades de Captura
- **Fotos e Imágenes**: Compresión en cliente antes de la subida.
- **Notas de Voz**: Grabación de audio para reportes rápidos (listo para Whisper).
- **Checklists y Notas**: Formularios dinámicos de visita.
- **GPS**: Registro automático de ubicación de la visita.

### APIs de Integración
- `POST /api/vendedor/visitas` - Registro en Firestore central.
- `GET  /api/vendedor/clientes` - Descarga de base de datos local.
- `POST /api/vendedor/evidencias/foto` - Upload a Storage.
- `POST /api/vendedor/evidencias/audio` - Upload a Storage.

## 📰 Sistema de Noticias con IA

### Características
- Generación de contenido con Claude AI
- Síntesis de voz con ElevenLabs
- Plantillas personalizables
- Programación de publicaciones

### Componentes (25 total)
- Editor de noticias
- Reproductor de audio
- Galería de imágenes
- Vista previa

---

## 🔔 Sistema de Notificaciones

### Canales Soportados
- **In-app**: Notificaciones en el dashboard
- **Email**: Via SendGrid/Resend
- **WhatsApp**: Via Twilio WhatsApp Business API (✅ Integrado)

### Tipos de Notificaciones
- Vencimiento de acciones
- Auditorías programadas
- Documentos por aprobar
- Capacitaciones pendientes
- Alertas de verificación GIS (planificado)
