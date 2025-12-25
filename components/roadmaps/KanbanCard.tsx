'use client';

import { RoadmapCard, PRIORITY_CONFIG, MODULE_CONFIG, PROJECT_CONFIG, TASK_TYPE_CONFIG } from '@/types/roadmap';
import { Calendar, User, FileText, ListChecks, CheckCircle2, Check } from 'lucide-react';

interface KanbanCardProps {
    card: RoadmapCard;
    onClick: (card: RoadmapCard) => void;
    onComplete?: (card: RoadmapCard) => void;
}

export function KanbanCard({ card, onClick, onComplete }: KanbanCardProps) {
    const priorityConfig = PRIORITY_CONFIG[card.priority];
    const projectConfig = PROJECT_CONFIG[card.projectId];
    const moduleConfig = card.module ? MODULE_CONFIG[card.module] : null;
    const taskTypeConfig = card.taskType ? TASK_TYPE_CONFIG[card.taskType] : null;

    // Indicadores de estado del proyecto
    const hasPlan = !!card.implementationPlan;
    const hasTasks = card.taskList && card.taskList.tasks.length > 0;
    const hasWalkthrough = !!card.walkthrough;
    const taskProgress = card.taskList?.progress || 0;

    // Verificar si está en columna cerrada
    const isClosed = card.columnId === 'closed';

    // Handler para completar
    const handleComplete = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevenir que abra el detalle
        if (onComplete && !isClosed) {
            onComplete(card);
        }
    };

    return (
        <div
            className="relative group bg-white rounded-lg p-4 shadow-sm border border-gray-200 cursor-pointer 
                 hover:shadow-md hover:border-gray-300 transition-all"
            onClick={() => onClick(card)}
        >
            {/* Botón Completar - Solo visible si no está cerrada */}
            {onComplete && !isClosed && (
                <button
                    onClick={handleComplete}
                    className="absolute top-2 right-2 z-10 p-1.5 rounded-full 
                        bg-white/80 text-gray-400 opacity-0 group-hover:opacity-100
                        hover:bg-green-100 hover:text-green-600 
                        transition-all shadow-sm border border-gray-200"
                    title="Marcar como completada"
                >
                    <Check className="w-4 h-4" />
                </button>
            )}
            {/* Proyecto Badge */}
            {projectConfig && (
                <div className="mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${projectConfig.bgColor} ${projectConfig.color}`}>
                        {projectConfig.icon} {projectConfig.label}
                    </span>
                </div>
            )}

            {/* Módulo Badge */}
            {moduleConfig && (
                <div className="mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${moduleConfig.bgColor} ${moduleConfig.color}`}>
                        {moduleConfig.label}
                    </span>
                </div>
            )}

            {/* Tipo de Tarea Badge */}
            {taskTypeConfig && (
                <div className="mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${taskTypeConfig.bgColor} ${taskTypeConfig.color}`}>
                        {taskTypeConfig.icon} {taskTypeConfig.label}
                    </span>
                </div>
            )}

            {/* Título */}
            <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                {card.title || 'Sin título'}
            </h4>

            {/* Descripción */}
            {card.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {card.description}
                </p>
            )}

            {/* Prioridad y Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`}>
                    {priorityConfig.label}
                </span>
                {card.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {tag}
                    </span>
                ))}
                {card.tags.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        +{card.tags.length - 2}
                    </span>
                )}
            </div>

            {/* Indicadores de Proyecto */}
            {(hasPlan || hasTasks || hasWalkthrough) && (
                <div className="flex items-center gap-2 mb-3 text-xs">
                    {hasPlan && (
                        <span className="flex items-center gap-1 text-indigo-600" title="Plan de implementación">
                            <FileText className="w-3.5 h-3.5" />
                        </span>
                    )}
                    {hasTasks && (
                        <span className="flex items-center gap-1 text-blue-600" title={`Progreso: ${taskProgress}%`}>
                            <ListChecks className="w-3.5 h-3.5" />
                            <span>{taskProgress}%</span>
                        </span>
                    )}
                    {hasWalkthrough && (
                        <span className="flex items-center gap-1 text-green-600" title="Walkthrough completado">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                    )}
                </div>
            )}

            {/* Footer: Responsable y Fecha */}
            <div className="flex items-center justify-between text-xs text-gray-500">
                {card.assignee && (
                    <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[80px]">{card.assignee}</span>
                    </div>
                )}
                {card.dueDate && (
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(card.dueDate).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}</span>
                    </div>
                )}
            </div>

            {/* Indicador de checklists */}
            {(card.checklistQA.length > 0 || card.checklistIntegracion.length > 0) && (
                <div className="mt-2 pt-2 border-t border-gray-100 flex gap-3 text-xs text-gray-400">
                    {card.checklistQA.length > 0 && (
                        <span>QA: {card.checklistQA.filter(c => c.done).length}/{card.checklistQA.length}</span>
                    )}
                    {card.checklistIntegracion.length > 0 && (
                        <span>Int: {card.checklistIntegracion.filter(c => c.done).length}/{card.checklistIntegracion.length}</span>
                    )}
                </div>
            )}
        </div>
    );
}

