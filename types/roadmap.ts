// Tipos para el sistema de Roadmaps Kanban

export type Priority = 'critical' | 'high' | 'medium' | 'low';

// NUEVO: Tipos de módulos para clasificación
export type Module =
    | 'CRM'              // Gestión de clientes, leads, ventas
    | 'Multi-tenant'     // Organizaciones, tenants
    | 'IA-Contextual'    // IA por usuario, contexto
    | 'Usuarios'         // Gestión de usuarios, roles, permisos
    | 'Infraestructura'  // Subdominios, deploy, configuración
    | 'Landing'          // Landing page, marketing
    | 'Automatizaciones' // Workflows, integraciones
    | 'MCP'              // Model Context Protocol
    | 'Documentacion'    // Docs, manuales, guías
    | 'QA'               // Testing, control de calidad
    | 'Procesos'         // Gestión de procesos ISO
    | 'Auditorias';      // Sistema de auditorías

// NUEVO: Tipo de tarea para clasificación de trabajo
export type TaskType =
    | 'feature'          // 1. Desarrollo de Nueva Funcionalidad
    | 'control-auto'     // 2. Control Automático (tests, CI/CD, validaciones)
    | 'control-manual'   // 3. Control No Automático (revisión manual, QA humano)
    | 'test'             // 4. Prueba de Funcionalidades
    | 'bug-user'         // 5. Error detectado por usuario
    | 'bug-internal'     // Error detectado internamente
    | 'improvement'      // Mejora de funcionalidad existente
    | 'tech-debt';       // Deuda técnica

// NUEVO: Tipo de proyecto para clasificación multi-proyecto
export type ProjectId = '9001app-firebase' | 'don-candido-finanzas' | 'sig-agro' | 'lla-sudoeste';


export interface ChecklistItem {
    id: string;
    label: string;
    done: boolean;
}

export interface Task {
    id: string;
    title: string;
    status: 'pending' | 'in-progress' | 'completed';
    assignee?: string;
    completedAt?: string;
}

export interface ImplementationPlan {
    goal: string;
    userReviewRequired?: string;
    proposedChanges: string;
    verificationPlan: string;
    createdAt: string;
    updatedAt: string;
}

export interface TaskList {
    tasks: Task[];
    progress: number; // 0-100
    updatedAt: string;
}

export interface Walkthrough {
    summary: string;
    changesMade: string;
    testing: string;
    validation: string;
    createdAt: string;
}

export interface Attachment {
    id: string;
    name: string;
    type: 'image' | 'pdf' | 'doc' | 'other';
    url: string;
    uploadedBy: string;
    uploadedAt: string;
}

export interface ActivityItem {
    id: string;
    type: 'comment' | 'status_change' | 'assignment' | 'file_upload' | 'plan_created' | 'task_completed';
    user: string;
    content: string;
    timestamp: string;
}

export interface RoadmapCard {
    id: string;
    columnId: string;

    // NUEVO: Proyecto al que pertenece
    projectId: ProjectId;

    title: string;
    description: string;
    priority: Priority;
    tags: string[];


    // NUEVO: Clasificación por módulo
    module?: Module;
    subModule?: string;
    relatedProjects?: string[];

    // NUEVO: Tipo de tarea
    taskType?: TaskType;

    // Personas y fechas
    assignee?: string;
    assignedTeam?: string[];
    dueDate?: string;
    startDate?: string;
    estimatedHours?: number;
    sprintId?: number;

    // Planificación
    implementationPlan?: ImplementationPlan;

    // Ejecución
    taskList?: TaskList;

    // Control y Evidencia
    walkthrough?: Walkthrough;

    // Documentos adjuntos
    attachments?: Attachment[];

    // Historial de actividad
    activity?: ActivityItem[];

    // Checklists (existentes)
    checklistQA: ChecklistItem[];
    checklistIntegracion: ChecklistItem[];

    // Metadata
    createdAt: string;
    updatedAt: string;
    createdBy?: string;
    lastModifiedBy?: string;
}

export interface RoadmapColumn {
    id: string;
    title: string;
    color: string;
    order: number;
}

// Constantes de prioridad
export const PRIORITY_CONFIG: Record<Priority, { label: string; color: string; bgColor: string }> = {
    critical: { label: 'Crítica', color: 'text-red-700', bgColor: 'bg-red-100' },
    high: { label: 'Alta', color: 'text-orange-700', bgColor: 'bg-orange-100' },
    medium: { label: 'Media', color: 'text-yellow-700', bgColor: 'bg-yellow-100' },
    low: { label: 'Baja', color: 'text-green-700', bgColor: 'bg-green-100' },
};

