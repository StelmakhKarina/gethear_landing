import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react'
import logo from '../assets/logo.svg'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-primary-100/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo */}
          <div className="justify-self-start">
            <a href="#" className="flex items-center gap-3 group">
              <img src={logo} alt="GetHears" className="h-8" />
            </a>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <a href="#how-it-works" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium whitespace-nowrap">
              Как работает
            </a>
            <a href="#sources" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">
              Источники
            </a>
            <a href="#features" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">
              Возможности
            </a>
            <a href="#pricing" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">
              Тарифы
            </a>
          </nav>

          {/* Telegram Link */}
          <div className="justify-self-end">
            <a 
              href="https://t.me/gethears" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              aria-label="Telegram канал"
            >
              <Send className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
