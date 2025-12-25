'use client';

import { useState, useEffect } from 'react';
import { RoadmapCard, ImplementationPlan } from '@/types/roadmap';
import { X } from 'lucide-react';

interface ImplementationPlanModalProps {
    isOpen: boolean;
    card: RoadmapCard;
    onClose: () => void;
    onSave: (plan: ImplementationPlan) => void;
}

export function ImplementationPlanModal({ isOpen, card, onClose, onSave }: ImplementationPlanModalProps) {
    const [goal, setGoal] = useState('');
    const [userReviewRequired, setUserReviewRequired] = useState('');
    const [proposedChanges, setProposedChanges] = useState('');
    const [verificationPlan, setVerificationPlan] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // Cargar datos existentes si hay un plan
    useEffect(() => {
        if (card.implementationPlan) {
            setGoal(card.implementationPlan.goal || '');
            setUserReviewRequired(card.implementationPlan.userReviewRequired || '');
            setProposedChanges(card.implementationPlan.proposedChanges || '');
            setVerificationPlan(card.implementationPlan.verificationPlan || '');
        }
    }, [card.implementationPlan]);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!goal.trim()) {
            alert('El objetivo es requerido');
            return;
        }

        setIsSaving(true);

        const plan: ImplementationPlan = {
            goal: goal.trim(),
            userReviewRequired: userReviewRequired.trim() || undefined,
            proposedChanges: proposedChanges.trim(),
            verificationPlan: verificationPlan.trim(),
            createdAt: card.implementationPlan?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        try {
            await onSave(plan);
            onClose();
        } catch (error) {
            console.error('Error saving plan:', error);
            alert('Error al guardar el plan');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">
                        {card.implementationPlan ? 'Editar' : 'Crear'} Plan de Implementación
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
                    {/* Objetivo */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Objetivo *
                        </label>
                        <textarea
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="¿Qué se busca lograr con este proyecto?"
                        />
                    </div>

                    {/* Revisión Requerida */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Revisión Requerida (opcional)
                        </label>
                        <textarea
                            value={userReviewRequired}
                            onChange={(e) => setUserReviewRequired(e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="¿Hay algo que requiera aprobación o revisión especial?"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Usa este campo para documentar decisiones importantes o cambios que necesitan aprobación
                        </p>
                    </div>

                    {/* Cambios Propuestos */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cambios Propuestos *
                        </label>
                        <textarea
                            value={proposedChanges}
                            onChange={(e) => setProposedChanges(e.target.value)}
                            rows={8}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="Describe los cambios que se implementarán:&#10;- Archivos a crear/modificar&#10;- Funcionalidades nuevas&#10;- Refactorizaciones&#10;- etc."
                        />
                    </div>

                    {/* Plan de Verificación */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Plan de Verificación *
                        </label>
                        <textarea
                            value={verificationPlan}
                            onChange={(e) => setVerificationPlan(e.target.value)}
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="¿Cómo se verificará que funciona?&#10;- Tests automáticos&#10;- Pruebas manuales&#10;- Validaciones&#10;- etc."
                        />
                    </div>
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
                        disabled={isSaving || !goal.trim()}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSaving ? 'Guardando...' : 'Guardar Plan'}
                    </button>
                </div>
            </div>
        </div>
    );
}
