import { Bot, CheckCircle2, Headphones, MessageSquare, Mic, Volume2, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ModuloDonCandido() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Chat Conversacional',
      description: 'Interactúa con Claude AI para obtener respuestas contextuales sobre tu sistema de gestión'
    },
    {
      icon: Volume2,
      title: 'Síntesis de Voz',
      description: 'Escucha las respuestas con voz natural generada por ElevenLabs'
    },
    {
      icon: Mic,
      title: 'Entrada por Voz',
      description: 'Habla con Don Cándido usando reconocimiento de voz del navegador'
    },
    {
      icon: Zap,
      title: 'Modo Continuo',
      description: 'Conversación fluida sin necesidad de hacer clic entre preguntas'
    },
    {
      icon: Headphones,
      title: 'Historial de Sesiones',
      description: 'Accede a conversaciones anteriores y retoma donde lo dejaste'
    },
    {
      icon: Bot,
      title: 'Contexto del Sistema',
      description: 'Don Cándido conoce tu organización, procesos y datos del sistema'
    }
  ]

  const useCases = [
    {
      title: 'Consultas sobre ISO 9001',
      description: 'Pregunta sobre requisitos de la norma, interpretación de cláusulas y mejores prácticas',
      example: '"¿Qué requisitos debo cumplir para la cláusula 7.1.5 de ISO 9001?"'
    },
    {
      title: 'Ayuda con Procesos',
      description: 'Obtén orientación sobre cómo gestionar procesos, auditorías, hallazgos y acciones',
      example: '"¿Cómo debo planificar una auditoría interna?"'
    },
    {
      title: 'Análisis de Datos',
      description: 'Solicita análisis de tus datos de hallazgos, acciones, auditorías y más',
      example: '"¿Cuáles son las áreas con más hallazgos este trimestre?"'
    },
    {
      title: 'Redacción de Documentos',
      description: 'Pide ayuda para redactar políticas, procedimientos, instructivos y registros',
      example: '"Ayúdame a redactar una política de calidad para mi empresa"'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link
            href="/manual-usuario"
            className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-4"
          >
            ← Volver al Manual de Usuario
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Don Cándido - Asistente IA
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Tu asistente inteligente con IA de Claude (Anthropic) y voz natural de ElevenLabs.
            Obtén ayuda instantánea sobre ISO 9001, gestión de calidad y tu sistema de gestión.
          </p>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Características Principales
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all"
                >
                  <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Casos de Uso
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {useCase.description}
                </p>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-lg p-4 border border-cyan-200 dark:border-cyan-800">
                  <p className="text-sm text-cyan-800 dark:text-cyan-300 italic">
                    {useCase.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-cyan-200 dark:border-cyan-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Cómo Usar Don Cándido
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Accede al Chat
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Haz clic en el ícono de Don Cándido en la barra lateral o ve a la sección de Chat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Haz tu Pregunta
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Escribe o usa el micrófono para hacer tu consulta de forma natural
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Recibe la Respuesta
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lee la respuesta en el chat o activa la voz para escucharla
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Continúa la Conversación
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Haz preguntas de seguimiento para profundizar en el tema
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💡 Tips para Mejores Resultados
            </h2>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Sé específico en tus preguntas para obtener respuestas más precisas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Proporciona contexto cuando sea necesario (ej: "en mi empresa de manufactura...")</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Usa el modo continuo para conversaciones largas y fluidas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Revisa el historial de sesiones para retomar conversaciones anteriores</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Activa la voz si prefieres escuchar las respuestas mientras trabajas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🤖 Tecnología de IA
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Claude AI (Anthropic)
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Modelo de lenguaje avanzado que entiende contexto, razona sobre problemas complejos
                  y proporciona respuestas precisas y útiles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ElevenLabs Text-to-Speech
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Síntesis de voz de última generación que genera audio natural y expresivo
                  en español para una experiencia conversacional inmersiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
