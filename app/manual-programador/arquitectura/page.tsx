import { ArrowRight, CheckCircle2, Code, Database, Layers, Package, Server, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Arquitectura() {
    const techStack = [
        {
            category: 'Frontend',
            technologies: [
                { name: 'Next.js 14', description: 'Framework React con App Router', icon: '⚛️' },
                { name: 'React 18', description: 'Biblioteca UI con Server Components', icon: '⚛️' },
                { name: 'TypeScript', description: 'Tipado estático para JavaScript', icon: '📘' },
                { name: 'Tailwind CSS', description: 'Framework CSS utility-first', icon: '🎨' },
                { name: 'shadcn/ui', description: 'Componentes UI accesibles', icon: '🧩' },
            ]
        },
        {
            category: 'Backend',
            technologies: [
                { name: 'Firebase Firestore', description: 'Base de datos NoSQL en tiempo real', icon: '🔥' },
                { name: 'Firebase Storage', description: 'Almacenamiento de archivos', icon: '📦' },
                { name: 'Firebase Auth', description: 'Autenticación (con Clerk)', icon: '🔐' },
                { name: 'API Routes', description: 'Endpoints serverless de Next.js', icon: '🚀' },
            ]
        },
        {
            category: 'Servicios Externos',
            technologies: [
                { name: 'Clerk', description: 'Autenticación y gestión de usuarios', icon: '👤' },
                { name: 'Claude AI', description: 'IA conversacional (Anthropic)', icon: '🤖' },
                { name: 'ElevenLabs', description: 'Text-to-Speech', icon: '🔊' },
                { name: 'Sentry', description: 'Monitoreo de errores', icon: '🐛' },
            ]
        }
    ]

    const architecture = [
        {
            layer: 'Presentación',
            description: 'Componentes React, páginas Next.js, UI/UX',
            color: 'blue',
            items: ['Páginas (App Router)', 'Componentes React', 'Hooks personalizados', 'Context Providers']
        },
        {
            layer: 'Lógica de Negocio',
            description: 'Servicios, validaciones, transformaciones',
            color: 'purple',
            items: ['Services', 'Validators (Zod)', 'Helpers', 'Utils']
        },
        {
            layer: 'Datos',
            description: 'Firestore, caché, estado global',
            color: 'emerald',
            items: ['Firestore Collections', 'Firebase Config', 'Data Models', 'Types']
        },
        {
            layer: 'Integraciones',
            description: 'APIs externas, webhooks, servicios',
            color: 'orange',
            items: ['Clerk SDK', 'Anthropic API', 'ElevenLabs API', 'Sentry SDK']
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-programador"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
                    >
                        ← Volver al Manual de Programadores
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                            <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Arquitectura del Sistema
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Arquitectura moderna basada en Next.js 14, Firebase y TypeScript con enfoque
                        en componentes reutilizables y separación de responsabilidades.
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Stack Tecnológico
                    </h2>

                    <div className="space-y-8">
                        {techStack.map((stack, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    {stack.category}
                                </h3>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {stack.technologies.map((tech, techIdx) => (
                                        <div
                                            key={techIdx}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                                        >
                                            <div className="text-3xl">{tech.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {tech.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {tech.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Architecture Layers */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Capas de la Arquitectura
                    </h2>

                    <div className="space-y-4">
                        {architecture.map((layer, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 bg-${layer.color}-100 dark:bg-${layer.color}-900/30 rounded-xl flex items-center justify-center`}>
                                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {idx + 1}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {layer.layer}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {layer.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {layer.items.map((item, itemIdx) => (
                                                <span
                                                    key={itemIdx}
                                                    className={`px-3 py-1 bg-${layer.color}-100 dark:bg-${layer.color}-900/30 text-${layer.color}-700 dark:text-${layer.color}-400 text-sm rounded-full`}
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Folder Structure */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Estructura de Carpetas
                    </h2>

                    <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
                            {`src/
├── app/                    # App Router de Next.js
│   ├── (dashboard)/       # Rutas protegidas (layout compartido)
│   │   ├── auditorias/   # Módulo de auditorías
│   │   ├── hallazgos/    # Módulo de hallazgos
│   │   ├── acciones/     # Módulo de acciones
│   │   ├── crm/          # Módulo CRM
│   │   ├── rrhh/         # Módulo RRHH
│   │   └── ...           # Otros módulos
│   ├── api/              # API Routes
│   │   ├── chat/         # Endpoints de chat IA
│   │   ├── crm/          # Endpoints CRM
│   │   └── ...           # Otros endpoints
│   ├── layout.tsx        # Layout raíz
│   └── page.tsx          # Página principal
│
├── components/            # Componentes React
│   ├── actions/          # Componentes de acciones
│   ├── findings/         # Componentes de hallazgos
│   ├── audits/           # Componentes de auditorías
│   ├── crm/              # Componentes CRM
│   ├── rrhh/             # Componentes RRHH
│   └── ui/               # Componentes UI base (shadcn)
│
├── services/             # Lógica de negocio
│   ├── actions/          # Servicios de acciones
│   ├── findings/         # Servicios de hallazgos
│   ├── audits/           # Servicios de auditorías
│   ├── crm/              # Servicios CRM
│   └── ...               # Otros servicios
│
├── types/                # Tipos TypeScript
│   ├── actions.ts
│   ├── findings.ts
│   ├── audits.ts
│   └── ...
│
├── lib/                  # Utilidades y helpers
│   ├── firebase.ts       # Configuración Firebase
│   ├── utils.ts          # Utilidades generales
│   └── ...
│
└── data/                 # Datos estáticos y configuración
    ├── iso-points.ts     # Puntos de norma ISO 9001
    ├── crm/              # Configuración CRM
    └── ...`}
                        </pre>
                    </div>
                </div>

                {/* Design Patterns */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            🏗️ Patrones de Diseño
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Server Components por Defecto
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Uso de React Server Components para mejor rendimiento y SEO
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Separación de Responsabilidades
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Componentes UI separados de la lógica de negocio (Services)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Composición de Componentes
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Componentes pequeños y reutilizables que se componen para crear UIs complejas
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Validación con Zod
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Esquemas de validación TypeScript-first para datos de entrada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Context API para Estado Global
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Uso de React Context para compartir estado entre componentes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Pages */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Secciones Relacionadas
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/manual-programador/componentes"
                            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    Componentes
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Componentes reutilizables y hooks
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                        </Link>

                        <Link
                            href="/manual-programador/firebase"
                            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    Firebase
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Configuración y collections
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
