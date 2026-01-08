# Progreso de Implementación - Refactorización Planificación y Revisión

> **Fecha:** 05/01/2026  
> **Estado:** En Progreso - Fase 1 ✅ | Fase 2 🛠️

---

## ✅ Completado Hasta Ahora

### Fase 1: Infraestructura (100%)

#### 1. Tipos TypeScript V2 ✅
**Archivo:** `src/types/planificacion-revision-direccion-v2.ts` (600+ líneas)

**Nuevas Interfaces ISO 2026:**
- `ParteInteresada` - Gestión expandida de partes interesadas (Cl. 4.2)
- `CulturaCalidad` - Evaluación de cultura de calidad (Cl. 5.1.1)
- `ComportamientoEtico` - Canales de denuncia y capacitaciones
- `RiesgoOportunidad` - Riesgos y oportunidades separados (Cl. 6.1)
- `GestionConocimiento` - Conocimientos críticos (Cl. 7.1.6)
- `RevisionDireccion` - Revisión por dirección mejorada (Cl. 9.3)
- `ConfiguracionISO2026` - Toggle para habilitar/deshabilitar requisitos 2026

**Helpers:**
- `calcularNivelRiesgo()` - Calcula nivel basado en probabilidad × impacto
- `calcularProgresoCompletado()` - Porcentaje de secciones completadas

#### 2. Servicio V2 ✅
**Archivo:** `src/services/planificacion-revision-direccion/PlanificacionRevisionV2Service.ts` (450+ líneas)

**Mejoras Implementadas:**
- ✅ **PATCH por sección** - Solo actualiza la sección modificada (sugerencia Gemini 3)
- ✅ **Métodos específicos** para cada sección ISO 2026:
  - `addParteInteresada()`, `updateParteInteresada()`, `deleteParteInteresada()`
  - `addRiesgoOportunidad()` con cálculo automático de nivel
  - `addRevisionDireccion()`
  - `vincularAccionARevision()` - Integración con módulo de Acciones
- ✅ **Validación de completado** por sección
- ✅ **Manejo de estado vigente** (solo una revisión vigente a la vez)

#### 3. Hook useRevisionData ✅
**Archivo:** `src/app/(dashboard)/planificacion-revision-direccion/[id]/hooks/useRevisionData.ts`

**Características:**
- ✅ **Auto-save** cada 30 segundos (configurable)
- ✅ **Guardado manual** por sección (PATCH)
- ✅ **Estado dirty** - Detecta cambios sin guardar
- ✅ **Warning antes de cerrar** si hay cambios pendientes
- ✅ **Helpers** - `getSectionData()`, `isSectionComplete()`, `getProgress()`

### Fase 2: Componentes Base (80%)

#### 1. ProgressStepper ✅
**Archivo:** `src/app/(dashboard)/planificacion-revision-direccion/[id]/components/ProgressStepper.tsx`

**Características:**
- ✅ **Navegación no lineal** - Steps clicables (sugerencia Gemini 3)
- ✅ **Barra de progreso global** con porcentaje
- ✅ **Badges "Nuevo 2026"** para secciones ISO 2026
- ✅ **Estados visuales** - Completado / Actual / Pendiente

#### 2. RevisionHeader ✅
**Archivo:** `src/app/(dashboard)/planificacion-revision-direccion/[id]/components/RevisionHeader.tsx`

**Características:**
- ✅ **Badges de estado** - Vigente / Borrador / Histórico
- ✅ **Badge de versión ISO** - 2015 vs 2026 Ready
- ✅ **Indicador de cambios sin guardar** con animación
- ✅ **Menú de acciones** - Imprimir, Historial, Eliminar

#### 3. SectionLayout ✅
**Archivo:** `src/app/(dashboard)/planificacion-revision-direccion/[id]/components/SectionLayout.tsx`

**Características:**
- ✅ **Estructura común** para todas las secciones
- ✅ **Badge de completado**
- ✅ **Badge "Nuevo ISO 2026"**
- ✅ **Botón de guardar** con estado loading
- ✅ **Botón "Generar con Don Cándido"** (opcional)

#### 4. IdentidadTab (Ejemplo) ✅
**Archivo:** `src/app/(dashboard)/planificacion-revision-direccion/[id]/components/tabs/IdentidadTab.tsx`

**Características:**
- ✅ **Usa SectionLayout** para consistencia
- ✅ **Campos organizados en grid** 2 columnas
- ✅ **Botones de IA** por campo (Misión, Visión)
- ✅ **Ayuda contextual** con consejos
- ✅ **Validación visual** de campos requeridos

---

## 🚧 Pendiente

### Fase 2: Componentes Base (20% restante)

