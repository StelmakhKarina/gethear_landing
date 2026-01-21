import React, { useState, useEffect, useRef } from 'react'
import { Check, Sparkles, X } from 'lucide-react'

interface Plan {
  name: string
  priceMonthly: number
  priceYearly: number
  description: string
  features: string[]
  popular: boolean
  cta: string
  bestFor: string[]
}

const plans: Plan[] = [
  {
    name: 'Для небольшого проекта',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Начните бесплатно',
    features: [
      '1 проект',
      '30 проверок/месяц',
      'Проверка 1 раз в день',
      'История 7 дней',
      'Email + Telegram уведомления'
    ],
    popular: false,
    cta: 'Начать бесплатно',
    bestFor: [
      'Тестируете идею',
      'Личный блог или малый проект',
      'Нужен базовый мониторинг'
    ]
  },
  {
    name: 'Для малого и среднего бизнеса',
    priceMonthly: 1990,
    priceYearly: 19900,
    description: 'Оптимально для роста',
    features: [
      '3 проекта',
      '500 проверок/месяц',
      'Проверка каждые 6 часов',
      'История 30 дней',
      'Экспорт в Excel',
      'Базовая аналитика'
    ],
    popular: true,
    cta: '14 дней бесплатно',
    bestFor: [
      'Развиваете бизнес',
      'Нужна регулярная аналитика',
      'Работаете с несколькими проектами'
    ]
  },
  {
    name: 'Для профессионалов в медиа и PR',
    priceMonthly: 4990,
    priceYearly: 49900,
    description: 'Максимум возможностей',
    features: [
      '10 проектов',
      '2,000 проверок/месяц',
      'Проверка каждый час',
      'История 90 дней',
      'Расширенная аналитика',
      'API доступ',
      'Мониторинг 3 конкурентов',
      'Анализ тональности',
      'Приоритетная поддержка'
    ],
    popular: false,
    cta: '14 дней бесплатно',
    bestFor: [
      'PR-агентство или медиа',
      'Глубокий анализ рынка',
      'Отслеживание конкурентов'
    ]
  }
]

const allFeatures = [
  { name: 'Количество проектов', values: ['1', '3', '10'] },
  { name: 'Проверок в месяц', values: ['30', '500', '2,000'] },
  { name: 'Частота проверки', values: ['1 раз в день', 'Каждые 6 часов', 'Каждый час'] },
  { name: 'История хранения', values: ['7 дней', '30 дней', '90 дней'] },
  { name: 'Email уведомления', values: [true, true, true] },
  { name: 'Telegram уведомления', values: [true, true, true] },
  { name: 'Экспорт в Excel', values: [false, true, true] },
  { name: 'Базовая аналитика', values: [false, true, true] },
  { name: 'Расширенная аналитика', values: [false, false, true] },
  { name: 'Мониторинг конкурентов', values: [false, false, true] },
  { name: 'Анализ тональности', values: [false, false, true] },
  { name: 'API доступ', values: [false, false, true] },
  { name: 'Приоритетная поддержка', values: [false, false, true] }
]

