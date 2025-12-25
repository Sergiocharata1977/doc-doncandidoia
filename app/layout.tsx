import { Navigation } from '@/components/Navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '9001 App - Documentación',
  description: 'Documentación oficial de 9001 App - Sistema de Gestión ISO 9001',
  keywords: ['ISO 9001', 'Documentación', 'Manual de Usuario', 'Manual de Programadores'],
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
