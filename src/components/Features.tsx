import React, { useState, useEffect, useRef } from 'react'
import { Bell, TrendingUp, Users, Download, Clock } from 'lucide-react'

const features = [
  {
    icon: Bell,
    title: 'Мгновенные уведомления',
    description: 'Получайте push-уведомления в Telegram сразу после появления упоминания'
  },
  {
    icon: TrendingUp,
    title: 'Анализ тональности',
    description: 'Автоматическое определение позитивных, негативных и нейтральных упоминаний'
  },
  {
    icon: Users,
    title: 'Отслеживание конкурентов',
    description: 'Следите за упоминаниями конкурентов и сравнивайте с вашими показателями'
  },
  {
    icon: Download,
    title: 'Экспорт отчётов',
    description: 'Выгружайте данные в Excel и PDF для анализа и презентаций'
  },
  {
    icon: Clock,
    title: 'История упоминаний',
    description: 'Полный архив всех упоминаний с возможностью поиска и фильтрации'
  }
]

export const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(features.length).fill(false))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150)
          })
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Возможности
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Всё необходимое для эффективного мониторинга репутации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleFeatures[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-primary-100/50 border border-primary-100 hover:shadow-2xl hover:shadow-primary-200/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/30">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
