// Script para migrar proyectos del roadmap estático al Kanban Firestore
// Ejecutar con: node scripts/migrate-roadmap-projects.js

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs, Timestamp } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDc_urttvq_lpxahVelTXDiv85ahUNCLrw",
    authDomain: "docs-9001app-roadmap.firebaseapp.com",
    projectId: "docs-9001app-roadmap",
    storageBucket: "docs-9001app-roadmap.firebasestorage.app",
    messagingSenderId: "76263050038",
    appId: "1:76263050038:web:5801a2d2674157a82c0197",
    measurementId: "G-5S1MQRQE12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Mapeo de sprints a columnas del Kanban
const sprintToColumn = {
    0: 'closed',        // Sprint 0: Seguridad Crítica (COMPLETADO)
    1: 'closed',        // Sprint 1: Estabilización + QA Base (COMPLETADO)
    2: 'development',   // Sprint 2: CRM + Contexto + Analizador IA (EN PROGRESO)
    3: 'analysis',      // Sprint 3: Dashboards + Automatización (PLANIFICADO)
    4: 'backlog',       // Sprint 4: Potenciación IA + MCP (PLANIFICADO)
};

// Mapeo de prioridad por sprint
const sprintToPriority = {
    0: 'high',
    1: 'high',
    2: 'critical',  // Sprint actual
    3: 'medium',
    4: 'medium',
};

