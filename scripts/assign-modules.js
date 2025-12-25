/**
 * Script para asignar módulos a las tarjetas existentes
 * Usa la API route del dev server que tiene permisos de admin
 */

const API_BASE = 'http://localhost:3001/api/roadmap/cards';

// Mapeo de títulos a módulos (ajustado al schema real del proyecto)
const MODULE_ASSIGNMENTS = {
    // CRM
    'crm': 'CRM',
    'cliente': 'CRM',
    'contact': 'CRM',
    'lead': 'CRM',
    'comercial': 'CRM',
    'scoring': 'CRM',
    'seguimiento': 'CRM',
    'propuesta': 'CRM',

    // Multi-tenant
    'tenant': 'Multi-tenant',
    'organizaci': 'Multi-tenant',
    'empresa': 'Multi-tenant',
    'contexto': 'Multi-tenant',
    'foda': 'Multi-tenant',

    // IA-Contextual
    'ia': 'IA-Contextual',
    'ai': 'IA-Contextual',
    'chatbot': 'IA-Contextual',
    'don c': 'IA-Contextual',
    'agente': 'IA-Contextual',
    'inteligencia': 'IA-Contextual',
    'predictiv': 'IA-Contextual',
    'análisis': 'IA-Contextual',
    'generador': 'IA-Contextual',
    'analizador': 'IA-Contextual',

    // Usuarios
    'usuario': 'Usuarios',
    'user': 'Usuarios',
    'auth': 'Usuarios',
    'login': 'Usuarios',
    'cookie': 'Usuarios',
    'redirect': 'Usuarios',
    'returnurl': 'Usuarios',
    'personal': 'Usuarios',
    'rrhh': 'Usuarios',
    'vinculación': 'Usuarios',

    // Infraestructura
    'firebase': 'Infraestructura',
    'admin sdk': 'Infraestructura',
    'middleware': 'Infraestructura',
    'config': 'Infraestructura',
    'deploy': 'Infraestructura',
    'seguridad': 'Infraestructura',
    'firestore': 'Infraestructura',
    'protección': 'Infraestructura',

    // Landing
    'landing': 'Landing',
    'integración meta': 'Landing',
    'tiktok': 'Landing',
    'linkedin': 'Landing',
    'ads': 'Landing',

    // Automatizaciones
    'automatizaci': 'Automatizaciones',
    'workflow': 'Automatizaciones',
    'notificaci': 'Automatizaciones',
    'push': 'Automatizaciones',
    'email': 'Automatizaciones',
    'whatsapp': 'Automatizaciones',
    'comunicaci': 'Automatizaciones',
    'calendar': 'Automatizaciones',

    // MCP
    'mcp': 'MCP',
    'evidencia': 'MCP',
    'extensión chrome': 'MCP',
    'api de registro': 'MCP',

    // Documentacion
    'document': 'Documentacion',
    'ocr': 'Documentacion',
    'procesamiento': 'Documentacion',

    // QA
    'test': 'QA',
    'qa': 'QA',
    'vitest': 'QA',
    'playwright': 'QA',
    'rtl': 'QA',
    'pipeline': 'QA',
    'github actions': 'QA',
    'typescript': 'QA',

    // Procesos
    'proceso': 'Procesos',
    'iso': 'Procesos',

    // Auditorias
    'audit': 'Auditorias',
    'auditor': 'Auditorias',

    // Otros términos específicos
    'kanban': 'Infraestructura',
    'roadmap': 'Infraestructura',
    'modal': 'Infraestructura',
    'formulario': 'Infraestructura',
    'refactor': 'Infraestructura',
    'kpi': 'Procesos',
    'tablero': 'Procesos',
    'informe': 'Documentacion',
    'visual': 'Procesos',
};

function detectModule(title, description = '') {
    const text = `${title} ${description}`.toLowerCase();

    for (const [keyword, module] of Object.entries(MODULE_ASSIGNMENTS)) {
        if (text.includes(keyword)) {
            return module;
        }
    }

    return null; // Sin módulo asignado
}

async function fetchAllCards() {
    try {
        const response = await fetch(API_BASE);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return data.cards || [];
    } catch (error) {
        console.error('Error fetching cards:', error);
        return [];
    }
}

async function updateCard(cardId, updates) {
    try {
        const response = await fetch(`${API_BASE}/${cardId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updates),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error updating card ${cardId}:`, error);
        return null;
    }
}

async function assignModules() {
    console.log('🔍 Obteniendo tarjetas...\n');
    const cards = await fetchAllCards();

    if (cards.length === 0) {
        console.log('❌ No se encontraron tarjetas');
        return;
    }

    console.log(`📊 Total de tarjetas: ${cards.length}\n`);

    let updated = 0;
    let skipped = 0;
    let failed = 0;

    for (const card of cards) {
        // Si ya tiene módulo, saltar
        if (card.module) {
            console.log(`⏭️  ${card.title} - Ya tiene módulo: ${card.module}`);
            skipped++;
            continue;
        }

        // Detectar módulo
        const module = detectModule(card.title, card.description);

        if (!module) {
            console.log(`⚠️  ${card.title} - No se pudo detectar módulo`);
            skipped++;
            continue;
        }

        // Actualizar
        console.log(`🔄 ${card.title} -> ${module}`);
        const result = await updateCard(card.id, { module });

        if (result) {
            console.log(`✅ Actualizado`);
            updated++;
        } else {
            console.log(`❌ Error al actualizar`);
            failed++;
        }

        // Pequeña pausa para no saturar la API
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log('\n' + '='.repeat(50));
    console.log(`✅ Actualizadas: ${updated}`);
    console.log(`⏭️  Omitidas: ${skipped}`);
    console.log(`❌ Fallidas: ${failed}`);
    console.log('='.repeat(50));
}

// Ejecutar
assignModules().catch(console.error);
