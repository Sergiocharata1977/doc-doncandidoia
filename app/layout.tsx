import { MobileNav } from '@/components/MobileNav'
import { Sidebar } from '@/components/Sidebar'
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
        {/* Mobile Navigation */}
        <MobileNav />

        {/* Desktop Header */}
        <header className="hidden md:flex sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 h-16 items-center px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">9</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">9001 App</div>
              <div className="text-xs text-gray-500">Manual de Usuario</div>
            </div>
          </div>
        </header>

        {/* Main Layout with Sidebar */}
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-[calc(100vh-64px)] overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
