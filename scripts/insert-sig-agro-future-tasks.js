// Script para insertar tareas futuras de SIG-Agro en el roadmap
// Ejecutar: node scripts/insert-sig-agro-future-tasks.js

const API_BASE = 'http://localhost:3001/api/roadmap';

const PROJECT_ID = 'sig-agro';

const futureTasks = [
    // Alta Prioridad
    {
        title: 'Integración Copernicus completa',
        description: 'Conectar con API satelital real de Copernicus para obtener datos NDVI, EVI y análisis de cultivos en tiempo real.',
        columnId: 'backlog',
        priority: 'high',
        module: 'Satelital',
        taskType: 'feature',
        tags: ['feature', 'api', 'satelite'],
        projectId: PROJECT_ID
    },
    {
        title: 'Alertas Push con FCM',
        description: 'Implementar notificaciones push en tiempo real usando Firebase Cloud Messaging para alertas de clima, plagas y operaciones.',
        columnId: 'backlog',
        priority: 'high',
        module: 'Notificaciones',
        taskType: 'feature',
        tags: ['feature', 'pwa', 'fcm'],
        projectId: PROJECT_ID
    },
    {
        title: 'Reportes PDF exportables',
        description: 'Generación de informes PDF para campañas, rendimientos, costos y análisis IA. Usar jsPDF o Puppeteer.',
        columnId: 'backlog',
        priority: 'high',
        module: 'Reportes',
        taskType: 'feature',
        tags: ['feature', 'pdf', 'exportar'],
        projectId: PROJECT_ID
    },
    {
        title: 'Multi-idioma (i18n)',
        description: 'Soporte para inglés y portugués usando next-intl o react-i18next.',
        columnId: 'backlog',
        priority: 'high',
        module: 'Infraestructura',
        taskType: 'feature',
        tags: ['feature', 'i18n'],
        projectId: PROJECT_ID
    },

    // Media Prioridad
    {
        title: 'Dashboard de Análisis IA',
        description: 'Visualización de resultados de Machine Learning: predicciones, recomendaciones, históricos.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'IA',
        taskType: 'feature',
        tags: ['feature', 'ia', 'dashboard'],
        projectId: PROJECT_ID
    },
    {
        title: 'Integración Maquinaria ISOBUS',
        description: 'Conexión con tractores y sembradoras vía protocolo ISOBUS para recibir datos de operaciones.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'Maquinaria',
        taskType: 'feature',
        tags: ['feature', 'isobus', 'iot'],
        projectId: PROJECT_ID
    },
    {
        title: 'Gestión de Insumos',
        description: 'Módulo de stock para semillas, fertilizantes y fitosanitarios con alertas de stock bajo.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'Insumos',
        taskType: 'feature',
        tags: ['feature', 'stock', 'insumos'],
        projectId: PROJECT_ID
    },
    {
        title: 'Planificación de Siembra',
        description: 'Calendario de siembra y cosecha con rotación de cultivos y recomendaciones.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'Planificacion',
        taskType: 'feature',
        tags: ['feature', 'calendario', 'siembra'],
        projectId: PROJECT_ID
    },
    {
        title: 'Mapas de Rendimiento',
        description: 'Visualización geoespacial de cosecha con mapas de calor y análisis por zonas.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'Mapas',
        taskType: 'feature',
        tags: ['feature', 'mapas', 'geoespacial'],
        projectId: PROJECT_ID
    },

    // Baja Prioridad
    {
        title: 'App Móvil Nativa',
        description: 'Desarrollo de app nativa con React Native o Flutter para iOS y Android.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Mobile',
        taskType: 'feature',
        tags: ['feature', 'mobile', 'app'],
        projectId: PROJECT_ID
    },
    {
        title: 'Integración Contable ERP',
        description: 'Exportación de datos contables a sistemas ERP externos (SAP, Tango, etc).',
        columnId: 'backlog',
        priority: 'low',
        module: 'Contabilidad',
        taskType: 'feature',
        tags: ['feature', 'erp', 'contabilidad'],
        projectId: PROJECT_ID
    },
    {
        title: 'Marketplace de Insumos',
        description: 'Plataforma de compra/venta de insumos y productos agrícolas.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Marketplace',
        taskType: 'feature',
        tags: ['feature', 'ecommerce'],
        projectId: PROJECT_ID
    },
    {
        title: 'Análisis Predictivo ML',
        description: 'Modelos de Machine Learning para predicción de rendimientos basados en históricos.',
        columnId: 'backlog',
        priority: 'low',
        module: 'IA',
        taskType: 'feature',
        tags: ['feature', 'ml', 'prediccion'],
        projectId: PROJECT_ID
    },
    {
        title: 'Trazabilidad Blockchain',
        description: 'Certificación de origen y trazabilidad usando blockchain para exportación.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Blockchain',
        taskType: 'feature',
        tags: ['feature', 'blockchain', 'trazabilidad'],
        projectId: PROJECT_ID
    },

    // Mejoras Técnicas
    {
        title: 'Tests E2E con Playwright',
        description: 'Implementar suite de tests end-to-end con Playwright para flujos críticos.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'QA',
        taskType: 'test',
        tags: ['test', 'e2e', 'playwright'],
        projectId: PROJECT_ID
    },
    {
        title: 'CI/CD Pipeline completo',
        description: 'GitHub Actions con lint, test, build y deploy automático a Vercel.',
        columnId: 'backlog',
        priority: 'medium',
        module: 'Infraestructura',
        taskType: 'improvement',
        tags: ['devops', 'ci-cd'],
        projectId: PROJECT_ID
    },
    {
        title: 'Monitoreo con Sentry',
        description: 'Integración de Sentry para monitoreo de errores en producción.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Infraestructura',
        taskType: 'improvement',
        tags: ['monitoring', 'sentry'],
        projectId: PROJECT_ID
    },
    {
        title: 'Optimización de Performance',
        description: 'Lazy loading, optimización de imágenes, code splitting.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Infraestructura',
        taskType: 'improvement',
        tags: ['performance', 'optimization'],
        projectId: PROJECT_ID
    },
    {
        title: 'Documentación API con Swagger',
        description: 'Generar documentación OpenAPI/Swagger para todas las APIs.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Documentacion',
        taskType: 'improvement',
        tags: ['docs', 'swagger', 'api'],
        projectId: PROJECT_ID
    },
    {
        title: 'Limpiar warning ESLint en next.config',
        description: 'Remover configuración eslint deprecated de next.config.ts para Next.js 16.',
        columnId: 'backlog',
        priority: 'low',
        module: 'Infraestructura',
        taskType: 'tech-debt',
        tags: ['tech-debt', 'eslint'],
        projectId: PROJECT_ID
    }
];

async function insertCards() {
    console.log('🚀 Insertando tareas futuras de SIG-Agro en el roadmap...\n');

    let success = 0;
    let failed = 0;

    for (const task of futureTasks) {
        try {
            const response = await fetch(`${API_BASE}/cards`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });

            if (response.ok) {
                const result = await response.json();
                console.log(`✅ ${task.title}`);
                success++;
            } else {
                const error = await response.text();
                console.log(`❌ ${task.title}: ${error}`);
                failed++;
            }
        } catch (error) {
            console.log(`❌ ${task.title}: ${error.message}`);
            failed++;
        }
    }

    console.log(`\n📊 Resultado: ${success} exitosas, ${failed} fallidas`);
    console.log(`📌 Total tarjetas: ${futureTasks.length}`);
}

insertCards();
