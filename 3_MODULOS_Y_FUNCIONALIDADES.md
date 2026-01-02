# Módulos y Funcionalidades - 9001app-firebase

> **Total Módulos Dashboard:** 30  
> **Última Actualización:** 2025-12-29

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

### 📊 Gestión de Calidad (Integrado en Procesos)

\u003e **Ubicación en Menú:** Procesos → Objetivos de Calidad / Indicadores / Mediciones / Checklists

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Objetivos de Calidad** | `/dashboard/quality/objetivos` | Gestión de objetivos SMART vinculados a procesos |
| **Indicadores** | `/dashboard/quality/indicadores` | KPIs de calidad con fórmulas y metas |
| **Mediciones** | `/dashboard/quality/mediciones` | Registro de valores medidos con evidencias |
| **Checklists** | `/dashboard/calidad/checklists` | Listas de verificación para procesos |

#### Jerarquía de Calidad
```
Proceso (Definición)
  └─ Objetivos de Calidad
       └─ Indicadores
            └─ Mediciones
```

#### Funcionalidades Clave

**Objetivos de Calidad:**
- Código automático: `OBJ-[PROCESO]-[SECUENCIA]`
- Vinculación a proceso específico
- Seguimiento de progreso (%)
- Metas con fechas de vencimiento
- Tarjetas clickeables para navegación
- Edición inline en Single View

**Indicadores:**
- Código automático: `IND-[OBJETIVO]-[SECUENCIA]`
- Tipos: Eficacia, Eficiencia, Cumplimiento
- Fórmulas de cálculo personalizables
- Rangos de meta (mín/máx)
- Frecuencia de medición
- Responsable asignado
- Sección de mediciones integrada

**Mediciones:**
- Código automático: `MED-[INDICADOR]-[YYYYMMDD]`
- Registro de valor medido
- Fecha y responsable de medición
- Observaciones y evidencias
- URL de evidencia opcional
- Método de medición
- Tarjetas clickeables en listados

**Características Técnicas:**
- ✅ Dialogs simplificados para creación rápida
- ✅ Single Views con edición inline
- ✅ Código automático en todos los niveles
- ✅ APIs con Firebase Admin SDK
- ✅ Navegación jerárquica completa
- ✅ Filtros por proceso/objetivo/indicador
- ✅ Integración en Single de Proceso

### 👥 RRHH - Módulo Completo de Recursos Humanos

> **Estado:** En desarrollo activo (Enero 2026)  
> **Última actualización:** 2026-01-02

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Dashboard RRHH** | `/dashboard/rrhh` | Vista general con métricas de personal |
| **Personal** | `/dashboard/rrhh/personnel` | ABM empleados con estados y puestos |
| **Personal Detalle** | `/dashboard/rrhh/personnel/[id]` | Single view con competencias actuales |
| **Puestos** | `/dashboard/rrhh/positions` | Catálogo de puestos con competencias requeridas |
| **Puesto Detalle** | `/dashboard/rrhh/positions/[id]` | Competencias, personal asignado, procesos |
| **Departamentos** | `/dashboard/rrhh/departments` | Estructura organizacional |
| **Competencias** | `/dashboard/rrhh/competencias` | Catálogo de competencias por categoría |
| **Capacitaciones** | `/dashboard/rrhh/trainings` | Plan de formación con participantes |
| **Evaluaciones** | `/dashboard/rrhh/evaluations` | Evaluaciones de desempeño grupales |
| **Evaluación Detalle** | `/dashboard/rrhh/evaluations/[id]` | Matriz empleados × competencias |
| **Matriz Polivalencia** | `/dashboard/rrhh/matriz-polivalencia` | Visualización de competencias por empleado |

#### Modelo de Datos RRHH

```
Personnel (Empleado)
├── puesto → Position (puesto asignado)
├── competenciasActuales[] → Niveles alcanzados
└── ultima_evaluacion

Position (Puesto)
├── competenciasRequeridas[] → PositionCompetence (con nivelRequerido)
├── procesos_asignados[]
└── frecuenciaEvaluacion

Competence (Catálogo)
├── categoria: 'tecnica' | 'blanda' | 'seguridad' | 'iso_9001' | 'otra'
└── nivelRequerido (global default)

Training (Capacitación)
├── tipo: 'evaluacion_competencias' | 'evaluacion_capacitacion'
├── participantes[]
└── estado: 'programada' | 'en_curso' | 'completada' | 'cancelada'

PerformanceEvaluation (Evaluación)
├── tipo: 'evaluacion_competencias' | 'evaluacion_capacitacion'
├── capacitacionId? (si tipo='evaluacion_capacitacion')
├── competencias_a_evaluar[]
├── empleados_evaluados[] → Matriz de scores
└── estado: 'borrador' | 'publicado' | 'cerrado'
```

