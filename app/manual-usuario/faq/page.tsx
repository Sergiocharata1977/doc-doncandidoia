'use client'

import { CheckCircle2, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface FAQItem {
    question: string
    answer: string
    category: string
}

const faqs: FAQItem[] = [
    // General
    {
        category: 'General',
        question: '¿Qué es 9001 App?',
        answer: '9001 App es una plataforma web para implementar y gestionar un Sistema de Gestión de Calidad basado en ISO 9001:2015. Incluye módulos para documentos, auditorías, hallazgos, acciones correctivas, procesos y más.'
    },
    {
        category: 'General',
        question: '¿Necesito conocimientos previos de ISO 9001?',
        answer: 'No es necesario. Don Cándido, nuestro asistente de IA, te guía paso a paso explicando cada requisito de la norma y cómo cumplirlo usando el sistema.'
    },
    {
        category: 'General',
        question: '¿Cuántos usuarios pueden usar el sistema?',
        answer: 'Depende de tu plan de suscripción. Puedes agregar usuarios con diferentes roles (Administrador, Auditor, Usuario, etc.) desde el módulo de Administración.'
    },
    // Documentos
    {
        category: 'Documentos',
        question: '¿Cómo creo un nuevo documento?',
        answer: 'Ve a Documentos → Nuevo Documento. Completa el formulario con título, tipo, versión y contenido. El documento se creará en estado "Borrador" hasta que lo apruebes.'
    },
    {
        category: 'Documentos',
        question: '¿Cómo funciona el control de versiones?',
        answer: 'Cada vez que editas un documento aprobado, el sistema crea automáticamente una nueva versión. Puedes ver el historial completo de versiones y comparar cambios.'
    },
    // Auditorías
    {
        category: 'Auditorías',
        question: '¿Cómo planifico una auditoría interna?',
        answer: 'Ve a Auditorías → Nueva Auditoría. Define el alcance, fechas, auditores y áreas a auditar. El sistema te ayudará a crear el programa y checklist de auditoría.'
    },
    {
        category: 'Auditorías',
        question: '¿Qué hago cuando encuentro una no conformidad?',
        answer: 'Durante la auditoría, registra el hallazgo en el módulo de Hallazgos. Clasifícalo como No Conformidad Mayor, Menor u Observación. Luego crea una Acción Correctiva.'
    },
    // Don Cándido
    {
        category: 'Don Cándido',
        question: '¿Qué puedo preguntarle a Don Cándido?',
        answer: 'Puedes preguntar sobre: requisitos de ISO 9001, cómo usar cualquier módulo del sistema, mejores prácticas de calidad, ayuda para redactar documentos, y mucho más.'
    },
    {
        category: 'Don Cándido',
        question: '¿Don Cándido puede redactar documentos por mí?',
        answer: 'Sí, Don Cándido puede ayudarte a redactar políticas, procedimientos, instructivos y otros documentos. Solo describe lo que necesitas y te generará un borrador personalizado.'
    },
    // Procesos
    {
        category: 'Procesos',
        question: '¿Cómo defino un nuevo proceso?',
        answer: 'Ve a Procesos → Definiciones → Nuevo Proceso. Define nombre, tipo (estratégico, operativo, apoyo), responsable, entradas, salidas e indicadores.'
    },
    {
        category: 'Procesos',
        question: '¿Qué es el Kanban de procesos?',
        answer: 'Es una vista visual donde puedes gestionar las tareas de cada proceso. Arrastra las tarjetas entre etapas para actualizar el estado de cada actividad.'
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [filter, setFilter] = useState<string>('Todos')

    const categories = ['Todos', ...Array.from(new Set(faqs.map(f => f.category)))]
    const filteredFaqs = filter === 'Todos' ? faqs : faqs.filter(f => f.category === filter)

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-usuario"
                        className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 mb-4"
                    >
                        ← Volver al Manual de Usuario
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center">
                            <HelpCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Preguntas Frecuentes
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Encuentra respuestas a las dudas más comunes sobre 9001 App.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === cat
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-amber-500'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ List */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {filteredFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-start justify-between gap-4"
                            >
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                                            {faq.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                                            {faq.question}
                                        </h3>
                                    </div>
                                </div>
                                <span className="text-2xl text-gray-400">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 pl-14">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-amber-200 dark:border-amber-800 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            ¿No encontraste tu respuesta?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Pregúntale a Don Cándido directamente en el chat del sistema.
                        </p>
                        <Link
                            href="/manual-usuario/modulos/don-candido"
                            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Conocer a Don Cándido →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
