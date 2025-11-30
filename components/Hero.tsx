import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Раскройте потенциал ИИ.{' '}
            <button onClick={onStart} className="font-semibold text-brand-400">
              <span className="absolute inset-0" aria-hidden="true" />
              Попробовать сейчас <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
          Создавайте идеальные промты с помощью <span className="gradient-text">Искусственного Интеллекта</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          PromptMaster — это ваш умный помощник для формулировки задач. Превращаем "нарисуй кота" в профессиональный запрос для Midjourney, Stable Diffusion или ChatGPT за секунды.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={onStart}
            className="rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all flex items-center"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Создать Промт
          </button>
          <button onClick={() => {
              const el = document.getElementById('how-it-works');
              el?.scrollIntoView({ behavior: 'smooth' });
          }} className="text-sm font-semibold leading-6 text-white flex items-center hover:text-brand-300 transition-colors">
            Как это работает <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};