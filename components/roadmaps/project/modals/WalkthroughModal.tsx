'use client';

import { useState, useEffect } from 'react';
import { RoadmapCard, Walkthrough } from '@/types/roadmap';
import { X } from 'lucide-react';

interface WalkthroughModalProps {
    isOpen: boolean;
    card: RoadmapCard;
    onClose: () => void;
    onSave: (walkthrough: Walkthrough) => void;
}

export function WalkthroughModal({ isOpen, card, onClose, onSave }: WalkthroughModalProps) {
    const [summary, setSummary] = useState('');
    const [changesMade, setChangesMade] = useState('');
    const [testing, setTesting] = useState('');
    const [validation, setValidation] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (card.walkthrough) {
            setSummary(card.walkthrough.summary || '');
            setChangesMade(card.walkthrough.changesMade || '');
            setTesting(card.walkthrough.testing || '');
            setValidation(card.walkthrough.validation || '');
        }
    }, [card.walkthrough]);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!summary.trim()) {
            alert('El resumen es requerido');
            return;
        }

        setIsSaving(true);

        const walkthrough: Walkthrough = {
            summary: summary.trim(),
            changesMade: changesMade.trim(),
            testing: testing.trim(),
            validation: validation.trim(),
            createdAt: card.walkthrough?.createdAt || new Date().toISOString(),
        };

        try {
            await onSave(walkthrough);
            onClose();
        } catch (error) {
            console.error('Error saving walkthrough:', error);
            alert('Error al guardar el walkthrough');
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
                        {card.walkthrough ? 'Editar' : 'Crear'} Walkthrough
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
                    {/* Summary */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Resumen *
                        </label>
                        <textarea
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="Resumen breve de lo que se logró en este proyecto"
                        />
                    </div>

                    {/* Changes Made */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cambios Realizados *
                        </label>
                        <textarea
                            value={changesMade}
                            onChange={(e) => setChangesMade(e.target.value)}
                            rows={8}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="Describe los cambios implementados:&#10;- Archivos creados/modificados&#10;- Funcionalidades agregadas&#10;- Refactorizaciones realizadas&#10;- etc."
                        />
                    </div>

                    {/* Testing */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Pruebas Realizadas *
                        </label>
                        <textarea
                            value={testing}
                            onChange={(e) => setTesting(e.target.value)}
                            rows={6}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="¿Qué pruebas se realizaron?&#10;- Tests automáticos ejecutados&#10;- Pruebas manuales&#10;- Escenarios probados&#10;- etc."
                        />
                    </div>

                    {/* Validation */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Validación *
                        </label>
                        <textarea
                            value={validation}
                            onChange={(e) => setValidation(e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="¿Cómo se validó que funciona correctamente?&#10;- Resultados de tests&#10;- Verificaciones realizadas&#10;- etc."
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
                        disabled={isSaving || !summary.trim()}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSaving ? 'Guardando...' : 'Guardar Walkthrough'}
                    </button>
                </div>
            </div>
        </div>
    );
}
