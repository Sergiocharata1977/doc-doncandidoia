/**
 * Script para PRIMERO crear el proyecto don-candido-finanzas
 * y LUEGO insertar las tarjetas
 * Ejecutar: node scripts/insert-don-candido-complete.js
 */

const API_URL = 'http://localhost:3000/api/roadmap';

// Paso 1: Crear el proyecto
const project = {
    name: 'Don Cándido Finanzas',
    slug: 'don-candido-finanzas',
    description: 'Sistema contable automático para venta de electrodomésticos con gestión de stock',
    color: '#10b981', // Verde
    icon: '💰',
};

// Paso 2: Tarjetas a insertar
const cards = [
    {
        title: 'Implementar Venta de Productos con Stock',
        description: 'Crear formulario de venta de electrodomésticos con detalle de productos, actualización de stock (salida) y generación de asientos contables automáticos.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['frontend', 'backend', 'stock'],
    },
    {
        title: 'Implementar Cobro de Cliente',
        description: 'Modal para registrar cobros de cuenta corriente de clientes, con actualización de saldo y generación de asiento contable.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['frontend', 'contabilidad'],
    },
    {
        title: 'Implementar Transferencia entre Cuentas',
        description: 'Modal para registrar transferencias entre caja y bancos, con actualización de saldos y asiento contable.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['frontend', 'contabilidad'],
    },
    {
        title: 'Dashboard Financiero',
        description: 'Actualizar dashboard para mostrar métricas financieras: saldo en caja/bancos, ingresos del mes, gastos del mes, flujo de caja, gráficos de evolución.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['frontend', 'dashboard'],
    },
    {
        title: 'Reportes Básicos',
        description: 'Implementar reportes: Ingresos vs Gastos, Saldo de caja/bancos, Deudas pendientes, Movimientos de stock.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['frontend', 'reportes'],
    },
    {
        title: 'Validación de Totales Contables',
        description: 'Implementar función de auditoría que valida que los saldos de las colecciones auxiliares coincidan con las cuentas contables.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'high',
        tags: ['backend', 'validación'],
    },
    {
        title: 'Cargar Proveedores Reales en Modales',
        description: 'Actualizar modales de Compra a Crédito y Pago de Deuda para cargar proveedores reales desde Firestore en lugar de datos de ejemplo.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['frontend', 'bug'],
    },
    {
        title: 'Sistema de Tarjetas de Crédito (App Separada)',
        description: 'Crear proyecto separado tarjetas-credito-app para gestión de tarjetas, resúmenes mensuales, cuotas e intereses, con integración contable a don-candido-finanzas.',
        columnId: 'backlog',
        projectId: 'don-candido-finanzas',
        priority: 'low',
        tags: ['proyecto-nuevo', 'backend', 'frontend'],
    },
    {
        title: 'Testing E2E de Operaciones',
        description: 'Crear tests end-to-end para validar el flujo completo de operaciones: Ingreso → Gasto → Compra → Pago → Verificar asientos y saldos.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'medium',
        tags: ['testing', 'qa'],
    },
    {
        title: 'Índices de Firestore',
        description: 'Crear índices compuestos en Firestore para optimizar consultas de asientos, movimientos y terceros.',
        columnId: 'todo',
        projectId: 'don-candido-finanzas',
        priority: 'low',
        tags: ['backend', 'performance'],
    },
];

async function run() {
    console.log('🚀 Iniciando proceso completo...\n');

    // Paso 1: Crear proyecto
    console.log('📁 Paso 1: Creando proyecto "Don Cándido Finanzas"...');
    try {
        const projectResponse = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        });

        if (projectResponse.ok) {
            const result = await projectResponse.json();
            console.log(`✅ Proyecto creado: ${result.name} (ID: ${result.id})\n`);
        } else {
            const error = await projectResponse.json();
            if (error.error?.includes('already exists')) {
                console.log(`ℹ️  Proyecto ya existe, continuando...\n`);
            } else {
                throw new Error(error.error || 'Error al crear proyecto');
            }
        }
    } catch (error) {
        console.error(`❌ Error al crear proyecto:`, error.message);
        console.log('Continuando con inserción de tarjetas...\n');
    }

    // Paso 2: Insertar tarjetas
    console.log('📋 Paso 2: Insertando tarjetas...\n');
    let successCount = 0;
    let errorCount = 0;

    for (const card of cards) {
        try {
            const response = await fetch(`${API_URL}/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(`✅ ${card.title}`);
                successCount++;
            } else {
                const error = await response.text();
                throw new Error(error);
            }
        } catch (error) {
            console.error(`❌ Error en "${card.title}": ${error.message}`);
            errorCount++;
        }
    }

    console.log('\n========================================');
    console.log(`📊 Resumen: ${successCount} insertadas, ${errorCount} errores`);
    console.log('========================================\n');
    console.log('✨ Proceso completado');
}

run().catch(console.error);
