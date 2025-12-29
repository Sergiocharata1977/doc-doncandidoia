# Roadmap y Pendientes - 9001app-firebase

> **Estado al:** 2025-12-28  
> **Próximo Milestone:** Single de Tarjeta con Checklist + Chat IA Landing

---

## 🎯 Roadmap Activo

### Fase Actual: MCP (Mini Copiloto)

| Fase | Estado | Descripción |
|------|--------|-------------|
| **Fase 1: MVP Extensión** | 🔧 En Progreso | Estructura Chrome Extension Manifest V3 |
| **Fase 2: APIs 9001app** | ✅ Completado | APIs /mcp/tareas, evidencias, registro |
| **Fase 3: Panel Visualización** | ✅ Completado | MCPExecutionList, MCPEvidenceViewer |
| **Fase 4: Agente IA** | 🔜 Pendiente | Intent Parser con Claude/Groq |
| **Fase 5: Casos Avanzados** | 🔜 Pendiente | Google Sheets, Excel Web |

---

## ✅ Recientemente Completado (Diciembre 2025)

### 🏠 Centro Principal y Navegación
- [x] **Centro Principal Unificado** - `/noticias` es ahora la vista principal
- [x] **Tabs Horizontales Internos** - Noticias, Madurez Org, Mini Copilot en un solo lugar
- [x] **Comentarios Inline (Facebook-style)** - Expandibles directamente en cada post con edit/delete
- [x] **Navegación Simplificada** - Dashboard, Madurez Org., Mini Copiloto removidos del sidebar
- [x] **Redirección por defecto** - Login ahora redirige a `/noticias` en vez de `/dashboard`

### Integraciones
- [x] **Integración WhatsApp Business API vía Twilio** - Servicio completo implementado
- [x] **Análisis técnico integración Don Cándido + Don Juan GIS** - Documento completo con arquitectura
- [x] **App Vendedor (PWA)** - Implementación completa con offline, fotos, audio y GPS
- [x] **MCP Extensión Chrome** - Estructura básica del proyecto creada
- [x] **Mobbex Payments Integration** - Suscripciones con checkout, webhooks y UI

### Kanban de Procesos (28 Dic 2025)
- [x] **Drag & Drop de Tarjetas** - Mover tareas entre etapas con HTML5 nativo
- [x] **API Tasks Admin SDK** - Migración a Firebase Admin SDK (fix error 500)
- [x] **Checklists por Etapa** - Definir puntos de verificación para cada etapa
- [x] **Botón Check en columnas** - Acceso rápido para configurar checklist
- [x] **Dropdown fix** - Fondo blanco sólido en selectores
- [x] **Documentación** - Creado `reglas-drag&drop.md`

### CRM y Riesgo Crediticio
- [x] Formulario de Situación Patrimonial (Snapshot de riesgo)
- [x] Formulario de Estado de Resultados (Cálculo de solvencia)
- [x] Registro de Impuestos Mensuales (Cumplimiento)
- [x] Integración con HistorialFinanciero
- [x] Filtros en página principal CRM (Vendedor, Tipo, Zona)
- [x] Remoción de sistema de scoring obsoleto

### MCP Sistema
- [x] API `/api/mcp/tareas` (GET, POST)
- [x] API `/api/mcp/evidencias` (POST)
- [x] API `/api/mcp/registro` (POST)
- [x] Modelo Firestore `mcp_executions`
- [x] Componente `MCPExecutionList.tsx`
- [x] Componente `MCPEvidenceViewer.tsx`
- [x] Página `/mcp` con dashboard

### UI/UX
- [x] Mejoras estéticas en cards del dashboard MCP
- [x] Sombras elegantes sin bordes
- [x] Tipografía refinada

---

## 🔧 En Desarrollo

### MCP Extensión Chrome
```
Estructura creada:
- [x] Proyecto base con Vite + React + TypeScript
- [x] Estructura de carpetas (api, background, content, popup, utils)
- [x] manifest.json básico

Pendientes:
- [ ] Implementar content-script.ts (DOM manipulation)
- [ ] Implementar background worker (orquestador)
- [ ] Ejecutor básico (write, click, wait)
- [ ] Conexión con Firebase desde extensión
- [ ] Intent Parser con IA
- [ ] Action Planner
```

### Integraciones
```
Completado:
- [x] WhatsApp Business API vía Twilio (TwilioClient.ts, WhatsAppService.ts)
- [x] Análisis técnico Don Juan GIS (INTEGRACION_DONJUANGIS_ANALISIS.md)

Pendientes:
- [ ] Implementar middleware GISVerificationMiddleware
- [ ] Crear endpoints de integración en SIG-Agro
- [ ] Panel de Coherencia GIS en CRM
- [ ] Sistema de alertas de verificación
- [ ] Detección de capacidad ociosa (oportunidades marketing)
- [ ] Templates de mensajes WhatsApp
- [ ] Automatización de notificaciones vía WhatsApp
```

---

## 📋 Backlog Priorizado

### 🔥 Alta Prioridad (Q1 2026)
1. **Chat IA en Landing Page** - Widget conversacional para explicar producto y calificar leads
2. **Don Juan GIS - Fases 1-2** - Tipos TypeScript + Middleware de verificación
3. **WhatsApp Automatización** - Templates y notificaciones automáticas por eventos

### 🟠 Media Prioridad
4. **Don Juan GIS - Fases 3-4** - UI Panel Coherencia + Marketing Intelligence
5. **WhatsApp Automatización** - Templates y notificaciones automáticas
6. **MCP Chrome Extension MVP** - Automatización básica de formularios

