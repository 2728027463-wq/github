import React from 'react';
import { Category, BrandConcept, LogoConcept } from '../types';
import { ExternalLink, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface LinkGridProps {
  category: Category;
  onOpenAI: () => void;
  brands: BrandConcept[];
  logo: LogoConcept;
}

const LinkGrid: React.FC<LinkGridProps> = ({ category, onOpenAI, brands, logo }) => {
  
  if (category.id === 'about') {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center gap-2">
            <Sparkles className="text-forest-500" />
            品牌名称提案
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((brand, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:border-forest-400 transition-colors">
                <h3 className="font-bold text-lg text-forest-800 mb-2">{brand.name}</h3>
                <p className="text-sm font-medium text-forest-600 mb-3 italic">"{brand.tagline}"</p>
                <p className="text-xs text-slate-600 leading-relaxed">{brand.rationale}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
          <h2 className="text-2xl font-bold text-forest-900 mb-6 flex items-center gap-2">
            <MapPin className="text-forest-500" />
            Logo 设计理念
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">核心元素</h4>
                <p className="text-slate-600 text-sm">{logo.element}</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">配色方案</h4>
                <div className="flex gap-2 mt-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-800" title="深林绿"></div>
                  <div className="w-8 h-8 rounded-full bg-sky-400" title="天空蓝"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500" title="金丝黄"></div>
                </div>
                <p className="text-slate-600 text-sm mt-1">{logo.colorPalette}</p>
              </div>
            </div>
            <div className="flex-1 bg-forest-50 p-6 rounded-lg border border-forest-100">
              <h4 className="font-semibold text-forest-900 mb-2">设计哲学</h4>
              <p className="text-sm text-forest-800 italic leading-relaxed">
                {logo.philosophy}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
        <p className="text-slate-500 mt-2 text-lg">
          为林科大学子精选的学术与行业资源库。
        </p>
      </header>

      {category.sections.map((section) => {
        const SectionIcon = section.icon;
        return (
          <section key={section.id} className="scroll-mt-20">
            <div className="flex items-baseline justify-between border-b border-slate-200 pb-2 mb-6">
              <h3 className="text-xl font-bold text-forest-800 flex items-center gap-3">
                {/* Render the creative sub-section icon if available */}
                {SectionIcon && (
                  <div className="p-1.5 bg-forest-100 rounded-lg text-forest-600">
                    <SectionIcon size={20} />
                  </div>
                )}
                {!SectionIcon && <span className="w-2 h-6 bg-forest-500 rounded-full inline-block"></span>}
                {section.title}
              </h3>
              <span className="text-xs text-slate-400 uppercase tracking-wide font-medium hidden sm:block">
                {section.links.length} 个资源
              </span>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm max-w-2xl pl-1">
              {section.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <div 
                    key={link.id}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 hover:border-forest-200 transition-all duration-200 flex flex-col h-full"
                  >
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center text-forest-600 shrink-0 group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
                          <LinkIcon size={24} strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-slate-800 text-lg truncate group-hover:text-forest-700 transition-colors" title={link.title}>
                              {link.title}
                            </h4>
                            {link.isOfficial && (
                              <ShieldCheck className="w-4 h-4 text-forest-500 shrink-0" title="官方认证" />
                            )}
                          </div>
                          <p className="text-xs text-slate-400 font-medium mb-1">
                             {link.tags.slice(0, 2).map(tag => `#${tag}`).join(' ')}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                        {link.description}
                      </p>

                      <div className="mt-auto pt-3 border-t border-slate-50 flex justify-between items-center">
                         {link.url.startsWith('ACTION:') ? (
                            <button
                              onClick={() => {
                                if (link.url === 'ACTION:OPEN_AI') onOpenAI();
                              }}
                              className="text-xs font-semibold text-forest-600 hover:text-forest-700 flex items-center gap-1 transition-colors"
                            >
                              <Sparkles className="w-3.5 h-3.5" />
                              启动工具
                            </button>
                          ) : (
                            <a 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-slate-400 hover:text-forest-600 flex items-center gap-1 transition-colors group-hover:text-forest-600"
                            >
                              访问网站
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default LinkGrid;