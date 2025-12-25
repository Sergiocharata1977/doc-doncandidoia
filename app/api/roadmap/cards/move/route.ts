import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// POST: Mover tarjeta entre columnas (endpoint especial para IA)
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { cardId, toColumn, fromColumn } = body;

        if (!cardId || !toColumn) {
            return NextResponse.json(
                { error: 'cardId and toColumn are required' },
                { status: 400 }
            );
        }

        const docRef = doc(db, 'roadmap_cards', cardId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json(
                { error: 'Card not found' },
                { status: 404 }
            );
        }

        const now = Timestamp.now();
        await updateDoc(docRef, {
            columnId: toColumn,
            updatedAt: now,
        });

        // Opcional: Registrar en historial
        // await addDoc(collection(db, 'roadmap_history'), {
        //     cardId,
        //     fromColumn: fromColumn || docSnap.data().columnId,
        //     toColumn,
        //     movedAt: now,
        //     movedBy: 'IA',
        // });

        return NextResponse.json(
            {
                message: 'Card moved successfully',
                cardId,
                fromColumn: fromColumn || docSnap.data().columnId,
                toColumn,
                movedAt: now.toDate().toISOString(),
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error moving card:', error);
        return NextResponse.json(
            { error: 'Failed to move card' },
            { status: 500 }
        );
    }
}
