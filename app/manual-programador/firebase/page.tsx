import { ArrowRight, CheckCircle2, Database, FileCode, Lock, Server, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Firebase() {
    const collections = [
        {
            name: 'actions',
            description: 'Acciones correctivas, preventivas y de mejora',
            fields: ['id', 'type', 'title', 'description', 'phase', 'status', 'responsibleId', 'dueDate', 'createdAt']
        },
        {
            name: 'findings',
            description: 'Hallazgos y no conformidades',
            fields: ['id', 'title', 'description', 'phase', 'severity', 'areaId', 'auditId', 'createdAt']
        },
        {
            name: 'audits',
            description: 'Auditorías internas',
            fields: ['id', 'title', 'type', 'status', 'auditorId', 'auditedArea', 'scheduledDate', 'createdAt']
        },
        {
            name: 'documents',
            description: 'Documentos del sistema de gestión',
            fields: ['id', 'code', 'title', 'type', 'version', 'status', 'isoPoints', 'createdAt']
        },
        {
            name: 'users',
            description: 'Usuarios del sistema',
            fields: ['id', 'email', 'name', 'role', 'departmentId', 'personnelId', 'createdAt']
        },
        {
            name: 'chat_sessions',
            description: 'Sesiones de chat con Don Cándido',
            fields: ['id', 'userId', 'title', 'messages', 'createdAt', 'updatedAt']
        },
        {
            name: 'crm_clients',
            description: 'Clientes CRM',
            fields: ['id', 'name', 'email', 'company', 'stage', 'score', 'createdAt']
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <Link
                        href="/manual-programador"
                        className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 mb-4"
                    >
                        ← Volver al Manual de Programadores
                    </Link>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                            <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Firebase
                        </h1>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Configuración de Firebase, estructura de Firestore, reglas de seguridad
                        y mejores prácticas para trabajar con la base de datos.
                    </p>
                </div>

                {/* Firestore Collections */}
                <div className="max-w-6xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Firestore Collections
                    </h2>

                    <div className="space-y-4">
                        {collections.map((collection, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                                        <Database className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {collection.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {collection.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {collection.fields.map((field, fieldIdx) => (
                                                <span
                                                    key={fieldIdx}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-mono rounded"
                                                >
                                                    {field}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Configuration */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Configuración
                    </h2>

                    <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                            lib/firebase.ts
                        </h3>
                        <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                            {`import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)`}
                        </pre>
                    </div>
                </div>

                {/* Security Rules */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Lock className="w-6 h-6 mr-2 text-orange-600 dark:text-orange-400" />
                            Reglas de Seguridad
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Las reglas de seguridad de Firestore controlan el acceso a los datos:
                        </p>

                        <div className="bg-gray-900 rounded-xl p-6">
                            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                                {`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return request.auth.uid == userId;
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }
    
    // Actions collection
    match /actions/{actionId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated();
    }
    
    // Findings collection
    match /findings/{findingId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated();
    }
    
    // Audits collection
    match /audits/{auditId} {
      allow read: if isAuthenticated();
      allow create: if isAuthenticated();
      allow update, delete: if isAuthenticated();
    }
  }
}`}
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
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Usa Índices Compuestos
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Crea índices compuestos para queries que filtran por múltiples campos
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Limita el Tamaño de Documentos
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Mantén los documentos bajo 1MB. Usa subcolecciones para datos relacionados grandes
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Usa Batch Writes
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Agrupa múltiples operaciones de escritura en un batch para atomicidad
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Implementa Paginación
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Usa `limit()` y `startAfter()` para paginar resultados grandes
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Valida Datos en el Cliente y Servidor
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Usa Zod para validar en el cliente y reglas de seguridad en el servidor
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        Usa Timestamps del Servidor
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Usa `serverTimestamp()` para fechas consistentes entre clientes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Examples */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Ejemplos de Código
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                                Crear un Documento
                            </h3>
                            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                                {`import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

async function createFinding(data) {
  const findingRef = await addDoc(collection(db, 'findings'), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  })
  return findingRef.id
}`}
                            </pre>
                        </div>

                        <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                                Consultar Documentos
                            </h3>
                            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                                {`import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'

async function getActiveFindings() {
  const q = query(
    collection(db, 'findings'),
    where('status', '==', 'active'),
    orderBy('createdAt', 'desc'),
    limit(10)
  )
  
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}`}
                            </pre>
                        </div>

                        <div className="bg-gray-900 dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-700">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                                Actualizar un Documento
                            </h3>
                            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                                {`import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'

async function updateFinding(id, data) {
  const findingRef = doc(db, 'findings', id)
  await updateDoc(findingRef, {
    ...data,
    updatedAt: serverTimestamp()
  })
}`}
                            </pre>
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
                            href="/manual-programador/arquitectura"
                            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all group"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                                    Arquitectura
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Estructura general del sistema
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                        </Link>

                        <Link
                            href="/manual-programador/apis"
                            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all group"
                        >
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                                    APIs
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Endpoints y API Routes
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
