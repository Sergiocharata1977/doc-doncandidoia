import { AlertCircle, ArrowRight, Book, CheckCircle2, ClipboardList, FileText, HelpCircle, Lightbulb, Target, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const modules = [
    {
      icon: Users,
      title: 'RRHH',
      description: 'Gestión de personal, capacitaciones y competencias',
      href: '/manual-usuario/modulos/rrhh',
      color: 'emerald',
    },
    {
      icon: ClipboardList,
      title: 'Auditorías',
      description: 'Planificación y ejecución de auditorías internas',
      href: '/manual-usuario/modulos/auditorias',
      color: 'orange',
    },
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Control de documentos y registros del SGC',
      href: '/manual-usuario/modulos/documentos',
      color: 'purple',
    },
    {
      icon: AlertCircle,
      title: 'Hallazgos',
      description: 'Registro de no conformidades y observaciones',
      href: '/manual-usuario/modulos/hallazgos',
      color: 'red',
    },
    {
      icon: CheckCircle2,
      title: 'Acciones',
      description: 'Acciones correctivas y preventivas',
      href: '/manual-usuario/modulos/acciones',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Procesos',
      description: 'Definición y Kanban de procesos',
      href: '/manual-usuario/modulos/procesos',
      color: 'indigo',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 dark:bg-emerald-900 rounded-full">
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
              📚 Manual de Usuario
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            9001 App
            <span className="block text-emerald-600 dark:text-emerald-400 mt-2">
              Manual de Usuario
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Aprende a usar todas las funcionalidades para implementar y gestionar
            tu Sistema de Gestión de Calidad ISO 9001:2015.
          </p>

          <Link
            href="/manual-usuario"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group text-lg"
          >
            <Book className="w-6 h-6 mr-2" />
            Explorar Manual
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-emerald-600" />
              ¿Por dónde empezar?
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/manual-usuario/introduccion"
                className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 flex items-center gap-2">
                  🚀 Introducción
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ¿Qué es 9001 App y cómo empezar a usarlo?
                </p>
              </Link>

              <Link
                href="/manual-usuario/roles-permisos"
                className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 flex items-center gap-2">
                  👥 Roles y Permisos
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Conoce los diferentes perfiles de usuario
                </p>
              </Link>

              <Link
                href="/manual-usuario/casos-uso"
                className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 flex items-center gap-2">
                  💼 Casos de Uso
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ejemplos prácticos de situaciones comunes
                </p>
              </Link>

              <Link
                href="/manual-usuario/faq"
                className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-emerald-500 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Preguntas Frecuentes
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Respuestas a las dudas más comunes
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            📖 Guías por Módulo
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

          <div className="text-center mt-8">
            <Link
              href="/manual-usuario"
              className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-semibold"
            >
              Ver todos los módulos
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Don Cándido CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                🤖
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ¿Tienes dudas? Pregúntale a Don Cándido
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nuestro asistente de IA te ayuda con cualquier consulta sobre ISO 9001
                  y el uso del sistema.
                </p>
                <Link
                  href="/manual-usuario/modulos/don-candido"
                  className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Conocer a Don Cándido →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            9001 App - Sistema de Gestión de Calidad ISO 9001:2015
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Manual de Usuario - docs.doncandidoia.com
          </p>
        </div>
      </footer>
    </div>
  )
}
