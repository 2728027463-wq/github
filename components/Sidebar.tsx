import React from 'react';
import { NAV_CATEGORIES } from '../constants';
import { Category } from '../types';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 z-30 h-full w-64 bg-forest-900 text-white transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:block
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 border-b border-forest-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-forest-500 flex items-center justify-center">
              <span className="font-bold text-white text-lg">森</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">森旅导航</h1>
          </div>
          <p className="text-xs text-forest-300 mt-1">中南林科大 · 学术与行业门户</p>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide">
          {NAV_CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  onSelectCategory(category.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-forest-700 text-white shadow-lg' 
                    : 'text-forest-200 hover:bg-forest-800 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;