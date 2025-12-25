import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import Link from 'next/link';
import { RoadmapCard, PRIORITY_CONFIG } from '@/types/roadmap';

interface ProjectHeaderProps {
    card: RoadmapCard;
    onMoveCard?: (columnId: string) => void;
}

export function ProjectHeader({ card, onMoveCard }: ProjectHeaderProps) {
    const priorityConfig = PRIORITY_CONFIG[card.priority];

    return (
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4">
                {/* Breadcrumb */}
                <Link
                    href="/roadmaps"
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Volver al Kanban
                </Link>

                {/* Title and Priority */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityConfig.color} ${priorityConfig.bgColor}`}>
                                {priorityConfig.label}
                            </span>
                            {card.sprintId && (
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                                    Sprint {card.sprintId}
                                </span>
                            )}
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">{card.title}</h1>
                    </div>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    {card.assignee && (
                        <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{card.assignee}</span>
                        </div>
                    )}
                    {card.dueDate && (
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(card.dueDate).toLocaleDateString('es-ES')}</span>
                        </div>
                    )}
                    {card.estimatedHours && (
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{card.estimatedHours}h estimadas</span>
                        </div>
                    )}
                    {card.tags.length > 0 && (
                        <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <div className="flex gap-1">
                                {card.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
