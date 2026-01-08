'use client'

import {
    BookOpen,
    Briefcase,
    Calendar,
    ChevronDown,
    ChevronUp,
    ClipboardCheck,
    Compass,
    FileText,
    HelpCircle,
    Home,
    MessageSquare,
    Sparkles,
    Target,
    Users,
    Zap,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface MenuItem {
    name: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children?: MenuItem[]
}

const navigation: MenuItem[] = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Introducción', href: '/manual-usuario/introduccion', icon: BookOpen },
    {
        name: 'Gestión ISO 9001',
        href: '/manual-usuario/modulos',
        icon: ClipboardCheck,
        children: [
            { name: 'Auditorías', href: '/manual-usuario/modulos/auditorias', icon: ClipboardCheck },
            { name: 'Hallazgos', href: '/manual-usuario/modulos/hallazgos', icon: Target },
            { name: 'Acciones', href: '/manual-usuario/modulos/acciones', icon: Zap },
            { name: 'Documentos', href: '/manual-usuario/modulos/documentos', icon: FileText },
            { name: 'Procesos', href: '/manual-usuario/modulos/procesos', icon: Compass },
        ],
    },
    {
        name: 'CRM',
        href: '/manual-usuario/modulos/crm',
        icon: Briefcase,
        children: [
            { name: 'Clientes', href: '/manual-usuario/modulos/crm', icon: Users },
            { name: 'Análisis de Riesgo', href: '/manual-usuario/modulos/crm#riesgo', icon: Target },
        ],
    },
    {
        name: 'RRHH',
        href: '/manual-usuario/modulos/rrhh',
        icon: Users,
        children: [
            { name: 'Personal', href: '/manual-usuario/modulos/rrhh#personal', icon: Users },
            { name: 'Capacitaciones', href: '/manual-usuario/modulos/rrhh#capacitaciones', icon: BookOpen },
            { name: 'Evaluaciones', href: '/manual-usuario/modulos/rrhh#evaluaciones', icon: Target },
            { name: 'Matriz Polivalencia', href: '/manual-usuario/modulos/rrhh#matriz', icon: Calendar },
        ],
    },
    {
        name: 'Don Cándido IA',
        href: '/manual-usuario/modulos/don-candido',
        icon: Sparkles,
        children: [
            { name: 'Chat IA', href: '/manual-usuario/modulos/don-candido#chat', icon: MessageSquare },
            { name: 'Mi Certificación', href: '/manual-usuario/modulos/don-candido#journey', icon: Compass },
            { name: 'Generador Docs', href: '/manual-usuario/modulos/don-candido#generador', icon: FileText },
        ],
    },
    { name: 'Casos de Uso', href: '/manual-usuario/casos-uso', icon: Target },
    { name: 'Roles y Permisos', href: '/manual-usuario/roles-permisos', icon: Users },
    { name: 'Preguntas Frecuentes', href: '/manual-usuario/faq', icon: HelpCircle },
]

export function Sidebar() {
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set(['Gestión ISO 9001']))
    const pathname = usePathname()

    const toggleMenu = (menuName: string) => {
        setExpandedMenus(prev => {
            const newSet = new Set(prev)
            if (newSet.has(menuName)) {
                newSet.delete(menuName)
            } else {
                newSet.add(menuName)
            }
            return newSet
        })
    }

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <aside className="hidden md:flex w-64 flex-shrink-0">
            <div className="w-full bg-slate-800 text-white h-[calc(100vh-64px)] flex flex-col overflow-y-auto">
                {/* Header */}
                <div className="p-4 border-b border-slate-700">
                    <h2 className="text-lg font-bold text-emerald-400">📚 Documentación</h2>
                    <p className="text-xs text-slate-400">Manual de Usuario</p>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    <div className="space-y-1">
                        {navigation.map(item => {
                            const active = isActive(item.href)
                            const hasChildren = item.children && item.children.length > 0
                            const isExpanded = expandedMenus.has(item.name)

                            return (
                                <div key={item.name}>
                                    {hasChildren ? (
                                        <button
                                            onClick={() => toggleMenu(item.name)}
                                            className={`w-full group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active
                                                    ? 'bg-emerald-600 text-white shadow-lg'
                                                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                                }`}
                                        >
                                            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                            <span className="flex-1 text-left">{item.name}</span>
                                            {isExpanded ? (
                                                <ChevronUp className="h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="h-4 w-4" />
                                            )}
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active
                                                    ? 'bg-emerald-600 text-white shadow-lg'
                                                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                                }`}
                                        >
                                            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                            {item.name}
                                        </Link>
                                    )}

                                    {/* Submenú */}
                                    {hasChildren && isExpanded && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {item.children!.map(child => {
                                                const isChildActive = pathname === child.href
                                                return (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className={`group flex items-center px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${isChildActive
                                                                ? 'bg-emerald-500 text-white shadow-md'
                                                                : 'text-gray-400 hover:bg-slate-600 hover:text-white'
                                                            }`}
                                                    >
                                                        <child.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                                                        {child.name}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-slate-700 text-xs text-slate-500">
                    <p>© 2026 9001 App</p>
                    <p>ISO 9001:2015 Ready</p>
                </div>
            </div>
        </aside>
    )
}
