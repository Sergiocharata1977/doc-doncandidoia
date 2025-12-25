'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, addDoc, updateDoc, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { RoadmapCard } from '@/types/roadmap';

export function useFirestoreCards() {
    const [cards, setCards] = useState<RoadmapCard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const q = query(collection(db, 'roadmap_cards'), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const cardsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString(),
                    updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString() || new Date().toISOString(),
                })) as RoadmapCard[];

                setCards(cardsData);
                setLoading(false);
            },
            (err) => {
                console.error('Error fetching cards:', err);
                setError(err as Error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const addCard = async (card: Omit<RoadmapCard, 'id' | 'createdAt' | 'updatedAt'>) => {
        try {
            const now = Timestamp.now();
            await addDoc(collection(db, 'roadmap_cards'), {
                ...card,
                createdAt: now,
                updatedAt: now,
            });
        } catch (err) {
            console.error('Error adding card:', err);
            throw err;
        }
    };

    const updateCard = async (id: string, updates: Partial<RoadmapCard>) => {
        try {
            const cardRef = doc(db, 'roadmap_cards', id);
            await updateDoc(cardRef, {
                ...updates,
                updatedAt: Timestamp.now(),
            });
        } catch (err) {
            console.error('Error updating card:', err);
            throw err;
        }
    };

    const deleteCard = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'roadmap_cards', id));
        } catch (err) {
            console.error('Error deleting card:', err);
            throw err;
        }
    };

    return {
        cards,
        loading,
        error,
        addCard,
        updateCard,
        deleteCard,
    };
}
