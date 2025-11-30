import React, { useState } from 'react';
import { Menu, X, Cpu, Sparkles, BookOpen, Search } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная', icon: <Cpu className="w-4 h-4 mr-2" /> },
    { id: 'generator', label: 'Генератор', icon: <Sparkles className="w-4 h-4 mr-2" /> },
    { id: 'catalog', label: 'Каталог ИИ', icon: <Search className="w-4 h-4 mr-2" /> },
    { id: 'resources', label: 'Ресурсы', icon: <BookOpen className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-accent-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/20">
              P
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">PromptMaster</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
                      activeTab === item.id 
                        ? 'text-brand-500 md:text-brand-500 font-bold' 
                        : 'text-white hover:text-brand-400'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};