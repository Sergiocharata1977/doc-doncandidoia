# 📅 Guía de Integración con el Calendario

## Resumen Ejecutivo

El calendario es un **servicio centralizado** que permite a todos los módulos crear eventos automáticamente. Ya integrado: RRHH (capacitaciones y evaluaciones).

## Módulos Pendientes

- 📋 **Auditorías** → `audit`
- 🔍 **Hallazgos** → `finding_deadline`
- ⚡ **Acciones** → `action_deadline`
- 📄 **Documentos** → `document_expiry`
- 👥 **Reuniones** → `meeting`

## Integración Rápida

### 1. Agregar campo
```typescript
export interface MiModulo {
  // ... campos existentes
  calendar_event_id?: string;  // ← Agregar esto
}
```

### 2. Crear evento
```typescript
import { CalendarService } from '@/services/calendar/CalendarService';

// Al crear registro
const eventId = await CalendarService.createEvent({
  title: "📋 Mi Evento",
  date: miRegistro.fecha,
  type: 'audit', // o 'finding_deadline', 'action_deadline', etc.
  sourceModule: 'audits', // o 'findings', 'actions', etc.
  priority: 'high',
  sourceRecordId: miRegistro.id,
  responsibleUserId: miRegistro.responsable_id,
  organizationId: miRegistro.organization_id,
  // ... más campos
});

await MiService.update(miRegistro.id, { calendar_event_id: eventId });
```

### 3. Actualizar evento
```typescript
// Al modificar registro
if (registroActual?.calendar_event_id) {
  await CalendarService.updateEvent(registroActual.calendar_event_id, {
    title: "📋 Título Actualizado",
    date: nuevoRegistro.fecha,
  });
}
```

### 4. Eliminar evento
```typescript
// Al eliminar registro
if (registro?.calendar_event_id) {
  await CalendarService.deleteEvent(registro.calendar_event_id);
}
```

## Tipos Disponibles

```typescript
// Tipos de eventos
'audit' | 'document_expiry' | 'action_deadline' | 'finding_deadline' | 
'training' | 'evaluation' | 'meeting' | 'general'

// Módulos
'audits' | 'documents' | 'actions' | 'findings' | 'trainings' | 
'evaluations' | 'meetings' | 'custom'

// Prioridades
'low' | 'medium' | 'high' | 'critical'

// Estados
'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'overdue'
```

## Notificaciones

```typescript
notificationSchedule: {
  sevenDaysBefore: true,   // 7 días antes
  oneDayBefore: true,      // 1 día antes
  onEventDay: true,        // Día del evento
  customDays: [30, 15],    // Opcional: días personalizados
}
```

## Referencia

Ver implementación completa en:
- `src/app/api/rrhh/trainings/route.ts`
- `src/app/api/rrhh/evaluations/route.ts`
- `src/services/calendar/CalendarService.ts`
