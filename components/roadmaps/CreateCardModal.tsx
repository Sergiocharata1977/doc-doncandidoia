'use client';

import { useState } from 'react';
import { RoadmapCard, Priority, Module, TaskType, ProjectId, PRIORITY_CONFIG, MODULE_CONFIG, MODULES_LIST, PROJECT_CONFIG, PROJECTS_LIST, TASK_TYPE_CONFIG, TASK_TYPES_LIST } from '@/types/roadmap';
import { X } from 'lucide-react';

interface CreateCardModalProps {
    isOpen: boolean;
    columnId: string;
    onClose: () => void;
    onCreate: (card: Omit<RoadmapCard, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export function CreateCardModal({ isOpen, columnId, onClose, onCreate }: CreateCardModalProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<Priority>('medium');
    const [projectId, setProjectId] = useState<ProjectId>('9001app-firebase');
    const [module, setModule] = useState<Module | ''>('');
    const [taskType, setTaskType] = useState<TaskType | ''>('');

    if (!isOpen) return null;

    const handleCreate = () => {
        if (!title.trim()) return;

        const newCard: Omit<RoadmapCard, 'id' | 'createdAt' | 'updatedAt'> = {
            columnId,
            projectId,
            title: title.trim(),
            description: description.trim(),
            priority,
            module: module || undefined,
            taskType: taskType || undefined,
            tags: [],
            assignee: undefined,
            dueDate: undefined,
            sprintId: undefined,
            checklistQA: [],
            checklistIntegracion: [],
        };

        onCreate(newCard);

        // Reset
        setTitle('');
        setDescription('');
        setPriority('medium');
        setProjectId('9001app-firebase');
        setModule('');
        setTaskType('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-gray-900">Nueva Tarjeta</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="¿Qué hay que hacer?"
                            autoFocus
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="Detalle adicional..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Proyecto *</label>
                        <select
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value as ProjectId)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        >
                            {PROJECTS_LIST.map((proj) => (
                                <option key={proj} value={proj}>
                                    {PROJECT_CONFIG[proj].icon} {PROJECT_CONFIG[proj].label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Prioridad</label>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value as Priority)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                                    <option key={key} value={key}>{config.label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Módulo</label>
                            <select
                                value={module}
                                onChange={(e) => setModule(e.target.value as Module | '')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Sin módulo</option>
                                {MODULES_LIST.map((mod) => (
                                    <option key={mod} value={mod}>{MODULE_CONFIG[mod].label}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Tarea</label>
                            <select
                                value={taskType}
                                onChange={(e) => setTaskType(e.target.value as TaskType | '')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Sin tipo</option>
                                {TASK_TYPES_LIST.map((type) => (
                                    <option key={type} value={type}>
                                        {TASK_TYPE_CONFIG[type].icon} {TASK_TYPE_CONFIG[type].label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-2 p-4 border-t bg-gray-50 rounded-b-xl">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleCreate}
                        disabled={!title.trim()}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Crear
                    </button>
                </div>
            </div>
        </div>
    );
}

