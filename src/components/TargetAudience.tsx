import React, { useState, useEffect, useRef } from 'react'
import { Building2, Briefcase, UserCheck, TrendingUp } from 'lucide-react'

const targetAudiences = [
  {
    icon: Building2,
    title: 'Малый бизнес',
    description: 'Нет бюджета на рекламу и PR-отдел — но есть экспертиза. Ньюсджекинг даёт охваты бесплатно, если успеть первым.'
  },
  {
    icon: Briefcase,
    title: 'PR-специалисты и копирайтеры',
    description: 'Продавайте не тексты, а охваты, трафик и узнаваемость. Ловите инфоповод -> пишите текст -> получаете доказательство, что PR работает.'
  },
  {
    icon: UserCheck,
    title: 'Эксперты и консультанты',
    description: 'Экспертный комментарий на горячую тему — быстрый способ попасть в СМИ и получить доверие аудитории.'
  },
  {
    icon: TrendingUp,
    title: 'B2B-компании',
    description: 'Длинный цикл сделки, важна узнаваемость. Регулярные публикации на трендовые темы = вас знают, вам доверяют, у вас покупают.'
  }
]

export const TargetAudience: React.FC = () => {
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
    <section ref={sectionRef} id="target-audience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Для кого это 100% работает?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg shadow-primary-100/50 border border-primary-100 hover:shadow-xl hover:shadow-primary-200/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-primary-500/30">
                  <audience.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3">
                  {audience.title}
                </h3>
                
                <p className="text-sm lg:text-base text-neutral-600 leading-relaxed flex-grow">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

