import React, { useState, useEffect, useRef } from 'react'
import { Send, Mail, MessageCircle } from 'lucide-react'

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('')
  const [telegramNickname, setTelegramNickname] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки email и telegram nickname
    console.log('Email submitted:', email)
    console.log('Telegram nickname:', telegramNickname)
    setEmail('')
    setTelegramNickname('')
  }

  return (
    <section ref={sectionRef} id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-500/30 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl font-bold text-white mb-4">
            Запуск бета-теста в первом квартале 2026 года. Первые пользователи получат бонус!
            </h2>
            <p className="text-xl sm:text-xl text-primary-50 max-w-2xl mx-auto">
              Оставьте свои контакты — пришлём доступ ближе к старту.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    required
                    className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-transparent focus:border-white bg-white/90 backdrop-blur-sm text-neutral-900 placeholder-neutral-500 outline-none transition-all text-lg"
                  />
                </div>
                <div className="flex-1 relative">
                  <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                  <input
                    type="text"
                    value={telegramNickname}
                    onChange={(e) => setTelegramNickname(e.target.value)}
                    placeholder="@nickname в Telegram"
                    className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-transparent focus:border-white bg-white/90 backdrop-blur-sm text-neutral-900 placeholder-neutral-500 outline-none transition-all text-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group bg-white text-primary-500 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Хочу в waitlist
              </button>
            </div>
            <p className="text-center text-primary-100 text-sm">
              Без спама. Только уведомление о запуске.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

