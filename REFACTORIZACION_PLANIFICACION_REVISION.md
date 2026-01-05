# Plan de Refactorización: Módulo de Planificación y Revisión por la Dirección

> **Versión:** 1.0  
> **Fecha:** 2026-01-05  
> **Estado:** Propuesta para Revisión

---

## 📋 Resumen Ejecutivo

Este documento presenta un plan integral para modernizar el módulo de **Planificación y Revisión por la Dirección** del sistema 9001app, alineándolo con:

1. Los **cambios anticipados de ISO 9001:2026** (publicación esperada Oct 2026)
2. La **guía de diseño estandarizado** del proyecto
3. Las **mejores prácticas en UX** para sistemas de gestión de calidad

---

## 🔍 Diagnóstico del Estado Actual

### Estructura Actual

```
src/
├── app/(dashboard)/planificacion-revision-direccion/
│   ├── page.tsx (328 líneas) - Listado de revisiones
│   └── [id]/page.tsx (1147 líneas) - Detalle con 5 tabs
├── components/planificacion/
│   └── PoliticaModal.tsx (5350 bytes)
├── services/planificacion-revision-direccion/
│   └── PlanificacionRevisionDireccionService.ts (453 líneas)
├── types/
│   └── planificacion-revision-direccion.ts (206 líneas)
└── api/planificacion-revision-direccion/
    └── [endpoints varios]
```

### Problemas Identificados

#### 1. **Archivo Monolítico de Detalle** ⚠️
- `[id]/page.tsx` tiene 1147+ líneas, violando el principio de responsabilidad única
- Los 5 tabs (Identidad, Alcance, Contexto, Estructura, Políticas) están implementados inline
- Difícil de mantener y testear

#### 2. **Inconsistencia con Guía de Diseño**
| Aspecto | Guía Estándar | Estado Actual |
|---------|---------------|---------------|
| Componente PersonnelSelect | ✅ Uso de shared | ❌ No utilizado |
| StatusBadge | ✅ Componente unificado | ❌ Implementación inline |
| DeleteConfirmDialog | ✅ Diálogo estándar | ❌ Usa confirm() nativo |
| Tarjetas Kanban | ✅ Diseño estándar | ⚠️ Parcialmente |
| Botones Edit/Delete | ✅ En todas las tarjetas | ⚠️ Solo Delete visible |

#### 3. **Gaps con ISO 9001:2026**

Los cambios del draft ISO 9001:2026 introducen nuevos requisitos que el módulo actual **no contempla**:

| Nuevo Requisito ISO 9001:2026 | Estado Actual |
|-------------------------------|---------------|
| **Cultura de Calidad** (Cl. 9.3.2) | ❌ No existe campo |
| **Comportamiento Ético** (Cl. 9.3.2) | ❌ No existe campo |
| **Cambios en Partes Interesadas** | ⚠️ Parcial en Contexto |
| **Vinculación Mejora Continua** | ❌ No hay trazabilidad |
| **Riesgos y Oportunidades expandidos** | ⚠️ Solo FODA básico |

#### 4. **UX/UI Desactualizado**
- No sigue el patrón de Journey visual (como el dashboard de Mi Certificación)
- Formularios muy largos sin guidance visual
- Falta de indicadores de progreso interactivos
- Sin integración con asistente Don Cándido para generar contenido

---

## 🎯 Propuesta de Rediseño

### Arquitectura de Componentes Propuesta

```
src/app/(dashboard)/planificacion-revision-direccion/
├── page.tsx                           # Listado con estadísticas
├── [id]/
│   ├── page.tsx                       # Layout con navegación lateral
│   ├── components/
│   │   ├── RevisionHeader.tsx         # Header con estado y acciones
│   │   ├── ProgressStepper.tsx        # Indicador visual de progreso
│   │   ├── tabs/
│   │   │   ├── IdentidadTab.tsx       # Tab 1: Identidad Organizacional
│   │   │   ├── AlcanceTab.tsx         # Tab 2: Alcance del SGC
│   │   │   ├── ContextoTab.tsx        # Tab 3: Contexto + Partes Interesadas
│   │   │   ├── EstructuraTab.tsx      # Tab 4: Estructura + Cultura
│   │   │   ├── PoliticasTab.tsx       # Tab 5: Políticas
│   │   │   ├── RiesgosTab.tsx         # Tab 6: Riesgos [NUEVO ISO 2026]
│   │   │   └── RevisionTab.tsx        # Tab 7: Revisión Dirección [NUEVO]
│   │   └── sections/
│   │       ├── CulturaCalidadSection.tsx    # [ISO 2026]
│   │       ├── ComportamientoEticoSection.tsx # [ISO 2026]
│   │       └── PartesInteresadasSection.tsx  # [ISO 2026 expandido]
│   └── hooks/
│       └── useRevisionData.ts         # Hook custom para datos
```

