/**
 * Script para agregar cards de tareas al Kanban de docs-9001app
 * 
 * INSTRUCCIONES:
 * 1. Ir a http://localhost:3001/roadmaps (docs-9001app)
 * 2. Abrir la consola del navegador (F12)
 * 3. Copiar y pegar este código en la consola
 * 4. Presionar Enter
 */

const projectCards = [
    {
        title: 'Pruebas Multi-Tenant (Organizaciones + Usuarios)',
        description: `Sistema completo de pruebas para multi-tenancy:

**Organizaciones:**
- PM-ORG-001: Crear nueva organización
- PM-ORG-002: Flujo nuevo usuario → credenciales
- PM-ORG-003: Verificar aislamiento de datos

**Usuarios:**
- PM-USER-001: Crear usuario con rol
- PM-USER-002: Configurar módulos habilitados
- PM-USER-003: Verificar restricción por rol
- PM-USER-004: Verificar acceso a secciones privadas

**Tests Automatizados:**
\`\`\`bash
# E2E
npx playwright test e2e/organizations/
npx playwright test e2e/users/

# Unit
npm test src/__tests__/api/organizations.test.ts
npm test src/__tests__/api/users.integration.test.ts
\`\`\`

**Archivos:**
- e2e/organizations/create-organization.spec.ts
- e2e/organizations/organization-user-flow.spec.ts
- e2e/users/create-user.spec.ts
- e2e/users/modulos-habilitados.spec.ts
- src/__tests__/api/organizations.test.ts
- src/__tests__/api/users.integration.test.ts`,
        columnId: 'testing',
        priority: 'high',
        module: 'QA',
        tags: ['testing', 'multi-tenant', 'e2e', 'unit-tests', 'organizations', 'users'],
        assignee: 'QA Team',
        checklistQA: [
            { id: 'qa1', label: 'Ejecutar pruebas manuales de organizaciones', done: false },
            { id: 'qa2', label: 'Ejecutar pruebas manuales de usuarios', done: false },
            { id: 'qa3', label: 'Ejecutar tests E2E automatizados', done: false },
            { id: 'qa4', label: 'Ejecutar tests unitarios', done: false },
            { id: 'qa5', label: 'Verificar en Firebase Console', done: false },
            { id: 'qa6', label: 'Documentar resultados', done: false }
        ],
        checklistIntegracion: [
            { id: 'int1', label: 'Verificar APIs de organizaciones', done: false },
            { id: 'int2', label: 'Verificar APIs de usuarios', done: false },
            { id: 'int3', label: 'Verificar reglas Firestore', done: false },
            { id: 'int4', label: 'Verificar aislamiento de datos', done: false }
        ]
    },
    {
        title: 'Control Multi-Tenant para IA Don Cándido',
        description: `Sistema de control para garantizar aislamiento de contexto por organización en IA:

**Implementado:**
✅ Validación de organization_id en UserService
✅ Cache aislado por organización
✅ Middleware de verificación multi-tenant
✅ Endpoint de health check: \`/api/ia/health\`
✅ Logs estructurados con organization_id
✅ Tests E2E de aislamiento

**Health Check:**
\`\`\`bash
curl "http://localhost:3000/api/ia/health?userId=<UID>"
\`\`\`

**Verificar Contexto:**
\`\`\`bash
curl "http://localhost:3000/api/ia/context?userId=<UID>&light=true"
\`\`\`

**Tests:**
\`\`\`bash
npx playwright test e2e/ia/context-isolation.spec.ts
\`\`\`

**Archivos:**
- src/middleware/verifyOrganization.ts
- src/app/api/ia/health/route.ts
- src/services/auth/UserService.ts (modificado)
- src/services/context/UserContextService.ts (modificado)
- e2e/ia/context-isolation.spec.ts

**Pendiente:**
⚠️ Migrar usuarios existentes con organization_id`,
        columnId: 'control',
        priority: 'high',
        module: 'IA-Contextual',
        tags: ['ia', 'multi-tenant', 'security', 'context', 'don-candido'],
        assignee: 'Dev Team',
        checklistQA: [
            { id: 'qa1', label: 'Verificar health check funciona', done: false },
            { id: 'qa2', label: 'Probar obtención de contexto', done: false },
            { id: 'qa3', label: 'Ejecutar tests de aislamiento', done: false },
            { id: 'qa4', label: 'Verificar logs con organization_id', done: false },
            { id: 'qa5', label: 'Probar con múltiples organizaciones', done: false }
        ],
        checklistIntegracion: [
            { id: 'int1', label: 'Migrar usuarios existentes', done: false },
            { id: 'int2', label: 'Verificar super_admin sin org_id', done: false },
            { id: 'int3', label: 'Integrar con Don Cándido', done: false },
            { id: 'int4', label: 'Monitorear en producción', done: false }
        ]
    }
];

// Código para ejecutar en la consola del navegador
console.log('🚀 Agregando cards de proyectos al Kanban...\n');

async function addCardsToFirestore() {
    const { db } = await import('./lib/firebase');
    const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

    try {
        for (const cardData of projectCards) {
            await addDoc(collection(db, 'roadmap_cards'), {
                ...cardData,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                createdBy: 'system'
            });
            console.log(`✅ Card creada: "${cardData.title}"`);
        }

        console.log(`\n🎉 ${projectCards.length} cards agregadas exitosamente!`);
        console.log('\n📋 Las cards deberían aparecer automáticamente en el Kanban.');
    } catch (error) {
        console.error('❌ Error:', error);
    }
}

// Ejecutar
addCardsToFirestore();
