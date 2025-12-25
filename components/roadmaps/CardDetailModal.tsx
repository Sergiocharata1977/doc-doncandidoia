'use client';

import { useState } from 'react';
import { RoadmapCard, Priority, PRIORITY_CONFIG, ChecklistItem } from '@/types/roadmap';
import { X, Plus, Trash2, CheckSquare, Square, Calendar, User, Tag, AlertTriangle } from 'lucide-react';

interface CardDetailModalProps {
    card: RoadmapCard | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (card: RoadmapCard) => void;
    onDelete: (cardId: string) => void;
}

export function CardDetailModal({ card, isOpen, onClose, onSave, onDelete }: CardDetailModalProps) {
    const [editedCard, setEditedCard] = useState<RoadmapCard | null>(card);
    const [newTag, setNewTag] = useState('');
    const [newQAItem, setNewQAItem] = useState('');
    const [newIntItem, setNewIntItem] = useState('');

    // Sincronizar cuando cambia la tarjeta
    if (card && (!editedCard || editedCard.id !== card.id)) {
        setEditedCard(card);
    }

    if (!isOpen || !editedCard) return null;

    const handleSave = () => {
        onSave({ ...editedCard, updatedAt: new Date().toISOString() });
        onClose();
    };

    const addTag = () => {
        if (newTag.trim()) {
            setEditedCard({ ...editedCard, tags: [...editedCard.tags, newTag.trim()] });
            setNewTag('');
        }
    };

    const removeTag = (index: number) => {
        setEditedCard({ ...editedCard, tags: editedCard.tags.filter((_, i) => i !== index) });
    };

    const addChecklistItem = (type: 'qa' | 'integracion') => {
        const text = type === 'qa' ? newQAItem : newIntItem;
        if (!text.trim()) return;

        const newItem: ChecklistItem = {
            id: `${type}-${Date.now()}`,
            label: text.trim(),
            done: false,
        };

        if (type === 'qa') {
            setEditedCard({ ...editedCard, checklistQA: [...editedCard.checklistQA, newItem] });
            setNewQAItem('');
        } else {
            setEditedCard({ ...editedCard, checklistIntegracion: [...editedCard.checklistIntegracion, newItem] });
            setNewIntItem('');
        }
    };

    const toggleChecklistItem = (type: 'qa' | 'integracion', itemId: string) => {
        const field = type === 'qa' ? 'checklistQA' : 'checklistIntegracion';
        setEditedCard({
            ...editedCard,
            [field]: editedCard[field].map((item) =>
                item.id === itemId ? { ...item, done: !item.done } : item
            ),
        });
    };

    const removeChecklistItem = (type: 'qa' | 'integracion', itemId: string) => {
        const field = type === 'qa' ? 'checklistQA' : 'checklistIntegracion';
        setEditedCard({
            ...editedCard,
            [field]: editedCard[field].filter((item) => item.id !== itemId),
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-10 z-50 overflow-y-auto pb-10">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-900">Detalle de Tarjeta</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                    {/* Título */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                        <input
                            type="text"
                            value={editedCard.title}
                            onChange={(e) => setEditedCard({ ...editedCard, title: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Título de la tarjeta"
                        />
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                        <textarea
                            value={editedCard.description}
                            onChange={(e) => setEditedCard({ ...editedCard, description: e.target.value })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                            placeholder="Descripción detallada..."
                        />
                    </div>

                    {/* Grid: Prioridad, Responsable, Fecha */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                <AlertTriangle className="w-4 h-4 inline mr-1" />
                                Prioridad
                            </label>
                            <select
                                value={editedCard.priority}
                                onChange={(e) => setEditedCard({ ...editedCard, priority: e.target.value as Priority })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                                    <option key={key} value={key}>{config.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                <User className="w-4 h-4 inline mr-1" />
                                Responsable
                            </label>
                            <input
                                type="text"
                                value={editedCard.assignee || ''}
                                onChange={(e) => setEditedCard({ ...editedCard, assignee: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Nombre..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                Fecha
                            </label>
                            <input
                                type="date"
                                value={editedCard.dueDate || ''}
                                onChange={(e) => setEditedCard({ ...editedCard, dueDate: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Tag className="w-4 h-4 inline mr-1" />
                            Etiquetas
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {editedCard.tags.map((tag, idx) => (
                                <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                    {tag}
                                    <button onClick={() => removeTag(idx)} className="hover:text-red-600">
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addTag()}
                                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                                placeholder="Nueva etiqueta..."
                            />
                            <button onClick={addTag} className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Checklist QA */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Checklist QA</label>
                        <div className="space-y-2 mb-2">
                            {editedCard.checklistQA.map((item) => (
                                <div key={item.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <button onClick={() => toggleChecklistItem('qa', item.id)}>
                                        {item.done ? <CheckSquare className="w-5 h-5 text-green-600" /> : <Square className="w-5 h-5 text-gray-400" />}
                                    </button>
                                    <span className={`flex-1 text-sm ${item.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                        {item.label}
                                    </span>
                                    <button onClick={() => removeChecklistItem('qa', item.id)} className="p-1 hover:bg-red-100 rounded">
                                        <Trash2 className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newQAItem}
                                onChange={(e) => setNewQAItem(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addChecklistItem('qa')}
                                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                                placeholder="Nuevo item QA..."
                            />
                            <button onClick={() => addChecklistItem('qa')} className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Checklist Integración */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Checklist Integración</label>
                        <div className="space-y-2 mb-2">
                            {editedCard.checklistIntegracion.map((item) => (
                                <div key={item.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <button onClick={() => toggleChecklistItem('integracion', item.id)}>
                                        {item.done ? <CheckSquare className="w-5 h-5 text-blue-600" /> : <Square className="w-5 h-5 text-gray-400" />}
                                    </button>
                                    <span className={`flex-1 text-sm ${item.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                        {item.label}
                                    </span>
                                    <button onClick={() => removeChecklistItem('integracion', item.id)} className="p-1 hover:bg-red-100 rounded">
                                        <Trash2 className="w-4 h-4 text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newIntItem}
                                onChange={(e) => setNewIntItem(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addChecklistItem('integracion')}
                                className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                                placeholder="Nuevo item integración..."
                            />
                            <button onClick={() => addChecklistItem('integracion')} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-4 border-t bg-gray-50 rounded-b-xl">
                    <button
                        onClick={() => onDelete(editedCard.id)}
                        className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                    </button>
                    <div className="flex gap-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
