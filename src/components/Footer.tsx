import React from 'react'
import { Send, Mail, Phone, FileText, Users } from 'lucide-react'
import logo from '../assets/logo.svg'

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-primary-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="GetHears" className="h-8" />
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Мониторинг упоминаний бренда в российских СМИ и социальных сетях
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Продукт</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#sources" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Источники
                </a>
              </li>
              <li>
                <a href="#docs" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Документация
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Компания</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  О нас
                </a>
              </li>
              <li>
                <a href="#blog" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Блог
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#terms" className="text-neutral-600 hover:text-primary-500 transition-colors text-sm">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@gethears.ru" className="flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors text-sm group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  support@gethears.ru
                </a>
              </li>
              <li>
                <a href="tel:+78001234567" className="flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors text-sm group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  8 (800) 123-45-67
                </a>
              </li>
              <li>
                <a href="https://t.me/gethears" className="flex items-center gap-2 text-neutral-600 hover:text-primary-500 transition-colors text-sm group">
                  <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  @gethears
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-neutral-900 mb-3">Поддержка 24/7</h5>
              <p className="text-xs text-neutral-600">
                Мы всегда на связи и готовы помочь
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">
              © 2024 GetHears. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#telegram" className="text-neutral-600 hover:text-primary-500 transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#vk" className="text-neutral-600 hover:text-primary-500 transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="#docs" className="text-neutral-600 hover:text-primary-500 transition-colors">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
