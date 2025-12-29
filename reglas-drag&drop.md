# Reglas de Drag & Drop - 9001app-firebase

> **Última Actualización:** 2025-12-28  
> **Estado:** Implementado y Funcional

---

## 📋 Resumen

El sistema de **Drag & Drop** permite mover tarjetas (tareas/actividades) entre diferentes etapas en los tableros Kanban. Esta funcionalidad está implementada en varios módulos del sistema.

---

## 🎯 Biblioteca Utilizada

### Opción 1: HTML5 Nativo (Implementado actualmente)
- **Atributos**: `draggable`, `onDragStart`, `onDragOver`, `onDrop`, `onDragLeave`
- **Ventajas**: Simple, sin dependencias adicionales
- **Usado en**: `TaskKanban.tsx`, Kanban de Procesos

### Opción 2: Pragmatic Drag and Drop (Disponible)
- **Paquete**: `@atlaskit/pragmatic-drag-and-drop` v1.7.7
- **Empresa**: Atlassian (Trello, Jira, Confluence)
- **Hooks disponibles**: `useKanbanDrag.ts`, `useKanbanDrop.ts`
- **Estado**: Hooks creados pero no utilizados actualmente

---

## 🏗️ Arquitectura de Implementación

### 1. Estado del Componente

```typescript
// Estado para tracking de drag & drop
const [draggingTask, setDraggingTask] = useState<string | null>(null);
const [dragOverStage, setDragOverStage] = useState<string | null>(null);
```

### 2. Event Handlers

```typescript
// Al iniciar arrastre
const handleDragStart = (taskId: string) => {
  setDraggingTask(taskId);
};

// Mientras arrastra sobre una columna
const handleDragOver = (e: React.DragEvent, stageId: string) => {
  e.preventDefault();
  setDragOverStage(stageId);
};

// Al salir de la columna
const handleDragLeave = () => {
  setDragOverStage(null);
};

// Al soltar (commit)
const handleDrop = async (e: React.DragEvent, targetStageId: string) => {
  e.preventDefault();
  setDragOverStage(null);
  
  if (!draggingTask) return;
  
  // Llamar API para mover la tarea
  await fetch(`/api/process-records/${recordId}/tasks/${draggingTask}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ stage_id: targetStageId }),
  });
  
  // Recargar datos
  await loadData();
  setDraggingTask(null);
};
```

### 3. Atributos en Tarjetas (Draggable)

```tsx
<Card
  draggable
  onDragStart={() => handleDragStart(task.id)}
  className={`cursor-grab active:cursor-grabbing ${
    draggingTask === task.id ? 'opacity-50 scale-95' : ''
  }`}
>
  {/* Contenido de la tarjeta */}
</Card>
```

### 4. Atributos en Columnas (Drop Target)

```tsx
<Card 
  className={`transition-all ${
    dragOverStage === stage.id 
      ? 'ring-2 ring-emerald-500 ring-offset-2 bg-emerald-50' 
      : ''
  }`}
  onDragOver={(e) => handleDragOver(e, stage.id)}
  onDragLeave={handleDragLeave}
  onDrop={(e) => handleDrop(e, stage.id)}
>
  {/* Columna de etapa */}
</Card>
```

---

## 🎨 Estilos Visuales

| Estado | Clase CSS | Efecto Visual |
|--------|-----------|---------------|
| Arrastrando | `opacity-50 scale-95` | Tarjeta semitransparente y más pequeña |
| Sobre columna | `ring-2 ring-emerald-500 ring-offset-2 bg-emerald-50` | Borde verde y fondo claro |
| Cursor grab | `cursor-grab` | Mano abierta |
| Cursor grabbing | `active:cursor-grabbing` | Mano cerrada |

---

## 🔌 API Endpoint

### `PATCH /api/process-records/[id]/tasks/[taskId]`

**Body:**
```json
{
  "stage_id": "nuevo-stage-id"
}
```

**Response:**
```json
{
  "id": "task-id",
  "message": "Tarea actualizada exitosamente"
}
```

---

## 📂 Archivos Involucrados

| Archivo | Rol |
|---------|-----|
| `src/app/(dashboard)/dashboard/procesos/registros/[id]/page.tsx` | Kanban de Procesos con D&D |
| `src/app/api/process-records/[id]/tasks/[taskId]/route.ts` | API para mover tareas |
| `src/services/processRecords/ProcessRecordTaskServiceAdmin.ts` | Servicio Admin con `moveToStage()` |
| `src/hooks/useKanbanDrag.ts` | Hook genérico de drag (disponible) |
| `src/hooks/useKanbanDrop.ts` | Hook genérico de drop (disponible) |
| `src/components/private-sections/TaskKanban.tsx` | Ejemplo de D&D nativo |

---

## 🔄 Componentes Kanban en el Sistema

| Componente | Drag & Drop | Descripción |
|------------|-------------|-------------|
| `TaskKanban.tsx` (private-sections) | ✅ HTML5 | Tareas personales |
| `ProcessRecordKanban` (page.tsx) | ✅ HTML5 | Kanban de Procesos |
| `unified-kanban.tsx` | ⚠️ Preparado | Componente unificado (sin implementar) |
| `AuditKanban.tsx` | ❌ | Solo visualización |
| `ActionKanban.tsx` | ❌ | Solo visualización |
| `FindingKanban.tsx` | ❓ | Por revisar |

---

## 🚀 Próximos Pasos

1. **Unificar todos los Kanban** con el mismo patrón de D&D
2. **Migrar a Pragmatic Drag and Drop** si se requiere funcionalidad avanzada
3. **Agregar ordenamiento** dentro de la misma columna (reordenar)
4. **Animaciones** con framer-motion para transiciones más suaves

---

## 📚 Referencias

- [Pragmatic Drag and Drop - Atlassian](https://atlassian.design/components/pragmatic-drag-and-drop)
- [HTML Drag and Drop API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [React DnD Patterns](https://react-dnd.github.io/react-dnd/)
