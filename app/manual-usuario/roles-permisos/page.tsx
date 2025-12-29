'use client'

import { CheckCircle2, Shield, ShieldCheck, User, UserCog, Users } from 'lucide-react'
import Link from 'next/link'

const roles = [
    {
        icon: UserCog,
        name: 'Super Admin',
        description: 'Administrador del sistema con acceso total',
        color: 'red',
        permissions: [
            'Gestionar organizaciones',
            'Crear y eliminar usuarios',
            'Acceso a todas las funcionalidades',
            'Configuración del sistema',
            'Ver estadísticas globales',
            'Gestionar suscripciones'
        ]
    },
    {
        icon: ShieldCheck,
        name: 'Administrador',
        description: 'Administrador de la organización',
        color: 'purple',
        permissions: [
            'Gestionar usuarios de su organización',
            'Configurar módulos y permisos',
            'Aprobar documentos',
            'Crear y editar auditorías',
            'Gestionar todos los módulos',
            'Ver reportes y estadísticas'
        ]
    },
    {
        icon: Shield,
        name: 'Auditor',
        description: 'Responsable de auditorías internas',
        color: 'blue',
        permissions: [
            'Planificar y ejecutar auditorías',
            'Registrar hallazgos',
            'Crear acciones correctivas',
            'Ver documentos del SGC',
            'Generar informes de auditoría',
            'Dar seguimiento a acciones'
        ]
    },
    {
        icon: Users,
        name: 'Líder de Proceso',
        description: 'Responsable de un proceso específico',
        color: 'emerald',
        permissions: [
            'Gestionar su proceso asignado',
            'Crear y editar documentos de su área',
            'Registrar indicadores y mediciones',
            'Ver hallazgos de su proceso',
            'Ejecutar acciones asignadas',
            'Gestionar tareas del Kanban'
        ]
    },
    {
        icon: User,
        name: 'Usuario',
        description: 'Usuario básico con acceso de lectura',
        color: 'gray',
        permissions: [
            'Consultar documentos publicados',
            'Ver su perfil y capacitaciones',
            'Usar Don Cándido (chat IA)',
            'Ver noticias y comunicaciones',
            'Completar tareas asignadas',
            'Registrar evidencias'
        ]
    }
]

export default function RolesPermisosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-usuario"
                        className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4"
                    >
                        ← Volver al Manual de Usuario
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Roles y Permisos
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Conoce los diferentes roles del sistema y qué puede hacer cada uno.
                    </p>
                </div>

                {/* Roles Grid */}
                <div className="max-w-6xl mx-auto space-y-6">
                    {roles.map((role, index) => {
                        const Icon = role.icon
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    <div className="flex items-start gap-4 md:w-1/3">
                                        <div className={`w-14 h-14 bg-${role.color}-100 dark:bg-${role.color}-900/30 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <Icon className={`w-7 h-7 text-${role.color}-600 dark:text-${role.color}-400`} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {role.name}
                                            </h2>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                                {role.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:w-2/3">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                            Permisos:
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {role.permissions.map((permission, permIndex) => (
                                                <div key={permIndex} className="flex items-center gap-2">
                                                    <CheckCircle2 className={`w-4 h-4 text-${role.color}-600 dark:text-${role.color}-400 flex-shrink-0`} />
                                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                                        {permission}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Info Box */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            💡 ¿Cómo asignar roles?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Solo los usuarios con rol <strong>Administrador</strong> o <strong>Super Admin</strong> pueden
                            asignar roles a otros usuarios.
                        </p>
                        <ol className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 dark:text-purple-400">1.</span>
                                Ve a <strong>Administración → Usuarios</strong>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 dark:text-purple-400">2.</span>
                                Selecciona el usuario a modificar
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 dark:text-purple-400">3.</span>
                                Cambia el rol en el campo correspondiente
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 dark:text-purple-400">4.</span>
                                Guarda los cambios
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
