'use client';

import { RoadmapColumn, RoadmapCard } from '@/types/roadmap';
import { KanbanCard } from './KanbanCard';
import { Plus } from 'lucide-react';

interface KanbanColumnProps {
    column: RoadmapColumn;
    cards: RoadmapCard[];
    onCardClick: (card: RoadmapCard) => void;
    onAddCard: (columnId: string) => void;
    onCompleteCard?: (card: RoadmapCard) => void;
    onDragStart: (e: React.DragEvent, cardId: string) => void;
    onDragOver: (e: React.DragEvent) => void;
    onDrop: (e: React.DragEvent, columnId: string) => void;
}

export function KanbanColumn({
    column,
    cards,
    onCardClick,
    onAddCard,
    onCompleteCard,
    onDragStart,
    onDragOver,
    onDrop,
}: KanbanColumnProps) {
    return (
        <div
            className="flex flex-col bg-gray-50 rounded-xl min-w-[300px] max-w-[300px]"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, column.id)}
        >
            {/* Header de columna */}
            <div className="p-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: column.color }}
                    />
                    <h3 className="font-semibold text-gray-800 text-sm truncate flex-1">
                        {column.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                        {cards.length}
                    </span>
                </div>
            </div>

            {/* Lista de tarjetas */}
            <div className="flex-1 p-2 space-y-2 overflow-y-auto min-h-[200px] max-h-[calc(100vh-280px)]">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        draggable
                        onDragStart={(e) => onDragStart(e, card.id)}
                        className="cursor-grab active:cursor-grabbing"
                    >
                        <KanbanCard card={card} onClick={onCardClick} onComplete={onCompleteCard} />
                    </div>
                ))}

                {/* Placeholder cuando está vacío */}
                {cards.length === 0 && (
                    <div className="text-center py-8 text-sm text-gray-400">
                        Arrastra tarjetas aquí
                    </div>
                )}
            </div>

            {/* Botón agregar */}
            <div className="p-2 border-t border-gray-200">
                <button
                    onClick={() => onAddCard(column.id)}
                    className="w-full flex items-center justify-center gap-2 p-2 text-sm text-gray-500 
                     hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Agregar tarjeta
                </button>
            </div>
        </div>
    );
}
