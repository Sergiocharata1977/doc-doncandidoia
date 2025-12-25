/**
 * Script para insertar tarjetas via API Local
 * Ejecutar: node scripts/insert-lla-cards.js
 */
const cards = [
    {
        title: "Rediseño Web LLA (Landing)",
        description: "Implementación del nuevo diseño visual basado en 'La Libertad Avanza'. Incluye Hero, Header, Footer y colores corporativos (Violeta/Montserrat).",
        columnId: "testing",
        projectId: "lla-sudoeste",
        priority: "high",
        module: "Landing",
        taskType: "feature",
        tags: ["design", "ui", "tailwind"]
    },
    {
        title: "Login y Autenticación (UI)",
        description: "Creación de la página de Login y configuración del AuthContext (preparado para Firebase).",
        columnId: "testing",
        projectId: "lla-sudoeste",
        priority: "high",
        module: "Usuarios",
        taskType: "feature",
        tags: ["auth", "frontend"]
    },
    {
        title: "Panel Admin Dashboard",
        description: "Implementación del Layout Admin con Sidebar y Dashboard principal con estadísticas.",
        columnId: "testing",
        projectId: "lla-sudoeste",
        priority: "medium",
        module: "Infraestructura", // Using Infraestructura as general admin
        taskType: "feature",
        tags: ["admin", "ui"]
    },
    {
        title: "Módulos de Gestión Interna (UI)",
        description: "Vistas para gestión de Colaboradores, Noticias y Eventos con datos simulados (Mock Data).",
        columnId: "testing",
        projectId: "lla-sudoeste",
        priority: "medium",
        module: "CRM", // Collaborators fits nicely in "CRM-like"
        taskType: "feature",
        tags: ["cms", "mock-data"]
    },
    {
        title: "Kanban Interno",
        description: "Port del componente Kanban de docs-9001app para uso interno en la gestión de tareas políticas.",
        columnId: "testing",
        projectId: "lla-sudoeste",
        priority: "high",
        module: "Procesos",
        taskType: "feature",
        tags: ["kanban", "productivity"]
    },
    {
        title: "Conexión Real Firebase",
        description: "Conectar el frontend (Auth y Firestore) con un proyecto real de Firebase para persistencia de datos.",
        columnId: "backlog",
        projectId: "lla-sudoeste",
        priority: "critical",
        module: "Infraestructura",
        taskType: "tech-debt",
        tags: ["backend", "database"]
    }
];

async function insertCards() {
    console.log('🚀 Insertando tarjetas para LLA Sudoeste...');
    for (const card of cards) {
        try {
            const res = await fetch('http://localhost:3001/api/roadmap/cards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(card)
            });
            if (!res.ok) throw new Error(await res.text());
            console.log(`✅ ${card.title}`);
        } catch (e) {
            console.error(`❌ Error ${card.title}:`, e.message);
        }
    }
}
insertCards();
