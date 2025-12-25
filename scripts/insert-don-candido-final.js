/**
 * Script CORRECTO para insertar tarjetas de don-candido-finanzas
 * Ejecutar: node scripts/insert-don-candido-final.js
 * REQUIERE: npm run dev corriendo en localhost:3001
 */

const API_URL = 'http://localhost:3001/api/roadmap/cards';


const cards = [
    {
        title: 'Implementar Venta de Productos con Stock',
        description: 'Crear formulario de venta de electrodomésticos con detalle de productos, actualización de stock (salida) y generación de asientos contables automáticos.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['frontend', 'backend', 'stock'],
        module: 'Operaciones',
        taskType: 'feature',
    },
    {
        title: 'Implementar Cobro de Cliente',
        description: 'Modal para registrar cobros de cuenta corriente de clientes, con actualización de saldo y generación de asiento contable.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['frontend', 'contabilidad'],
        module: 'Operaciones',
        taskType: 'feature',
    },
    {
        title: 'Implementar Transferencia entre Cuentas',
        description: 'Modal para registrar transferencias entre caja y bancos, con actualización de saldos y asiento contable.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['frontend', 'contabilidad'],
        module: 'Operaciones',
        taskType: 'feature',
    },
    {
        title: 'Dashboard Financiero',
        description: 'Actualizar dashboard para mostrar métricas financieras: saldo en caja/bancos, ingresos del mes, gastos del mes, flujo de caja, gráficos de evolución.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['frontend', 'dashboard'],
        module: 'Dashboard',
        taskType: 'feature',
    },
    {
        title: 'Reportes Básicos',
        description: 'Implementar reportes: Ingresos vs Gastos, Saldo de caja/bancos, Deudas pendientes, Movimientos de stock.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['frontend', 'reportes'],
        module: 'Reportes',
        taskType: 'feature',
    },
    {
        title: 'Validación de Totales Contables',
        description: 'Implementar función de auditoría que valida que los saldos de las colecciones auxiliares coincidan con las cuentas contables.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['backend', 'validación'],
        module: 'Contabilidad',
        taskType: 'feature',
    },
    {
        title: 'Cargar Proveedores Reales en Modales',
        description: 'Actualizar modales de Compra a Crédito y Pago de Deuda para cargar proveedores reales desde Firestore en lugar de datos de ejemplo.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['frontend', 'bug'],
        module: 'Operaciones',
        taskType: 'bug',
    },
    {
        title: 'Sistema de Tarjetas de Crédito (App Separada)',
        description: 'Crear proyecto separado tarjetas-credito-app para gestión de tarjetas, resúmenes mensuales, cuotas e intereses, con integración contable a don-candido-finanzas.',
        columnId: 'backlog',
        projectId: 'don-candido-finanzas',
        priority: 'low',
        tags: ['proyecto-nuevo', 'backend', 'frontend'],
        module: 'Futuro',
        taskType: 'feature',
    },
    {
        title: 'Testing E2E de Operaciones',
        description: 'Crear tests end-to-end para validar el flujo completo de operaciones: Ingreso → Gasto → Compra → Pago → Verificar asientos y saldos.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['testing', 'qa'],
        module: 'Testing',
        taskType: 'test',
    },
    {
        title: 'Índices de Firestore',
        description: 'Crear índices compuestos en Firestore para optimizar consultas de asientos, movimientos y terceros.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'low',
        tags: ['backend', 'performance'],
        module: 'Infraestructura',
        taskType: 'improvement',
    },
];

async function insertCards() {
    console.log('🚀 Insertando tarjetas de don-candido-finanzas...\n');

    let successCount = 0;
    let errorCount = 0;

    for (const card of cards) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(`✅ ${card.title}`);
                console.log(`   ID: ${result.id}, Proyecto: ${result.projectId}`);
                successCount++;
            } else {
                const error = await response.json();
                throw new Error(error.error || `HTTP ${response.status}`);
            }
        } catch (error) {
            console.error(`❌ Error en "${card.title}":`, error.message);
            errorCount++;
        }
    }

    console.log('\n========================================');
    console.log(`📊 Resumen: ${successCount} insertadas, ${errorCount} errores`);
    console.log('========================================\n');
    console.log('✨ Proceso completado');
    console.log('\n💡 Verifica las tarjetas en: http://localhost:3001/roadmaps');
    console.log('   Filtra por proyecto: "don-candido-finanzas"');
}

insertCards().catch(console.error);
