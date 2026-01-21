import React, { useState, useEffect } from 'react'
import { Send } from 'lucide-react'

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
            Ловите <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">инфоповоды</span> первыми
          </h1>
          
          <p className="text-xl sm:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto">
            Мониторинг упоминаний в реальном времени. Узнавайте о горящих темах и превращайте их в охваты, лиды и продажи.
          </p>
          {/* CTA Button */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a 
              href="#waitlist"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Записаться в лист ожидания
            </a>
            
            <div className="mt-2 text-xs text-neutral-500">
              Запуск в 1Q 2026. Первые получат бонус!
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className={`mt-20 flex items-center justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-float">
            <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-primary-200/50 p-8 border border-primary-100">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 mb-2">350+</div>
                  <div className="text-sm text-neutral-600">источников (база пополняется)</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 mb-2">5 минут</div>
                  <div className="text-sm text-neutral-600">на настройку</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 mb-2">60+</div>
                  <div className="text-sm text-neutral-600">часов экономии в месяц</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
