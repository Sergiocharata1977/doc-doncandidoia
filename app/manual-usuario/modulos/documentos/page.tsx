import { Archive, CheckCircle2, FileCheck, FileText, FolderOpen, History, Shield } from 'lucide-react'
import Link from 'next/link'

export default function ModuloDocumentos() {
  const features = [
    {
      icon: FileText,
      title: 'Control de Documentos',
      description: 'Gestiona documentos del sistema de gestión (procedimientos, instructivos, formularios)'
    },
    {
      icon: History,
      title: 'Control de Versiones',
      description: 'Mantén un historial completo de revisiones y cambios en cada documento'
    },
    {
      icon: Shield,
      title: 'Relación con ISO 9001',
      description: 'Vincula documentos con puntos específicos de la norma ISO 9001'
    },
    {
      icon: FileCheck,
      title: 'Estados de Documento',
      description: 'Gestiona estados: Borrador, En Revisión, Aprobado, Obsoleto'
    },
    {
      icon: Archive,
      title: 'Archivo de Obsoletos',
      description: 'Mantén documentos obsoletos archivados para referencia histórica'
    },
    {
      icon: FolderOpen,
      title: 'Categorización',
      description: 'Organiza documentos por tipo, proceso, área o departamento'
    }
  ]

  const documentTypes = [
    {
      type: 'Manual de Calidad',
      description: 'Documento principal que describe el sistema de gestión de calidad',
      icon: '📘'
    },
    {
      type: 'Procedimientos',
      description: 'Documentos que describen cómo se realizan las actividades del SGC',
      icon: '📋'
    },
    {
      type: 'Instructivos',
      description: 'Instrucciones detalladas para tareas específicas',
      icon: '📝'
    },
    {
      type: 'Formularios',
      description: 'Plantillas para registrar información de manera estandarizada',
      icon: '📄'
    },
    {
      type: 'Registros',
      description: 'Evidencia de actividades realizadas y resultados obtenidos',
      icon: '📊'
    },
    {
      type: 'Políticas',
      description: 'Declaraciones de intención y dirección de la organización',
      icon: '🎯'
    }
  ]

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
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Módulo de Documentos
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Controla documentos y registros del sistema de gestión con versionado,
            relación con puntos de norma ISO 9001 y gestión de estados.
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
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

        {/* Document Types */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tipos de Documentos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">{doc.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {doc.type}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Document Lifecycle */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🔄 Ciclo de Vida del Documento
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Borrador
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    El documento está siendo creado o editado. No está disponible para uso general.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    En Revisión
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    El documento está siendo revisado por las personas autorizadas antes de su aprobación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Aprobado
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    El documento ha sido aprobado y está vigente para su uso en la organización.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Obsoleto
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    El documento ya no está vigente pero se mantiene archivado para referencia histórica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Version Control */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Control de Versiones
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              El sistema mantiene un historial completo de todas las versiones de cada documento:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Número de Versión
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Cada revisión incrementa automáticamente el número de versión (v1.0, v1.1, v2.0, etc.)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Descripción de Cambios
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Documenta qué cambió en cada versión para mantener trazabilidad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Fecha y Responsable
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Registra quién realizó los cambios y cuándo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Acceso a Versiones Anteriores
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Consulta versiones anteriores cuando sea necesario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              💡 Mejores Prácticas
            </h2>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Usa nombres descriptivos y códigos únicos para cada documento</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Documenta claramente los cambios en cada nueva versión</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Vincula documentos con los puntos de norma ISO 9001 correspondientes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Establece un proceso de revisión y aprobación claro</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Revisa periódicamente los documentos para mantenerlos actualizados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span>No elimines documentos obsoletos, márcalos como obsoletos para mantener el historial</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
