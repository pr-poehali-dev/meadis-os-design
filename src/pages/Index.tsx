import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    {
      src: '/img/9384817e-672d-48a3-9eff-445e7f6a4caf.jpg',
      title: 'Основной интерфейс',
      description: 'Современный рабочий стол с чистым дизайном'
    },
    {
      src: '/img/c6e6fff2-7a5d-4a80-8084-676b7e00ce61.jpg',
      title: 'Системные настройки',
      description: 'Удобная панель управления системой'
    },
    {
      src: '/img/0e09c415-62a2-4a75-8673-9009438d27f4.jpg',
      title: 'Файловый менеджер',
      description: 'Организация файлов и папок'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#e3eaf2] to-[#d6e4f0]">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#005a9e] flex items-center justify-center shadow-lg">
                <Icon name="Laptop" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#0078D4] to-[#005a9e] bg-clip-text text-transparent">
                MEADIS OS
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'download', label: 'Скачать', icon: 'Download' },
                { id: 'gallery', label: 'Галерея', icon: 'Images' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-white/60 text-[#0078D4] shadow-md'
                      : 'text-gray-700 hover:bg-white/40'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg">
                <span className="text-[#0078D4] font-semibold text-sm">Операционная система будущего</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#0078D4] via-[#005a9e] to-[#0078D4] bg-clip-text text-transparent">
                  Meadis OS
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Уникальная операционная система, созданная в PowerPoint для полной симуляции современной ОС. 
                Испытайте будущее интерфейсов прямо сейчас.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('download')}
                  size="lg" 
                  className="bg-gradient-to-r from-[#0078D4] to-[#005a9e] hover:from-[#005a9e] hover:to-[#004578] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg rounded-xl"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать систему
                </Button>
                <Button 
                  onClick={() => scrollToSection('gallery')}
                  size="lg" 
                  variant="outline"
                  className="backdrop-blur-sm bg-white/60 border-2 border-white/60 hover:bg-white/80 shadow-lg px-8 py-6 text-lg rounded-xl"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть галерею
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                {[
                  { icon: 'Zap', label: 'Быстрая', desc: 'производительность' },
                  { icon: 'Shield', label: 'Надёжная', desc: 'безопасность' },
                  { icon: 'Sparkles', label: 'Современный', desc: 'дизайн' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-md">
                      <Icon name={feature.icon as any} className="text-[#0078D4]" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{feature.label}</div>
                      <div className="text-sm text-gray-600">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/20 to-[#005a9e]/20 rounded-3xl blur-3xl animate-glow"></div>
              <Card className="relative backdrop-blur-xl bg-white/40 border-2 border-white/60 shadow-2xl rounded-3xl overflow-hidden p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/40">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Meadis Desktop</span>
                  </div>
                  <img 
                    src="/img/9384817e-672d-48a3-9eff-445e7f6a4caf.jpg" 
                    alt="Meadis OS Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0078D4] to-[#005a9e] bg-clip-text text-transparent">
              Скачать Meadis OS
            </h2>
            <p className="text-xl text-gray-700">
              Получите доступ к уникальной операционной системе прямо сейчас
            </p>
          </div>

          <Card className="backdrop-blur-xl bg-white/40 border-2 border-white/60 shadow-2xl rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#005a9e] flex items-center justify-center shadow-lg flex-shrink-0">
                    <Icon name="Package" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Системные требования</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-[#0078D4]" size={16} />
                        <span>Microsoft PowerPoint 2016+</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-[#0078D4]" size={16} />
                        <span>Windows 10/11 или macOS</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-[#0078D4]" size={16} />
                        <span>Минимум 4 ГБ RAM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-[#0078D4]" size={16} />
                        <span>500 МБ свободного места</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#005a9e] flex items-center justify-center shadow-lg flex-shrink-0">
                    <Icon name="FileText" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Что включено</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Icon name="Sparkles" className="text-[#0078D4]" size={16} />
                        <span>Полный интерфейс ОС</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Sparkles" className="text-[#0078D4]" size={16} />
                        <span>Встроенные приложения</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Sparkles" className="text-[#0078D4]" size={16} />
                        <span>Интерактивные элементы</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Sparkles" className="text-[#0078D4]" size={16} />
                        <span>Инструкция по установке</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border border-white/60 shadow-lg">
                  <div className="text-4xl font-bold text-gray-800 mb-2">v2.0</div>
                  <div className="text-gray-600 mb-6">Последняя версия</div>
                  <div className="space-y-3">
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#0078D4] to-[#005a9e] hover:from-[#005a9e] hover:to-[#004578] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl text-lg py-6"
                    >
                      <Icon name="Download" className="mr-2" size={20} />
                      Скачать (.pptx)
                    </Button>
                    <div className="text-sm text-gray-600">Размер файла: 45 МБ</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600 bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <Icon name="Info" size={20} className="text-[#0078D4] flex-shrink-0" />
                  <span>Файл безопасен и проверен. Используйте PowerPoint в режиме показа слайдов для лучшего опыта.</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0078D4] to-[#005a9e] bg-clip-text text-transparent">
              Галерея интерфейса
            </h2>
            <p className="text-xl text-gray-700">
              Познакомьтесь с возможностями Meadis OS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {galleryImages.map((image, idx) => (
              <Card 
                key={idx}
                className="group backdrop-blur-xl bg-white/40 border-2 border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Eye" size={16} />
                        <span className="text-sm font-medium">Посмотреть подробнее</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block backdrop-blur-xl bg-white/40 border-2 border-white/60 shadow-xl rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#005a9e] flex items-center justify-center shadow-lg">
                  <Icon name="Presentation" className="text-white" size={32} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-2xl text-gray-800 mb-2">
                    Создано в PowerPoint
                  </h3>
                  <p className="text-gray-700">
                    Полностью функциональная симуляция операционной системы с интерактивными элементами и современным дизайном
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="backdrop-blur-xl bg-white/30 border-t border-white/20 shadow-lg py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#005a9e] flex items-center justify-center shadow-lg">
                <Icon name="Laptop" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#0078D4] to-[#005a9e] bg-clip-text text-transparent">
                MEADIS OS
              </span>
            </div>
            <div className="text-gray-600">
              © 2024 Meadis OS. Операционная система будущего.
            </div>
            <div className="flex gap-4">
              {['Github', 'Mail', 'MessageCircle'].map((icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/80 transition-all shadow-md hover:shadow-lg"
                >
                  <Icon name={icon as any} size={20} className="text-gray-700" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
