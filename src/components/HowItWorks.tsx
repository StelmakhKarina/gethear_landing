import React, { useState, useEffect, useRef } from 'react'
import lentaSvg from '../assets/lenta.svg'
import dashboardSvg from '../assets/dashboard.svg'
import reportsSvg from '../assets/reports.svg'
import autosborSvg from '../assets/autosbor.svg'
import publicSvg from '../assets/public.svg'

const tabs = [
  {
    id: 'collection',
    title: 'Сбор упоминаний',
    image: lentaSvg,
    description: 'Сбор и хранение упоминаний из 350+ источников: СМИ, новостные порталы, блоги, форумы. Получайте информацию в реальном времени.'
  },
  {
    id: 'analytics',
    title: 'Аналитика',
    image: dashboardSvg,
    description: 'Анализ упоминаний с определением тональности и отслеживанием динамики обсуждений, ТОПом источников, регионов, топиков.'
  },
  {
    id: 'reports',
    title: 'Отчёты',
    image: reportsSvg,
    description: 'Генерация Excel и PDF-отчётов для демонстрации руководству или клиентам. Настраиваемые периоды и фильтры по источникам.'
  },
  {
    id: 'autocollect',
    title: 'Автосбор',
    image: autosborSvg,
    description: 'Автоматический сбор упоминаний по ключевым словам с нужной частотой и отправкой уведомлений. Система работает без вашего участия.'
  },
  {
    id: 'publications',
    title: 'Учёт публикаций',
    image: publicSvg,
    description: 'Централизованный учёт всех публикаций с возможностью категоризации, поиска, ведением базы данных СМИ и авторов.'
  }
]

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
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

  const activeTabData = tabs[activeTab]

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Возможности
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Всё необходимое, чтобы превращать чужие новости в свой трафик
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-neutral-700 hover:bg-white hover:text-primary-600 border border-primary-100 hover:border-primary-300 hover:shadow-md'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className={`mb-12 transition-all duration-700 delay-250 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-lg text-neutral-600 leading-relaxed text-center max-w-3xl mx-auto">
            {activeTabData.description}
          </p>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-primary-100/50 overflow-hidden">
            <div className="relative w-full">
              <img
                src={activeTabData.image}
                alt={activeTabData.title}
                className="w-full h-auto object-cover transition-all duration-500"
                key={activeTab}
              />
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
