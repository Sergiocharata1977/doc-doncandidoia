import { CheckCircle2, Circle, Clock, FileText, GitBranch, ListTodo } from 'lucide-react'
import Link from 'next/link'

export default function EstadoProyecto() {
  const taskCategories = [
    {
      title: 'Sprint 0 - Seguridad Crítica',
      status: 'completed',
      progress: 100,
      tasks: [
        { name: 'Protección de rutas en dashboard', status: 'completed' },
        { name: 'Middleware con verificación de cookies', status: 'completed' },
        { name: 'Manejo de cookies en Firebase Auth', status: 'completed' },
        { name: 'Sistema de ReturnUrl', status: 'completed' },
      ]
    },
    {
      title: 'Sprint 1 - Estabilización + QA Base',
      status: 'completed',
      progress: 100,
      tasks: [
        { name: 'Vinculación Usuarios ↔ Personal (RRHH)', status: 'completed' },
        { name: 'Refactor final de modales y formularios', status: 'completed' },
        { name: 'Corrección completa de TypeScript', status: 'completed' },
        { name: 'Resolver errores de Firebase Admin SDK', status: 'completed' },
        { name: 'Implementar Pipeline QA (GitHub Actions)', status: 'completed' },
        { name: 'Tests unitarios con Vitest', status: 'completed' },
        { name: 'Tests de integración', status: 'completed' },
        { name: 'Revisión de reglas de seguridad Firestore', status: 'completed' },
      ]
    },
    {
      title: 'Sprint 2 - CRM + Contexto + Analizador IA',
      status: 'in-progress',
      progress: 50,
      tasks: [
        { name: 'CRM completo con scoring y seguimiento', status: 'completed' },
        { name: 'Integración CRM ↔ Auditorías', status: 'pending' },
        { name: 'Contexto Organizacional (FODA)', status: 'completed' },
        { name: 'Contexto Organizacional (Riesgos)', status: 'pending' },
        { name: 'Analizador IA ISO 9001', status: 'pending' },
        { name: 'Generador de propuestas con IA', status: 'pending' },
        { name: 'Servicio base de Lead Management', status: 'pending' },
        { name: 'Tests E2E con Playwright', status: 'pending' },
      ]
    },
    {
      title: 'Manual de Usuario',
      status: 'in-progress',
      progress: 70,
      tasks: [
        { name: 'Módulo RRHH', status: 'completed' },
        { name: 'Módulo Procesos', status: 'completed' },
        { name: 'Módulo Documentos', status: 'completed' },
        { name: 'Módulo Auditorías', status: 'completed' },
        { name: 'Módulo CRM', status: 'completed' },
        { name: 'Módulo Hallazgos', status: 'completed' },
        { name: 'Módulo Acciones', status: 'completed' },
        { name: 'Don Cándido (Asistente IA)', status: 'completed' },
        { name: 'Página de Introducción', status: 'pending' },
        { name: 'FAQ', status: 'pending' },
        { name: 'Casos de Uso', status: 'pending' },
      ]
    },
    {
      title: 'Manual de Programador',
      status: 'completed',
      progress: 100,
      tasks: [
        { name: 'Arquitectura del Sistema', status: 'completed' },
        { name: 'Componentes', status: 'completed' },
        { name: 'APIs y Endpoints', status: 'completed' },
        { name: 'Firebase', status: 'completed' },
        { name: 'Integraciones', status: 'completed' },
        { name: 'Guías de Desarrollo', status: 'completed' },
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      default:
        return <Circle className="w-4 h-4 text-gray-400 dark:text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
            Completado
          </span>
        )
      case 'in-progress':
        return (
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
            En Progreso
          </span>
        )
      default:
        return (
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 text-xs font-semibold rounded-full">
            Pendiente
          </span>
        )
    }
  }

  const totalTasks = taskCategories.reduce((acc, cat) => acc + cat.tasks.length, 0)
  const completedTasks = taskCategories.reduce(
    (acc, cat) => acc + cat.tasks.filter(t => t.status === 'completed').length,
    0
  )
  const overallProgress = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
              <ListTodo className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Estado del Proyecto
            </h1>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Seguimiento en tiempo real del desarrollo de la documentación de 9001 App
          </p>
        </div>

        {/* Overall Progress */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Progreso General
              </h2>
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {overallProgress}%
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
              <div
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{completedTasks} de {totalTasks} tareas completadas</span>
              <span>{totalTasks - completedTasks} tareas pendientes</span>
            </div>
          </div>
        </div>

        {/* Task Categories */}
        <div className="max-w-6xl mx-auto space-y-8">
          {taskCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  {getStatusBadge(category.status)}
                </div>
                <span className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                  {category.progress}%
                </span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${category.progress}%` }}
                />
              </div>

              <div className="space-y-2">
                {category.tasks.map((task, taskIdx) => (
                  <div
                    key={taskIdx}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    {getStatusIcon(task.status)}
                    <span className={`flex-1 ${task.status === 'completed'
                        ? 'text-gray-500 dark:text-gray-500 line-through'
                        : 'text-gray-900 dark:text-white'
                      }`}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GitBranch className="w-6 h-6 mr-2 text-purple-600 dark:text-purple-400" />
              Enlaces Útiles
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/"
                className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all group"
              >
                <FileText className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Volver al Inicio
                </span>
              </Link>

              <a
                href="https://github.com/Sergiocharata1977/9001app-v8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all group"
              >
                <GitBranch className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Repositorio GitHub
                </span>
              </a>

              <Link
                href="/manual-usuario"
                className="flex items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all group"
              >
                <FileText className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Manual de Usuario
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
