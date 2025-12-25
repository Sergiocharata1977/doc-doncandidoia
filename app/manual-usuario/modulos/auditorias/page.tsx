import { AlertCircle, ArrowRight, CheckCircle2, FileText, Layers, ListChecks, Search, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ModuloAuditorias() {
  const features = [
    {
      icon: Layers,
      title: 'Vista Kanban',
      description: 'Organiza las auditorías por estados: Planificada, En Curso, Completada, Cerrada'
    },
    {
      icon: FileText,
      title: 'Formularios Conversacionales',
      description: 'Crea auditorías mediante chat con IA para una experiencia más natural'
    },
    {
      icon: ListChecks,
      title: 'Checklist Personalizable',
      description: 'Define puntos de verificación específicos para cada auditoría'
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento en Tiempo Real',
      description: 'Monitorea el progreso y estado de todas las auditorías activas'
    },
    {
      icon: AlertCircle,
      title: 'Detección de Hallazgos',
      description: 'Registra hallazgos y no conformidades directamente desde la auditoría'
    },
    {
      icon: CheckCircle2,
      title: 'Informes Automáticos',
      description: 'Genera informes de auditoría con todos los detalles y hallazgos'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Planificar Auditoría',
      description: 'Define el alcance, fecha, auditores y áreas a auditar'
    },
    {
      number: '02',
      title: 'Ejecutar Auditoría',
      description: 'Completa el checklist y registra observaciones durante la auditoría'
    },
    {
      number: '03',
      title: 'Registrar Hallazgos',
      description: 'Documenta no conformidades, observaciones y oportunidades de mejora'
    },
    {
      number: '04',
      title: 'Cerrar Auditoría',
      description: 'Genera el informe final y cierra la auditoría'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/manual-usuario"
            className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-4"
          >
            ← Volver al Manual de Usuario
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
              <ListChecks className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo de Auditorías
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Planifica, ejecuta y gestiona auditorías internas de manera eficiente con vistas Kanban,
            formularios conversacionales con IA y seguimiento completo de hallazgos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Características Principales
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all"
                >
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Step by Step */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Cómo Usar el Módulo
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💡 Tips y Mejores Prácticas
            </h2>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Planifica las auditorías con al menos 2 semanas de anticipación</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Utiliza el formulario conversacional con IA para agilizar la creación</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Registra los hallazgos inmediatamente durante la auditoría</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Revisa el informe antes de cerrar la auditoría</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Usa la vista Kanban para tener una visión general del estado de todas las auditorías</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Modules */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Módulos Relacionados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/manual-usuario/modulos/hallazgos"
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  Hallazgos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gestiona no conformidades detectadas
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
            </Link>

            <Link
              href="/manual-usuario/modulos/documentos"
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                  Documentos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Consulta documentos relacionados
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