- [ ] **Integrar shared components** existentes:
  - `PersonnelSelect` en campos de responsable
  - `StatusBadge` para estados
  - `DeleteConfirmDialog` para eliminaciones

### Fase 3: Secciones Existentes Rediseñadas

- [ ] `AlcanceTab.tsx` - Gestión de productos/servicios y ubicaciones
- [ ] `ContextoTab.tsx` - Incluir Partes Interesadas
- [ ] `EstructuraTab.tsx` - Agregar Cultura de Calidad
- [ ] `PoliticasTab.tsx` - Mejorar gestión de versiones

### Fase 4: Nuevas Secciones ISO 2026 (PRIORIDAD)

**Alta Prioridad:**
- [ ] `RiesgosTab.tsx` - Matriz de riesgos con acciones vinculadas

**Media Prioridad:**
- [ ] `CulturaCalidadSection.tsx` - Evaluación de madurez
- [ ] `GestionConocimientoSection.tsx` - Conocimientos críticos

**Baja Prioridad:**
- [ ] `ComportamientoEticoSection.tsx` - Canales y capacitaciones
- [ ] `RevisionTab.tsx` - Acta de revisión por dirección

### Fase 5: Integración y APIs

- [ ] **Endpoints API V2:**
  - `GET /api/planificacion-revision-direccion/v2`
  - `GET /api/planificacion-revision-direccion/v2/[id]`
  - `POST /api/planificacion-revision-direccion/v2`
  - `PATCH /api/planificacion-revision-direccion/v2/[id]` (por sección)
  - `DELETE /api/planificacion-revision-direccion/v2/[id]`
  - `PATCH /api/planificacion-revision-direccion/v2/[id]/vigente`

- [ ] **Integración Don Cándido:**
  - Endpoint de generación de contenido por sección
  - Prompts específicos para cada campo

- [ ] **Página principal rediseñada:**
  - `[id]/page.tsx` - Layout con navegación lateral + ProgressStepper
  - Routing entre tabs

- [ ] **Migración de datos:**
  - Script de migración V1 → V2
  - Endpoint `/api/planificacion-revision-direccion/migrate`

---

## 📊 Métricas de Progreso

| Fase | Progreso | Archivos Creados | Líneas de Código |
|------|----------|------------------|------------------|
| Fase 1 | 100% ✅ | 3 | ~1,500 |
| Fase 2 | 80% 🛠️ | 5 | ~800 |
| Fase 3 | 0% ⏳ | 0 | 0 |
| Fase 4 | 0% ⏳ | 0 | 0 |
| Fase 5 | 0% ⏳ | 0 | 0 |
| **TOTAL** | **36%** | **8** | **~2,300** |

---

## 🎯 Próximos Pasos Recomendados

### Opción A: Completar Fase 2 + Crear APIs (Rápido)
1. Integrar shared components en `IdentidadTab`
2. Crear endpoints API V2
3. Probar flujo completo de guardado

**Tiempo estimado:** 2-3 horas  
**Beneficio:** Tener un tab funcional end-to-end

### Opción B: Crear Tabs Prioritarios (Valor de Negocio)
1. `RiesgosTab` (prioridad alta según Gemini 3)
2. `ContextoTab` + Partes Interesadas
3. `CulturaCalidadSection`

**Tiempo estimado:** 4-5 horas  
**Beneficio:** Cubrir requisitos ISO 2026 más críticos

### Opción C: Página Principal + Navegación (UX)
1. Rediseñar `[id]/page.tsx` con layout Journey
2. Implementar navegación lateral
3. Integrar ProgressStepper

**Tiempo estimado:** 3-4 horas  
**Beneficio:** Experiencia de usuario completa

---

## 💡 Recomendación

**Seguir con Opción A** para tener un flujo funcional completo:

1. ✅ **Completar Fase 2** (integrar shared components)
2. ✅ **Crear APIs V2** (endpoints básicos)
3. ✅ **Probar guardado** de IdentidadTab
4. ➡️ **Luego continuar con Opción B** (tabs prioritarios)

Esto permite validar la arquitectura antes de escalar a todas las secciones.

---

## 🔗 Archivos Creados

```
src/
├── types/
│   └── planificacion-revision-direccion-v2.ts ✅
├── services/planificacion-revision-direccion/
│   └── PlanificacionRevisionV2Service.ts ✅
└── app/(dashboard)/planificacion-revision-direccion/[id]/
    ├── hooks/
    │   └── useRevisionData.ts ✅
    └── components/
        ├── ProgressStepper.tsx ✅
        ├── RevisionHeader.tsx ✅
        ├── SectionLayout.tsx ✅
        └── tabs/
            └── IdentidadTab.tsx ✅
```

---

*Última actualización: 05/01/2026 19:30*
