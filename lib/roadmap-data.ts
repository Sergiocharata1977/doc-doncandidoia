// Datos iniciales y columnas por defecto del Kanban

import { RoadmapColumn } from '@/types/roadmap';

// Columnas por defecto del tablero
export const DEFAULT_COLUMNS: RoadmapColumn[] = [
    { id: 'backlog', title: 'Backlog General', color: '#3B82F6', order: 0 },
    { id: 'analysis', title: 'Análisis / Requerimientos', color: '#EAB308', order: 1 },
    { id: 'design', title: 'Diseño Funcional', color: '#22C55E', order: 2 },
    { id: 'development', title: 'Desarrollo', color: '#F97316', order: 3 },
    { id: 'integration', title: 'Integración App Madre', color: '#78716C', order: 4 },
    { id: 'testing', title: 'Pruebas / QA', color: '#A855F7', order: 5 },
    { id: 'control', title: 'Control Final', color: '#10B981', order: 6 },
    { id: 'deploy', title: 'Deploy', color: '#06B6D4', order: 7 },
    { id: 'closed', title: 'Cerrado', color: '#6B7280', order: 8 },
];
