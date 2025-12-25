import { ArrowRight, Building2, CheckCircle2, GitBranch, Layers, Network, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ModuloProcesos() {
  const features = [
    {
      icon: Network,
      title: 'Mapa de Procesos',
      description: 'Visualiza la interrelación entre todos los procesos de la organización'
    },
    {
      icon: Layers,
      title: 'Jerarquía de Procesos',
      description: 'Organiza procesos estratégicos, operativos y de soporte'
    },
    {
      icon: GitBranch,
      title: 'Entradas y Salidas',
      description: 'Define claramente las entradas, salidas y recursos de cada proceso'
    },
    {
      icon: TrendingUp,
      title: 'Indicadores de Desempeño',
      description: 'Asocia KPIs a cada proceso para medir su efectividad'
    },
    {
      icon: Building2,
      title: 'Responsables y Áreas',
      description: 'Asigna responsables y vincula procesos con departamentos'
    },
    {
      icon: CheckCircle2,
      title: 'Documentación Asociada',
      description: 'Relaciona procedimientos, instructivos y registros con cada proceso'
    }
  ]

  const processTypes = [
    {
      type: 'Procesos Estratégicos',
      description: 'Procesos de dirección que establecen políticas y estrategias',
      examples: ['Planificación Estratégica', 'Revisión por la Dirección', 'Gestión de Riesgos'],
      color: 'blue'
    },
    {
      type: 'Procesos Operativos',
      description: 'Procesos que agregan valor directamente al cliente',
      examples: ['Ventas', 'Producción', 'Entrega', 'Servicio Postventa'],
      color: 'emerald'
    },
    {
      type: 'Procesos de Soporte',
      description: 'Procesos que dan apoyo a los procesos operativos',
      examples: ['RRHH', 'Compras', 'Mantenimiento', 'Sistemas de Información'],
      color: 'purple'
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
              <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo de Procesos
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Define y gestiona los procesos organizacionales con mapas de procesos, indicadores
            de desempeño y documentación asociada según el enfoque de procesos de ISO 9001.
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
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

        {/* Process Types */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tipos de Procesos
          </h2>
          
          <div className="space-y-6">
            {processTypes.map((processType, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-3 h-3 bg-${processType.color}-500 rounded-full mt-2`}></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {processType.type}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {processType.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {processType.examples.map((example, exIdx) => (
                        <span
                          key={exIdx}
                          className={`px-3 py-1 bg-${processType.color}-100 dark:bg-${processType.color}-900/30 text-${processType.color}-700 dark:text-${processType.color}-400 text-sm rounded-full`}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Approach */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🔄 Enfoque Basado en Procesos (ISO 9001)
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              ISO 9001 requiere que las organizaciones adopten un enfoque basado en procesos.
              Esto significa:
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Identificar Procesos
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Determina los procesos necesarios para el sistema de gestión de calidad
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Definir Secuencia e Interacción
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Establece cómo los procesos se relacionan entre sí
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Determinar Criterios y Métodos
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Define cómo asegurar que los procesos sean eficaces
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Asegurar Recursos
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Garantiza la disponibilidad de recursos e información necesarios
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Monitorear y Medir
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Realiza seguimiento y medición de los procesos
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Implementar Mejoras
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Toma acciones para lograr los resultados planificados y la mejora continua
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Elements */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Elementos de un Proceso
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Entradas (Inputs)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Información, materiales o recursos que ingresan al proceso
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Actividades
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Conjunto de tareas que transforman las entradas en salidas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Salidas (Outputs)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Productos, servicios o información resultante del proceso
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Recursos
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Personal, equipos, infraestructura necesarios para ejecutar el proceso
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Indicadores
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Métricas para medir el desempeño y efectividad del proceso
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Responsable
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Persona o área responsable de la gestión del proceso
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
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Mantén el mapa de procesos actualizado y visible para toda la organización</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Define claramente las interfaces entre procesos (salida de uno = entrada de otro)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Asigna indicadores SMART a cada proceso para medir su desempeño</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Revisa periódicamente los procesos para identificar oportunidades de mejora</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Vincula cada proceso con su documentación (procedimientos, instructivos, registros)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Involucra a los responsables de proceso en la mejora continua</span>
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
              href="/manual-usuario/modulos/documentos"
              className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Documentos
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Procedimientos asociados a procesos
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
                  Audita la efectividad de procesos
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
