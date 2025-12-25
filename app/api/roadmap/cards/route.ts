import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, addDoc, Timestamp, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// GET: Obtener todas las tarjetas
export async function GET() {
    try {
        const q = query(collection(db, 'roadmap_cards'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        const cards = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
            updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
        }));

        return NextResponse.json({ cards }, { status: 200 });
    } catch (error) {
        console.error('Error fetching cards:', error);
        return NextResponse.json(
            { error: 'Failed to fetch cards' },
            { status: 500 }
        );
    }
}

// POST: Crear nueva tarjeta
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, description, columnId, priority, tags, assignee, dueDate, sprintId, module, taskType, projectId } = body;

        if (!title || !columnId) {
            return NextResponse.json(
                { error: 'title and columnId are required' },
                { status: 400 }
            );
        }

        const now = Timestamp.now();
        const newCard = {
            title,
            description: description || '',
            columnId,
            projectId: projectId || '9001app-firebase', // Default to 9001app if not specified
            priority: priority || 'medium',
            module: module || null,
            taskType: taskType || null,
            tags: tags || [],
            assignee: assignee || null,
            dueDate: dueDate || null,
            sprintId: sprintId || null,
            checklistQA: [],
            checklistIntegracion: [],
            createdAt: now,
            updatedAt: now,
        };

        const docRef = await addDoc(collection(db, 'roadmap_cards'), newCard);

        return NextResponse.json(
            {
                id: docRef.id,
                ...newCard,
                createdAt: now.toDate().toISOString(),
                updatedAt: now.toDate().toISOString(),
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating card:', error);
        return NextResponse.json(
            { error: 'Failed to create card' },
            { status: 500 }
        );
    }
}
