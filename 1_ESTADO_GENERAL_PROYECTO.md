# 9001app-firebase - Estado General del Proyecto

> **Última Actualización:** 2026-01-08  
> **Estado:** En Desarrollo Activo  
> **Ambiente Local:** Puerto 3000

---

## 📋 Resumen del Proyecto

**9001app-firebase** es un Sistema de Gestión de Calidad ISO 9001 completo, construido con Next.js 14 y Firebase. El sistema permite a organizaciones gestionar todos los aspectos del cumplimiento ISO 9001, incluyendo documentación, auditorías, acciones correctivas, capacitaciones y más.

### Características Principales

- ✅ **Multi-tenant**: Soporte para múltiples organizaciones
- ✅ **Centro Principal Unificado**: Vista principal con tabs (Noticias, Madurez Org, Mini Copilot)
- ✅ **Don Cándido IA**: Asistente inteligente con chat, generador de documentos y sugerencias proactivas
- ✅ **Mi Certificación (Journey)**: Roadmap visual de las 6 fases ISO 9001:2015
- ✅ **Generador IA de Documentos**: Templates ISO con asistencia de IA
- ✅ **Gestión documental** completa con versionado
- ✅ **Auditorías internas** con hallazgos y acciones
- ✅ **CRM y Riesgo Crediticio** integrado para clientes
- ✅ **MCP (Mini Copiloto)** para automatización
- ✅ **WhatsApp Business API** vía Twilio para notificaciones
- ✅ **App Vendedor PWA** (`/app-vendedor`): Layout móvil independiente, offline-first, botón de actualización
- ✅ **Calendario Unificado**: Vista Mes/Semana/Agenda/Kanban con eventos de todos los módulos
- 🔄 **Integración Don Juan GIS** (análisis completado, pendiente implementación)

---

## 🏗️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **Next.js 14** | Framework principal (App Router) |
| **TypeScript** | Lenguaje tipado |
| **Tailwind CSS** | Estilos |
| **Firebase Firestore** | Base de datos |
| **Firebase Auth** | Autenticación |
| **Firebase Storage** | Almacenamiento de archivos |
| **Shadcn/UI** | Componentes UI |
| **Anthropic Claude** | IA conversacional |
| **Groq (Llama 3.1)** | IA rápida para chat |
| **Twilio WhatsApp API** | Notificaciones y mensajería |

---

## 📁 Estructura de Carpetas Principal

```
9001app-firebase/
├── src/
│   ├── app/
│   │   ├── (auth)/           # Login y autenticación
│   │   ├── (dashboard)/      # Panel principal (28 módulos)
│   │   │   ├── noticias/     # Centro Principal con tabs
│   │   │   └── calendario/   # Calendario unificado
│   │   ├── app-vendedor/     # PWA Móvil independiente
│   │   ├── instalar/         # Landing instalación PWA
│   │   └── api/              # 40+ grupos de APIs
│   ├── components/           # 27 grupos de componentes
│   ├── contexts/             # Contextos React
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Firebase config y utilidades
│   ├── services/             # Servicios (EventService, etc.)
│   └── types/                # Definiciones TypeScript
├── public/                   # Assets estáticos, manifest.json, sw.js
└── scripts/                  # Scripts de mantenimiento
```

---

## 🚀 Desarrollo Activo (Enero 2026)

### En Progreso
1. **MCP Extensión Chrome** - Automatización de tareas en ERPs externos (estructura básica creada)
2. **Integración Don Juan GIS** - Middleware de verificación cruzada (análisis completado)
3. **Servicio de sincronización WhatsApp API** - Automatización de notificaciones

### Próximamente (Q1 2026)
1. **Chat IA en Landing Page** - Widget conversacional para leads (1-2 semanas)
2. **Don Juan GIS** - Implementación del motor de verificación (4-6 semanas)
3. **App Registros Internos** - Formularios dinámicos para operarios (Q2 2026)

### Completado Recientemente

#### 📅 Unificación de Eventos (4 Ene 2026)
- ✅ **EventService**: Servicio centralizado para sincronizar eventos de todos los módulos
- ✅ **Colección events unificada**: Datos comunes (titulo, fecha, responsable, estado, tipo)
- ✅ **Integración completa**: Capacitaciones, Evaluaciones, Auditorías, Hallazgos, Acciones
- ✅ **Vista Kanban**: Mapeo español→inglés para mostrar eventos por estado
- ✅ **Tooltip en Calendario**: Info completa al pasar ratón sobre eventos
- ✅ **Widget Próximos Eventos**: Datos reales en página de Noticias
- ✅ **Vinculación bidireccional**: `event_id` en módulos, `source_collection/source_id` en events

#### 📱 PWA App Vendedor Separada (8 Ene 2026)
- ✅ **Ruta `/app-vendedor`** separada del dashboard para layout móvil independiente
- ✅ **Manifest.json** con scope `/app-vendedor` para instalación PWA dedicada
- ✅ **Botón Actualizar App** en header que detecta nuevas versiones del Service Worker
- ✅ **Menú móvil limpio** sin tabs de desktop (Dashboard, Madurez, Mini Copiloto ocultados)
- ✅ **Bottom navigation** con Inicio, Clientes, Mapa, Sync, Perfil
- ✅ **Indicador Online/Offline** en header
- ✅ **Checklist QA** creado en docs-9001app

#### 🎄 Diciembre 2025
- ✅ **Don Cándido v2.0 completo**: Chat IA, Journey Dashboard, Generador de Documentos
- ✅ **Mi Certificación**: Roadmap visual de 6 fases ISO con tareas y progreso
- ✅ **Generador IA**: 6 templates de documentos ISO (Política, Procedimientos, etc.)
- ✅ **Sugerencias Proactivas**: Motor de hints contextuales para el usuario
- ✅ **Kanban de Procesos con Drag & Drop**: Mover tarjetas entre etapas arrastrando
- ✅ **Checklists por Etapa**: Definir puntos de verificación por etapa de proceso
- ✅ **Centro Principal Unificado**: Noticias como vista principal con tabs integrados
- ✅ **RRHH Refactorizado**: Evaluaciones grupales, Matriz de Polivalencia

---

## 🔧 Comandos de Desarrollo

```bash
# Instalación
npm install

# Desarrollo (puerto 3000)
npm run dev

# Build producción
npm run build

# Lint
npm run lint
```

---

## 📝 Proyectos Relacionados

| Proyecto | Descripción | Estado |
|----------|-------------|--------|
| **docs-9001app** | Sistema de Roadmaps Kanban | Activo |
| **don-candido-finanzas** | CRM y Análisis de Riesgo independiente | Activo |
| **sig-agro** | Sistema GIS Agropecuario + Contabilidad | Activo |