---

## 📊 Nuevo Modelo de Datos (ISO 9001:2026-Ready)

### Cambios en Tipos TypeScript

```typescript
// NUEVAS INTERFACES para ISO 9001:2026

// Cultura de Calidad (Cl. 5.1.1 expandido)
export interface CulturaCalidad {
  descripcion: string;
  valores_calidad: string[];
  iniciativas_activas: Array<{
    nombre: string;
    descripcion: string;
    responsable_id?: string;
    estado: 'planificada' | 'en_curso' | 'completada';
    fecha_inicio?: string;
    evidencias?: string[];
  }>;
  evaluacion_madurez: {
    fecha: string;
    nivel: 1 | 2 | 3 | 4 | 5;
    areas_mejora: string[];
    fortalezas: string[];
  };
  fecha_ultima_revision: string;
}

// Comportamiento Ético (nuevo en 2026)
export interface ComportamientoEtico {
  codigo_etica_url?: string;
  canales_denuncia: Array<{
    tipo: 'email' | 'formulario' | 'telefono' | 'presencial';
    contacto: string;
    descripcion?: string;
  }>;
  capacitaciones_etica: Array<{
    titulo: string;
    fecha: string;
    participantes_count: number;
    evidencia_url?: string;
  }>;
  incidentes_reportados: number;
  fecha_ultima_revision: string;
}

// Partes Interesadas Expandido
export interface ParteInteresada {
  id: string;
  nombre: string;
  tipo: 'cliente' | 'proveedor' | 'empleado' | 'accionista' | 
        'regulador' | 'comunidad' | 'otro';
  necesidades: string[];
  expectativas: string[];
  requisitos_aplicables: string[];
  nivel_influencia: 'bajo' | 'medio' | 'alto';
  nivel_impacto: 'bajo' | 'medio' | 'alto';
  estrategia_gestion: string;
  frecuencia_interaccion: 'diaria' | 'semanal' | 'mensual' | 'trimestral' | 'anual';
  fecha_ultima_actualizacion: string;
}

// Riesgos y Oportunidades (Cl. 6.1 expandido)
export interface RiesgoOportunidad {
  id: string;
  tipo: 'riesgo' | 'oportunidad';
  fuente: 'contexto_externo' | 'contexto_interno' | 'partes_interesadas' | 
          'procesos' | 'cambio_organizacional';
  descripcion: string;
  probabilidad: 'baja' | 'media' | 'alta';
  impacto: 'bajo' | 'medio' | 'alto';
  nivel_riesgo: 'bajo' | 'medio' | 'alto' | 'critico'; // calculado
  acciones_planificadas: Array<{
    descripcion: string;
    responsable_id?: string;
    fecha_limite?: string;
    estado: 'pendiente' | 'en_curso' | 'completada';
  }>;
  proceso_relacionado_id?: string;
  kpi_seguimiento?: string;
  fecha_identificacion: string;
  fecha_ultima_revision: string;
}

// Revisión por la Dirección (Cl. 9.3 mejorado)
export interface RevisionDireccion {
  fecha: string;
  participantes: Array<{
    id: string;
    nombre: string;
    cargo: string;
  }>;
  
  // Entradas (9.3.2)
  entradas: {
    estado_acciones_anteriores: string;
    cambios_contexto: string;
    desempeño_procesos: string;
    conformidad_productos: string;
    no_conformidades_acciones: string;
    resultados_seguimiento: string;
    resultados_auditorias: string;
    desempeño_proveedores: string;
    adecuacion_recursos: string;
    eficacia_riesgos_oportunidades: string;
    oportunidades_mejora: string;
    // NUEVOS ISO 9001:2026
    estado_cultura_calidad: string;
    estado_comportamiento_etico: string;
    cambios_partes_interesadas: string;
  };
  
  // Salidas (9.3.3)
  salidas: {
    oportunidades_mejora: string[];
    necesidades_cambio_sgc: string[];
    necesidades_recursos: string[];
    acciones_generadas: Array<{
      accion_id?: string; // link a módulo Acciones
      descripcion: string;
      responsable_id?: string;
      fecha_limite?: string;
    }>;
  };
  
  acta_reunion_url?: string;
  estado: 'borrador' | 'en_revision' | 'aprobada';
  aprobado_por?: string;
  fecha_aprobacion?: string;
}

// Registro Principal Actualizado
export interface PlanificacionRevisionDireccionV2 {
  id: string;
  
  // Versionado
  fecha_revision: string;
  periodo: string;
  estado: 'borrador' | 'vigente' | 'historico';
  version: string; // "2.0" para ISO 2026
  
  // Tracking de completado expandido
  completado: {
    identidad: boolean;
    alcance: boolean;
    contexto: boolean;
    partes_interesadas: boolean;  // NUEVO
    estructura: boolean;
    cultura_calidad: boolean;     // NUEVO ISO 2026
    comportamiento_etico: boolean; // NUEVO ISO 2026
    politicas: boolean;
    riesgos_oportunidades: boolean; // NUEVO
    revision_direccion: boolean;   // NUEVO
  };
  
  // Secciones Existentes (mejoradas)
  IdentidadOrganizacional: IdentidadOrganizacional;
  AlcanceSGC: AlcanceSGC;
  Contexto: Contexto;
  Estructura: Estructura;
  Politicas: Politica[];
  
  // NUEVAS Secciones ISO 2026
  PartesInteresadas: ParteInteresada[];
  CulturaCalidad: CulturaCalidad;
  ComportamientoEtico: ComportamientoEtico;
  RiesgosOportunidades: RiesgoOportunidad[];
  RevisionesDireccion: RevisionDireccion[];
  
  // Metadata
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by?: string;
}
```

