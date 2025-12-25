/**
 * Script para insertar tarjeta de don-candido-finanzas en el roadmap
 * Ejecutar con: node scripts/insert-don-candido-card.js
 */

const API_BASE = 'http://localhost:3001';

async function insertCard() {
    const card = {
        title: 'Configurar Firebase y Super Admin en don-candido-finanzas',
        description: `## Tarea Pendiente

El proyecto don-candido-finanzas necesita:

1. **Configurar credenciales de Firebase** en \`.env.local\`:
   - FIREBASE_PROJECT_ID
   - FIREBASE_CLIENT_EMAIL
   - FIREBASE_PRIVATE_KEY
   - FIREBASE_STORAGE_BUCKET

2. **Ejecutar script de Super Admin**:
   \`\`\`bash
   node scripts/create-super-admin.js
   \`\`\`

3. **Verificar login** con sergio@empresa.com

## Contexto
Los otros dos proyectos (9001app-firebase y sig-agro) ya tienen el Super Admin configurado.`,
        status: 'backlog',
        priority: 'high',
        projectId: 'don-candido-finanzas',
        tags: ['firebase', 'super-admin', 'configuración']
    };

    try {
        const response = await fetch(`${API_BASE}/api/roadmap/cards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(card),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('✅ Tarjeta creada exitosamente:', result.id);
        console.log('   Título:', card.title);
        console.log('   Estado:', card.status);
        console.log('   Prioridad:', card.priority);
    } catch (error) {
        console.error('❌ Error al crear tarjeta:', error.message);
    }
}

insertCard();
