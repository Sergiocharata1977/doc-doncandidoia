'use client'

import { ArrowRight, Book, CheckCircle2, Target, Users } from 'lucide-react'
import Link from 'next/link'

export default function IntroduccionPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-usuario"
                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-4"
                    >
                        ← Volver al Manual de Usuario
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center">
                            <Book className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Introducción
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Bienvenido a 9001 App, tu plataforma integral para implementar y
                        gestionar un Sistema de Gestión de Calidad basado en ISO 9001:2015.
                    </p>
                </div>

                {/* What is 9001 App */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            ¿Qué es 9001 App?
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            9001 App es una plataforma web diseñada para ayudar a organizaciones de cualquier
                            tamaño a implementar, mantener y mejorar su Sistema de Gestión de Calidad (SGC)
                            según la norma ISO 9001:2015.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Target className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Certificación</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Te guía paso a paso hacia la certificación ISO 9001
                                </p>
                            </div>

                            <div className="text-center p-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Colaboración</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Todo tu equipo trabajando en un solo lugar
                                </p>
                            </div>

                            <div className="text-center p-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cumplimiento</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Control total de tus requisitos normativos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Getting Started Steps */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        🚀 Primeros Pasos
                    </h2>

                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Evalúa tu situación actual
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        Usa el módulo de <strong>Madurez Organizacional</strong> para diagnosticar
                                        el estado actual de tu sistema de gestión.
                                    </p>
                                    <Link
                                        href="/manual-usuario/modulos/procesos"
                                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 text-sm font-medium"
                                    >
                                        Ver módulo de Procesos <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Define tu documentación
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        Crea políticas, procedimientos e instructivos en el módulo de <strong>Documentos</strong>.
                                    </p>
                                    <Link
                                        href="/manual-usuario/modulos/documentos"
                                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 text-sm font-medium"
                                    >
                                        Ver módulo de Documentos <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Planifica tus auditorías
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        Programa auditorías internas para verificar el cumplimiento de tu SGC.
                                    </p>
                                    <Link
                                        href="/manual-usuario/modulos/auditorias"
                                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 text-sm font-medium"
                                    >
                                        Ver módulo de Auditorías <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Pide ayuda a Don Cándido
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                                        Usa el asistente de IA para resolver dudas sobre ISO 9001 y el uso del sistema.
                                    </p>
                                    <Link
                                        href="/manual-usuario/modulos/don-candido"
                                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 text-sm font-medium"
                                    >
                                        Ver Don Cándido <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ISO 9001 Overview */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            📋 ¿Qué es ISO 9001:2015?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            ISO 9001:2015 es la norma internacional que especifica los requisitos para un
                            Sistema de Gestión de Calidad (SGC). Ayuda a las organizaciones a:
                        </p>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>Demostrar la capacidad de proporcionar productos y servicios que cumplan requisitos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>Aumentar la satisfacción del cliente</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>Abordar riesgos y oportunidades</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>Mejorar continuamente los procesos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
