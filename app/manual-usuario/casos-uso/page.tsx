'use client'

import { Building2, CheckCircle2, ClipboardList, FileText, Search, Target, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

const useCases = [
    {
        icon: Building2,
        title: 'Implementar ISO 9001 desde cero',
        description: 'Tu organización quiere certificarse en ISO 9001:2015',
        color: 'emerald',
        steps: [
            'Realiza el diagnóstico inicial en Madurez Organizacional',
            'Define tu Política de Calidad en Documentos',
            'Mapea tus procesos principales',
            'Establece objetivos de calidad medibles',
            'Documenta procedimientos e instructivos',
            'Planifica y ejecuta tu primera auditoría interna'
        ],
        result: 'Estarás preparado para la auditoría de certificación'
    },
    {
        icon: Search,
        title: 'Preparar una Auditoría Interna',
        description: 'Necesitas auditar tu sistema de gestión',
        color: 'blue',
        steps: [
            'Ve a Auditorías → Nueva Auditoría',
            'Define el alcance y criterios de auditoría',
            'Selecciona las áreas y procesos a auditar',
            'Asigna auditores capacitados',
            'Crea el checklist de verificación',
            'Ejecuta la auditoría y registra hallazgos'
        ],
        result: 'Tendrás un informe completo con hallazgos y acciones'
    },
    {
        icon: ClipboardList,
        title: 'Gestionar una No Conformidad',
        description: 'Detectaste un problema que requiere acción correctiva',
        color: 'red',
        steps: [
            'Registra el hallazgo en el módulo Hallazgos',
            'Clasifica la severidad (Mayor, Menor, Observación)',
            'Identifica la causa raíz del problema',
            'Crea una Acción Correctiva en el módulo Acciones',
            'Asigna responsable y fecha límite',
            'Da seguimiento hasta el cierre efectivo'
        ],
        result: 'El problema quedará documentado y corregido'
    },
    {
        icon: FileText,
        title: 'Controlar Documentos del SGC',
        description: 'Necesitas gestionar políticas, procedimientos y registros',
        color: 'purple',
        steps: [
            'Crea el documento en estado Borrador',
            'Completa el contenido y vincula con puntos de norma',
            'Envía a revisión a los responsables',
            'Una vez aprobado, publica el documento',
            'Cuando haya cambios, crea una nueva versión',
            'Los documentos obsoletos se archivan automáticamente'
        ],
        result: 'Control total de tu documentación con trazabilidad'
    },
    {
        icon: TrendingUp,
        title: 'Seguimiento de Clientes (CRM)',
        description: 'Gestiona clientes, oportunidades y riesgo crediticio',
        color: 'pink',
        steps: [
            'Registra nuevos clientes en el CRM',
            'Clasifica por tipo, zona y vendedor',
            'Usa el Kanban para seguir el pipeline',
            'Registra historial financiero para análisis de riesgo',
            'Genera reportes de cartera',
            'Integra con WhatsApp para comunicación'
        ],
        result: 'Vista 360° de tus clientes y oportunidades'
    },
    {
        icon: Users,
        title: 'Gestionar Capacitaciones',
        description: 'Registra y da seguimiento a la formación del personal',
        color: 'orange',
        steps: [
            'Ve a RRHH → Capacitaciones',
            'Define el plan de capacitación anual',
            'Registra cada actividad de formación',
            'Asigna participantes y evaluaciones',
            'Genera certificados o constancias',
            'Mide la efectividad de las capacitaciones'
        ],
        result: 'Cumplimiento del requisito 7.2 de ISO 9001'
    }
]

export default function CasosUsoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-usuario"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 mb-4"
                    >
                        ← Volver al Manual de Usuario
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Casos de Uso
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Ejemplos prácticos de cómo usar 9001 App para resolver situaciones comunes
                        en la gestión de calidad.
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className="max-w-6xl mx-auto space-y-8">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-14 h-14 bg-${useCase.color}-100 dark:bg-${useCase.color}-900/30 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <Icon className={`w-7 h-7 text-${useCase.color}-600 dark:text-${useCase.color}-400`} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {useCase.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                            📋 Pasos a seguir:
                                        </h3>
                                        <ol className="space-y-3">
                                            {useCase.steps.map((step, stepIndex) => (
                                                <li key={stepIndex} className="flex items-start gap-3">
                                                    <span className={`flex-shrink-0 w-6 h-6 bg-${useCase.color}-100 dark:bg-${useCase.color}-900/30 rounded-full flex items-center justify-center text-xs font-bold text-${useCase.color}-600 dark:text-${useCase.color}-400`}>
                                                        {stepIndex + 1}
                                                    </span>
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                                        {step}
                                                    </span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>

                                    <div className={`bg-${useCase.color}-50 dark:bg-${useCase.color}-900/20 rounded-xl p-6 border border-${useCase.color}-200 dark:border-${useCase.color}-800`}>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                            <CheckCircle2 className={`w-5 h-5 text-${useCase.color}-600 dark:text-${useCase.color}-400`} />
                                            Resultado esperado
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {useCase.result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            ¿Tienes un caso específico?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Don Cándido puede ayudarte con cualquier situación de tu sistema de gestión.
                        </p>
                        <Link
                            href="/manual-usuario/modulos/don-candido"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Consultar a Don Cándido →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
