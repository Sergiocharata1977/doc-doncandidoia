'use client'

import {
    BookOpen,
    Briefcase,
    ChevronDown,
    ChevronUp,
    ClipboardCheck,
    Compass,
    FileText,
    HelpCircle,
    Home,
    Menu,
    MessageSquare,
    Sparkles,
    Target,
    Users,
    X,
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
        ],
    },
    {
        name: 'Don Cándido IA',
        href: '/manual-usuario/modulos/don-candido',
        icon: Sparkles,
        children: [
            { name: 'Chat IA', href: '/manual-usuario/modulos/don-candido#chat', icon: MessageSquare },
            { name: 'Mi Certificación', href: '/manual-usuario/modulos/don-candido#journey', icon: Compass },
        ],
    },
    { name: 'Casos de Uso', href: '/manual-usuario/casos-uso', icon: Target },
    { name: 'FAQ', href: '/manual-usuario/faq', icon: HelpCircle },
]

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())
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
        <>
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between px-4 h-14 bg-white border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Menu className="h-6 w-6 text-gray-700" />
                    </button>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">9</span>
                        </div>
                        <span className="font-bold text-gray-900">9001 App</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Sidebar Panel */}
                    <div className="fixed left-0 top-0 h-full w-[85vw] max-w-[300px] bg-slate-800 text-white flex flex-col overflow-y-auto">
                        {/* Header */}
                        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-emerald-400">📚 Documentación</h2>
                                <p className="text-xs text-slate-400">Manual de Usuario</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-slate-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
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
                                                    className={`w-full group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${active
                                                            ? 'bg-emerald-600 text-white'
                                                            : 'text-gray-300 hover:bg-slate-700'
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
                                                    onClick={() => setIsOpen(false)}
                                                    className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${active
                                                            ? 'bg-emerald-600 text-white'
                                                            : 'text-gray-300 hover:bg-slate-700'
                                                        }`}
                                                >
                                                    <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                                    {item.name}
                                                </Link>
                                            )}

                                            {hasChildren && isExpanded && (
                                                <div className="ml-6 mt-1 space-y-1">
                                                    {item.children!.map(child => {
                                                        const isChildActive = pathname === child.href
                                                        return (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isChildActive
                                                                        ? 'bg-emerald-500 text-white'
                                                                        : 'text-gray-400 hover:bg-slate-600'
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
                    </div>
                </div>
            )}
        </>
    )
}
