import React, { useState, useEffect, useRef } from 'react'
import { Send, Users, Newspaper, MessageSquare, FileText, Star } from 'lucide-react'

const sources = [
  {
    icon: Send,
    name: 'Telegram',
    description: 'Каналы и чаты'
  },
  {
    icon: Users,
    name: 'ВКонтакте',
    description: 'Группы и посты'
  },
  {
    icon: Newspaper,
    name: 'Новостные сайты',
    description: 'СМИ и порталы'
  },
  {
    icon: MessageSquare,
    name: 'Форумы',
    description: 'Обсуждения'
  },
  {
    icon: FileText,
    name: 'Блоги',
    description: 'Статьи и посты'
  },
  {
    icon: Star,
    name: 'Отзовики',
    description: 'Отзывы клиентов'
  }
]

export const Sources: React.FC = () => {
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

  return (
    <section ref={sectionRef} id="sources" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Источники мониторинга
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Охватываем все популярные площадки, где обсуждают ваш бренд
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {sources.map((source, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg shadow-primary-100/50 border border-primary-100 hover:shadow-xl hover:shadow-primary-200/50 transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-primary-500/30">
                  <source.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-2">
                  {source.name}
                </h3>
                
                <p className="text-sm text-neutral-600">
                  {source.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
