import { ArrowLeft, ClipboardCheck, GraduationCap, UserPlus, Users } from 'lucide-react'
import Link from 'next/link'

export default function ModuloRRHH() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <Link
          href="/manual-usuario"
          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al Manual de Usuario
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo RRHH
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Gestiona el personal de tu organización, capacitaciones, evaluaciones de desempeño
            y competencias según los requisitos de ISO 9001.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>¿Qué es el Módulo RRHH?</h2>
          <p>
            El módulo de Recursos Humanos te permite gestionar todo lo relacionado con el personal
            de tu organización de manera integral, cumpliendo con los requisitos de la norma ISO 9001:2015
            en cuanto a competencia, toma de conciencia y formación.
          </p>

          <h2>Funcionalidades Principales</h2>

          <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <UserPlus className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Gestión de Personal
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Registra y administra la información de todos los empleados, incluyendo datos personales,
                puestos, departamentos y supervisores.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Capacitaciones
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Planifica, ejecuta y registra capacitaciones para el personal. Mantén un historial
                completo de formación.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <ClipboardCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Evaluaciones de Desempeño
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Evalúa el desempeño del personal periódicamente y genera planes de mejora.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Competencias
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Define competencias requeridas por puesto y evalúa el nivel de cada empleado.
              </p>
            </div>
          </div>

          <h2>Cómo Crear un Nuevo Empleado</h2>
          <ol>
            <li>Ve a <strong>RRHH → Personal</strong> en el menú lateral</li>
            <li>Haz clic en el botón <strong>"Nuevo Empleado"</strong></li>
            <li>Completa la información personal:
              <ul>
                <li>Nombres y apellidos</li>
                <li>Email y teléfono</li>
                <li>Documento de identidad</li>
                <li>Dirección</li>
              </ul>
            </li>
            <li>Asigna información laboral:
              <ul>
                <li>Puesto</li>
                <li>Departamento</li>
                <li>Supervisor</li>
                <li>Fecha de ingreso</li>
              </ul>
            </li>
            <li>Marca la opción <strong>"Crear usuario del sistema"</strong> si el empleado necesita acceso</li>
            <li>Haz clic en <strong>"Guardar"</strong></li>
          </ol>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center">
              💡 Consejo
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Si el empleado necesita acceso al sistema, marca la opción correspondiente al crear
              su registro. Esto creará automáticamente un usuario vinculado con su información.
            </p>
          </div>

          <h2>Asignar Procesos a Personal</h2>
          <p>
            Cada empleado puede ser asignado como responsable de uno o más procesos de la organización:
          </p>
          <ol>
            <li>Abre el perfil del empleado</li>
            <li>Ve a la sección <strong>"Procesos Asignados"</strong></li>
            <li>Haz clic en <strong>"Asignar Proceso"</strong></li>
            <li>Selecciona el proceso de la lista</li>
            <li>Confirma la asignación</li>
          </ol>

          <h2>Preguntas Frecuentes</h2>
          
          <h3>¿Puedo tener empleados sin acceso al sistema?</h3>
          <p>
            Sí, no todos los empleados necesitan acceso al sistema. Solo crea usuarios para aquellos
            que necesiten interactuar con la plataforma.
          </p>

          <h3>¿Cómo vinculo un usuario existente con un empleado?</h3>
          <p>
            Ve a <strong>Administración → Usuarios</strong>, busca el usuario y haz clic en
            <strong>"Asignar"</strong>. Luego selecciona el empleado de la lista.
          </p>

          <h3>¿Qué pasa si elimino un empleado?</h3>
          <p>
            El registro se marca como inactivo pero no se elimina permanentemente. Puedes reactivarlo
            en cualquier momento desde la lista de personal.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            <Link
              href="/manual-usuario"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
            >
              ← Volver al índice
            </Link>
            <Link
              href="/manual-usuario/modulos/procesos"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
            >
              Siguiente: Procesos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
