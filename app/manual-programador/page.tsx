import { Book, Code, Database, GitBranch, Layers, Server, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ManualProgramador() {
  const sections = [
    {
      icon: Layers,
      title: 'Arquitectura',
      description: 'Stack tecnológico, estructura de carpetas y patrones de diseño',
      href: '/manual-programador/arquitectura',
      color: 'blue',
    },
    {
      icon: Code,
      title: 'Componentes',
      description: 'Componentes reutilizables, hooks y context providers',
      href: '/manual-programador/componentes',
      color: 'purple',
    },
    {
      icon: Server,
      title: 'APIs',
      description: 'Endpoints, autenticación y manejo de errores',
      href: '/manual-programador/apis',
      color: 'emerald',
    },
    {
      icon: Database,
      title: 'Firebase',
      description: 'Firestore, reglas de seguridad y Cloud Functions',
      href: '/manual-programador/firebase',
      color: 'orange',
    },
    {
      icon: Zap,
      title: 'Integraciones',
      description: 'OpenAI, ElevenLabs, Sentry y Analytics',
      href: '/manual-programador/integraciones',
      color: 'yellow',
    },
    {
      icon: GitBranch,
      title: 'Guías',
      description: 'Configuración, estándares, testing y despliegue',
      href: '/manual-programador/guias',
      color: 'pink',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Manual de Programadores
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Documentación técnica completa para desarrolladores que trabajan con 9001 App.
            Aprende sobre la arquitectura, APIs, componentes y mejores prácticas.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🛠️ Stack Tecnológico
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <div className="text-3xl mb-2">⚛️</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">Next.js 14</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <div className="text-3xl mb-2">🔥</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">Firebase</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <div className="text-3xl mb-2">📘</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">TypeScript</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">Tailwind CSS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Inicio Rápido
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Configura tu entorno de desarrollo y comienza a contribuir al proyecto.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/manual-programador/guias/configuracion"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Configuración del Entorno →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Instala dependencias y configura tu IDE
                </p>
              </Link>

              <Link
                href="/manual-programador/guias/estandares"
                className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Estándares de Código →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Convenciones y mejores prácticas
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Secciones
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                >
                  <div className={`w-12 h-12 bg-${section.color}-100 dark:bg-${section.color}-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 text-${section.color}-600 dark:text-${section.color}-400`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {section.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Resources */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Recursos Adicionales
            </h2>
            
            <div className="space-y-4">
              <a
                href="https://github.com/Sergiocharata1977/9001app-v8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
              >
                <GitBranch className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Repositorio GitHub →
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Código fuente y contribuciones
                  </div>
                </div>
              </a>

              <Link
                href="/manual-programador/apis"
                className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group"
              >
                <Book className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Referencia de API →
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Documentación completa de endpoints
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
