// Script para actualizar tareas completadas de SIG-Agro en el roadmap
// Ejecutar: node scripts/update-sig-agro-completed.js

const API_BASE = 'http://localhost:3001/api/roadmap';

// Tareas que ya fueron completadas (del último commit)
const completedTasks = [
    'PWA/Offline Support',
    'Scouting de cultivos',
    'Weather/Clima integración',
    'VRA (Variable Rate Application)',
    'Contabilidad Simple',
    'Dashboard Responsive móvil',
    'Terceros/Proveedores'
];

async function getCards() {
    const response = await fetch(`${API_BASE}/cards`);
    return response.json();
}

async function moveCard(cardId, toColumn) {
    const response = await fetch(`${API_BASE}/cards/move`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId, toColumn })
    });
    return response.ok;
}

async function createAndCloseTask(title, description) {
    // Crear la tarjeta
    const response = await fetch(`${API_BASE}/cards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            description,
            columnId: 'closed',
            priority: 'high',
            module: 'Core',
            taskType: 'feature',
            tags: ['feature', 'completado'],
            projectId: 'sig-agro'
        })
    });
    return response.ok;
}

async function updateCompleted() {
    console.log('📋 Registrando tareas completadas de SIG-Agro...\n');

    // Crear tarjetas para las tareas completadas
    const tasksToCreate = [
        {
            title: 'PWA/Offline Support implementado',
            description: 'Service Worker, IndexedDB, página offline, manifest.json. Permite uso sin conexión.'
        },
        {
            title: 'Módulo Scouting implementado',
            description: 'Componentes ScoutingForm, ScoutingList. API de alertas. Tipos y servicios.'
        },
        {
            title: 'Integración Weather/Clima',
            description: 'Componentes Weather, servicio weather.ts, tipos weather.ts'
        },
        {
            title: 'VRA (Variable Rate Application)',
            description: 'Servicio vra.ts, tipos vra.ts para aplicación de tasa variable.'
        },
        {
            title: 'Contabilidad Simple implementada',
            description: 'Asientos automáticos, terceros/proveedores, tipos contabilidad-simple.ts'
        },
        {
            title: 'Dashboard Responsive para móvil',
            description: 'Layout (dashboard), DashboardHeader, optimización CSS móvil.'
        },
        {
            title: 'Componentes UI adicionales',
            description: 'alert-dialog, avatar, badge, dropdown-menu, tabs, toast'
        },
        {
            title: 'Calculador de Costos',
            description: 'Servicio cost-calculator.ts para cálculo de costos operativos.'
        }
    ];

    let success = 0;
    for (const task of tasksToCreate) {
        const ok = await createAndCloseTask(task.title, task.description);
        if (ok) {
            console.log(`✅ ${task.title}`);
            success++;
        } else {
            console.log(`❌ ${task.title}`);
        }
    }

    console.log(`\n📊 Resultado: ${success}/${tasksToCreate.length} tareas registradas como completadas`);
}

updateCompleted();
