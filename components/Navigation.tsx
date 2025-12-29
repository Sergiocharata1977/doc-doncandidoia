'use client'

import { Book, HelpCircle, Home, Menu, Target, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">9</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 dark:text-white">
                9001 App
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Manual de Usuario
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-2" />
              Inicio
            </Link>

            <Link
              href="/manual-usuario"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
            >
              <Book className="w-4 h-4 mr-2" />
              Módulos
            </Link>

            <Link
              href="/manual-usuario/casos-uso"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
            >
              <Target className="w-4 h-4 mr-2" />
              Casos de Uso
            </Link>

            <Link
              href="/manual-usuario/faq"
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-4 h-4 mr-3" />
                Inicio
              </Link>

              <Link
                href="/manual-usuario"
                className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Book className="w-4 h-4 mr-3" />
                Módulos
              </Link>

              <Link
                href="/manual-usuario/casos-uso"
                className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Target className="w-4 h-4 mr-3" />
                Casos de Uso
              </Link>

              <Link
                href="/manual-usuario/faq"
                className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <HelpCircle className="w-4 h-4 mr-3" />
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
