import { ArrowRight, CheckCircle2, ClipboardList, FileCheck, Target, TrendingUp, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ModuloAcciones() {
  const phases = [
    {
      number: 1,
      title: 'Planificación de la Acción',
      description: 'Define qué se va a hacer, quién lo hará, cuándo y con qué recursos',
      color: 'blue'
    },
    {
      number: 2,
      title: 'Ejecución de la Acción',
      description: 'Implementa las acciones planificadas y documenta el proceso',
      color: 'purple'
    },
    {
      number: 3,
      title: 'Planificación del Control',
      description: 'Define cómo se verificará la efectividad de las acciones',
      color: 'indigo'
    },
    {
      number: 4,
      title: 'Ejecución del Control',
      description: 'Verifica que las acciones hayan sido efectivas y cierra el ciclo',
      color: 'emerald'
    }
  ]

  const features = [
    {
      icon: ClipboardList,
      title: 'Sistema de 4 Fases',
      description: 'Proceso completo desde la planificación hasta la verificación de efectividad'
    },
    {
      icon: Target,
      title: 'Seguimiento de Efectividad',
      description: 'Mide y verifica que las acciones realmente resuelvan el problema'
    },
    {
      icon: TrendingUp,
      title: 'Vista Kanban y Lista',
      description: 'Visualiza el estado de todas las acciones en diferentes vistas'
    },
    {
      icon: FileCheck,
      title: 'Tipos de Acción',
      description: 'Gestiona acciones correctivas, preventivas y de mejora'
    },
    {
      icon: Zap,
      title: 'Vinculación con Hallazgos',
      description: 'Relaciona acciones con hallazgos para trazabilidad completa'
    },
    {
      icon: CheckCircle2,
      title: 'Indicadores de Desempeño',
      description: 'Dashboards con métricas de cumplimiento y efectividad'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/manual-usuario"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
          >
            ← Volver al Manual de Usuario
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo de Acciones
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Gestiona acciones correctivas, preventivas y de mejora con un sistema de 4 fases
            que garantiza la efectividad desde la planificación hasta la verificación.
          </p>
        </div>

        {/* 4 Phases */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Las 4 Fases del Proceso
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-${phase.color}-500 to-${phase.color}-600 rounded-xl flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">
                      {phase.number}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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

        {/* Action Types */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tipos de Acciones
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                🔧 Acciones Correctivas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Eliminan la causa de una no conformidad detectada para evitar que vuelva a ocurrir.
                Se originan típicamente de hallazgos, auditorías o reclamos.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                🛡️ Acciones Preventivas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Eliminan la causa de una no conformidad potencial para evitar que ocurra.
                Se originan del análisis de riesgos y oportunidades.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                📈 Acciones de Mejora
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mejoran el desempeño del sistema de gestión sin estar relacionadas a no conformidades.
                Se originan de iniciativas de mejora continua.
              </p>
            </div>
          </div>
        </div>

        {/* PDCA Cycle */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🔄 Ciclo PDCA (Planificar-Hacer-Verificar-Actuar)
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              El módulo de acciones implementa el ciclo PDCA de mejora continua:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Plan (Planificar)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fase 1: Planificación de la Acción
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Do (Hacer)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fase 2: Ejecución de la Acción
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  Check (Verificar)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fase 3: Planificación del Control
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  Act (Actuar)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Fase 4: Ejecución del Control
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💡 Mejores Prácticas
            </h2>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Define acciones SMART (Específicas, Medibles, Alcanzables, Relevantes, con Tiempo definido)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Asigna responsables claros para cada acción</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Establece plazos realistas considerando los recursos disponibles</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Documenta evidencia de la implementación</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Verifica la efectividad después de un período prudencial</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Si una acción no fue efectiva, planifica nuevas acciones</span>
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
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Hallazgos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Origen de acciones correctivas
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </Link>

            <Link
              href="/manual-usuario/modulos/auditorias"
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Auditorías
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Verificación de efectividad
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
