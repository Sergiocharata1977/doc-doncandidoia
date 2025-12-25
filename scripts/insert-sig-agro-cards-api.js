/**
 * Script para insertar tarjetas de SIG-Agro via API
 * Ejecutar con: node scripts/insert-sig-agro-cards-api.js
 * REQUIERE: npm run dev corriendo en localhost:3001
 */

const cards = [
    // COMPLETADAS - En Desarrollo
    {
        title: "Sistema Contable Simplificado - Base de Tipos y Servicios",
        description: "Tipos contabilidad-simple.ts con Tercero unificado, TipoOperacion, AsientoAutomatico, PLAN_CUENTAS_AGRO. Servicios terceros.ts y asientos-auto.ts implementados.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "Infraestructura",
        taskType: "feature",
        tags: ["contabilidad", "terceros", "asientos"],
    },
    {
        title: "ABM Terceros (Cliente/Proveedor/Ambos)",
        description: "Página /terceros con lista, filtros por tipo, cards de saldos (cuentas a cobrar/pagar), y modal para crear/editar.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["terceros", "abm", "contabilidad"],
    },
    {
        title: "Formularios de Operaciones Contables",
        description: "Página /operaciones con 3 formularios: Compra Insumos, Cobro a Cliente, Pago a Proveedor. Asientos automáticos con doble partida.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "asientos", "contabilidad"],
    },
    {
        title: "Sidebar con Submenú Contabilidad Desplegable",
        description: "Menú desplegable de Contabilidad con opciones: Terceros, Operaciones, Saldos.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "medium",
        module: "Infraestructura",
        taskType: "improvement",
        tags: ["sidebar", "navegación", "ui"],
    },
    {
        title: "Layout Dashboard con Sidebar Persistente",
        description: "Crear (dashboard)/layout.tsx para sidebar visible en todas las páginas. Migrar páginas existentes al nuevo layout.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "Infraestructura",
        taskType: "improvement",
        tags: ["layout", "sidebar", "refactor"],
    },
    // BACKLOG
    {
        title: "Formulario Aplicación de Insumo",
        description: "Registrar aplicación de insumos a cultivos. Asiento: Debe Cultivos Prep / Haber Insumos. Relacionar con campo y lote.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "insumos", "contabilidad"],
    },
    {
        title: "Formulario Cosecha",
        description: "Registrar cosecha por lote/campo. Asiento: Debe Stock Granos / Haber Cultivos. Registro de rindes.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "cosecha", "stock"],
    },
    {
        title: "Formulario Entrega a Acopiador",
        description: "Entrega de granos. Opciones: Venta directa o Consignación. Asientos según modalidad.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "ventas", "acopiador"],
    },
    {
        title: "Dashboard de Saldos Contables",
        description: "Reemplazar /contabilidad con dashboard de saldos por cuenta, gráficos y filtros.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "medium",
        module: "Infraestructura",
        taskType: "feature",
        tags: ["dashboard", "saldos", "contabilidad"],
    },
    {
        title: "Detalle de Movimientos por Tercero",
        description: "Historial de operaciones por tercero. Filtros por fecha y tipo.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "medium",
        module: "CRM",
        taskType: "feature",
        tags: ["terceros", "movimientos", "historial"],
    },
    {
        title: "Integración Stock con GIS",
        description: "Vincular operaciones con campos/lotes. Visualizar stock en mapa.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "low",
        module: "Infraestructura",
        taskType: "feature",
        tags: ["gis", "stock", "integración"],
    },
];

async function insertCards() {
    console.log('🚀 Insertando tarjetas de SIG-Agro via API...\n');

    let successCount = 0;
    let errorCount = 0;

    for (const card of cards) {
        try {
            const response = await fetch('http://localhost:3001/api/roadmap/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || `HTTP ${response.status}`);
            }

            const result = await response.json();
            console.log(`✅ ${card.title}`);
            console.log(`   ID: ${result.id}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Error: "${card.title}":`, error.message);
            errorCount++;
        }
    }

    console.log('\n========================================');
    console.log(`📊 Resumen: ${successCount} insertadas, ${errorCount} errores`);
    console.log('========================================\n');
}

insertCards().catch(console.error);
