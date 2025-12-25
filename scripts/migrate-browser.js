// Script de migración usando Firebase Client SDK
// Ejecutar desde la consola del navegador en http://localhost:3001/roadmaps

import { db } from '../lib/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

async function migrateCards() {
    console.log('🚀 Iniciando migración de tarjetas...\n');

    try {
        const cardsRef = collection(db, 'roadmap_cards');
        const snapshot = await getDocs(cardsRef);

        if (snapshot.empty) {
            console.log('ℹ️  No hay tarjetas para migrar');
            return;
        }

        console.log(`📊 Encontradas ${snapshot.size} tarjetas\n`);

        let count = 0;
        const promises = [];

        snapshot.forEach((docSnap) => {
            const data = docSnap.data();

            // Solo actualizar si no tiene projectId
            if (!data.projectId) {
                const promise = updateDoc(doc(db, 'roadmap_cards', docSnap.id), {
                    projectId: '9001app-firebase'
                }).then(() => {
                    console.log(`  ✓ Tarjeta "${data.title}" → projectId: 9001app-firebase`);
                    count++;
                });
                promises.push(promise);
            } else {
                console.log(`  ⊘ Tarjeta "${data.title}" ya tiene projectId: ${data.projectId}`);
            }
        });

        if (promises.length > 0) {
            await Promise.all(promises);
            console.log(`\n✅ Migración completada: ${count} tarjetas actualizadas`);
            console.log('🔄 Recarga la página para ver los cambios');
        } else {
            console.log('\n✅ Todas las tarjetas ya tienen projectId');
        }

    } catch (error) {
        console.error('\n❌ Error durante la migración:', error);
    }
}

// Ejecutar migración
migrateCards();
