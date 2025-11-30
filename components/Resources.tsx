import React from 'react';
import { BookOpen, Youtube, FileText, Lightbulb } from 'lucide-react';

export const Resources: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Ресурсы и Обучение</h2>
        <p className="text-gray-400">
          Улучшайте свои навыки промпт-инжиниринга с помощью этих материалов.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" />
            Базовые принципы
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="font-bold text-brand-400 mb-2">Контекст - это король</h4>
              <p className="text-sm text-gray-300">
                Всегда задавайте роль ИИ (Persona). Например: "Ты опытный маркетолог с 10-летним стажем".
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="font-bold text-brand-400 mb-2">Будьте специфичны</h4>
              <p className="text-sm text-gray-300">
                Избегайте абстракций. Вместо "напиши статью", пишите "напиши статью на 500 слов с 3 подзаголовками".
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="font-bold text-brand-400 mb-2">Итеративность</h4>
              <p className="text-sm text-gray-300">
                Промптинг — это диалог. Если результат плохой, попросите ИИ исправить конкретную часть.
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="font-bold text-brand-400 mb-2">Формат вывода</h4>
              <p className="text-sm text-gray-300">
                Указывайте, в каком виде вы хотите получить ответ: таблица, JSON, список, Markdown.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:bg-gray-750 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-400" />
              Полезные статьи
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="block group">
                  <span className="text-brand-300 group-hover:text-brand-200 font-medium">OpenAI Prompt Engineering Guide</span>
                  <p className="text-xs text-gray-500">Официальное руководство от создателей ChatGPT.</p>
                </a>
              </li>
              <li>
                <a href="#" className="block group">
                  <span className="text-brand-300 group-hover:text-brand-200 font-medium">Midjourney Documentation</span>
                  <p className="text-xs text-gray-500">Полный список команд и параметров.</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:bg-gray-750 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Youtube className="w-5 h-5 mr-2 text-red-500" />
              Видеоуроки (Рекомендации)
            </h3>
            <div className="space-y-4">
               <div className="flex items-start space-x-3">
                 <div className="w-24 h-16 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Thumbnail</span>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-white">Как писать промты для ChatGPT</p>
                   <p className="text-xs text-gray-500 mt-1">Основы за 10 минут</p>
                 </div>
               </div>
               <div className="flex items-start space-x-3">
                 <div className="w-24 h-16 bg-gray-700 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Thumbnail</span>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-white">Midjourney v6: Полный гайд</p>
                   <p className="text-xs text-gray-500 mt-1">От новичка до профи</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};