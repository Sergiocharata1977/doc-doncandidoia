# Arquitectura Técnica - 9001app-firebase

> **Stack:** Next.js 14 + Firebase + TypeScript  
> **Última Actualización:** 2025-12-24

---

## 📐 Arquitectura General

```
┌─────────────────────────────────────────────────────────────────┐
│                      CLIENTE (Browser)                          │
│  Next.js App Router + React + Tailwind + Shadcn UI              │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    API ROUTES (/api)                            │
│  Route Handlers: 40+ grupos de endpoints                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
┌────────────────┐  ┌───────────────┐  ┌────────────────┐
│   FIRESTORE    │  │   STORAGE     │  │  SERVICIOS     │
│   - Colecciones│  │   - Docs      │  │  EXTERNOS      │
│   - Documentos │  │   - Imágenes  │  │  - Claude AI   │
│   - Queries    │  │   - Archivos  │  │  - ElevenLabs  │
│   - Listeners  │  │               │  │  - Twilio      │
└────────────────┘  └───────────────┘  │  - WhatsApp    │
                                       └────────────────┘
```

---

## 🗂️ Estructura de APIs (40 grupos)

### Core ISO 9001
| Grupo | Rutas | Descripción |
|-------|-------|-------------|
| `/api/audits` | 5 rutas | Auditorías internas |
| `/api/findings` | 7 rutas | Hallazgos y no conformidades |
| `/api/actions` | 6 rutas | Acciones correctivas/preventivas |
| `/api/documents` | 6 rutas | Gestión documental |
| `/api/processes` | 9 rutas | Procesos y mapas |
| `/api/norm-points` | 10 rutas | Puntos de la norma ISO |
| `/api/quality` | 9 rutas | Indicadores de calidad |

### RRHH y Capacitaciones
| Grupo | Rutas | Descripción |
|-------|-------|-------------|
| `/api/rrhh` | 24 rutas | Gestión de personal |
| `/api/personnel` | 4 rutas | Datos de personal |
| `/api/positions` | 4 rutas | Puestos y organigrama |

### CRM y Análisis de Riesgo
| Grupo | Rutas | Descripción |
|-------|-------|-------------|
| `/api/crm` | 13 rutas | Clientes y oportunidades |
| `/api/calendar` | 12 rutas | Eventos y recordatorios |

### MCP (Mini Copiloto)
| Grupo | Rutas | Descripción |
|-------|-------|-------------|
| `/api/mcp` | 9 rutas | Ejecuciones automáticas |
| `/api/mcp/tareas` | GET, POST | Listar/completar tareas |
| `/api/mcp/evidencias` | POST | Subir capturas |
| `/api/mcp/registro` | POST | Registrar ejecución |

### App Vendedor (PWA Mobile)
| Grupo | Rutas | Descripción |
|-------|-------|-------------|
| `/api/vendedor/visitas` | POST, GET | Crear/Listar visitas de campo |
| `/api/vendedor/clientes` | GET | Sincronizar clientes asignados |
| `/api/vendedor/evidencias` | POST | Subida de fotos y audios (Storage) |

### Integraciones
| Grupo | Rutas | Descripción |
|-------|-------|-------------|
| `/api/whatsapp` | 4 rutas | Mensajería WhatsApp vía Twilio |
| `/api/chat` | 3 rutas | Chat IA Claude |
| `/api/elevenlabs` | 3 rutas | Síntesis de voz |
| `/api/whisper` | 1 ruta | Transcripción de audio |

---

## 🔥 Colecciones Firestore Principales

```typescript
// Organizaciones
organizations/{orgId}
  ├── users/{userId}
  ├── documents/{docId}
  ├── audits/{auditId}
  │   └── findings/{findingId}
  ├── actions/{actionId}
  ├── processes/{processId}
  ├── personnel/{personId}
  ├── clientes/{clienteId}
  │   ├── historialFinanciero/{snapshotId}
  │   └── documentos/{docId}
  ├── visitas_vendedor/{visitaId}     // Visitas desde App Móvil
  └── mcp_executions/{executionId}

// Colecciones globales
roadmap_cards/{cardId}
demo_requests/{requestId}
```

---

## 🧩 Componentes Principales (27 grupos)

```
src/components/
├── actions/      # Acciones correctivas (10 componentes)
├── audits/       # Auditorías (13 componentes)
├── crm/          # CRM y Análisis de Riesgo (14 componentes)
│   ├── SituacionPatrimonialForm.tsx # Carga de datos para análisis
│   ├── EstadoResultadosForm.tsx
│   ├── ImpuestosMensualesForm.tsx
│   ├── UnifiedKanban.tsx
│   └── HistorialFinanciero.tsx      # Visualización de snapshots
├── mcp/          # Mini Copiloto (4 componentes)
│   ├── MCPExecutionList.tsx
│   ├── MCPEvidenceViewer.tsx
│   ├── ExportDropdown.tsx
│   └── ExportToSheetsDialog.tsx
├── documents/    # Documentos (7 componentes)
├── findings/     # Hallazgos (9 componentes)
├── rrhh/         # RRHH (26 componentes)
├── layout/       # Layout principal (4 componentes)
├── news/         # Noticias IA (25 componentes)
├── ui/           # Shadcn UI (25 componentes)
└── ...
```

---

## 🔐 Autenticación y Seguridad

```typescript
// Firebase Auth + Context
AuthContext -> useAuth() hook
  - user: User | null
  - organizationId: string
  - role: 'admin' | 'auditor' | 'user'
  - loading: boolean

// Middleware de protección
- Rutas (dashboard) protegidas por layout
- APIs protegidas por token verification
- Multi-tenant: todas las queries filtran por organizationId
```

---

## 📊 Tipos TypeScript Principales

```typescript
// Tipos CRM
interface Cliente {
  id: string;
  razonSocial: string;
  cuit: string;
  vendedorId: string;
  estado: 'activo' | 'inactivo' | 'prospecto';
  scoring?: ClienteScoring;
}

// Tipos MCP
interface MCPTaskExecution {
  id: string;
  organization_id: string;
  user_id: string;
  tipo: 'facturacion' | 'formulario' | 'extraccion' | 'carga_datos';
  sistema_origen: string;
  estado: 'exitoso' | 'fallido' | 'parcial';
  evidencias: MCPEvidencia[];
  log_pasos: MCPStep[];
}

// Tipos PWA Vendedor (Offline-First)
interface VisitaLocal {
  id: string; // UUID temporal si es offline
  clienteId: string;
  vendedorId: string;
  fecha: string;
  campos: Record<string, any>;
  fotosIds: string[];
  audiosIds: string[];
  ubicacion?: { lat, lng };
  syncStatus: 'pending' | 'synced' | 'error';
}

interface ClienteLocal extends Cliente {
  lastSyncAt: string;
}
```
