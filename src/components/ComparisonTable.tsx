import React, { useState, useEffect, useRef } from 'react'
import { Check, X } from 'lucide-react'

interface ComparisonRow {
  feature: string
  medialogia: string | React.ReactNode
  dzen: string | React.ReactNode
  googleTrends: string | React.ReactNode
  gethears: string | React.ReactNode
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Цена',
    medialogia: 'от 50 000₽/год',
    dzen: 'Бесплатно',
    googleTrends: 'Бесплатно',
    gethears: 'Доступная подписка'
  },
  {
    feature: 'Автосбор новостей',
    medialogia: <Check className="w-5 h-5 text-primary-500 mx-auto" />,
    dzen: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    googleTrends: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    gethears: <Check className="w-5 h-5 text-primary-500 mx-auto" />
  },
  {
    feature: 'Telegram-уведомления',
    medialogia: <Check className="w-5 h-5 text-primary-500 mx-auto" />,
    dzen: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    googleTrends: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    gethears: <Check className="w-5 h-5 text-primary-500 mx-auto" />
  },
  {
    feature: 'Конкретизация запросов',
    medialogia: <Check className="w-5 h-5 text-primary-500 mx-auto" />,
    dzen: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    googleTrends: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    gethears: <Check className="w-5 h-5 text-primary-500 mx-auto" />
  },
  {
    feature: 'Аналитика',
    medialogia: <Check className="w-5 h-5 text-primary-500 mx-auto" />,
    dzen: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    googleTrends: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    gethears: <Check className="w-5 h-5 text-primary-500 mx-auto" />
  },
  {
    feature: 'Учёт публикаций',
    medialogia: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    dzen: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    googleTrends: <X className="w-5 h-5 text-neutral-300 mx-auto" />,
    gethears: <Check className="w-5 h-5 text-primary-500 mx-auto" />
  }
]

export const ComparisonTable: React.FC = () => {
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
    <section ref={sectionRef} id="comparison" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Почему не Медиалогия, Дзен или Google Trends?
          </h2>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-primary-100 p-6 md:p-8 overflow-x-auto">
            <div className="min-w-max mx-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary-100">
                    <th className="text-left py-4 px-4 md:px-6 font-bold text-neutral-900 min-w-[200px]">
                      Возможности
                    </th>
                    <th className="text-center py-4 px-4 md:px-6 font-bold text-neutral-900 min-w-[150px]">
                      Медиалогия
                    </th>
                    <th className="text-center py-4 px-4 md:px-6 font-bold text-neutral-900 min-w-[150px]">
                      Дзен Новости
                    </th>
                    <th className="text-center py-4 px-4 md:px-6 font-bold text-neutral-900 min-w-[150px]">
                      Google Trends
                    </th>
                    <th className="text-center py-4 px-4 md:px-6 font-bold text-neutral-900 min-w-[150px] bg-primary-50">
                      GetHears
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-primary-50 hover:bg-primary-50/50 transition-colors"
                    >
                      <td className="py-4 px-4 md:px-6 text-neutral-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-center text-neutral-700">
                        {typeof row.medialogia === 'string' ? (
                          <span>{row.medialogia}</span>
                        ) : (
                          row.medialogia
                        )}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-center text-neutral-700">
                        {typeof row.dzen === 'string' ? (
                          <span>{row.dzen}</span>
                        ) : (
                          row.dzen
                        )}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-center text-neutral-700">
                        {typeof row.googleTrends === 'string' ? (
                          <span>{row.googleTrends}</span>
                        ) : (
                          row.googleTrends
                        )}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-center text-neutral-700 bg-primary-50/30">
                        {typeof row.gethears === 'string' ? (
                          <span>{row.gethears}</span>
                        ) : (
                          row.gethears
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-neutral-600 mt-8 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          Медиалогия — для тех, у кого есть PR-отдел. Дзен — для тех, кому некуда спешить. GetHears — для тех, кто делает сам и быстро.
          </p>
        </div>
      </div>
    </section>
  )
}

