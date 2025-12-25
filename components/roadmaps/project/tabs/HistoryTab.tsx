'use client';

import { RoadmapCard } from '@/types/roadmap';
import { History, MessageSquare, FileText, CheckCircle2, Upload, UserPlus } from 'lucide-react';

interface HistoryTabProps {
    card: RoadmapCard;
}

export function HistoryTab({ card }: HistoryTabProps) {
    const activities = card.activity || [];

    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'comment':
                return <MessageSquare className="w-5 h-5 text-blue-600" />;
            case 'plan_created':
                return <FileText className="w-5 h-5 text-indigo-600" />;
            case 'task_completed':
                return <CheckCircle2 className="w-5 h-5 text-green-600" />;
            case 'file_upload':
                return <Upload className="w-5 h-5 text-purple-600" />;
            case 'assignment':
                return <UserPlus className="w-5 h-5 text-orange-600" />;
            default:
                return <History className="w-5 h-5 text-gray-600" />;
        }
    };

    const getActivityLabel = (type: string) => {
        switch (type) {
            case 'comment':
                return 'Comentario';
            case 'plan_created':
                return 'Plan creado';
            case 'task_completed':
                return 'Tarea completada';
            case 'file_upload':
                return 'Archivo subido';
            case 'assignment':
                return 'Asignación';
            case 'status_change':
                return 'Cambio de estado';
            default:
                return 'Actividad';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Historial</h2>
                <p className="text-gray-600 mt-1">
                    Timeline de actividad y cambios del proyecto
                </p>
            </div>

            {/* Timeline */}
            {activities.length > 0 ? (
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="space-y-6">
                        {activities.map((activity, index) => (
                            <div key={activity.id} className="flex gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        {getActivityIcon(activity.type)}
                                    </div>
                                    {index < activities.length - 1 && (
                                        <div className="w-0.5 h-full bg-gray-200 mx-auto mt-2" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {activity.user}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {getActivityLabel(activity.type)} • {new Date(activity.timestamp).toLocaleString('es-ES')}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                                        {activity.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                    <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        No hay actividad registrada
                    </h3>
                    <p className="text-gray-600">
                        La actividad del proyecto se mostrará aquí automáticamente
                    </p>
                </div>
            )}

            {/* Metadata */}
            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Información del Proyecto</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-600">Creado</p>
                        <p className="font-medium text-gray-900">
                            {new Date(card.createdAt).toLocaleDateString('es-ES')}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600">Última actualización</p>
                        <p className="font-medium text-gray-900">
                            {new Date(card.updatedAt).toLocaleDateString('es-ES')}
                        </p>
                    </div>
                    {card.createdBy && (
                        <div>
                            <p className="text-gray-600">Creado por</p>
                            <p className="font-medium text-gray-900">{card.createdBy}</p>
                        </div>
                    )}
                    {card.lastModifiedBy && (
                        <div>
                            <p className="text-gray-600">Última modificación por</p>
                            <p className="font-medium text-gray-900">{card.lastModifiedBy}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
