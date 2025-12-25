'use client';

import { useState } from 'react';
import { RoadmapCard, ImplementationPlan } from '@/types/roadmap';
import { ImplementationPlanModal } from '../modals/ImplementationPlanModal';
import { FileText, Plus, Edit } from 'lucide-react';

interface PlanningTabProps {
    card: RoadmapCard;
    onUpdate: (updates: Partial<RoadmapCard>) => void;
}

export function PlanningTab({ card, onUpdate }: PlanningTabProps) {
    const [showPlanModal, setShowPlanModal] = useState(false);
    const hasPlan = !!card.implementationPlan;

    const handleSavePlan = async (plan: ImplementationPlan) => {
        await onUpdate({ implementationPlan: plan });
        setShowPlanModal(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Plan de Implementación</h2>
                    <p className="text-gray-600 mt-1">
                        Define el objetivo, cambios propuestos y plan de verificación
                    </p>
                </div>
                <button
                    onClick={() => setShowPlanModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    {hasPlan ? (
                        <>
                            <Edit className="w-4 h-4" />
                            Editar Plan
                        </>
                    ) : (
                        <>
                            <Plus className="w-4 h-4" />
                            Crear Plan
                        </>
                    )}
                </button>
            </div>

            {/* Content */}
            {hasPlan ? (
                <div className="space-y-6">
                    {/* Objetivo */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-indigo-600" />
                            Objetivo
                        </h3>
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {card.implementationPlan?.goal}
                        </p>
                    </div>

                    {/* Revisión Requerida */}
                    {card.implementationPlan?.userReviewRequired && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-amber-900 mb-3">
                                ⚠️ Revisión Requerida
                            </h3>
                            <div className="prose prose-sm max-w-none text-amber-800">
                                {card.implementationPlan?.userReviewRequired}
                            </div>
                        </div>
                    )}

                    {/* Cambios Propuestos */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Cambios Propuestos
                        </h3>
                        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                            {card.implementationPlan?.proposedChanges}
                        </div>
                    </div>

                    {/* Plan de Verificación */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Plan de Verificación
                        </h3>
                        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                            {card.implementationPlan?.verificationPlan}
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                        <div className="flex items-center justify-between">
                            <span>
                                Creado: {card.implementationPlan?.createdAt ? new Date(card.implementationPlan.createdAt).toLocaleDateString('es-ES') : 'N/A'}
                            </span>
                            <span>
                                Última actualización: {card.implementationPlan?.updatedAt ? new Date(card.implementationPlan.updatedAt).toLocaleDateString('es-ES') : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No hay plan de implementación
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Crea un plan para documentar el objetivo, cambios propuestos y estrategia de verificación
                    </p>
                    <button
                        onClick={() => setShowPlanModal(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Crear Plan de Implementación
                    </button>
                </div>
            )}

            {/* Modal */}
            <ImplementationPlanModal
                isOpen={showPlanModal}
                card={card}
                onClose={() => setShowPlanModal(false)}
                onSave={handleSavePlan}
            />
        </div>
    );
}
