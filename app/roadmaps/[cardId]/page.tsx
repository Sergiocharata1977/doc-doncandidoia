'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RoadmapCard } from '@/types/roadmap';
import { ProjectHeader } from '@/components/roadmaps/project/ProjectHeader';
import { PlanningTab } from '@/components/roadmaps/project/tabs/PlanningTab';
import { ExecutionTab } from '@/components/roadmaps/project/tabs/ExecutionTab';
import { ControlTab } from '@/components/roadmaps/project/tabs/ControlTab';
import { HistoryTab } from '@/components/roadmaps/project/tabs/HistoryTab';
import { FileText, ListChecks, CheckCircle2, FolderOpen, History, LayoutDashboard } from 'lucide-react';

export default function ProjectPage() {
    const params = useParams();
    const cardId = params.cardId as string;

    const [card, setCard] = useState<RoadmapCard | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('resumen');

    useEffect(() => {
        async function fetchCard() {
            try {
                const response = await fetch(`/api/roadmap/cards/${cardId}`);
                if (!response.ok) throw new Error('Card not found');
                const data = await response.json();
                setCard(data.card);
            } catch (error) {
                console.error('Error fetching card:', error);
            } finally {
                setLoading(false);
            }
        }

        if (cardId) {
            fetchCard();
        }
    }, [cardId]);

    const handleUpdateCard = async (updates: Partial<RoadmapCard>) => {
        if (!card) return;

        try {
            const response = await fetch(`/api/roadmap/cards/${cardId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates),
            });

            if (!response.ok) throw new Error('Failed to update card');

            const data = await response.json();
            setCard({ ...card, ...data });
        } catch (error) {
            console.error('Error updating card:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando proyecto...</p>
                </div>
            </div>
        );
    }

    if (!card) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl text-gray-600">Proyecto no encontrado</p>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'resumen', label: 'Resumen', icon: LayoutDashboard },
        { id: 'planificacion', label: 'Planificación', icon: FileText },
        { id: 'ejecucion', label: 'Ejecución', icon: ListChecks },
        { id: 'control', label: 'Control', icon: CheckCircle2 },
        { id: 'documentos', label: 'Documentos', icon: FolderOpen },
        { id: 'historial', label: 'Historial', icon: History },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <ProjectHeader card={card} />

            {/* Tabs Navigation */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex space-x-8 overflow-x-auto">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab.id
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {activeTab === 'resumen' && (
                    <div className="space-y-6">
                        {/* Descripción */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Descripción</h2>
                            <p className="text-gray-700 whitespace-pre-wrap">
                                {card.description || 'Sin descripción'}
                            </p>
                        </div>

                        {/* Métricas Rápidas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Progreso</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {card.taskList?.progress || 0}%
                                        </p>
                                    </div>
                                    <ListChecks className="w-8 h-8 text-indigo-600" />
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Tareas</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {card.taskList?.tasks.filter(t => t.status === 'completed').length || 0}/
                                            {card.taskList?.tasks.length || 0}
                                        </p>
                                    </div>
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">Documentos</p>
                                        <p className="text-2xl font-bold text-gray-900">
                                            {card.attachments?.length || 0}
                                        </p>
                                    </div>
                                    <FolderOpen className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        {/* Estado de Secciones */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Estado del Proyecto</h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <FileText className="w-5 h-5 text-gray-600" />
                                        <span className="text-gray-900">Plan de Implementación</span>
                                    </div>
                                    {card.implementationPlan ? (
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                            Completado
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full">
                                            Pendiente
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <ListChecks className="w-5 h-5 text-gray-600" />
                                        <span className="text-gray-900">Lista de Tareas</span>
                                    </div>
                                    {card.taskList ? (
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                            {card.taskList.tasks.length} tareas
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full">
                                            Pendiente
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gray-600" />
                                        <span className="text-gray-900">Walkthrough</span>
                                    </div>
                                    {card.walkthrough ? (
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                            Completado
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs font-semibold rounded-full">
                                            Pendiente
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Checklists Existentes */}
                        {(card.checklistQA.length > 0 || card.checklistIntegracion.length > 0) && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Checklists</h2>

                                {card.checklistQA.length > 0 && (
                                    <div className="mb-4">
                                        <h3 className="text-sm font-medium text-gray-700 mb-2">QA</h3>
                                        <div className="space-y-2">
                                            {card.checklistQA.map((item) => (
                                                <div key={item.id} className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.done}
                                                        readOnly
                                                        className="w-4 h-4 text-indigo-600 rounded"
                                                    />
                                                    <span className={item.done ? 'text-gray-500 line-through' : 'text-gray-900'}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {card.checklistIntegracion.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-700 mb-2">Integración</h3>
                                        <div className="space-y-2">
                                            {card.checklistIntegracion.map((item) => (
                                                <div key={item.id} className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.done}
                                                        readOnly
                                                        className="w-4 h-4 text-indigo-600 rounded"
                                                    />
                                                    <span className={item.done ? 'text-gray-500 line-through' : 'text-gray-900'}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'planificacion' && (
                    <PlanningTab card={card} onUpdate={handleUpdateCard} />
                )}

                {activeTab === 'ejecucion' && (
                    <ExecutionTab card={card} onUpdate={handleUpdateCard} />
                )}

                {activeTab === 'control' && (
                    <ControlTab card={card} onUpdate={handleUpdateCard} />
                )}

                {activeTab === 'documentos' && (
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Documentos</h2>
                        <p className="text-gray-600">Tab de documentos - En desarrollo</p>
                    </div>
                )}

                {activeTab === 'historial' && (
                    <HistoryTab card={card} />
                )}
            </div>
        </div>
    );
}
