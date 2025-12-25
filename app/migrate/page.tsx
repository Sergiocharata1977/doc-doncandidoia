'use client';

import { useState } from 'react';
import { migrateCardsToMultiProject } from '@/lib/migrate';
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

export default function MigratePage() {
    const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);

    const handleMigrate = async () => {
        setStatus('running');
        setMessage('Ejecutando migración...');

        try {
            const result = await migrateCardsToMultiProject();

            if (result.success) {
                setStatus('success');
                setMessage(result.message);
                setCount(result.count);
            } else {
                setStatus('error');
                setMessage(result.message);
            }
        } catch (error: any) {
            setStatus('error');
            setMessage(error.message || 'Error desconocido');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
                <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                    <h1 className="text-2xl font-bold text-gray-900">Migración de Datos</h1>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-orange-800">
                        <strong>⚠️ Importante:</strong> Esta migración agregará el campo <code className="bg-orange-100 px-1 rounded">projectId</code>
                        a todas las tarjetas existentes que no lo tengan, asignándolas al proyecto <strong>9001 App</strong>.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h2 className="font-semibold text-gray-900 mb-2">¿Qué hace esta migración?</h2>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Lee todas las tarjetas de Firebase</li>
                            <li>• Agrega <code className="bg-gray-200 px-1 rounded">projectId: '9001app-firebase'</code> a las que no lo tengan</li>
                            <li>• No modifica tarjetas que ya tienen projectId</li>
                            <li>• Es seguro ejecutar múltiples veces</li>
                        </ul>
                    </div>

                    <button
                        onClick={handleMigrate}
                        disabled={status === 'running'}
                        className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'running' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Ejecutando migración...
                            </>
                        ) : (
                            'Ejecutar Migración'
                        )}
                    </button>

                    {status !== 'idle' && (
                        <div className={`rounded-lg p-4 ${status === 'success' ? 'bg-green-50 border border-green-200' :
                                status === 'error' ? 'bg-red-50 border border-red-200' :
                                    'bg-blue-50 border border-blue-200'
                            }`}>
                            <div className="flex items-start gap-3">
                                {status === 'success' && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
                                {status === 'error' && <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />}
                                {status === 'running' && <Loader2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 animate-spin" />}

                                <div className="flex-1">
                                    <p className={`font-medium ${status === 'success' ? 'text-green-900' :
                                            status === 'error' ? 'text-red-900' :
                                                'text-blue-900'
                                        }`}>
                                        {message}
                                    </p>
                                    {status === 'success' && count > 0 && (
                                        <p className="text-sm text-green-700 mt-1">
                                            🔄 Recarga la página de roadmaps para ver los cambios
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <a
                        href="/roadmaps"
                        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                        ← Volver a Roadmaps
                    </a>
                </div>
            </div>
        </div>
    );
}