### 🟡 Baja Prioridad (Q2 2026)
7. **App Registros Internos** - Formularios dinámicos para operarios/auditores
8. **MCP Agente IA** - Intent Parser con Claude
9. **Chrome Web Store** - Publicación extensión

---

## 🔗 Integraciones Planificadas

### Don Juan GIS (SIG Agro)
```
Objetivo: Sincronizar datos de clientes agrícolas
- Importación de datos contables reales (Sistema Contable SIG-Agro)
- Datos de parcelas y ubicaciones
- Análisis de riesgo geográfico
- Historial de cultivos
Estado: Análisis completado, pendiente implementación
```

### WhatsApp Business
```
Objetivo: Notificaciones automáticas
- Recordatorios de vencimientos
- Alertas de auditorías
- Confirmaciones de acciones
Estado: ✅ API conectada vía Twilio, pendiente templates y automatización
```

### Don Juan GIS (SIG Agro)
```
Objetivo: Verificación cruzada de datos CRM vs GIS
- Middleware de verificación (GISVerificationMiddleware)
- Panel de Coherencia en detalle de cliente
- Sistema de alertas (Match/Gap/Alert)
- Detección de capacidad ociosa para marketing
- Integración con scoring crediticio
Estado: ✅ Análisis técnico completado, pendiente implementación (Fase 1-4, 7-8 semanas)
```

---

## 🐛 Issues Conocidos

| Issue | Severidad | Estado |
|-------|-----------|--------|
| Puerto 3000 conflicto ocasional | Baja | Workaround disponible |
| Proceso node zombie | Baja | Script de limpieza |
| Tipos TypeScript circulares | Media | Refactorizado |

---

## 📊 Métricas del Proyecto

```
Módulos Dashboard: 28
Grupos de APIs: 40+
Componentes: 200+
Líneas de código: ~50,000
Colecciones Firestore: 15+
```

---

## 📱 Nuevas Features Propuestas

### App Vendedor (PWA) ✅
```
Estado: Completado e Integrado
- [x] Captura de fotos (campos, instalaciones, maquinaria)
- [x] Notas de voz con almacenamiento en Storage
- [x] Formularios offline-first con IndexedDB y Sync Engine
- [x] GPS automático para verificación
- [x] Sincronización inteligente con backoff
```

### Chat IA en Landing Page
```
Objetivo: Widget conversacional para explicar producto y calificar leads
- IA entrenada sobre 9001app (Claude)
- Calificación automática de leads
- Agenda demos integrada con calendario
- Captura datos (CUIT, rubro, necesidades)
Stack: Componente React + Claude API + Firestore + Webhook a CRM
Estimación: 1-2 semanas
Prioridad: 🔥 ALTA - Quick win con alto impacto en conversión
```

### App Registros Internos
```
Objetivo: App dedicada para operadores que registran datos específicos
- Checklists diarios (control de calidad)
- Inspecciones con fotos
- Reporte de incidentes/no conformidades
- Formularios dinámicos configurables
- Escaneo de QR/códigos de barra
- Firmas digitales
Stack: PWA + Formularios dinámicos + Offline-first
Estimación: 4-6 semanas
Prioridad: 🟡 MEDIA - Evaluar con feedback de clientes Q2 2026
```

---

## 🎯 Objetivos Q1 2026 (Actualizado)

### Semana 1-2 (Enero)
- [ ] **Chat IA en Landing Page** - Quick win para generación de leads

### Semana 3-6 (Enero-Febrero)
- [ ] **Don Juan GIS - Fases 1-2** - Tipos + Middleware + Motor verificación

### Semana 7-10 (Febrero-Marzo)
- [ ] **App Vendedor MVP** - PWA con fotos, notas, GPS, offline

### Semana 11-12 (Marzo)
- [ ] **WhatsApp Automatización** - Templates + notificaciones automáticas

---

## 🎯 Objetivos Q2 2026

1. **Don Juan GIS - Fases 3-4** - UI Panel Coherencia + Marketing Intelligence
2. **MCP Chrome Extension** - Extensión funcional y publicada
3. **App Registros Internos** - Si hay demanda de clientes
4. **Reportes avanzados** - Dashboards con gráficos

---

## 🔮 Integraciones Opcionales (Futuro)

### Google MCP (Model Context Protocol)
```
Repo: https://github.com/google/mcp
Descripción: Protocolo estándar de Google para conectar IA con herramientas externas

Integraciones disponibles:
- Firebase MCP: Conectar agente IA con Firestore
- Google Workspace MCP: Integrar Sheets, Calendar, Gmail
- Chrome DevTools MCP: Capacidades de debugging para extensión
- Analytics MCP: Métricas del sistema

Beneficio: Estandarizar extensión MCP con protocolo oficial de Google
Prioridad: 🔵 OPCIONAL - Evaluar cuando MCP Chrome esté funcional
```

### Microsoft VibeVoice (TTS Open Source)
```
Repo: https://github.com/microsoft/VibeVoice
Descripción: Síntesis de voz open source de alta calidad

Características:
- Long-form: Hasta 90 min de audio con 4 speakers
- Realtime: Latencia ~300ms para streaming
- Idiomas: Español, Portugués, Inglés, Alemán, Francés
- Multi-speaker: Conversaciones con múltiples voces

Casos de uso potenciales:
- Reemplazar/complementar ElevenLabs (sin costo API)
- Podcasts automatizados de auditorías
- Avatar con voz en landing page
- Notificaciones de voz vía WhatsApp

Prioridad: 🔵 OPCIONAL - Evaluar si se requiere reducir costos de ElevenLabs
```

