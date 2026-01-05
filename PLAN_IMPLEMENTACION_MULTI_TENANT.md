# Plan de Implementación Multi-Tenant - ISO 9001 App

## 📋 Resumen Ejecutivo

Este documento detalla la estrategia para transformar la arquitectura de la aplicación `9001app-firebase` a un modelo **Multi-Tenant (Multi-Organización)** robusto y seguro. El objetivo es garantizar el aislamiento total de los datos entre diferentes organizaciones utilizando `organization_id` como clave de partición en todos los niveles.

---

## 🔴 Diagnóstico Actual

Se han identificado **brechas críticas de seguridad y consistencia**:

1.  **Reglas de Firestore:** La función de seguridad `belongsToOrganization()` existe pero no se aplica en colecciones críticas como auditorías, hallazgos o acciones, permitiendo acceso cruzado entre organizaciones.
2.  **Servicios Backend:** La mayoría de los servicios (e.g., `ActionService`, `AuditService`) no filtran por `organization_id` en sus métodos de lectura (`list`, `getAll`), exponiendo datos globales.
3.  **Modelo de Datos:** Entidades principales carecen de la propiedad `organization_id` obligatoria en sus definiciones de TypeScript.
4.  **API Routes:** Los endpoints no validan la pertenencia del usuario a la organización antes de procesar solicitudes.

---

## 🚀 Plan de Ejecución

La implementación se realizará en **6 Fases Secuenciales** para minimizar disrupciones.

### Fase 1: Modelo de Datos (Types & Interfaces)
**Objetivo:** Estandarizar la estructura de datos obligando la presencia de `organization_id`.

- [ ] **Acciones:** Agregar `organization_id` a `Action`, `ActionFormData`.
- [ ] **Auditorías:** Agregar `organization_id` a `Audit`, `AuditFormData`.
- [ ] **Hallazgos:** Agregar `organization_id` a `Finding`, `FindingFormData`.
- [ ] **RRHH:** Agregar `organization_id` a `Personnel`, `Position`, `Department`, `Evaluation`, `Training`.
- [ ] **Documentos:** Asegurar `organization_id` estricto en `Document`.
- [ ] **Calendario:** Agregar `organization_id` a eventos.

### Fase 2: Refactorización de Servicios (Business Logic)
**Objetivo:** Asegurar que TODA operación de lectura/escritura filtre por organización.

- [ ] **Patrón General:**
    ```typescript
    // Antes
    list(filters) { ... }
    
    // Después
    list(organizationId: string, filters) { 
        where('organization_id', '==', organizationId) 
        ... 
    }
    ```
- [ ] **Servicios Prioritarios:**
    -   `ActionService`
    -   `AuditService`
    -   `FindingService`
    -   `DocumentService`
    -   `PersonnelService` (y subsistemas de RRHH)

### Fase 3: Seguridad en Base de Datos (Firestore Rules)
**Objetivo:** Bloquear acceso a datos de otras organizaciones a nivel de base de datos.

- [ ] Actualizar `firestore.rules` para aplicar `belongsToOrganization(resource.data.organization_id)` en:
    -   `/audits/{id}`
    -   `/actions/{id}`
    -   `/findings/{id}`
    -   `/documents/{id}`
    -   `/personnel/{id}`
    -   Colecciones de RRHH y Calendario.

### Fase 4: Capa de API (Next.js Routes)
**Objetivo:** Validar contexto de organización antes de invocar servicios.

- [ ] Obtener `organizationId` del token de sesión/contexto seguro.
- [ ] Pasar `organizationId` explícitamente a los métodos de servicios refactorizados.
- [ ] Rechazar peticiones sin contexto de organización válido.

### Fase 5: Almacenamiento de Archivos (Storage)
**Objetivo:** Aislar archivos adjuntos.

- [ ] Migrar estructura de rutas a: `organizations/{orgId}/{module}/{fileId}`.
- [ ] Actualizar reglas de Storage.

### Fase 6: Numeración y Secuencias
**Objetivo:** Evitar colisiones de numeración (e.g., "AUD-001") entre organizaciones.

- [ ] Modificar `TraceabilityService` para generar secuencias por tenant (`organization_id`).

---

## 📅 Bitácora de Ejecución

| Fecha | Fase | Estado | Notas |
|-------|------|--------|-------|
| 05/01/2026 | Planificación | Completado | Creación de este documento y análisis inicial. |
| 05/01/2026 | Fase 1 | Pendiente | Inicio de actualización de tipos TypeScript. |

---
*Documento vivo. Actualizar conforme se avance en la implementación.*