const faqs = [
  {
    question: 'Как сменить тариф?',
    answer: 'Вы можете сменить тариф в любой момент в личном кабинете. При повышении тарифа разница будет пересчитана пропорционально. При понижении новый тариф активируется с начала следующего периода.'
  },
  {
    question: 'Что происходит после окончания trial-периода?',
    answer: 'После окончания 14-дневного пробного периода вам будет предложено выбрать тариф и оплатить подписку. Если оплата не будет произведена, аккаунт перейдёт на бесплатный тариф с ограниченными возможностями.'
  },
  {
    question: 'Какие методы оплаты вы принимаете?',
    answer: 'Мы принимаем все российские карты (МИР, Visa, Mastercard), СБП, ЮMoney, QIWI. Для юридических лиц доступна оплата по счёту с НДС.'
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'Да, мы предоставляем полный возврат в течение 14 дней с момента оплаты, если услуга вам не подошла. Средства возвращаются тем же способом, которым была произведена оплата.'
  }
]

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [visiblePlans, setVisiblePlans] = useState<boolean[]>(new Array(plans.length).fill(false))
  const [showComparison, setShowComparison] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          plans.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePlans(prev => {
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

  const calculatePrice = (plan: Plan) => {
    if (plan.priceMonthly === 0) return 0
    return isYearly ? plan.priceYearly : plan.priceMonthly
  }

  const calculateSavings = (plan: Plan) => {
    if (plan.priceMonthly === 0) return 0
    return Math.round((1 - plan.priceYearly / (plan.priceMonthly * 12)) * 100)
  }

  return (
    <section ref={sectionRef} id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Тарифы
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Выберите подходящий план для вашего бизнеса
          </p>

          {/* Month/Year Toggle */}
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-primary-100">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isYearly
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                  : 'text-neutral-700 hover:text-primary-500'
              }`}
            >
              Месяц
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                  : 'text-neutral-700 hover:text-primary-500'
              }`}
            >
              Год
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-20%</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary-500" />
            <span>Без привязки карты</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary-500" />
            <span>Отмена в любой момент</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary-500" />
            <span>Российские платежи</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary-500" />
            <span>Поддержка 24/7</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visiblePlans[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${plan.popular ? 'md:-translate-y-4' : ''}`}
            >
              <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border h-full flex flex-col ${
                plan.popular 
                  ? 'border-primary-500 shadow-primary-200/50 shadow-2xl' 
                  : 'border-primary-100 shadow-primary-100/50'
              } hover:shadow-2xl hover:shadow-primary-200/50 transition-all duration-300`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Популярный
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                      {calculatePrice(plan).toLocaleString('ru-RU')}
                    </span>
                    <span className="text-neutral-600">₽</span>
                  </div>
                  <div className="text-neutral-500 text-sm mt-1">
                    {plan.priceMonthly === 0 ? 'навсегда' : isYearly ? 'в год' : 'в месяц'}
                  </div>
                  {isYearly && plan.priceMonthly > 0 && (
                    <div className="mt-2 text-sm text-green-600 font-semibold">
                      Экономия {calculateSavings(plan)}%
                    </div>
                  )}
                </div>

                {/* Best For */}
                <div className="mb-6 bg-primary-50 rounded-2xl p-4">
                  <div className="text-sm font-semibold text-primary-900 mb-2">Вам подойдёт, если:</div>
                  <ul className="space-y-1">
                    {plan.bestFor.map((item, i) => (
                      <li key={i} className="text-sm text-primary-700 flex items-start gap-2">
                        <span className="text-primary-500 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      </div>
                      <span className="text-neutral-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105'
                    : 'bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-primary-500 hover:text-primary-600 font-semibold underline decoration-2 underline-offset-4 transition-colors"
          >
            {showComparison ? 'Скрыть сравнение тарифов' : 'Сравнить все возможности'}
          </button>
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="mb-16 overflow-x-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-primary-100 p-8 min-w-max">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary-100">
                    <th className="text-left py-4 px-4 font-bold text-neutral-900">Возможности</th>
                    {plans.map((plan, index) => (
                      <th key={index} className="text-center py-4 px-6 font-bold text-neutral-900">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-primary-50 hover:bg-primary-50/50 transition-colors">
                      <td className="py-4 px-4 text-neutral-700">{feature.name}</td>
                      {feature.values.map((value, valIndex) => (
                        <td key={valIndex} className="py-4 px-6 text-center">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="w-5 h-5 text-primary-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-neutral-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-neutral-700">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Часто задаваемые вопросы
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-100 hover:shadow-xl transition-shadow"
              >
                <h4 className="font-bold text-neutral-900 mb-3">{faq.question}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Contact Form */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary-500/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                Не уверены? Свяжитесь для консультации
              </h3>
              <p className="text-primary-100">
                Наши специалисты помогут подобрать оптимальный тариф для вашего бизнеса
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-white bg-white/90 backdrop-blur-sm text-neutral-900 placeholder-neutral-500 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-white bg-white/90 backdrop-blur-sm text-neutral-900 placeholder-neutral-500 outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  placeholder="Ваш вопрос"
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl border-2 border-transparent focus:border-white bg-white/90 backdrop-blur-sm text-neutral-900 placeholder-neutral-500 outline-none transition-all resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-white text-primary-500 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Отправить запрос
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
