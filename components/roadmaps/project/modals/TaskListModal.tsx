'use client';

import { useState, useEffect } from 'react';
import { RoadmapCard, Task, TaskList } from '@/types/roadmap';
import { X } from 'lucide-react';

interface TaskListModalProps {
    isOpen: boolean;
    card: RoadmapCard;
    onClose: () => void;
    onSave: (taskList: TaskList) => void;
}

export function TaskListModal({ isOpen, card, onClose, onSave }: TaskListModalProps) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (card.taskList) {
            setTasks([...card.taskList.tasks]);
        }
    }, [card.taskList]);

    if (!isOpen) return null;

    const handleAddTask = () => {
        if (!newTaskTitle.trim()) return;

        const newTask: Task = {
            id: `task_${Date.now()}`,
            title: newTaskTitle.trim(),
            status: 'pending',
        };

        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
    };

    const handleRemoveTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId));
    };

    const handleSave = async () => {
        setIsSaving(true);

        const completedCount = tasks.filter(t => t.status === 'completed').length;
        const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

        const taskList: TaskList = {
            tasks,
            progress,
            updatedAt: new Date().toISOString(),
        };

        try {
            await onSave(taskList);
            onClose();
        } catch (error) {
            console.error('Error saving tasks:', error);
            alert('Error al guardar las tareas');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                        Gestionar Tareas
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Add New Task */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Agregar Nueva Tarea
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newTaskTitle}
                                onChange={(e) => setNewTaskTitle(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                                placeholder="Título de la tarea..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                            <button
                                onClick={handleAddTask}
                                disabled={!newTaskTitle.trim()}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Agregar
                            </button>
                        </div>
                    </div>

                    {/* Task List */}
                    {tasks.length > 0 ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tareas ({tasks.length})
                            </label>
                            <div className="space-y-2">
                                {tasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group"
                                    >
                                        <div className="flex-1">
                                            <p className="text-gray-900">{task.title}</p>
                                            {task.status === 'completed' && task.completedAt && (
                                                <p className="text-xs text-gray-500">
                                                    Completada: {new Date(task.completedAt).toLocaleDateString('es-ES')}
                                                </p>
                                            )}
                                        </div>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${task.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {task.status === 'completed' ? 'Completada' :
                                                task.status === 'in-progress' ? 'En Progreso' :
                                                    'Pendiente'}
                                        </span>
                                        <button
                                            onClick={() => handleRemoveTask(task.id)}
                                            className="opacity-0 group-hover:opacity-100 p-1 text-red-600 hover:bg-red-50 rounded transition-all"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            No hay tareas. Agrega la primera tarea arriba.
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={isSaving}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving || tasks.length === 0}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSaving ? 'Guardando...' : 'Guardar Tareas'}
                    </button>
                </div>
            </div>
        </div>
    );
}
