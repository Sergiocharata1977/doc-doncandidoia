'use client';

import { useState } from 'react';
import { RoadmapCard, Task, TaskList } from '@/types/roadmap';
import { TaskListModal } from '../modals/TaskListModal';
import { ListChecks, Plus, CheckCircle2, Circle, Clock } from 'lucide-react';

interface ExecutionTabProps {
    card: RoadmapCard;
    onUpdate: (updates: Partial<RoadmapCard>) => void;
}

export function ExecutionTab({ card, onUpdate }: ExecutionTabProps) {
    const [showTaskModal, setShowTaskModal] = useState(false);
    const tasks = card.taskList?.tasks || [];
    const progress = card.taskList?.progress || 0;

    const pendingTasks = tasks.filter(t => t.status === 'pending');
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress');
    const completedTasks = tasks.filter(t => t.status === 'completed');

    const handleSaveTaskList = async (taskList: TaskList) => {
        await onUpdate({ taskList });
        setShowTaskModal(false);
    };

    const getStatusIcon = (status: Task['status']) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 className="w-5 h-5 text-green-600" />;
            case 'in-progress':
                return <Clock className="w-5 h-5 text-blue-600" />;
            default:
                return <Circle className="w-5 h-5 text-gray-400" />;
        }
    };

    const getStatusLabel = (status: Task['status']) => {
        switch (status) {
            case 'completed':
                return 'Completada';
            case 'in-progress':
                return 'En Progreso';
            default:
                return 'Pendiente';
        }
    };

    const getStatusColor = (status: Task['status']) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-700';
            case 'in-progress':
                return 'bg-blue-100 text-blue-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const handleToggleTask = async (taskId: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                const newStatus: Task['status'] = task.status === 'completed' ? 'pending' : 'completed';
                return {
                    ...task,
                    status: newStatus,
                    completedAt: newStatus === 'completed' ? new Date().toISOString() : undefined,
                };
            }
            return task;
        });

        const completedCount = updatedTasks.filter(t => t.status === 'completed').length;
        const newProgress = updatedTasks.length > 0 ? Math.round((completedCount / updatedTasks.length) * 100) : 0;

        await onUpdate({
            taskList: {
                tasks: updatedTasks,
                progress: newProgress,
                updatedAt: new Date().toISOString(),
            },
        });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Ejecución</h2>
                    <p className="text-gray-600 mt-1">
                        Gestiona las tareas del proyecto y monitorea el progreso
                    </p>
                </div>
                <button
                    onClick={() => setShowTaskModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Agregar Tarea
                </button>
            </div>

            {/* Progress Bar */}
            {tasks.length > 0 && (
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progreso General</span>
                        <span className="text-2xl font-bold text-indigo-600">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                        <span>{completedTasks.length} de {tasks.length} tareas completadas</span>
                    </div>
                </div>
            )}

            {/* Tasks by Status */}
            {tasks.length > 0 ? (
                <div className="space-y-4">
                    {/* Pending Tasks */}
                    {pendingTasks.length > 0 && (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Circle className="w-5 h-5 text-gray-400" />
                                Pendientes ({pendingTasks.length})
                            </h3>
                            <div className="space-y-2">
                                {pendingTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <button
                                            onClick={() => handleToggleTask(task.id)}
                                            className="flex-shrink-0"
                                        >
                                            {getStatusIcon(task.status)}
                                        </button>
                                        <div className="flex-1">
                                            <p className="text-gray-900">{task.title}</p>
                                            {task.assignee && (
                                                <p className="text-sm text-gray-600">Asignado a: {task.assignee}</p>
                                            )}
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
                                            {getStatusLabel(task.status)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* In Progress Tasks */}
                    {inProgressTasks.length > 0 && (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-600" />
                                En Progreso ({inProgressTasks.length})
                            </h3>
                            <div className="space-y-2">
                                {inProgressTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        <button
                                            onClick={() => handleToggleTask(task.id)}
                                            className="flex-shrink-0"
                                        >
                                            {getStatusIcon(task.status)}
                                        </button>
                                        <div className="flex-1">
                                            <p className="text-gray-900">{task.title}</p>
                                            {task.assignee && (
                                                <p className="text-sm text-gray-600">Asignado a: {task.assignee}</p>
                                            )}
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
                                            {getStatusLabel(task.status)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Completed Tasks */}
                    {completedTasks.length > 0 && (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                Completadas ({completedTasks.length})
                            </h3>
                            <div className="space-y-2">
                                {completedTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                                    >
                                        <button
                                            onClick={() => handleToggleTask(task.id)}
                                            className="flex-shrink-0"
                                        >
                                            {getStatusIcon(task.status)}
                                        </button>
                                        <div className="flex-1">
                                            <p className="text-gray-900 line-through">{task.title}</p>
                                            {task.completedAt && (
                                                <p className="text-sm text-gray-600">
                                                    Completada: {new Date(task.completedAt).toLocaleDateString('es-ES')}
                                                </p>
                                            )}
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(task.status)}`}>
                                            {getStatusLabel(task.status)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                    <ListChecks className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No hay tareas
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Crea tareas para organizar el trabajo del proyecto
                    </p>
                    <button
                        onClick={() => setShowTaskModal(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Crear Primera Tarea
                    </button>
                </div>
            )}

            {/* Modal */}
            <TaskListModal
                isOpen={showTaskModal}
                card={card}
                onClose={() => setShowTaskModal(false)}
                onSave={handleSaveTaskList}
            />
        </div>
    );
}
