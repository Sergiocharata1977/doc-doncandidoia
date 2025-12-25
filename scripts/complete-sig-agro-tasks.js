/**
 * Script para marcar tareas de SIG-Agro como completadas en el roadmap
 * Ejecutar: node scripts/complete-sig-agro-tasks.js
 */

const BASE_URL = 'http://localhost:3000';

// IDs de las tarjetas a mover a "done" (ajustar según IDs reales)
// Si no conocemos los IDs, buscaremos por título

const TAREAS_COMPLETADAS = [
    // Fase 1
    '[SIG-Agro] Agregar índices NDRE, MSAVI, NDMI, ReCI',
    '[SIG-Agro] Scouting con fotos georreferenciadas',
    '[SIG-Agro] Alertas push y email proactivas',
    // Fase 2
    '[SIG-Agro] Zonificación VRA y exportación SHP/ISOXML',
    '[SIG-Agro] Integración climática Open-Meteo',
    '[SIG-Agro] Trazabilidad económica satélite-costo',
    // Fase 3
    '[SIG-Agro] Modo Offline PWA',
];

async function obtenerTarjetas() {
    try {
        const response = await fetch(`${BASE_URL}/api/roadmap/cards`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error obteniendo tarjetas:', error.message);
        return [];
    }
}

async function moverADone(cardId) {
    try {
        const response = await fetch(`${BASE_URL}/api/roadmap/cards/${cardId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                columnId: 'done'
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error moviendo tarjeta ${cardId}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🔄 Obteniendo tarjetas del roadmap...\n');

    const tarjetas = await obtenerTarjetas();

    if (!Array.isArray(tarjetas) || tarjetas.length === 0) {
        console.log('⚠️  No se encontraron tarjetas o el servidor no está corriendo');
        console.log('   Asegurate de que docs-9001app esté corriendo en localhost:3000');
        return;
    }

    console.log(`📋 ${tarjetas.length} tarjetas encontradas\n`);

    // Filtrar tarjetas de SIG-Agro
    const tarjetasSigAgro = tarjetas.filter(t =>
        t.title?.includes('[SIG-Agro]') &&
        t.projectId === 'sig-agro'
    );

    console.log(`🌱 ${tarjetasSigAgro.length} tarjetas de SIG-Agro encontradas\n`);

    let completadas = 0;
    let yaCompletadas = 0;

    for (const tarea of TAREAS_COMPLETADAS) {
        const tarjeta = tarjetasSigAgro.find(t => t.title === tarea);

        if (!tarjeta) {
            console.log(`❓ No encontrada: ${tarea}`);
            continue;
        }

        if (tarjeta.columnId === 'done') {
            console.log(`✅ Ya completada: ${tarea}`);
            yaCompletadas++;
            continue;
        }

        console.log(`🔄 Moviendo a Done: ${tarea}`);
        const resultado = await moverADone(tarjeta.id);

        if (resultado) {
            console.log(`   ✅ Completada`);
            completadas++;
        } else {
            console.log(`   ❌ Error al mover`);
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`📊 Resumen:`);
    console.log(`   - Nuevas completadas: ${completadas}`);
    console.log(`   - Ya estaban completadas: ${yaCompletadas}`);
    console.log(`   - Total procesadas: ${completadas + yaCompletadas}/${TAREAS_COMPLETADAS.length}`);
    console.log('='.repeat(50));
}

main().catch(console.error);
