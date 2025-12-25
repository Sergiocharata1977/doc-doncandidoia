import { BarChart3, CheckCircle2, Filter, Kanban, TrendingUp, UserPlus, Users } from 'lucide-react'
import Link from 'next/link'

export default function ModuloCRM() {
  const features = [
    {
      icon: Users,
      title: 'Gestión de Clientes',
      description: 'Base de datos completa de clientes con información de contacto y detalles comerciales'
    },
    {
      icon: TrendingUp,
      title: 'Pipeline de Ventas',
      description: 'Visualiza oportunidades en diferentes etapas del proceso de venta'
    },
    {
      icon: BarChart3,
      title: 'Sistema de Scoring',
      description: 'Evalúa y califica clientes según criterios personalizables'
    },
    {
      icon: Kanban,
      title: 'Vista Kanban',
      description: 'Organiza oportunidades de negocio en un tablero visual por estados'
    },
    {
      icon: Filter,
      title: 'Filtros Avanzados',
      description: 'Busca y filtra clientes por múltiples criterios'
    },
    {
      icon: UserPlus,
      title: 'Seguimiento de Interacciones',
      description: 'Registra llamadas, reuniones, emails y otras interacciones con clientes'
    }
  ]

  const stages = [
    {
      name: 'Lead',
      description: 'Cliente potencial identificado',
      color: 'gray'
    },
    {
      name: 'Contactado',
      description: 'Primer contacto realizado',
      color: 'blue'
    },
    {
      name: 'Calificado',
      description: 'Lead evaluado y calificado',
      color: 'purple'
    },
    {
      name: 'Propuesta',
      description: 'Propuesta comercial enviada',
      color: 'yellow'
    },
    {
      name: 'Negociación',
      description: 'En proceso de negociación',
      color: 'orange'
    },
    {
      name: 'Ganado',
      description: 'Oportunidad cerrada exitosamente',
      color: 'emerald'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/manual-usuario"
            className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 mb-4"
          >
            ← Volver al Manual de Usuario
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo CRM
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Gestiona clientes y oportunidades de negocio con un sistema CRM completo que incluye
            scoring, pipeline de ventas y seguimiento de interacciones.
          </p>
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-pink-500 dark:hover:border-pink-500 transition-all"
                >
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
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

        {/* Sales Pipeline */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Pipeline de Ventas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 bg-${stage.color}-500 rounded-full`}></div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scoring System */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-pink-200 dark:border-pink-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Sistema de Scoring
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              El sistema de scoring te permite evaluar y calificar clientes según criterios personalizables:
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Criterios de Evaluación
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Define tus propios criterios (ej: tamaño de empresa, presupuesto, urgencia, fit con producto)
                  y asigna pesos a cada uno.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Calificación Automática
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  El sistema calcula automáticamente un score total basado en las respuestas a cada criterio.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Priorización de Leads
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Identifica rápidamente los leads más prometedores para enfocar tus esfuerzos de venta.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Cómo Usar el Módulo
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Crear Cliente
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Registra un nuevo cliente con información básica (nombre, contacto, empresa, etc.)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Evaluar con Scoring
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completa el formulario de scoring para calificar al cliente según tus criterios
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Gestionar en Kanban
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mueve las oportunidades por las diferentes etapas del pipeline de ventas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Registrar Interacciones
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Documenta todas las comunicaciones y reuniones con el cliente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💡 Mejores Prácticas
            </h2>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                <span>Actualiza el estado de las oportunidades regularmente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                <span>Registra todas las interacciones para mantener un historial completo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                <span>Usa el scoring para priorizar tus esfuerzos en los leads más prometedores</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                <span>Revisa el pipeline semanalmente para identificar cuellos de botella</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                <span>Personaliza los criterios de scoring según tu industria y modelo de negocio</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
