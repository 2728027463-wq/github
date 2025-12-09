import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import LinkGrid from './components/LinkGrid';
import AIAssistant from './components/AIAssistant';
import { NAV_CATEGORIES, BRAND_NAMES, LOGO_CONCEPT } from './constants';
import { Menu, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(NAV_CATEGORIES[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);

  const activeCategory = useMemo(() => 
    NAV_CATEGORIES.find(c => c.id === activeCategoryId) || NAV_CATEGORIES[0], 
  [activeCategoryId]);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        activeCategory={activeCategoryId} 
        onSelectCategory={setActiveCategoryId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Mobile Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between lg:hidden shrink-0 z-10">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-slate-600 hover:text-forest-600 transition-colors"
            >
              <Menu size={24} />
            </button>
            <h1 className="font-bold text-slate-800 text-lg">森旅导航</h1>
          </div>
          <button 
            onClick={() => setIsAIOpen(true)}
            className="w-8 h-8 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center"
          >
            <Sparkles size={16} />
          </button>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            {/* Top Bar (Desktop) */}
            <div className="hidden lg:flex justify-end mb-6">
              <button
                onClick={() => setIsAIOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-forest-600 to-emerald-500 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-medium"
              >
                <Sparkles size={16} />
                森旅智能助手
              </button>
            </div>

            <LinkGrid 
              category={activeCategory} 
              onOpenAI={() => setIsAIOpen(true)}
              brands={BRAND_NAMES}
              logo={LOGO_CONCEPT}
            />
            
            <footer className="mt-20 pt-10 border-t border-slate-200 text-center text-slate-400 text-xs pb-10">
              <p>&copy; {new Date().getFullYear()} 森旅导航 (中南林业科技大学). 版权所有.</p>
              <p className="mt-1">服务专业学生的学习科研，兼顾学术性与实用性。</p>
            </footer>
          </div>
        </div>

        {/* AI Modal */}
        <AIAssistant 
          isOpen={isAIOpen} 
          onClose={() => setIsAIOpen(false)} 
        />
      </main>
    </div>
  );
};

export default App;