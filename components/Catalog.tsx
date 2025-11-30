import React from 'react';
import { CatalogItem } from '../types';
import { Image, MessageSquare, Code, Video } from 'lucide-react';

const aiCatalog: CatalogItem[] = [
  {
    id: '1',
    name: 'Midjourney v6',
    description: 'Лидер в генерации художественных изображений с высокой детализацией.',
    category: 'Image',
    bestFor: 'Арт, фотореализм, логотипы',
    example: '/imagine prompt: a futuristic city...'
  },
  {
    id: '2',
    name: 'ChatGPT (GPT-4)',
    description: 'Самый популярный текстовый ассистент с широким кругозором.',
    category: 'Text',
    bestFor: 'Кодинг, тексты, анализ',
    example: 'Act as a senior python developer...'
  },
  {
    id: '3',
    name: 'Stable Diffusion XL',
    description: 'Мощная модель с открытым исходным кодом для генерации изображений.',
    category: 'Image',
    bestFor: 'Локальная генерация, контроль',
    example: 'Masterpiece, best quality, 8k...'
  },
  {
    id: '4',
    name: 'Claude 3 Opus',
    description: 'Конкурент GPT-4, отличающийся "человечностью" и большим контекстным окном.',
    category: 'Text',
    bestFor: 'Длинные тексты, творчество',
    example: 'Analyze this document and summarize...'
  },
  {
    id: '5',
    name: 'Runway Gen-2',
    description: 'Передовая платформа для генерации видео из текста или изображений.',
    category: 'Video',
    bestFor: 'Видеоклипы, анимация',
    example: 'Cinematic shot of a drone flying...'
  },
  {
    id: '6',
    name: 'GitHub Copilot',
    description: 'ИИ-ассистент для программистов, работающий прямо в редакторе кода.',
    category: 'Code',
    bestFor: 'Автодополнение кода, рефакторинг',
    example: '// Function to calculate fibonacci...'
  }
];

const getIcon = (category: string) => {
  switch (category) {
    case 'Image': return <Image className="w-5 h-5 text-purple-400" />;
    case 'Text': return <MessageSquare className="w-5 h-5 text-blue-400" />;
    case 'Video': return <Video className="w-5 h-5 text-red-400" />;
    case 'Code': return <Code className="w-5 h-5 text-green-400" />;
    default: return <MessageSquare className="w-5 h-5" />;
  }
};

export const Catalog: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white">Каталог Нейросетей</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Обзор популярных инструментов. Узнайте, какой ИИ лучше всего подходит для вашей задачи.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiCatalog.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-brand-500 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10 group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-700 transition-colors">
                {getIcon(item.category)}
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-gray-700 text-gray-300 border border-gray-600">
                {item.category}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">{item.description}</p>
            
            <div className="border-t border-gray-700 pt-4 mt-4 space-y-3">
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Лучше всего для:</p>
                <p className="text-sm text-brand-200">{item.bestFor}</p>
              </div>
              <div className="bg-black/20 p-2 rounded text-xs font-mono text-gray-400 truncate">
                <span className="text-gray-600 select-none">$ </span>{item.example}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};