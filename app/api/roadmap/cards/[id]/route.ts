import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// GET: Obtener tarjeta por ID
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const docRef = doc(db, 'roadmap_cards', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json(
                { error: 'Card not found' },
                { status: 404 }
            );
        }

        const data = docSnap.data();

        // Convert all Timestamp fields to ISO strings
        const card = {
            id: docSnap.id,
            ...data,
            createdAt: data.createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
            updatedAt: data.updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
            dueDate: data.dueDate?.toDate?.()?.toISOString() || data.dueDate,
            startDate: data.startDate?.toDate?.()?.toISOString() || data.startDate,
        };

        return NextResponse.json({ card }, { status: 200 });
    } catch (error) {
        console.error('Error fetching card:', error);
        return NextResponse.json(
            { error: 'Failed to fetch card', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

// PUT: Actualizar tarjeta
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await req.json();

        const docRef = doc(db, 'roadmap_cards', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json(
                { error: 'Card not found' },
                { status: 404 }
            );
        }

        const updates = {
            ...body,
            updatedAt: Timestamp.now(),
        };

        await updateDoc(docRef, updates);

        return NextResponse.json(
            {
                id,
                ...docSnap.data(),
                ...updates,
                updatedAt: updates.updatedAt.toDate().toISOString(),
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating card:', error);
        return NextResponse.json(
            { error: 'Failed to update card' },
            { status: 500 }
        );
    }
}

// DELETE: Eliminar tarjeta
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const docRef = doc(db, 'roadmap_cards', id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return NextResponse.json(
                { error: 'Card not found' },
                { status: 404 }
            );
        }

        await deleteDoc(docRef);

        return NextResponse.json(
            { message: 'Card deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting card:', error);
        return NextResponse.json(
            { error: 'Failed to delete card' },
            { status: 500 }
        );
    }
}
