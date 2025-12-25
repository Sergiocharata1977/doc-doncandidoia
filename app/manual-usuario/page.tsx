import { AlertCircle, Book, Building2, Calendar, ClipboardCheck, FileText, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

export default function ManualUsuario() {
  const modules = [
    {
      icon: Users,
      title: 'RRHH',
      description: 'Gestión de personal, capacitaciones y evaluaciones de desempeño',
      href: '/manual-usuario/modulos/rrhh',
      color: 'emerald',
    },
    {
      icon: Building2,
      title: 'Procesos',
      description: 'Definición y seguimiento de procesos organizacionales',
      href: '/manual-usuario/modulos/procesos',
      color: 'blue',
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Control de documentos y registros del sistema de gestión',
      href: '/manual-usuario/modulos/documentos',
      color: 'purple',
    },
    {
      icon: ClipboardCheck,
      title: 'Auditorías',
      description: 'Planificación y ejecución de auditorías internas',
      href: '/manual-usuario/modulos/auditorias',
      color: 'orange',
    },
    {
      icon: TrendingUp,
      title: 'CRM',
      description: 'Gestión de clientes y oportunidades de negocio',
      href: '/manual-usuario/modulos/crm',
      color: 'pink',
    },
    {
      icon: AlertCircle,
      title: 'Hallazgos',
      description: 'Registro y seguimiento de no conformidades',
      href: '/manual-usuario/modulos/hallazgos',
      color: 'red',
    },
    {
      icon: Calendar,
      title: 'Calendario',
      description: 'Gestión de eventos, tareas y recordatorios',
      href: '/manual-usuario/modulos/calendario',
      color: 'indigo',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center">
              <Book className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Manual de Usuario
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Aprende a utilizar todas las funcionalidades de 9001 App para gestionar
            tu sistema de calidad ISO 9001 de manera eficiente.
          </p>
        </div>

        {/* Quick Start */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🚀 Inicio Rápido
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/manual-usuario/introduccion"
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Introducción →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ¿Qué es 9001 App y cómo empezar?
                </p>
              </Link>

              <Link
                href="/manual-usuario/roles-permisos"
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Roles y Permisos →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Entiende los diferentes roles del sistema
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Módulos del Sistema
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <Link
                  key={module.title}
                  href={module.href}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500"
                >
                  <div className={`w-12 h-12 bg-${module.color}-100 dark:bg-${module.color}-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 text-${module.color}-600 dark:text-${module.color}-400`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {module.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Consulta nuestra sección de preguntas frecuentes o casos de uso prácticos
              para resolver dudas comunes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/manual-usuario/faq"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
              >
                Preguntas Frecuentes
              </Link>
              <Link
                href="/manual-usuario/casos-uso"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-300 dark:border-gray-600 transition-colors"
              >
                Casos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
