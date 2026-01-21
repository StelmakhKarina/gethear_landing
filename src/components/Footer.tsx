import React from 'react'
import { Send } from 'lucide-react'
import logo from '../assets/logo.svg'

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-primary-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="GetHears" className="h-8" />
          </div>

          {/* Description */}
          <p className="text-neutral-600 text-sm text-center">
            Мониторинг упоминаний в реальном времени.
          </p>

          {/* Telegram Link */}
          <a 
            href="https://t.me/+6GvC5Ymr12A2YmYy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            aria-label="Telegram канал"
          >
            <Send className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
          </a>

          {/* Made in Russia */}
          <p className="text-neutral-500 text-xs text-center">
            Сделано в России.
          </p>
        </div>
      </div>
    </footer>
  )
}
