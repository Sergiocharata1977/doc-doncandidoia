---
description: How to manage Kanban roadmap cards
---

# Roadmap Control Workflow

Este workflow permite a la IA manipular tarjetas del Kanban roadmap en `docs-9001app`.

## Ver todas las tarjetas

```bash
GET http://localhost:3001/api/roadmap/cards
```

Retorna un array de todas las tarjetas con sus detalles.

## Crear una nueva tarjeta

```bash
POST http://localhost:3001/api/roadmap/cards
Content-Type: application/json

{
  "title": "Título de la tarjeta",
  "description": "Descripción detallada",
  "columnId": "backlog",
  "priority": "high",
  "module": "IA-Contextual",
  "taskType": "feature",
  "tags": ["feature", "ia"],
  "sprintId": 2
}
```

**Columnas disponibles:**
- `backlog` - Backlog General
- `analysis` - Análisis / Requerimientos
- `design` - Diseño Funcional
- `development` - Desarrollo
- `integration` - Integración App Madre
- `testing` - Pruebas / QA
- `control` - Control Final
- `deploy` - Deploy
- `closed` - Cerrado

**Prioridades:**
- `critical` - Crítica
- `high` - Alta
- `medium` - Media
- `low` - Baja

**Tipos de Tarea (Task Types):**
- `feature` - Nueva Funcionalidad
- `control-auto` - Control Automático
- `control-manual` - Control Manual
- `test` - Prueba
- `bug-user` - Bug (Usuario)
- `bug-internal` - Bug (Interno)
- `improvement` - Mejora
- `tech-debt` - Deuda Técnica

**Módulos (ejemplos):**
- `CRM`, `Multi-tenant`, `IA-Contextual`, `Usuarios`, `Infraestructura`, `Landing`, `Automatizaciones`, `MCP`, `Documentacion`, `QA`, `Procesos`, `Auditorias`

## Mover una tarjeta entre columnas

```bash
POST http://localhost:3001/api/roadmap/cards/move
Content-Type: application/json

{
  "cardId": "ID_DE_LA_TARJETA",
  "toColumn": "development",
  "fromColumn": "backlog"
}
```

## Completar una tarjeta (mover a cerrado)

```bash
POST http://localhost:3001/api/roadmap/cards/move
Content-Type: application/json

{
  "cardId": "ID_DE_LA_TARJETA",
  "toColumn": "closed"
}
```

## Actualizar una tarjeta

```bash
PUT http://localhost:3001/api/roadmap/cards/ID_DE_LA_TARJETA
Content-Type: application/json

{
  "title": "Nuevo título",
  "description": "Nueva descripción",
  "priority": "critical"
}
```

## Eliminar una tarjeta

```bash
DELETE http://localhost:3001/api/roadmap/cards/ID_DE_LA_TARJETA
```

## Ejemplo de uso para la IA

1. **Listar tarjetas actuales**
2. **Identificar tarjeta a mover** (por título o ID)
3. **Mover tarjeta** usando el endpoint `/move`
4. **Confirmar** que el movimiento fue exitoso

## Notas

- Todas las operaciones se sincronizan en tiempo real con Firestore
- Los cambios son visibles inmediatamente en la UI del Kanban
- El historial de movimientos puede ser implementado en el futuro
