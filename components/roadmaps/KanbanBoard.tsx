'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RoadmapCard, RoadmapColumn, Module, TaskType, ProjectId, MODULE_CONFIG, MODULES_LIST, PROJECT_CONFIG, PROJECTS_LIST, TASK_TYPE_CONFIG, TASK_TYPES_LIST } from '@/types/roadmap';
import { DEFAULT_COLUMNS } from '@/lib/roadmap-data';
import { useFirestoreCards } from '@/hooks/useFirestoreCards';
import { KanbanColumn } from './KanbanColumn';
import { CreateCardModal } from './CreateCardModal';
import { LayoutGrid, List, Plus, RotateCcw, Loader2, Filter, Check } from 'lucide-react';

type ViewMode = 'kanban' | 'list';

export function KanbanBoard() {
    // Datos persistidos en Firestore
    const { cards, loading, error, updateCard, deleteCard, addCard } = useFirestoreCards();
    const columns = DEFAULT_COLUMNS;
    const router = useRouter();

    // Estado de UI
    const [viewMode, setViewMode] = useState<ViewMode>('kanban');
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [createColumnId, setCreateColumnId] = useState('backlog');
    const [draggedCardId, setDraggedCardId] = useState<string | null>(null);
    const [projectFilter, setProjectFilter] = useState<ProjectId | 'all'>('all');
    const [moduleFilter, setModuleFilter] = useState<Module | 'all'>('all');
    const [taskTypeFilter, setTaskTypeFilter] = useState<TaskType | 'all'>('all');


    // Ordenar columnas
    const sortedColumns = [...columns].sort((a, b) => a.order - b.order);

    // Filtrar tarjetas por proyecto, módulo y tipo de tarea
    const filteredCards = cards.filter(c => {
        const projectMatch = projectFilter === 'all' || c.projectId === projectFilter;
        const moduleMatch = moduleFilter === 'all' || c.module === moduleFilter;
        const typeMatch = taskTypeFilter === 'all' || c.taskType === taskTypeFilter;
        return projectMatch && moduleMatch && typeMatch;
    });


    // Handlers
    const handleCardClick = (card: RoadmapCard) => {
        router.push(`/roadmaps/${card.id}`);
    };

    const handleAddCard = (columnId: string) => {
        setCreateColumnId(columnId);
        setCreateModalOpen(true);
    };

    const handleCreateCard = async (newCard: Omit<RoadmapCard, 'id' | 'createdAt' | 'updatedAt'>) => {
        try {
            await addCard(newCard);
        } catch (err) {
            console.error('Error creating card:', err);
        }
    };

    // Drag & Drop
    const handleDragStart = (e: React.DragEvent, cardId: string) => {
        setDraggedCardId(cardId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = async (e: React.DragEvent, targetColumnId: string) => {
        e.preventDefault();
        if (!draggedCardId) return;

        try {
            await updateCard(draggedCardId, { columnId: targetColumnId });
            setDraggedCardId(null);
        } catch (err) {
            console.error('Error moving card:', err);
            setDraggedCardId(null);
        }
    };

    // Reset a datos iniciales (eliminar todas las tarjetas)
    const handleReset = async () => {
        if (confirm('¿Eliminar todas las tarjetas? Esta acción no se puede deshacer.')) {
            try {
                await Promise.all(cards.map(card => deleteCard(card.id)));
            } catch (err) {
                console.error('Error resetting cards:', err);
            }
        }
    };

    // Marcar tarea como completada (mover a columna "Cerrado")
    const handleCompleteCard = async (card: RoadmapCard) => {
        if (card.columnId === 'closed') return; // Ya está cerrada

        try {
            await updateCard(card.id, { columnId: 'closed' });
        } catch (err) {
            console.error('Error completing card:', err);
        }
    };

    // Obtener tarjetas por columna (con filtro aplicado)
    const getCardsByColumn = (columnId: string) =>
        filteredCards.filter(c => c.columnId === columnId);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-[1800px] mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Roadmap & Development Flow</h1>
                            <p className="text-sm text-gray-500 mt-1">
                                {filteredCards.length} de {cards.length} tarjetas en {columns.length} etapas
                                {projectFilter !== 'all' && ` • ${PROJECT_CONFIG[projectFilter].icon} ${PROJECT_CONFIG[projectFilter].label}`}
                                {moduleFilter !== 'all' && ` • ${MODULE_CONFIG[moduleFilter].label}`}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Filtro por Proyecto */}
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-gray-500" />
                                <select
                                    value={projectFilter}
                                    onChange={(e) => setProjectFilter(e.target.value as ProjectId | 'all')}
                                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="all">📁 Todos los proyectos</option>
                                    {PROJECTS_LIST.map((proj) => (
                                        <option key={proj} value={proj}>
                                            {PROJECT_CONFIG[proj].icon} {PROJECT_CONFIG[proj].label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Filtro por Módulo */}
                            <div className="flex items-center gap-2">
                                <select
                                    value={moduleFilter}
                                    onChange={(e) => setModuleFilter(e.target.value as Module | 'all')}
                                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="all">Todos los módulos</option>
                                    {MODULES_LIST.map((mod) => (
                                        <option key={mod} value={mod}>{MODULE_CONFIG[mod].label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Filtro por Tipo de Tarea */}
                            <div className="flex items-center gap-2">
                                <select
                                    value={taskTypeFilter}
                                    onChange={(e) => setTaskTypeFilter(e.target.value as TaskType | 'all')}
                                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="all">Todos los tipos</option>
                                    {TASK_TYPES_LIST.map((type) => (
                                        <option key={type} value={type}>
                                            {TASK_TYPE_CONFIG[type].icon} {TASK_TYPE_CONFIG[type].label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Toggle Vista */}
                            <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('kanban')}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${viewMode === 'kanban' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                    Kanban
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${viewMode === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                    Lista
                                </button>
                            </div>

                            {/* Botón Reset */}
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                title="Resetear tarjetas"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>

                            {/* Botón Nueva Tarjeta */}
                            <button
                                onClick={() => handleAddCard('backlog')}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Nueva Tarjeta
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1800px] mx-auto p-4">
                {viewMode === 'kanban' ? (
                    // Vista Kanban
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        {sortedColumns.map(column => (
                            <KanbanColumn
                                key={column.id}
                                column={column}
                                cards={getCardsByColumn(column.id)}
                                onCardClick={handleCardClick}
                                onAddCard={handleAddCard}
                                onCompleteCard={handleCompleteCard}
                                onDragStart={handleDragStart}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            />
                        ))}
                    </div>
                ) : (
                    // Vista Lista
                    <div className="space-y-4">
                        {sortedColumns.map(column => {
                            const columnCards = getCardsByColumn(column.id);
                            if (columnCards.length === 0) return null;

                            return (
                                <div key={column.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: column.color }} />
                                        <h3 className="font-semibold text-gray-800">{column.title}</h3>
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                            {columnCards.length}
                                        </span>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {columnCards.map(card => (
                                            <div
                                                key={card.id}
                                                onClick={() => handleCardClick(card)}
                                                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-4"
                                            >
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${card.priority === 'critical' ? 'bg-red-100 text-red-700' :
                                                    card.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                                                        card.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-green-100 text-green-700'
                                                    }`}>
                                                    {card.priority}
                                                </span>
                                                <span className="font-medium text-gray-900 flex-1">{card.title}</span>
                                                {card.assignee && <span className="text-sm text-gray-500">{card.assignee}</span>}
                                                {card.tags.length > 0 && (
                                                    <div className="flex gap-1">
                                                        {card.tags.slice(0, 2).map((tag, i) => (
                                                            <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                {/* Botón Completar - Solo si no está en Cerrado */}
                                                {column.id !== 'closed' && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleCompleteCard(card);
                                                        }}
                                                        className="p-1.5 rounded-full text-gray-400 
                                                            hover:bg-green-100 hover:text-green-600 
                                                            transition-all"
                                                        title="Marcar como completada"
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Modales */}
            <CreateCardModal
                isOpen={createModalOpen}
                columnId={createColumnId}
                onClose={() => setCreateModalOpen(false)}
                onCreate={handleCreateCard}
            />
        </div>
    );
}
