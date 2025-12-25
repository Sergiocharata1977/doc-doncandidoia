/**
 * Script para insertar tarjeta de Fase 3 (PWA) en el roadmap
 * Ejecutar: node scripts/insert-pwa-card.js
 */

const BASE_URL = 'http://localhost:3000';

const card = {
    title: '[SIG-Agro] Modo Offline PWA',
    description: `## Descripción
Implementación completa de Progressive Web App para funcionamiento sin conexión.

## Componentes implementados
- **Service Worker** (\`public/sw.js\`):
  - Estrategias cache-first y network-first
  - Push notifications
  
- **IndexedDB** (\`lib/indexed-db.ts\`):
  - Almacenamiento local de datos pendientes
  - Cache con TTL
  
- **Sincronización** (\`hooks/useOfflineSync.tsx\`):
  - Detección online/offline
  - Sync automático al reconectar
  - Indicador visual de estado
  
- **UI**: Página /offline con funciones disponibles

## Archivos
- \`public/sw.js\`
- \`public/manifest.json\`
- \`src/lib/indexed-db.ts\`
- \`src/hooks/useOfflineSync.tsx\`
- \`src/components/pwa/PWAProvider.tsx\`
- \`src/app/offline/page.tsx\`

## Estado
✅ Completado - Build verificado`,
    columnId: 'done',
    priority: 'high',
    projectId: 'sig-agro',
    tags: ['pwa', 'offline', 'fase-3']
};

async function insertCard() {
    try {
        console.log('📝 Insertando tarjeta PWA...');

        const response = await fetch(`${BASE_URL}/api/roadmap/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`HTTP ${response.status}: ${error}`);
        }

        const result = await response.json();
        console.log('✅ Tarjeta creada:', result.id);
        return result;
    } catch (error) {
        console.error('❌ Error:', error.message);
        return null;
    }
}

insertCard();