#### Flujo de Evaluación Grupal

1. **Crear Evaluación** → Elegir tipo (competencias o eficacia de capacitación)
2. **Agregar Empleados** → Auto-carga competencias del puesto
3. **Evaluar** → Matriz con niveles 1-5 por competencia/empleado
4. **Cerrar y Propagar** → Los niveles evaluados se copian a `Personnel.competenciasActuales`
5. **Matriz Polivalencia** → Visualiza el estado actual de competencias

#### Características Actuales ✅

- ✅ Evaluaciones grupales (múltiples empleados en una evaluación)
- ✅ Tipo de evaluación: competencias vs eficacia de capacitación
- ✅ Auto-carga de competencias desde puesto del empleado
- ✅ Matriz de polivalencia con colores por nivel
- ✅ Propagación de niveles a Personnel al cerrar evaluación
- ✅ Warnings cuando empleado no tiene puesto asignado
- ✅ Filtros y búsqueda en todos los listados
- ✅ APIs con Firebase Admin SDK

#### Gaps ISO 9001 Identificados (F-RH-4) ⚠️

| Requisito ISO 9001 | Estado | Pendiente |
|--------------------|--------|-----------|
| F-RH-1: Ficha de Personal | ✅ | - |
| F-RH-2: Descripción de Competencias de Puesto | ✅ | - |
| F-RH-3: Plan de Formación | ✅ | - |
| F-RH-4: Registro de Inducción | ⚠️ | Falta campo estructurado |
| F-RH-4: Evaluación Eficacia Capacitación | ⚠️ | Implementado con tipo='evaluacion_capacitacion' |
| F-RH-5: Matriz de Polivalencias | ✅ | - |

#### Próximos Pasos RRHH

1. 🔴 **Registro de Inducción** - Agregar campos fecha_induccion, temas[], responsable
2. 🟡 **Asistencia a Capacitaciones** - Checkbox por participante con firma
3. 🟡 **Objetivos de Competencia** - Metas individuales por empleado
4. 🟢 **Exportar Matriz** - Excel/PDF desde Matriz Polivalencia


### 💼 CRM y Análisis de Riesgo Crediticio

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **CRM** | `/crm` | Gestión de clientes y oportunidades |
| **Cliente Detalle** | `/crm/[id]` | Perfil completo del cliente |
| **Historial Financiero** | N/A (componente) | Estados para análisis de solvencia |
| **App Vendedor** | `/vendedor` | PWA para captura de datos en campo (Offline) |

### 🤖 Don Cándido - Asistente IA ISO 9001

| Módulo | Ruta | Funcionalidades |
|--------|------|-----------------|
| **Chat IA** | FAB flotante | Chat conversacional para consultas ISO 9001 y uso del sistema |
| **Mi Certificación** | `/journey` | Roadmap visual de las 6 fases de implementación ISO 9001 |
| **Detalle de Fase** | `/journey/[id]` | Checklist de tareas, botones "Generar con IA", links a módulos |
| **Generador IA** | `/generador-documentos` | 6 templates de documentos ISO con asistencia de IA |

#### Funcionalidades Don Cándido

**Chat Inteligente:**
- Responde preguntas sobre ISO 9001:2015
- Explica cómo usar cada módulo del sistema
- Muestra tiempo de respuesta (latencyMs)
- Modo voz (Speech-to-Text y Text-to-Speech)
- Modo conversación continua

**Mi Certificación (Journey Dashboard):**
- Timeline visual de 6 fases: Diagnóstico, Planificación, Diseño, Implementación, Verificación, Certificación
- Barra de progreso global y por fase
- Tareas con checkbox de completado
- Vinculación directa a módulos del sistema

**Generador de Documentos:**
- 6 templates ISO listos para usar:
  1. Política de Calidad (5.2)
  2. Procedimiento Control de Documentos (7.5)
  3. Procedimiento Auditorías Internas (9.2)
  4. Procedimiento Acciones Correctivas (10.2)
  5. Formato Acta de Reunión (7.5, 9.3)
  6. Objetivos de Calidad (6.2)
- Formularios dinámicos con campos requeridos
- Generación con IA (Groq/Claude)
- Copiar al portapapeles

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
