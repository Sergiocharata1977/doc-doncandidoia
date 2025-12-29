import { Navigation } from '@/components/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '9001 App - Manual de Usuario',
  description: 'Manual de Usuario de 9001 App - Aprende a implementar y gestionar tu Sistema de Gestión de Calidad ISO 9001:2015',
  keywords: ['ISO 9001', 'Manual de Usuario', 'Sistema de Gestión de Calidad', 'SGC', 'Calidad'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
