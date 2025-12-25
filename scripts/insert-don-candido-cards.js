/**
 * Script para insertar tarjetas de don-candido-finanzas en el roadmap
 * Ejecutar: node scripts/insert-don-candido-cards.js
 */

const API_URL = 'http://localhost:3000/api/roadmap/cards';

const cards = [
    {
        title: 'Implementar Venta de Productos con Stock',
        description: 'Crear formulario de venta de electrodomésticos con detalle de productos, actualización de stock (salida) y generación de asientos contables automáticos.',
        status: 'todo',
        priority: 'high',
        tags: ['frontend', 'backend', 'stock'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Implementar Cobro de Cliente',
        description: 'Modal para registrar cobros de cuenta corriente de clientes, con actualización de saldo y generación de asiento contable.',
        status: 'todo',
        priority: 'high',
        tags: ['frontend', 'contabilidad'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Implementar Transferencia entre Cuentas',
        description: 'Modal para registrar transferencias entre caja y bancos, con actualización de saldos y asiento contable.',
        status: 'todo',
        priority: 'medium',
        tags: ['frontend', 'contabilidad'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Dashboard Financiero',
        description: 'Actualizar dashboard para mostrar métricas financieras: saldo en caja/bancos, ingresos del mes, gastos del mes, flujo de caja, gráficos de evolución.',
        status: 'todo',
        priority: 'high',
        tags: ['frontend', 'dashboard'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Reportes Básicos',
        description: 'Implementar reportes: Ingresos vs Gastos, Saldo de caja/bancos, Deudas pendientes, Movimientos de stock.',
        status: 'todo',
        priority: 'medium',
        tags: ['frontend', 'reportes'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Validación de Totales Contables',
        description: 'Implementar función de auditoría que valida que los saldos de las colecciones auxiliares coincidan con las cuentas contables.',
        status: 'todo',
        priority: 'high',
        tags: ['backend', 'validación'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Cargar Proveedores Reales en Modales',
        description: 'Actualizar modales de Compra a Crédito y Pago de Deuda para cargar proveedores reales desde Firestore en lugar de datos de ejemplo.',
        status: 'todo',
        priority: 'medium',
        tags: ['frontend', 'bug'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Sistema de Tarjetas de Crédito (App Separada)',
        description: 'Crear proyecto separado tarjetas-credito-app para gestión de tarjetas, resúmenes mensuales, cuotas e intereses, con integración contable a don-candido-finanzas.',
        status: 'backlog',
        priority: 'low',
        tags: ['proyecto-nuevo', 'backend', 'frontend'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Testing E2E de Operaciones',
        description: 'Crear tests end-to-end para validar el flujo completo de operaciones: Ingreso → Gasto → Compra → Pago → Verificar asientos y saldos.',
        status: 'todo',
        priority: 'medium',
        tags: ['testing', 'qa'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
    {
        title: 'Índices de Firestore',
        description: 'Crear índices compuestos en Firestore para optimizar consultas de asientos, movimientos y terceros.',
        status: 'todo',
        priority: 'low',
        tags: ['backend', 'performance'],
        projectId: 'don-candido-finanzas',
        assignedTo: null,
        dueDate: null,
    },
];

async function insertCards() {
    console.log('🚀 Insertando tarjetas de don-candido-finanzas...\n');

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
            } else {
                const error = await response.text();
                console.error(`❌ Error en "${card.title}": ${error}`);
            }
        } catch (error) {
            console.error(`❌ Error en "${card.title}":`, error.message);
        }
    }

    console.log('\n✨ Proceso completado');
}

insertCards();
