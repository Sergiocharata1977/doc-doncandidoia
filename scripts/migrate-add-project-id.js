const admin = require('firebase-admin');
const path = require('path');

// Cargar service account
const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');

// Verificar si existe el archivo
const fs = require('fs');
if (!fs.existsSync(serviceAccountPath)) {
    console.error('❌ Error: No se encontró service-account.json');
    console.log('📝 Por favor, descarga las credenciales de Firebase Admin SDK y guárdalas como service-account.json en la raíz del proyecto');
    process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

// Inicializar Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function migrateCards() {
    console.log('🚀 Iniciando migración de tarjetas...\n');

    try {
        const cardsRef = db.collection('roadmap_cards');
        const snapshot = await cardsRef.get();

        if (snapshot.empty) {
            console.log('ℹ️  No hay tarjetas para migrar');
            process.exit(0);
        }

        console.log(`📊 Encontradas ${snapshot.size} tarjetas\n`);

        const batch = db.batch();
        let count = 0;

        snapshot.forEach(doc => {
            const data = doc.data();

            // Solo actualizar si no tiene projectId
            if (!data.projectId) {
                batch.update(doc.ref, {
                    projectId: '9001app-firebase'
                });
                count++;
                console.log(`  ✓ Tarjeta "${data.title}" → projectId: 9001app-firebase`);
            } else {
                console.log(`  ⊘ Tarjeta "${data.title}" ya tiene projectId: ${data.projectId}`);
            }
        });

        if (count > 0) {
            await batch.commit();
            console.log(`\n✅ Migración completada: ${count} tarjetas actualizadas`);
        } else {
            console.log('\n✅ Todas las tarjetas ya tienen projectId');
        }

    } catch (error) {
        console.error('\n❌ Error durante la migración:', error.message);
        process.exit(1);
    }

    process.exit(0);
}

migrateCards();
