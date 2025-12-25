import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDc_urttvq_lpxahVelTXDiv85ahUNCLrw",
    authDomain: "docs-9001app-roadmap.firebaseapp.com",
    projectId: "docs-9001app-roadmap",
    storageBucket: "docs-9001app-roadmap.firebasestorage.app",
    messagingSenderId: "76263050038",
    appId: "1:76263050038:web:5801a2d2674157a82c0197",
    measurementId: "G-5S1MQRQE12"
};

// Evitar reinicializar en hot reload
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
export const db = getFirestore(app);

export default app;
