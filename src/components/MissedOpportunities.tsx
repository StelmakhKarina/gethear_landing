import React, { useState, useEffect, useRef } from 'react'
import { Bell, PenTool, TrendingUp } from 'lucide-react'

export const MissedOpportunities: React.FC = () => {
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

  const steps = [
    {
      icon: Bell,
      title: 'Узнаёте сразу',
      description: 'Уведомление в Telegram в момент публикации новости по вашим темам'
    },
    {
      icon: PenTool,
      title: 'Пишете первым',
      description: 'Пост, комментарий, сторис — пока тема горячая'
    },
    {
      icon: TrendingUp,
      title: 'Ловите волну',
      description: 'Алгоритмы продвигают контент на трендовые темы. Вы в потоке — вас смотрят, читают, покупают.'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок и текст */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Сколько <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">охватов</span> вы упускаете каждый день?
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-neutral-600 leading-relaxed">
            <p>
              В вашей нише постоянно появляются инфоповоды — изменения в законах, новости, тренды, исследования. Каждый из них — шанс получить десятки тысяч просмотров, лиды и продажи. Бесплатно.
            </p>
            <p>
              Кто напишет быстрее — тот собрал охваты. Остальные опоздали.
            </p>
          </div>
        </div>

        {/* Подзаголовок */}
        <div className={`text-center mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h3 className="text-3xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
          Ньюсджекинг — PR, который продаёт здесь и сейчас
          </h3>
        </div>

        {/* Временная линия с тремя шагами */}
        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="relative">
            {/* Вертикальная линия для десктопа */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-500 transform -translate-x-1/2"></div>

            {/* Шаги */}
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => {
                const StepIcon = step.icon
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Иконка и круг */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 border-4 border-white">
                          <StepIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </div>
                        {/* Декоративный круг для десктопа */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 w-32 h-32 bg-primary-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30 blur-xl"></div>
                      </div>

                      {/* Текст */}
                      <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-100/50 border border-primary-100 hover:shadow-2xl hover:shadow-primary-200/50 transition-all duration-300">
                          <h4 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                            {step.title}
                          </h4>
                          <p className="text-lg text-neutral-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