// Todos los proyectos del roadmap estático
const ROADMAP_PROJECTS = [
    // SPRINT 0 - Seguridad Crítica (COMPLETADO)
    {
        sprint: 0,
        title: 'Protección de rutas en dashboard',
        description: 'Implementar protección de rutas en dashboard con middleware',
        tags: ['security', 'auth', 'sprint-0'],
    },
    {
        sprint: 0,
        title: 'Middleware con verificación de cookies',
        description: 'Actualizar middleware con verificación de cookies de Firebase Auth',
        tags: ['security', 'auth', 'sprint-0'],
    },
    {
        sprint: 0,
        title: 'Manejo de cookies en Firebase Auth',
        description: 'Agregar manejo de cookies en Firebase Auth para sesiones persistentes',
        tags: ['security', 'auth', 'sprint-0'],
    },
    {
        sprint: 0,
        title: 'ReturnUrl para redirect post-login',
        description: 'Implementar returnUrl para redirect post-login',
        tags: ['auth', 'ux', 'sprint-0'],
    },

    // SPRINT 1 - Estabilización + QA Base (COMPLETADO)
    {
        sprint: 1,
        title: 'Vinculación Usuarios ↔ Personal (RRHH)',
        description: 'Sistema de vinculación entre usuarios y personal de RRHH',
        tags: ['rrhh', 'integration', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Refactor final de modales y formularios',
        description: 'Refactorización completa de modales y formularios para consistencia',
        tags: ['ui', 'refactor', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Corrección completa de TypeScript',
        description: 'Resolver todos los errores de TypeScript en el proyecto',
        tags: ['typescript', 'qa', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Resolver errores de Firebase Admin SDK',
        description: 'Corregir errores de Firebase Admin SDK en rutas API',
        tags: ['firebase', 'backend', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Pipeline QA (GitHub Actions)',
        description: 'Implementar Pipeline QA con GitHub Actions',
        tags: ['qa', 'ci-cd', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Tests unitarios con Vitest (60%)',
        description: 'Tests unitarios con Vitest con cobertura del 60%',
        tags: ['testing', 'qa', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Tests de integración con RTL',
        description: 'Tests de integración con React Testing Library',
        tags: ['testing', 'qa', 'sprint-1'],
    },
    {
        sprint: 1,
        title: 'Revisión de reglas de seguridad Firestore',
        description: 'Revisión y actualización de reglas de seguridad Firestore',
        tags: ['security', 'firestore', 'sprint-1'],
    },

    // SPRINT 2 - CRM + Contexto + Analizador IA (EN PROGRESO)
    {
        sprint: 2,
        title: 'CRM completo con scoring y seguimiento',
        description: 'Sistema CRM completo con scoring de leads y seguimiento',
        tags: ['crm', 'feature', 'sprint-2'],
    },
    {
        sprint: 2,
        title: 'Integración CRM ↔ Auditorías',
        description: 'Integración entre CRM y sistema de auditorías',
        tags: ['crm', 'integration', 'sprint-2'],
    },
    {
        sprint: 2,
        title: 'Contexto Organizacional (FODA, Riesgos)',
        description: 'Módulo de contexto organizacional con análisis FODA y riesgos',
        tags: ['iso9001', 'feature', 'sprint-2'],
    },
    {
        sprint: 2,
        title: 'Analizador IA ISO 9001',
        description: 'Módulo analizador IA que valida completitud del SGC ISO 9001',
        tags: ['ia', 'iso9001', 'core', 'sprint-2'],
    },
    {
        sprint: 2,
        title: 'Generador de propuestas con IA',
        description: 'Sistema de generación automática de propuestas usando IA',
        tags: ['ia', 'automation', 'sprint-2'],
    },
    {
        sprint: 2,
        title: 'Servicio base de Lead Management',
        description: 'Servicio base para gestión de leads',
        tags: ['crm', 'backend', 'sprint-2'],
    },
    {
        sprint: 2,
        title: 'Tests E2E con Playwright',
        description: 'Tests end-to-end con Playwright',
        tags: ['testing', 'qa', 'sprint-2'],
    },

    // SPRINT 3 - Dashboards + Automatización + MCP Base (PLANIFICADO)
    {
        sprint: 3,
        title: 'Tableros de control avanzados',
        description: 'Dashboards avanzados para visualización de KPIs',
        tags: ['dashboard', 'ui', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'KPIs automáticos',
        description: 'KPIs automáticos (tiempos, eficacia, cumplimiento)',
        tags: ['dashboard', 'automation', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'Integración Google Calendar',
        description: 'Integración con Google Calendar para eventos y recordatorios',
        tags: ['integration', 'calendar', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'Sistema de notificaciones push y email',
        description: 'Sistema completo de notificaciones push y email',
        tags: ['notifications', 'feature', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'Servicio de comunicación (WhatsApp, Email)',
        description: 'Servicio de comunicación multicanal (WhatsApp, Email)',
        tags: ['communication', 'integration', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'Servicio IA Comercial',
        description: 'Servicio IA Comercial para clasificación de leads',
        tags: ['ia', 'crm', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'MVP Extensión Chrome para MCP',
        description: 'MVP de extensión Chrome para MCP (Model Context Protocol)',
        tags: ['mcp', 'chrome', 'sprint-3'],
    },
    {
        sprint: 3,
        title: 'API de registro ISO 9001 para MCP',
        description: 'API de registro ISO 9001 para MCP',
        tags: ['mcp', 'iso9001', 'api', 'sprint-3'],
    },

    // SPRINT 4 - Potenciación IA + MCP Completo (PLANIFICADO)
    {
        sprint: 4,
        title: 'Agentes autónomos (Don Cándido)',
        description: 'Sistema de agentes autónomos IA (Don Cándido)',
        tags: ['ia', 'agents', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'Inteligencia predictiva y análisis de tendencias',
        description: 'Sistema de inteligencia predictiva y análisis de tendencias',
        tags: ['ia', 'analytics', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'Procesamiento de documentos con OCR',
        description: 'Sistema de procesamiento de documentos con OCR',
        tags: ['ia', 'ocr', 'documents', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'Generación automática de informes',
        description: 'Sistema de generación automática de informes',
        tags: ['ia', 'reports', 'automation', 'sprint-4'],
    },
    {
        sprint: 4,
        title: '12 automatizaciones IA comerciales',
        description: 'Suite de 12 automatizaciones IA para procesos comerciales',
        tags: ['ia', 'automation', 'crm', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'Integración Meta Ads, TikTok, LinkedIn',
        description: 'Integración con plataformas publicitarias (Meta Ads, TikTok, LinkedIn)',
        tags: ['integration', 'marketing', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'Pipeline visual tipo HubSpot',
        description: 'Pipeline visual de ventas tipo HubSpot',
        tags: ['crm', 'ui', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'MCP completo con evidencia automática',
        description: 'MCP completo con sistema de evidencia automática',
        tags: ['mcp', 'automation', 'sprint-4'],
    },
    {
        sprint: 4,
        title: 'QA completo del sistema',
        description: 'QA completo del sistema con todos los tests',
        tags: ['qa', 'testing', 'sprint-4'],
    },

    // PROYECTOS ADICIONALES (BACKLOG)
    {
        sprint: null,
        title: 'Sistema Kanban de Roadmaps',
        description: 'Implementar tablero Kanban para gestión visual del desarrollo con Firestore',
        columnId: 'testing',  // Ya está en testing
        priority: 'high',
        tags: ['feature', 'ui', 'kanban'],
        checklistQA: [
            { id: 'qa-1', label: 'Drag & drop funcional', done: true },
            { id: 'qa-2', label: 'Persistencia en Firestore', done: true },
            { id: 'qa-3', label: 'API para IA funcional', done: true },
        ],
        checklistIntegracion: [
            { id: 'int-1', label: 'Conectar con navegación', done: false },
            { id: 'int-2', label: 'Sincronizar con roadmap estático', done: false },
        ],
    },
    {
        sprint: null,
        title: 'Integración con Landing Page',
        description: 'Conectar don-candido-ia-hero con Firebase roadmap',
        columnId: 'backlog',
        priority: 'medium',
        tags: ['integration', 'landing'],
    },
];

async function migrateProjects() {
    try {
        console.log('🚀 Migrando proyectos del roadmap estático a Firestore...\n');

        // Verificar si ya hay tarjetas
        const cardsSnapshot = await getDocs(collection(db, 'roadmap_cards'));
        if (!cardsSnapshot.empty) {
            console.log(`⚠️  Ya existen ${cardsSnapshot.size} tarjetas en Firestore.`);
            const response = await new Promise((resolve) => {
                const readline = require('readline').createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                readline.question('¿Continuar y agregar más tarjetas? (s/n): ', (answer) => {
                    readline.close();
                    resolve(answer.toLowerCase() === 's');
                });
            });
            if (!response) {
                console.log('❌ Migración cancelada.');
                process.exit(0);
            }
        }

        const now = Timestamp.now();
        let created = 0;

        for (const project of ROADMAP_PROJECTS) {
            const columnId = project.columnId || sprintToColumn[project.sprint];
            const priority = project.priority || sprintToPriority[project.sprint];
            const sprintId = project.sprint;

            const card = {
                title: project.title,
                description: project.description || '',
                columnId,
                priority,
                tags: project.tags || [],
                sprintId,
                assignee: null,
                dueDate: null,
                checklistQA: project.checklistQA || [],
                checklistIntegracion: project.checklistIntegracion || [],
                createdAt: now,
                updatedAt: now,
            };

            const docRef = await addDoc(collection(db, 'roadmap_cards'), card);
            created++;

            const statusEmoji = columnId === 'closed' ? '✅' :
                columnId === 'development' ? '🔨' :
                    columnId === 'testing' ? '🧪' :
                        columnId === 'analysis' ? '📋' : '📦';

            console.log(`${statusEmoji} [${columnId.toUpperCase()}] "${project.title}" (Sprint ${sprintId || 'N/A'})`);
        }

        console.log(`\n🎉 ${created} proyectos migrados correctamente!`);
        console.log('   Abre http://localhost:3001/roadmaps para verlos en el Kanban.\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error migrando proyectos:', error);
        console.error('\n💡 Asegúrate de que:');
        console.error('   1. Firestore Database esté creada en Firebase Console');
        console.error('   2. Las reglas de Firestore permitan escritura (modo test)');
        console.error('   3. Tengas conexión a internet\n');
        process.exit(1);
    }
}

migrateProjects();
