import React from 'react';

export default function AIFeaturesPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                Don Cándido IA: Manual de Uso Avanzado
            </h1>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">🗣️</span>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                            Control por Voz y Modo Continuo
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Don Cándido ahora cuenta con capacidades avanzadas de voz para facilitar tu trabajo en planta o cuando tienes las manos ocupadas.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold mb-3 text-lg">Características:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-sm font-medium shrink-0 mt-0.5">Nuevo</span>
                                <span className="text-gray-700 dark:text-gray-300">
                                    <strong>Reconocimiento de voz:</strong> Dicta tus mensajes y hallazgos en lugar de escribirlos.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-sm font-medium shrink-0 mt-0.5">Beta</span>
                                <span className="text-gray-700 dark:text-gray-300">
                                    <strong>Modo Conversación Continua:</strong> Activa el icono de auriculares 🎧. El sistema escuchará automáticamente después de responderte, permitiendo un diálogo fluido sin tocar la pantalla.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-sm font-medium shrink-0 mt-0.5">Pro</span>
                                <span className="text-gray-700 dark:text-gray-300">
                                    <strong>Text-to-Speech Neural:</strong> Don Cándido te responderá con voz humana.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">⚡</span>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                            Acciones Directas (AI Actions)
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        La Inteligencia Artificial ahora puede interactuar directamente con la base de datos de tu sistema de gestión ISO 9001. No solo responde preguntas, también trabaja por ti.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-bold text-lg mb-2 text-indigo-600 dark:text-indigo-400">¿Qué puedo pedirle?</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                                <li>"Crea un hallazgo sobre la rotura de la máquina X"</li>
                                <li>"Registra una no conformidad en el proceso de Ventas"</li>
                                <li>"Busca si hay incidentes relacionados con 'temperatura' la semana pasada"</li>
                                <li>"Genera un borrador de auditoría"</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="font-bold text-lg mb-2 text-rose-600 dark:text-rose-400">Seguridad y Control</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                Todas las acciones directas de la IA quedan registradas y asociadas a tu usuario.
                            </p>
                            <div className="text-xs font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded">
                                [Log] User: Create Finding...<br />
                                [Log] AI Request: create_finding({'{'}name: "Falla motor"{'}'})<br />
                                [Log] System: Created ID HAL-2024-042
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
