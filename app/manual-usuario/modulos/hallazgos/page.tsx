import { AlertTriangle, ArrowRight, CheckCircle2, Clock, FileSearch, ListChecks, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ModuloHallazgos() {
  const phases = [
    {
      number: 1,
      title: 'Registro del Hallazgo',
      description: 'Documenta la no conformidad detectada con todos los detalles necesarios',
      color: 'red'
    },
    {
      number: 2,
      title: 'Planificación de Acción Inmediata',
      description: 'Define las acciones inmediatas para contener el problema',
      color: 'orange'
    },
    {
      number: 3,
      title: 'Ejecución de Acción Inmediata',
      description: 'Implementa las acciones de contención planificadas',
      color: 'yellow'
    },
    {
      number: 4,
      title: 'Análisis de Causa Raíz',
      description: 'Investiga y determina las causas fundamentales del hallazgo',
      color: 'emerald'
    }
  ]

  const features = [
    {
      icon: ListChecks,
      title: 'Sistema de 4 Fases',
      description: 'Proceso estructurado desde el registro hasta el análisis de causa raíz'
    },
    {
      icon: TrendingUp,
      title: 'Vista Kanban',
      description: 'Visualiza el estado de todos los hallazgos en un tablero interactivo'
    },
    {
      icon: FileSearch,
      title: 'Vista Lista',
      description: 'Consulta y filtra hallazgos con búsqueda avanzada'
    },
    {
      icon: Target,
      title: 'Estadísticas en Tiempo Real',
      description: 'Dashboards con métricas y KPIs de hallazgos'
    },
    {
      icon: Clock,
      title: 'Seguimiento de Plazos',
      description: 'Control de fechas límite y alertas de vencimiento'
    },
    {
      icon: CheckCircle2,
      title: 'Trazabilidad Completa',
      description: 'Historial de cambios y auditoría de todas las acciones'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/manual-usuario"
            className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mb-4"
          >
            ← Volver al Manual de Usuario
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo de Hallazgos
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Gestiona no conformidades y hallazgos con un sistema de 4 fases que garantiza
            el tratamiento adecuado desde el registro hasta el análisis de causa raíz.
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
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-all"
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
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
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

        {/* Workflow */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🔄 Flujo de Trabajo
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Detectar y Registrar
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Identifica la no conformidad y regístrala con todos los detalles (qué, dónde, cuándo, quién)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Contener el Problema
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Planifica y ejecuta acciones inmediatas para evitar que el problema se propague
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Analizar Causas
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Investiga las causas raíz utilizando herramientas como 5 Por Qués o Diagrama de Ishikawa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Implementar Solución
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crea acciones correctivas para eliminar las causas raíz (ver módulo de Acciones)
                  </p>
                </div>
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
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>Registra los hallazgos lo más pronto posible después de detectarlos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>Incluye evidencia fotográfica cuando sea posible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>Define plazos realistas para las acciones inmediatas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>Involucra a las personas responsables del área afectada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>Utiliza herramientas de análisis de causa raíz (5 Por Qués, Ishikawa, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span>Vincula el hallazgo con acciones correctivas para dar seguimiento completo</span>
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
              href="/manual-usuario/modulos/acciones"
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400">
                  Acciones
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implementa acciones correctivas
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
            </Link>

            <Link
              href="/manual-usuario/modulos/auditorias"
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-red-600 dark:group-hover:text-red-400">
                  Auditorías
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Origen común de hallazgos
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
