'use client';

import { useState } from 'react';
import { RoadmapCard, Walkthrough } from '@/types/roadmap';
import { WalkthroughModal } from '../modals/WalkthroughModal';
import { CheckCircle2, Plus, Edit } from 'lucide-react';

interface ControlTabProps {
    card: RoadmapCard;
    onUpdate: (updates: Partial<RoadmapCard>) => void;
}

export function ControlTab({ card, onUpdate }: ControlTabProps) {
    const [showWalkthroughModal, setShowWalkthroughModal] = useState(false);
    const hasWalkthrough = !!card.walkthrough;

    const handleSaveWalkthrough = async (walkthrough: Walkthrough) => {
        await onUpdate({ walkthrough });
        setShowWalkthroughModal(false);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Control y Evidencia</h2>
                    <p className="text-gray-600 mt-1">
                        Documenta lo realizado, pruebas y validación del proyecto
                    </p>
                </div>
                <button
                    onClick={() => setShowWalkthroughModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    {hasWalkthrough ? (
                        <>
                            <Edit className="w-4 h-4" />
                            Editar Walkthrough
                        </>
                    ) : (
                        <>
                            <Plus className="w-4 h-4" />
                            Crear Walkthrough
                        </>
                    )}
                </button>
            </div>

            {/* Content */}
            {hasWalkthrough ? (
                <div className="space-y-6">
                    {/* Summary */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                            Resumen
                        </h3>
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {card.walkthrough?.summary}
                        </p>
                    </div>

                    {/* Changes Made */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Cambios Realizados
                        </h3>
                        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                            {card.walkthrough?.changesMade}
                        </div>
                    </div>

                    {/* Testing */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Pruebas Realizadas
                        </h3>
                        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                            {card.walkthrough?.testing}
                        </div>
                    </div>

                    {/* Validation */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Validación
                        </h3>
                        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                            {card.walkthrough?.validation}
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                        <div className="flex items-center justify-between">
                            <span>
                                Creado: {card.walkthrough?.createdAt ? new Date(card.walkthrough.createdAt).toLocaleDateString('es-ES') : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No hay walkthrough
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Documenta lo que se hizo, las pruebas realizadas y la validación del proyecto
                    </p>
                    <button
                        onClick={() => setShowWalkthroughModal(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Crear Walkthrough
                    </button>
                </div>
            )}

            {/* Modal */}
            <WalkthroughModal
                isOpen={showWalkthroughModal}
                card={card}
                onClose={() => setShowWalkthroughModal(false)}
                onSave={handleSaveWalkthrough}
            />
        </div>
    );
}