---

## 🎨 Nuevo Diseño de Interfaz

### Concepto: "Journey de Configuración"

Inspirado en el exitoso diseño de **Mi Certificación**, el módulo adoptará un enfoque de **journey visual** donde cada sección es una etapa que el usuario debe completar.

### Mockup de Nueva Interfaz

```
┌─────────────────────────────────────────────────────────────────────┐
│  ← Volver    Revisión 2026-S1    [BORRADOR]     [Marcar Vigente ▼] │
│  Última actualización: 05/01/2026                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  PROGRESO DE CONFIGURACIÓN                           70%   │   │
│  │  [████████████████████░░░░░░░░░░░]                         │   │
│  │                                                             │   │
│  │  ✅ Identidad  ✅ Alcance  ✅ Contexto  ⬜ Partes  ⬜ Cultura │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌──────────────┐  ┌────────────────────────────────────────────┐  │
│  │ NAVEGACIÓN   │  │                                            │  │
│  │              │  │   📋 IDENTIDAD ORGANIZACIONAL              │  │
│  │ ✅ Identidad │  │                                            │  │
│  │ ✅ Alcance   │  │   ┌─────────────────────────────────────┐  │  │
│  │ ✅ Contexto  │  │   │ Nombre: [Acme Corporation        ] │  │  │
│  │ ⬜ Partes Int│  │   │ Sector: [Manufactura             ] │  │  │
│  │ ✅ Estructura│  │   │                                     │  │  │
│  │ ⬜ Cultura ⭐│  │   │ 🤖 Generar con Don Cándido          │  │  │
│  │ ⬜ Ética  ⭐ │  │   └─────────────────────────────────────┘  │  │
│  │ ✅ Políticas │  │                                            │  │
│  │ ⬜ Riesgos⭐ │  │   [Anterior]              [Guardar y Sig.] │  │
│  │ ⬜ Revisión⭐│  │                                            │  │
│  │              │  │   ⭐ = Nuevos requisitos ISO 9001:2026     │  │
│  │ ──────────── │  │                                            │  │
│  │ [Ver Journey]│  │                                            │  │
│  └──────────────┘  └────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Características UX Propuestas

| Característica | Descripción |
|----------------|-------------|
| **Stepper Visual** | Barra de progreso que muestra completion de cada sección |
| **Navegación Lateral** | Sidebar con acceso rápido a cada sección + indicador de estado |
| **Generación IA** | Botón "🤖 Generar con Don Cándido" en campos de texto largo |
| **Validación en Tiempo Real** | Indicadores visuales de campos requeridos |
| **Guardado Automático** | Draft save cada 30 segundos |
| **Badge "Nuevo 2026"** | Destacar secciones nuevas para ISO 2026 |
| **Vinculación Cruzada** | Links a módulos relacionados (Acciones, Auditorías, Procesos) |

---

## 📋 Plan de Implementación

### Fase 1: Infraestructura (Sprint 1, ~2 días)

- [ ] Migrar tipos a nueva versión (`planificacion-revision-direccion-v2.ts`)
- [ ] Actualizar servicio con nuevos métodos CRUD
- [ ] Crear hook `useRevisionData.ts` para manejo de estado
- [ ] API: Agregar endpoint de migración de datos

### Fase 2: Componentes Base (Sprint 1-2, ~3 días)

- [ ] `ProgressStepper.tsx` - Componente de progreso visual
- [ ] `RevisionHeader.tsx` - Header con acciones
- [ ] `SectionLayout.tsx` - Layout común para todas las secciones
- [ ] Integrar componentes shared existentes (PersonnelSelect, StatusBadge)

### Fase 3: Secciones Existentes Rediseñadas (Sprint 2, ~2 días)

- [ ] `IdentidadTab.tsx` - Rediseño con asistente IA
- [ ] `AlcanceTab.tsx` - Rediseño con mejor gestión de arrays
- [ ] `ContextoTab.tsx` - Incluir partes interesadas
- [ ] `EstructuraTab.tsx` - Agregar cultura de calidad
- [ ] `PoliticasTab.tsx` - Mejorar gestión de versiones

### Fase 4: Nuevas Secciones ISO 2026 (Sprint 3, ~3 días)

- [ ] `PartesInteresadasTab.tsx` - Matriz de partes interesadas
- [ ] `CulturaCalidadSection.tsx` - Evaluación de cultura
- [ ] `ComportamientoEticoSection.tsx` - Canales y capacitaciones
- [ ] `RiesgosTab.tsx` - Matriz de riesgos con acciones
- [ ] `RevisionTab.tsx` - Acta de revisión por dirección

### Fase 5: Integración y Polish (Sprint 4, ~2 días)

- [ ] Integración con Don Cándido para generación
- [ ] Generación de PDF de acta de revisión
- [ ] Vinculación con calendario (eventos de revisión)
- [ ] Tests e2e
- [ ] Documentación actualizada

---

## ✅ Beneficios Esperados

| Beneficio | Impacto |
|-----------|---------|
| **Cumplimiento ISO 2026** | Preparación temprana para nuevos requisitos |
| **Mejor UX** | Reducción 50% tiempo de completado |
| **Mantenibilidad** | Código modular, fácil de testear |
| **Consistencia Visual** | Alineación con guía de diseño |
| **Asistencia IA** | Generación de contenido con Don Cándido |
| **Trazabilidad** | Vinculación con otros módulos del SGC |

---

## 📚 Referencias

- [ISO 9001:2026 Draft Changes Summary](https://www.bsigroup.com/en-GB/iso-9001-quality-management/iso-9001-2025-revision/)
- [ISO 9001 Clause 9.3 Management Review](https://www.iso-9001-checklist.co.uk/)
- Guía de Diseño Estandarizado: [5_GUIA_DISENO_ESTANDARIZADO.md](./5_GUIA_DISENO_ESTANDARIZADO.md)

---

## 🎯 Siguiente Paso

> [!IMPORTANT]
> Este documento requiere **revisión y aprobación** antes de proceder con la implementación.

### Preguntas para el Usuario

1. **¿Prioridad de secciones nuevas?** ¿Cuáles de las nuevas secciones ISO 2026 consideras más críticas para implementar primero?

2. **¿Migración de datos?** ¿Hay revisiones existentes que deben migrarse al nuevo formato?

3. **¿Integración Don Cándido?** ¿Deseas que el asistente IA pueda generar contenido para cada sección?

4. **¿Timeline?** ¿Cuál es el timeline deseado para esta refactorización?

---

## 📸 Capturas del Estado Actual

### Vista de Listado de Revisiones
![Estado actual del listado de revisiones](C:/Users/Usuario/.gemini/antigravity/brain/e6b66c06-d7b4-4d95-b232-f05efce9afbb/uploaded_image_1_1767618660251.png)

### Vista de Journey (Referencia de Diseño)
![Journey Dashboard como referencia de diseño](C:/Users/Usuario/.gemini/antigravity/brain/e6b66c06-d7b4-4d95-b232-f05efce9afbb/uploaded_image_0_1767618660251.png)

---

*Documento generado el 05/01/2026 - Pendiente de aprobación*
