import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Generator } from './components/Generator';
import { Catalog } from './components/Catalog';
import { Resources } from './components/Resources';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onStart={() => setActiveTab('generator')} />
            <div id="how-it-works" className="py-24 bg-gray-900/50">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Как это работает?</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-400">
                    Три простых шага отделяют вас от идеального результата.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {[
                      {
                        title: '1. Опишите идею',
                        description: 'Введите любой текст, даже самый простой. Например: "Красивая девушка в лесу".'
                      },
                      {
                        title: '2. Выберите ИИ',
                        description: 'Укажите, для кого готовим промт: Midjourney, ChatGPT, DALL-E или другие.'
                      },
                      {
                        title: '3. Получите результат',
                        description: 'Наш алгоритм перепишет ваш запрос, добавит детали, стили и технические параметры.'
                      },
                    ].map((feature) => (
                      <div key={feature.title} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-brand-500 transition-colors">
                        <dt className="text-xl font-semibold leading-7 text-white">
                          {feature.title}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                          <p className="flex-auto">{feature.description}</p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </>
        );
      case 'generator':
        return (
          <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-[#111827] to-gray-900">
            <Generator />
          </div>
        );
      case 'catalog':
        return (
          <div className="pt-20 min-h-screen bg-gray-900">
            <Catalog />
          </div>
        );
      case 'resources':
        return (
          <div className="pt-20 min-h-screen bg-gray-900">
            <Resources />
          </div>
        );
      default:
        return <Hero onStart={() => setActiveTab('generator')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-brand-500 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 PromptMaster AI. Powered by Google Gemini.</p>
      </footer>
    </div>
  );
};

export default App;