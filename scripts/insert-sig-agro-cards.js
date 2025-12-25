/**
 * Script para insertar tarjetas de SIG-Agro en el roadmap
 * Ejecutar con: node scripts/insert-sig-agro-cards.js
 */

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, Timestamp } = require('firebase/firestore');

// Configuración Firebase (misma que usa la app)
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBz3B4lX7oHdxCGBJqn4s6ZBwZvMxAzRv0",
    authDomain: "app9001-firebase.firebaseapp.com",
    projectId: "app9001-firebase",
    storageBucket: "app9001-firebase.firebasestorage.app",
    messagingSenderId: "180158282850",
    appId: "1:180158282850:web:a9b0c12345678901234567"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const now = Timestamp.now();

const cards = [
    // COMPLETADAS - En Desarrollo o Cerrado
    {
        title: "Sistema Contable Simplificado - Base de Tipos y Servicios",
        description: "Tipos contabilidad-simple.ts con Tercero unificado, TipoOperacion, AsientoAutomatico, PLAN_CUENTAS_AGRO. Servicios terceros.ts y asientos-auto.ts implementados.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "Infraestructura",
        taskType: "feature",
        tags: ["contabilidad", "terceros", "asientos"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "ABM Terceros (Cliente/Proveedor/Ambos)",
        description: "Página /terceros con lista, filtros por tipo, cards de saldos (cuentas a cobrar/pagar), y modal para crear/editar. Diseño limpio con sidebar persistente.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["terceros", "abm", "contabilidad"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Formularios de Operaciones Contables",
        description: "Página /operaciones con 3 formularios: Compra Insumos, Cobro a Cliente, Pago a Proveedor. Generan asientos automáticos con validación de doble partida.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "asientos", "contabilidad"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Sidebar con Submenú Contabilidad Desplegable",
        description: "Modificación del Sidebar para incluir menú desplegable de Contabilidad con opciones: Terceros, Operaciones, Saldos.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "medium",
        module: "Infraestructura",
        taskType: "improvement",
        tags: ["sidebar", "navegación", "ui"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    // EN PROGRESO
    {
        title: "Layout Dashboard con Sidebar Persistente",
        description: "Crear (dashboard)/layout.tsx para que todas las páginas tengan sidebar visible. Migrar páginas existentes (campos, campanias, metricas, contabilidad) al nuevo layout.",
        columnId: "development",
        projectId: "sig-agro",
        priority: "high",
        module: "Infraestructura",
        taskType: "improvement",
        tags: ["layout", "sidebar", "refactor"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    // BACKLOG
    {
        title: "Formulario Aplicación de Insumo",
        description: "Registrar aplicación de insumos a cultivos. Genera asiento: Debe Cultivos en Preparación / Haber Insumos. Relacionar con campo y lote.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "insumos", "contabilidad"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Formulario Cosecha",
        description: "Registrar cosecha por lote/campo. Genera asiento: Debe Stock Granos / Haber Cultivos Terminados. Registro de rindes.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "cosecha", "stock"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Formulario Entrega a Acopiador",
        description: "Registrar entrega de granos a acopiador. Opciones: Venta directa (genera ingreso) o Consignación (stock en tránsito). Genera asientos según modalidad.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "high",
        module: "CRM",
        taskType: "feature",
        tags: ["operaciones", "ventas", "acopiador"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Dashboard de Saldos Contables",
        description: "Reemplazar página /contabilidad actual con dashboard de saldos por cuenta, gráficos de evolución, y filtros por período.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "medium",
        module: "Infraestructura",
        taskType: "feature",
        tags: ["dashboard", "saldos", "contabilidad"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Detalle de Movimientos por Tercero",
        description: "Ver historial completo de operaciones por cada tercero (cliente/proveedor). Filtros por fecha y tipo de operación.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "medium",
        module: "CRM",
        taskType: "feature",
        tags: ["terceros", "movimientos", "historial"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
    {
        title: "Integración Stock con GIS",
        description: "Vincular operaciones de insumos, cosecha y stock con ubicación geográfica (campos/lotes). Visualizar stock por ubicación en mapa.",
        columnId: "backlog",
        projectId: "sig-agro",
        priority: "low",
        module: "Infraestructura",
        taskType: "feature",
        tags: ["gis", "stock", "integración"],
        checklistQA: [],
        checklistIntegracion: [],
        createdAt: now,
        updatedAt: now,
    },
];

async function insertCards() {
    console.log('🚀 Insertando tarjetas de SIG-Agro en el roadmap...\n');

    let successCount = 0;
    let errorCount = 0;

    for (const card of cards) {
        try {
            const docRef = await addDoc(collection(db, 'roadmap_cards'), card);
            console.log(`✅ ${card.title}`);
            console.log(`   ID: ${docRef.id}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Error insertando "${card.title}":`, error.message);
            errorCount++;
        }
    }

    console.log('\n========================================');
    console.log(`📊 Resumen: ${successCount} insertadas, ${errorCount} errores`);
    console.log('========================================\n');

    process.exit(0);
}

insertCards().catch(console.error);