// NUEVO: Constantes de módulos para UI
export const MODULE_CONFIG: Record<Module, { label: string; color: string; bgColor: string; icon?: string }> = {
    'CRM': { label: 'CRM', color: 'text-blue-700', bgColor: 'bg-blue-100' },
    'Multi-tenant': { label: 'Multi-tenant', color: 'text-purple-700', bgColor: 'bg-purple-100' },
    'IA-Contextual': { label: 'IA Contextual', color: 'text-emerald-700', bgColor: 'bg-emerald-100' },
    'Usuarios': { label: 'Usuarios', color: 'text-cyan-700', bgColor: 'bg-cyan-100' },
    'Infraestructura': { label: 'Infraestructura', color: 'text-slate-700', bgColor: 'bg-slate-100' },
    'Landing': { label: 'Landing', color: 'text-pink-700', bgColor: 'bg-pink-100' },
    'Automatizaciones': { label: 'Automatizaciones', color: 'text-amber-700', bgColor: 'bg-amber-100' },
    'MCP': { label: 'MCP', color: 'text-violet-700', bgColor: 'bg-violet-100' },
    'Documentacion': { label: 'Documentación', color: 'text-teal-700', bgColor: 'bg-teal-100' },
    'QA': { label: 'QA', color: 'text-rose-700', bgColor: 'bg-rose-100' },
    'Procesos': { label: 'Procesos', color: 'text-indigo-700', bgColor: 'bg-indigo-100' },
    'Auditorias': { label: 'Auditorías', color: 'text-fuchsia-700', bgColor: 'bg-fuchsia-100' },
};

// NUEVO: Constantes de proyectos para UI
export const PROJECT_CONFIG: Record<ProjectId, {
    label: string;
    color: string;
    bgColor: string;
    icon: string;
    description: string;
}> = {
    '9001app-firebase': {
        label: '9001 App',
        color: 'text-indigo-700',
        bgColor: 'bg-indigo-100',
        icon: '📋',
        description: 'Sistema de Gestión ISO 9001'
    },
    'don-candido-finanzas': {
        label: 'Don Cándido Finanzas',
        color: 'text-emerald-700',
        bgColor: 'bg-emerald-100',
        icon: '💰',
        description: 'Sistema de Retail y Finanzas con IA'
    },
    'sig-agro': {
        label: 'SIG Agro',
        color: 'text-green-700',
        bgColor: 'bg-green-100',
        icon: '🌾',
        description: 'Sistema de Información Agropecuaria'
    },
    'lla-sudoeste': {
        label: 'LLA Sudoeste',
        color: 'text-violet-700',
        bgColor: 'bg-violet-100',
        icon: '🦁',
        description: 'Web Política y Gestión Interna'
    },
};


// Lista de módulos para selectores
export const MODULES_LIST: Module[] = [
    'CRM', 'Multi-tenant', 'IA-Contextual', 'Usuarios', 'Infraestructura',
    'Landing', 'Automatizaciones', 'MCP', 'Documentacion', 'QA', 'Procesos', 'Auditorias'
];

// Lista de proyectos para selectores
export const PROJECTS_LIST: ProjectId[] = [
    '9001app-firebase',
    'don-candido-finanzas',
    'sig-agro',
    'lla-sudoeste'
];


// NUEVO: Constantes de tipos de tarea para UI
export const TASK_TYPE_CONFIG: Record<TaskType, { label: string; color: string; bgColor: string; icon: string }> = {
    'feature': { label: 'Nueva Funcionalidad', color: 'text-blue-700', bgColor: 'bg-blue-100', icon: '✨' },
    'control-auto': { label: 'Control Automático', color: 'text-green-700', bgColor: 'bg-green-100', icon: '🤖' },
    'control-manual': { label: 'Control Manual', color: 'text-cyan-700', bgColor: 'bg-cyan-100', icon: '👁️' },
    'test': { label: 'Prueba', color: 'text-purple-700', bgColor: 'bg-purple-100', icon: '🧪' },
    'bug-user': { label: 'Bug (Usuario)', color: 'text-red-700', bgColor: 'bg-red-100', icon: '🐛' },
    'bug-internal': { label: 'Bug (Interno)', color: 'text-orange-700', bgColor: 'bg-orange-100', icon: '🔧' },
    'improvement': { label: 'Mejora', color: 'text-indigo-700', bgColor: 'bg-indigo-100', icon: '📈' },
    'tech-debt': { label: 'Deuda Técnica', color: 'text-gray-700', bgColor: 'bg-gray-100', icon: '🏗️' },
};

// Lista de tipos de tarea para selectores
export const TASK_TYPES_LIST: TaskType[] = [
    'feature', 'control-auto', 'control-manual', 'test',
    'bug-user', 'bug-internal', 'improvement', 'tech-debt'
];
