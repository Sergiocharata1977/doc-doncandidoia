import { ArrowRight, Bot, CheckCircle2, Headphones, MessageSquare, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Integraciones() {
    const integrations = [
        {
            name: 'Claude AI (Anthropic)',
            description: 'Modelo de lenguaje para Don Cándido',
            icon: '🤖',
            features: [
                'Chat conversacional contextual',
                'Análisis de documentos',
                'Generación de contenido',
                'Respuestas basadas en datos del sistema'
            ],
            endpoint: '/api/chat',
            docs: 'https://docs.anthropic.com'
        },
        {
            name: 'ElevenLabs',
            description: 'Text-to-Speech para voz de Don Cándido',
            icon: '🔊',
            features: [
                'Síntesis de voz natural en español',
                'Voces personalizables',
                'Streaming de audio',
                'Alta calidad de pronunciación'
            ],
            endpoint: '/api/tts',
            docs: 'https://elevenlabs.io/docs'
        },
        {
            name: 'Clerk',
            description: 'Autenticación y gestión de usuarios',
            icon: '👤',
            features: [
                'Autenticación con email/password',
                'OAuth (Google, Microsoft)',
                'Gestión de sesiones',
                'Webhooks de eventos de usuario'
            ],
            endpoint: 'SDK integrado',
            docs: 'https://clerk.com/docs'
        },
        {
            name: 'Sentry',
            description: 'Monitoreo de errores y performance',
            icon: '🐛',
            features: [
                'Captura automática de errores',
                'Stack traces detallados',
                'Performance monitoring',
                'Alertas en tiempo real'
            ],
            endpoint: 'SDK integrado',
            docs: 'https://docs.sentry.io'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-programador"
                        className="inline-flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 mb-4"
                    >
                        ← Volver al Manual de Programadores
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-xl flex items-center justify-center">
                            <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Integraciones
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Servicios externos integrados en 9001 App: Claude AI, ElevenLabs, Clerk y Sentry.
                        Configuración, uso y mejores prácticas.
                    </p>
                </div>

                {/* Integrations */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Servicios Integrados
                    </h2>

                    <div className="space-y-8">
                        {integrations.map((integration, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="text-5xl">{integration.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {integration.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {integration.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm rounded-full">
                                                {integration.endpoint}
                                            </span>
                                            <a
                                                href={integration.docs}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                            >
                                                📚 Documentación
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-3">
                                    {integration.features.map((feature, featureIdx) => (
                                        <div
                                            key={featureIdx}
                                            className="flex items-start gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Claude AI Integration */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Integración con Claude AI
                    </h2>

                    <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                            app/api/chat/route.ts
                        </h3>
                        <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                            {`import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

export async function POST(request: Request) {
  const { messages, context } = await request.json()
  
  const response = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    system: \`Eres Don Cándido, un asistente experto en ISO 9001.
Contexto del sistema: \${context}\`,
    messages: messages
  })
  
  return Response.json(response)
}`}
                        </pre>
                    </div>
                </div>

                {/* ElevenLabs Integration */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Integración con ElevenLabs
                    </h2>

                    <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                            app/api/tts/route.ts
                        </h3>
                        <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                            {`export async function POST(request: Request) {
  const { text } = await request.json()
  
  const response = await fetch(
    'https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID',
    {
      method: 'POST',
      headers: {
        'xi-api-key': process.env.ELEVENLABS_API_KEY!,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    }
  )
  
  const audioBuffer = await response.arrayBuffer()
  return new Response(audioBuffer, {
    headers: { 'Content-Type': 'audio/mpeg' }
  })
}`}
                        </pre>
                    </div>
                </div>

                {/* Environment Variables */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            🔑 Variables de Entorno
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Configura las siguientes variables en tu archivo `.env.local`:
                        </p>

                        <div className="bg-gray-900 rounded-xl p-6">
                            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                                {`# Claude AI (Anthropic)
ANTHROPIC_API_KEY=sk-ant-...

# ElevenLabs
ELEVENLABS_API_KEY=...
ELEVENLABS_VOICE_ID=...

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Sentry
NEXT_PUBLIC_SENTRY_DSN=https://...
SENTRY_AUTH_TOKEN=...

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Mejores Prácticas
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Manejo de Errores
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Implementa try-catch en todas las llamadas a APIs externas y proporciona mensajes de error útiles
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Rate Limiting
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Respeta los límites de tasa de cada API y implementa reintentos con backoff exponencial
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Caché de Respuestas
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Cachea respuestas cuando sea apropiado para reducir costos y mejorar rendimiento
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Seguridad de API Keys
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Nunca expongas API keys en el cliente. Usa API Routes de Next.js para llamadas del servidor
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Monitoreo y Logging
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Usa Sentry para monitorear errores y performance de las integraciones
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
                            href="/manual-programador/apis"
                            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all group"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                                    APIs
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Endpoints y API Routes
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400" />
                        </Link>

                        <Link
                            href="/manual-usuario/modulos/don-candido"
                            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all group"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                                    Don Cándido
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Manual de usuario del asistente IA
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
