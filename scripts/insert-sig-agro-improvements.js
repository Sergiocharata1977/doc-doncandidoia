/**
 * Script para insertar tarjetas de mejoras SIG-Agro en el roadmap
 * Ejecutar con: node scripts/insert-sig-agro-improvements.js
 * 
 * Documentación relacionada: sig-agro-doc/analisis-sig-agro-vs-competencia.md
 */

const API_BASE = 'http://localhost:3001';

const cards = [
    // FASE 1: Quick Wins
    {
        title: '[SIG-Agro] Agregar índices NDRE, MSAVI, NDMI, ReCI',
        description: `## Descripción
Agregar múltiples índices de vegetación además de NDVI para competir con EOSDA.

## Índices a implementar
- **NDRE** (NIR - Red Edge): Detecta estrés temprano
- **MSAVI**: Suelo modificado, útil en cultivos bajos
- **NDMI**: Índice de humedad
- **ReCI**: Contenido de clorofila

## Archivos a modificar
- \`src/types/sig-agro-advanced.ts\`
- \`src/services/copernicus.ts\`
- \`src/services/satellite-analysis.ts\`

## Referencia
Ver análisis completo en: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'high',
        projectId: 'sig-agro',
        tags: ['satelite', 'ndvi', 'fase-1']
    },
    {
        title: '[SIG-Agro] Scouting con fotos georreferenciadas',
        description: `## Descripción
Permitir al usuario tomar fotos en campo con geolocalización automática.

## Funcionalidades
- Captura desde cámara del móvil
- GPS automático
- Clasificación: plaga, enfermedad, maleza, otro
- Vinculación automática con lote más cercano

## Archivos nuevos
- \`src/services/scouting.ts\`
- \`src/types/scouting.ts\`
- \`src/components/scouting/ScoutingForm.tsx\`

## Referencia
Inspirado en Auravant. Ver: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'high',
        projectId: 'sig-agro',
        tags: ['scouting', 'móvil', 'fase-1']
    },
    {
        title: '[SIG-Agro] Alertas push y email proactivas',
        description: `## Descripción
Las alertas actuales son pasivas (hay que entrar a verlas). Agregar notificaciones proactivas.

## Implementación
- Firebase Cloud Messaging para push
- SendGrid/Resend para emails
- Configuración de umbrales por usuario

## Archivos a modificar
- \`src/services/alerts.ts\` - agregar enviarNotificacion()
- \`src/app/api/alerts/send/route.ts\` - nuevo endpoint

## Referencia
Ver: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'medium',
        projectId: 'sig-agro',
        tags: ['alertas', 'notificaciones', 'fase-1']
    },

    // FASE 2: Diferenciadores
    {
        title: '[SIG-Agro] Zonificación VRA y exportación SHP/ISOXML',
        description: `## Descripción
Generar zonas de manejo automáticas y exportar prescripciones para tractores.

## Funcionalidades
- Clustering automático (k-means) desde mapa NDVI
- Exportar a formato SHP (ArcGIS, QGIS)
- Exportar a ISOXML (tractores John Deere, etc.)
- Prescripciones de fertilización variable

## Archivos nuevos
- \`src/services/vra.ts\`
- \`src/lib/clustering.ts\`
- \`src/lib/export-shp.ts\`
- \`src/lib/export-isoxml.ts\`

## Referencia
Funcionalidad clave de EOSDA. Ver: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'high',
        projectId: 'sig-agro',
        tags: ['vra', 'prescripciones', 'fase-2']
    },
    {
        title: '[SIG-Agro] Integración climática (Open-Meteo)',
        description: `## Descripción
Agregar pronósticos y alertas meteorológicas específicas por lote.

## APIs a integrar
- **Open-Meteo**: Gratis, pronóstico 7 días, historial
- Alertas de heladas, granizo, lluvias intensas

## Archivos nuevos
- \`src/services/weather.ts\`
- \`src/components/weather/WeatherWidget.tsx\`
- \`src/app/api/weather/route.ts\`

## Referencia
Ver: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'high',
        projectId: 'sig-agro',
        tags: ['clima', 'pronóstico', 'fase-2']
    },
    {
        title: '[SIG-Agro] Trazabilidad económica (Satélite → Costo)',
        description: `## Descripción
Vincular análisis satelital con costos reales de remediación.

## Lógica
1. NDVI detecta problema → Sistema calcula costo de arreglar
2. Consulta stock de insumos → ¿Hay suficiente?
3. Genera orden de aplicación con presupuesto

## Archivos a modificar
- \`src/services/satellite-analysis.ts\`
- \`src/services/stock.ts\`
- Nuevo: \`src/services/cost-calculator.ts\`

## Referencia
Inspirado en Auravant. Ver: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'medium',
        projectId: 'sig-agro',
        tags: ['costos', 'trazabilidad', 'fase-2']
    },

    // FASE 3: Offline
    {
        title: '[SIG-Agro] Modo Offline (PWA)',
        description: `## Descripción
CRÍTICO: El 90% de productores del Chaco no tienen señal en campo.

## Implementación
- Service Worker para cache de assets
- IndexedDB para datos locales
- Sincronización automática al recuperar señal
- Mapas offline (tiles pre-cacheados)

## Archivos nuevos
- \`public/sw.js\`
- \`src/lib/offline-db.ts\`
- \`src/hooks/useOfflineSync.ts\`
- \`next.config.js\` - configuración PWA

## Referencia
Auravant destaca por esto. Ver: \`sig-agro-doc/analisis-sig-agro-vs-competencia.md\``,
        columnId: 'backlog',
        priority: 'high',
        projectId: 'sig-agro',
        tags: ['offline', 'pwa', 'fase-3', 'crítico']
    }
];

async function insertCards() {
    console.log('🚀 Insertando tarjetas de mejoras SIG-Agro...\n');

    let successCount = 0;
    let errorCount = 0;

    for (const card of cards) {
        try {
            const response = await fetch(`${API_BASE}/api/roadmap/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const result = await response.json();
            console.log(`✅ Creada: ${card.title}`);
            console.log(`   ID: ${result.id}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Error en: ${card.title}`);
            console.error(`   ${error.message}`);
            errorCount++;
        }
    }

    console.log(`\n📊 Resumen:`);
    console.log(`   ✅ Creadas: ${successCount}`);
    console.log(`   ❌ Errores: ${errorCount}`);
    console.log(`\n📄 Documentación guardada en: sig-agro-doc/analisis-sig-agro-vs-competencia.md`);
}

insertCards();
