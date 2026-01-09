import {
  BarChart3,
  CheckCircle2,
  CloudOff,
  FileText,
  Filter,
  Globe,
  Kanban,
  MapPin,
  Smartphone,
  TrendingUp,
  UserPlus,
  Users,
  Wifi
} from 'lucide-react'
import Link from 'next/link'

export default function ModuloCRM() {
  const comparison = [
    {
      feature: 'Objetivo Principal',
      crm: 'Gestión Estratégica, Análisis y Administración',
      app: 'Gestión Táctica, Visitas en Campo y Toma de Pedidos'
    },
    {
      feature: 'Usuario Principal',
      crm: 'Gerentes Comerciales, Administrativos de Ventas',
      app: 'Vendedores de Calle, Preventistas'
    },
    {
      feature: 'Dispositivo Ideal',
      crm: 'PC / Notebook (Escritorio)',
      app: 'Celular / Tablet (Móvil)'
    },
    {
      feature: 'Conectividad',
      crm: 'Requiere Internet (Online)',
      app: 'Funciona Sin Internet (Offline First)'
    },
    {
      feature: 'Funciones Clave',
      crm: 'Scoring, Nosis, Pipeline, Métricas',
      app: 'GPS, Fotos, Audios, Checklists'
    }
  ]

  const scoringRules = [
    { category: 'A', score: '8.00 - 10.0', label: 'Premium', color: 'bg-emerald-100 text-emerald-800' },
    { category: 'B', score: '6.00 - 7.99', label: 'Confiable', color: 'bg-blue-100 text-blue-800' },
    { category: 'C', score: '4.00 - 5.99', label: 'Moderado', color: 'bg-yellow-100 text-yellow-800' },
    { category: 'D', score: '2.00 - 3.99', label: 'Alto Riesgo', color: 'bg-orange-100 text-orange-800' },
    { category: 'E', score: '0.00 - 1.99', label: 'Crítico', color: 'bg-red-100 text-red-800' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <Link
            href="/manual-usuario"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4"
          >
            ← Volver al Manual de Usuario
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              CRM y App de Vendedores
            </h1>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Una solución integral dividida en dos grandes herramientas: el <strong>CRM de Gestión</strong> para administración estratégica y la <strong>App de Vendedores</strong> para la operación en campo.
          </p>
        </div>

        {/* COMPARATIVA CLAVE */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Diferencias: CRM vs App Vendedores
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider">Característica</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">🏢 CRM de Gestión</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-600 uppercase tracking-wider">📱 App Vendedores</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.crm}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{row.app}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">

          {/* CRM DETAILS */}
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">🏢 Módulo CRM</h2>
              <p className="text-gray-600 dark:text-gray-400">El cerebro de la operación comercial.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Kanban className="w-5 h-5 text-blue-500" /> Pipeline y Ventas
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> <span><strong>Vista Kanban:</strong> Mueve tarjetas de clientes por etapas (Prospecto → Negociación → Cierre).</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> <span><strong>Scoring Crediticio:</strong> Evaluación financiera automática (A-E).</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" /> <span><strong>Integración Nosis:</strong> Consulta de bureau de crédito y situación BCRA en 1 click.</span></li>
              </ul>
            </div>

            {/* SCORING SYSTEM */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" /> Scoring y Riesgo
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                El sistema calcula un puntaje del 0 al 10 basado en capacidad de pago, patrimonio y comportamiento histórico.
              </p>
              <div className="space-y-2">
                {scoringRules.map((rule, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${rule.color}`}>{rule.category}</span>
                    <span className="text-sm font-mono text-gray-600 dark:text-gray-300">{rule.score}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{rule.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* APP VENDEDOR DETAILS */}
          <div className="space-y-8">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">📱 App Vendedores</h2>
              <p className="text-gray-600 dark:text-gray-400">La herramienta de trabajo en la calle.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CloudOff className="w-5 h-5 text-emerald-500" /> Offline First
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Diseñada para zonas con mala señal. El vendedor puede trabajar todo el día sin internet y sincronizar cuando vuelva a tener conexión.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  <Wifi className="w-4 h-4" /> Sync Automático
                </div>
                <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <FileText className="w-4 h-4" /> Base Local
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-500" /> Funciones de Campo
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> <span><strong>Geolocalización:</strong> Registra ubicación GPS al iniciar y finalizar visita.</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> <span><strong>Evidencia Multimedia:</strong> Toma fotos y graba audios de la visita directamente en la app.</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> <span><strong>Checklists:</strong> Formularios de relevamiento configurables por tipo de visita.</span></li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-xl p-6 border border-emerald-100 dark:border-emerald-800 text-sm">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🔄 Sincronización Inteligente</h4>
              <p className="text-emerald-700 dark:text-emerald-400">
                Los datos críticos (pedidos, visitas) se sincronizan con prioridad alta. Las evidencias pesadas (fotos, audios) se suben en segundo plano para no bloquear el trabajo del vendedor.
              </p>
            </div>
          </div>
        </div>

        {/* TIPS SECTION */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💡 Casos de Uso Recomendados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-600 mb-2">Usar el CRM Web cuando...</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>Estás en la oficina planificando la semana.</li>
                  <li>Necesitas analizar el riesgo crediticio de un cliente nuevo.</li>
                  <li>Quieres ver métricas globales de venta.</li>
                  <li>Tienes que autorizar un pedido bloqueado.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-emerald-600 mb-2">Usar la App Móvil cuando...</h4>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                  <li>Estás visitando a un cliente en su local o campo.</li>
                  <li>Necesitas tomar una foto de la fachada o stock.</li>
                  <li>No tienes señal de celular pero debes registrar la visita.</li>
                  <li>Quieres ver tu ruta del día y próximos clientes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
