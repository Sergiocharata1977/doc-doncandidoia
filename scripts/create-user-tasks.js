/**
 * Script para crear las tareas del usuario en el Kanban
 * Ejecutar con: node scripts/create-user-tasks.js
 */

// Importar Firebase
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');

// Configuración Firebase (usar las env vars o hardcoded para script)
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB3x6h7OgLl6dNHmMvFLQyjgGmC0zYSbL4",
    authDomain: "docs-9001app.firebaseapp.com",
    projectId: "docs-9001app",
    storageBucket: "docs-9001app.firebasestorage.app",
    messagingSenderId: "377391334749",
    appId: "1:377391334749:web:b4fddb22d46a6e0234b5b0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Tareas del usuario a migrar
const userTasks = [
    // GRUPO 1: Tareas en Progreso/Corto Plazo
    {
        title: "Control de Features y IA Contextual",
        description: "Verificar que todo funcione bien. Que cada usuario tenga su cuenta y su IA contextual. Verificar funcionamiento de IA y su contexto para cada usuario.",
        priority: "high",
        module: "IA-Contextual",
        columnId: "in-progress",
        tags: ["QA", "IA", "Usuarios"],
        sprintId: 8,
    },
    {
        title: "Control Multi-tenant",
        description: "Verificar que se puedan crear organizaciones nuevas y que funcionen. Que se puedan crear usuarios correctamente.",
        priority: "high",
        module: "Multi-tenant",
        columnId: "in-progress",
        tags: ["QA", "Organizaciones"],
        sprintId: 8,
    },
    {
        title: "Control Usuario/Persona/Puesto/Procesos",
        description: "Control de la relación usuario-persona-puesto-procesos. Verificar funcionamiento de IA con estos contextos.",
        priority: "high",
        module: "Usuarios",
        columnId: "in-progress",
        tags: ["QA", "IA", "Procesos"],
        sprintId: 8,
    },

    // GRUPO 2: Tareas Pendientes/Medio Plazo
    {
        title: "Crear Subdominio docs-9001app",
        description: "Configurar subdominio para el proyecto docs-9001app. Definir hosting y deploy.",
        priority: "medium",
        module: "Infraestructura",
        columnId: "backlog",
        tags: ["Deploy", "DNS"],
        sprintId: 9,
    },
    {
        title: "Crear Subdominio Don Cándido App",
        description: "Configurar subdominio para el proyecto Don Cándido. Definir hosting y deploy.",
        priority: "medium",
        module: "Infraestructura",
        columnId: "backlog",
        tags: ["Deploy", "DNS"],
        sprintId: 9,
    },
    {
        title: "Relación Landing ↔ Proyecto Principal",
        description: "Definir cómo vamos a hacer cuestiones de dar de alta proyectos y otros temas de definiciones. Integración entre landing page y el proyecto principal.",
        priority: "medium",
        module: "Landing",
        columnId: "backlog",
        tags: ["Integración", "Definiciones"],
        sprintId: 9,
    },

    // GRUPO 3: Largo Plazo
    {
        title: "CRM + Automatizaciones",
        description: "Implementar sistema CRM con automatizaciones de workflows, notificaciones y seguimiento de leads.",
        priority: "low",
        module: "CRM",
        columnId: "backlog",
        tags: ["CRM", "Automatizaciones", "Workflows"],
        sprintId: 10,
    },
    {
        title: "MCP Propio",
        description: "Desarrollar Model Context Protocol propio para integración avanzada de IA con el sistema.",
        priority: "low",
        module: "MCP",
        columnId: "backlog",
        tags: ["MCP", "IA", "Avanzado"],
        sprintId: 11,
    },
];

async function createTasks() {
    console.log('🚀 Creando tareas del usuario en Firestore...\n');

    for (const task of userTasks) {
        try {
            const cardData = {
                ...task,
                checklistQA: [],
                checklistIntegracion: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            const docRef = await addDoc(collection(db, 'roadmap_cards'), cardData);
            console.log(`✅ Creada: "${task.title}" (${task.module}) → ID: ${docRef.id}`);
        } catch (error) {
            console.error(`❌ Error creando "${task.title}":`, error.message);
        }
    }

    console.log('\n✨ Migración completada!');
    console.log(`📊 Total: ${userTasks.length} tareas creadas`);
    process.exit(0);
}

createTasks();
