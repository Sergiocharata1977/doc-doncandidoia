// Script para actualizar tarjetas completadas de SIG-Agro en el roadmap
// Ejecutar: node scripts/update-sig-agro-completed-dec20.js

const API_BASE = 'http://localhost:3001/api/roadmap';

async function getCards() {
    const response = await fetch(`${API_BASE}/cards`);
    const data = await response.json();
    return Array.isArray(data) ? data : (data.cards || []);
}

async function moveToColumn(cardId, toColumn) {
    const response = await fetch(`${API_BASE}/cards/move`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardId, toColumn })
    });
    return response.ok;
}

async function updateCompletedTasks() {
    console.log('🔄 Actualizando tarjetas de SIG-Agro...\n');

    const cards = await getCards();

    if (!cards || cards.length === 0) {
        console.log('❌ No se pudieron obtener las tarjetas');
        return;
    }

    const sigAgroCards = cards.filter(c => c.projectId === 'sig-agro');

    console.log(`📋 Encontradas ${sigAgroCards.length} tarjetas de SIG-Agro\n`);

    // Tareas que fueron completadas hoy
    const completedTitles = [
        'Multi-idioma (i18n)',
        'Integración Copernicus completa',
        'Alertas Push con FCM',
        'Reportes PDF exportables',
        'Dashboard de Análisis IA' // Iniciado
    ];

    let moved = 0;
    for (const card of sigAgroCards) {
        const isCompleted = completedTitles.some(title =>
            card.title.toLowerCase().includes(title.toLowerCase())
        );

        if (isCompleted && card.columnId !== 'closed') {
            console.log(`✅ Moviendo a cerrado: ${card.title}`);
            const success = await moveToColumn(card.id, 'closed');
            if (success) moved++;
        }
    }

    console.log(`\n📊 Resultado: ${moved} tarjetas movidas a 'Cerrado'`);
}

updateCompletedTasks();
