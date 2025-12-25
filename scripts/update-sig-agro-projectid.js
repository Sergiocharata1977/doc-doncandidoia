/**
 * Script para actualizar tarjetas existentes de SIG-Agro con projectId
 * Ejecutar con: node scripts/update-sig-agro-projectid.js
 * REQUIERE: npm run dev corriendo en localhost:3001
 */

const titlesToUpdate = [
    "Sistema Contable Simplificado - Base de Tipos y Servicios",
    "ABM Terceros (Cliente/Proveedor/Ambos)",
    "Formularios de Operaciones Contables",
    "Sidebar con Submenú Contabilidad Desplegable",
    "Layout Dashboard con Sidebar Persistente",
    "Formulario Aplicación de Insumo",
    "Formulario Cosecha",
    "Formulario Entrega a Acopiador",
    "Dashboard de Saldos Contables",
    "Detalle de Movimientos por Tercero",
    "Integración Stock con GIS",
];

async function updateCards() {
    console.log('🔍 Buscando tarjetas de SIG-Agro para actualizar...\n');

    // Obtener todas las tarjetas
    const response = await fetch('http://localhost:3001/api/roadmap/cards');
    const { cards } = await response.json();

    // Filtrar las que coinciden con nuestros títulos
    const sigAgroCards = cards.filter(card =>
        titlesToUpdate.some(title => card.title === title)
    );

    console.log(`📋 Encontradas ${sigAgroCards.length} tarjetas para actualizar\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const card of sigAgroCards) {
        try {
            const response = await fetch(`http://localhost:3001/api/roadmap/cards/${card.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectId: 'sig-agro'
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            console.log(`✅ ${card.title}`);
            successCount++;
        } catch (error) {
            console.error(`❌ ${card.title}: ${error.message}`);
            errorCount++;
        }
    }

    console.log('\n========================================');
    console.log(`📊 Resumen: ${successCount} actualizadas, ${errorCount} errores`);
    console.log('========================================\n');
}

updateCards().catch(console.error);
