import React, { useState } from 'react';
import { AIModel, MODELS_LIST, PromptResponse } from '../types';
import { generateOptimizedPrompt } from '../services/geminiService';
import { Wand2, Copy, Check, Loader2, AlertCircle, Sparkles } from 'lucide-react';

export const Generator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedModel, setSelectedModel] = useState<AIModel>(AIModel.ChatGPT);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await generateOptimizedPrompt(inputText, selectedModel);
      setResult(response);
    } catch (err) {
      setError("Не удалось сгенерировать промт. Пожалуйста, проверьте API ключ или попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result?.optimizedPrompt) {
      navigator.clipboard.writeText(result.optimizedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Генератор Промтов</span>
        </h2>
        <p className="text-gray-400">Превратите свои идеи в профессиональные команды для ИИ.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Controls Section */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
            <label className="block mb-2 text-sm font-medium text-gray-300">Выберите ИИ модель</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value as AIModel)}
              className="w-full bg-gray-900 border border-gray-700 text-white text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-3"
            >
              {MODELS_LIST.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.label}
                </option>
              ))}
            </select>
            <div className="mt-2 text-xs text-gray-500">
              {MODELS_LIST.find(m => m.id === selectedModel)?.type === 'image' 
                ? 'Оптимизировано для визуальных описаний.' 
                : 'Оптимизировано для текстовых задач и контекста.'}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-900/50 to-accent-900/50 p-6 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white mb-2 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-brand-400" />
              Совет
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Чем детальнее ваш исходный запрос, тем качественнее будет результат. Укажите стиль, настроение или формат ответа.
            </p>
          </div>
        </div>

        {/* Input & Output Section */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-white/5 shadow-xl">
            <label className="block mb-2 text-sm font-medium text-gray-300">Ваша идея</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Опишите, что вы хотите получить... (например: фото кота в киберпанк стиле)"
              className="w-full h-32 bg-gray-900/50 border border-gray-700 text-white text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block p-4 resize-none transition-all"
            />
            
            <button
              onClick={handleGenerate}
              disabled={loading || !inputText.trim()}
              className={`mt-4 w-full flex items-center justify-center text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-700 hover:to-accent-700 focus:ring-4 focus:ring-brand-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all transform hover:scale-[1.02] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Генерация...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 mr-2" />
                  Улучшить Промт
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="p-4 mb-4 text-sm text-red-400 rounded-lg bg-gray-800 border border-red-800/50" role="alert">
              <span className="font-medium">Ошибка!</span> {error}
            </div>
          )}

          {result && (
            <div className="bg-gray-800/80 p-6 rounded-2xl border border-brand-500/30 shadow-2xl shadow-brand-900/20 animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                  Результат
                </h3>
                <button
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-white transition-colors flex items-center text-xs bg-gray-700/50 px-3 py-1 rounded-full"
                >
                  {copied ? <Check className="w-3 h-3 mr-1 text-green-400" /> : <Copy className="w-3 h-3 mr-1" />}
                  {copied ? 'Скопировано' : 'Копировать'}
                </button>
              </div>

              <div className="bg-black/30 p-4 rounded-lg border border-white/5 font-mono text-sm text-brand-100 whitespace-pre-wrap leading-relaxed">
                {result.optimizedPrompt}
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Почему это работает</h4>
                  <p className="text-sm text-gray-300">{result.explanation}</p>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Советы</h4>
                  <ul className="space-y-1">
                    {result.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-brand-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};