import { db } from '@/lib/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

export async function migrateCardsToMultiProject() {
    console.log('🚀 Iniciando migración de tarjetas...\n');

    try {
        const cardsRef = collection(db, 'roadmap_cards');
        const snapshot = await getDocs(cardsRef);

        if (snapshot.empty) {
            console.log('ℹ️  No hay tarjetas para migrar');
            return { success: true, count: 0, message: 'No hay tarjetas' };
        }

        console.log(`📊 Encontradas ${snapshot.size} tarjetas\n`);

        let count = 0;
        const promises: Promise<void>[] = [];

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
            return { success: true, count, message: `${count} tarjetas actualizadas` };
        } else {
            console.log('\n✅ Todas las tarjetas ya tienen projectId');
            return { success: true, count: 0, message: 'Todas las tarjetas ya tienen projectId' };
        }

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        console.error('\n❌ Error durante la migración:', error);
        return { success: false, count: 0, message: errorMessage };
    }
}
