import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Loader2, Copy, Trash2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTIONS = [
  "帮我总结这段关于森林碳汇的文字...",
  "将'biodiversity conservation'翻译成中文",
  "湖南省内有哪些5A级国家公园？",
  "解读最新的林长制政策要点"
];

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '你好！我是森旅智能助手。我可以协助你搜索学术资料、翻译专业术语或解读行业政策。今天有什么可以帮你的？' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input, messages);
      const botMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '抱歉，连接服务器时出现错误。' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col border border-forest-100 overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-forest-900 p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400 w-5 h-5" />
            <h3 className="font-bold text-lg">森旅智能助手 (AI)</h3>
          </div>
          <button onClick={onClose} className="hover:bg-forest-700 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`
                  max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-forest-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }
                `}
              >
                {/* Simple Markdown-like rendering would go here, for now raw text */}
                <div className="whitespace-pre-wrap">{msg.text}</div>
                {msg.role === 'model' && (
                   <div className="mt-2 flex gap-2 justify-end opacity-0 hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => navigator.clipboard.writeText(msg.text)}
                        className="text-xs flex items-center gap-1 text-slate-400 hover:text-forest-600"
                      >
                        <Copy size={12} /> 复制
                      </button>
                   </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
               <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-forest-600">
                 <Loader2 className="animate-spin w-4 h-4" />
                 <span className="text-xs font-medium">思考与检索中...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0">
          {messages.length < 3 && (
            <div className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide">
              {SUGGESTIONS.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => setInput(s)}
                  className="whitespace-nowrap px-3 py-1.5 bg-forest-50 text-forest-700 text-xs rounded-full border border-forest-100 hover:bg-forest-100 hover:border-forest-200 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          
          <div className="flex gap-2 items-end">
             <button 
              onClick={() => setMessages([])} 
              className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              title="清空对话"
            >
              <Trash2 size={20} />
            </button>
            <div className="relative flex-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="询问5A景区信息、翻译论文摘要，或粘贴文本进行总结..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent resize-none h-[50px] max-h-[120px]"
              />
            </div>
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-forest-600 text-white rounded-xl hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;