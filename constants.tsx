import { 
  TreePine, 
  MountainSnow,
  Ticket,
  Landmark,
  Building2,
  FileText,
  GraduationCap,
  BookOpenText,
  Database,
  Compass,
  Newspaper,
  Briefcase,
  Bot,
  Cpu,
  Palette,
  Map,
  Waves,
  PawPrint,
  Smartphone,
  Plane,
  Globe2,
  Megaphone,
  BookOpen,
  Microscope,
  Search,
  Store,
  Sprout,
  Languages,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { Category, BrandConcept, LogoConcept } from './types';

// --- Branding Deliverables ---

export const BRAND_NAMES: BrandConcept[] = [
  {
    name: "森旅导航 (SenLv Nav)",
    tagline: "林科大人的学术与行业罗盘",
    rationale: "直接结合“森林”与“旅游”两个核心学科字眼，简洁明了，既体现专业属性，又朗朗上口，易于记忆。"
  },
  {
    name: "生态视界 (EcoScape Hub)",
    tagline: "洞见生态智慧，规划绿色未来",
    rationale: "强调“生态”这一国家公园建设的核心，同时“视界”寓意开阔的学术视野和行业前瞻性。"
  },
  {
    name: "绿指南 (GreenCompass)",
    tagline: "深耕自然，指引方向",
    rationale: "“绿”代表林业与自然环境，“指南”突显网站的工具属性。配色采用森林绿，象征生机与专业。"
  }
];

export const LOGO_CONCEPT: LogoConcept = {
  element: "设计核心为一个抽象的“年轮”形态，逐渐演变为一个“定位图标(Location Pin)”。",
  colorPalette: "主色：深林绿 (#065f46) 代表学术深度与林业；辅助色：天空蓝 (#38bdf8) 代表旅游与开阔视野；点缀色：金丝黄 代表5A级品质。",
  philosophy: "年轮象征着知识的积累与林木的生长历史（学术/林业），定位图标将其转化为导航工具（旅游/公园），完美连接了两个专业的核心意象。"
};

// --- Navigation Data ---

export const NAV_CATEGORIES: Category[] = [
  {
    id: 'national-parks',
    title: '国家公园与自然',
    icon: TreePine,
    sections: [
      {
        id: '5a-parks',
        title: '5A级国家级景区与公园',
        icon: MountainSnow,
        description: '整合国内顶级自然景观与国家公园官方门户，提供权威数据。',
        links: [
          {
            id: 'np-1',
            title: '三江源国家公园',
            url: '#',
            icon: Waves,
            description: '中国首个国家公园，保护三江源头。生态学与水资源保护研究的核心案例。',
            tags: ['官方', '生态学'],
            isOfficial: true
          },
          {
            id: 'np-2',
            title: '大熊猫国家公园',
            url: '#',
            icon: PawPrint,
            description: '横跨川陕甘三省，生物多样性与保护生物学研究的重要资源库。',
            tags: ['官方', '生物多样性'],
            isOfficial: true
          },
          {
            id: 'np-3',
            title: '武夷山国家公园',
            url: '#',
            icon: MountainSnow,
            description: '世界文化与自然双重遗产典范，提供丰富的生物及茶文化景观数据。',
            tags: ['5A', '双遗产'],
            isOfficial: true
          }
        ]
      },
      {
        id: 'reservation',
        title: '预约与服务平台',
        icon: Ticket,
        description: '实地考察、实习调研必备的票务与导览服务入口。',
        links: [
          {
            id: 'res-1',
            title: '国家公园官方预约系统',
            url: '#',
            icon: Ticket,
            description: '各大国家公园统一入园预约端口，方便学生规划实地实习行程。',
            tags: ['工具', '预约']
          },
          {
            id: 'res-2',
            title: '智慧导览服务平台',
            url: '#',
            icon: Smartphone,
            description: '提供高精度地图数据与客流分析，辅助旅游管理专业进行案例分析。',
            tags: ['数据', '地图']
          }
        ]
      }
    ]
  },
  {
    id: 'policy',
    title: '政策与行政管理',
    icon: Landmark,
    sections: [
      {
        id: 'gov-bodies',
        title: '政府机构官网',
        icon: Building2,
        description: '获取最新法规、行业标准及战略规划的官方权威渠道。',
        links: [
          {
            id: 'pol-1',
            title: '国家林业和草原局',
            url: 'http://www.forestry.gov.cn/',
            icon: TreePine,
            description: '林业管理最高机构，发布森林资源、湿地保护等核心数据与政策。',
            tags: ['政府', '核心'],
            isOfficial: true
          },
          {
            id: 'pol-2',
            title: '文化和旅游部',
            url: 'https://www.mct.gov.cn/',
            icon: Plane,
            description: '发布旅游统计数据、发展规划及行业标准，旅游管理专业必备。',
            tags: ['政府', '旅游'],
            isOfficial: true
          },
          {
            id: 'pol-3',
            title: '自然资源部',
            url: 'https://www.mnr.gov.cn/',
            icon: Globe2,
            description: '主管国土空间规划，对理解国家公园边界与功能分区至关重要。',
            tags: ['政府', '规划'],
            isOfficial: true
          }
        ]
      },
      {
        id: 'interpretation',
        title: '政策深度解读',
        icon: FileText,
        description: '专家视角的政策分析与行业趋势研判。',
        links: [
          {
            id: 'int-1',
            title: '中国绿色时报',
            url: '#',
            icon: Newspaper,
            description: '林业行业权威媒体，常刊登专家对林业新政的详细解读。',
            tags: ['资讯', '分析']
          },
          {
            id: 'int-2',
            title: '国务院政策吹风会',
            url: '#',
            icon: Megaphone,
            description: '官方发布的关于生态文明建设与碳中和目标的权威简报。',
            tags: ['简报', '宏观']
          }
        ]
      }
    ]
  },
  {
    id: 'academic',
    title: '学术科研资源',
    icon: GraduationCap,
    sections: [
      {
        id: 'journals',
        title: '核心期刊导航',
        icon: BookOpenText,
        description: '文献综述与毕业论文撰写的高质量参考文献来源。',
        links: [
          {
            id: 'aca-1',
            title: '旅游学刊 (Tourism Tribune)',
            url: '#',
            icon: BookOpen,
            description: '中国旅游学术界最具影响力的期刊，构建理论框架必备。',
            tags: ['期刊', '中文核心']
          },
          {
            id: 'aca-2',
            title: 'Annals of Tourism Research',
            url: '#',
            icon: Globe2,
            description: '国际顶尖旅游期刊，提供全球视野与前沿研究方法。',
            tags: ['期刊', '英文顶刊']
          },
          {
            id: 'aca-3',
            title: '林业科学',
            url: '#',
            icon: Microscope,
            description: '涵盖森林培育、生态及保护的综合性学术期刊，专业性极强。',
            tags: ['期刊', '林学']
          }
        ]
      },
      {
        id: 'databases',
        title: '学术数据库',
        icon: Database,
        description: '全网学术资源检索与数据获取平台。',
        links: [
          {
            id: 'db-1',
            title: '中国知网 (CNKI)',
            url: '#',
            icon: Search,
            description: '国内最全的学术文献总库，需使用校园网或VPN下载全文。',
            tags: ['数据库', '必备']
          },
          {
            id: 'db-2',
            title: '国家林业科学数据中心',
            url: '#',
            icon: Database,
            description: '提供森林清查、碳汇等原始数据集，适合进行定量分析研究。',
            tags: ['数据', '统计']
          }
        ]
      }
    ]
  },
  {
    id: 'industry',
    title: '行业与就业动态',
    icon: Compass,
    sections: [
      {
        id: 'news',
        title: '行业前沿资讯',
        icon: Newspaper,
        description: '追踪市场动态、会展信息及企业动向。',
        links: [
          {
            id: 'ind-1',
            title: '中国旅游报',
            url: '#',
            icon: Newspaper,
            description: '每日更新旅游市场动态、酒店业及旅行趋势，紧跟行业脉搏。',
            tags: ['媒体', '日报']
          },
          {
            id: 'ind-2',
            title: '中国国际旅游交易会',
            url: '#',
            icon: Store,
            description: '亚洲最大旅游展会官网，了解行业人脉与商业模式的窗口。',
            tags: ['展会', '活动']
          }
        ]
      },
      {
        id: 'jobs',
        title: '实习与招聘',
        icon: Briefcase,
        description: '专为林学与旅游学子筛选的职业发展机会。',
        links: [
          {
            id: 'job-1',
            title: '全国自然教育网络',
            url: '#',
            icon: Sprout,
            description: '发布自然教育导师、公园讲解员等垂直领域招聘信息。',
            tags: ['招聘', '垂直']
          },
          {
            id: 'job-2',
            title: '国家公务员考录系统',
            url: '#',
            icon: Briefcase,
            description: '发布林草局、文旅局等相关政府部门的招考公告。',
            tags: ['公考', '体制内']
          }
        ]
      }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI 智能工具箱',
    icon: Bot,
    sections: [
      {
        id: 'ai-core',
        title: '核心 AI 助手',
        icon: Cpu,
        description: '集成式智能工具，辅助阅读、写作与研究。',
        links: [
          {
            id: 'ai-1',
            title: 'SenLv 智能助手 (内置)',
            url: 'ACTION:OPEN_AI',
            icon: Bot,
            description: '点击唤醒内置 Gemini 助手，支持文献摘要、术语翻译及课题灵感生成。',
            tags: ['Gemini', '免费', '内置'],
            isOfficial: true
          },
          {
            id: 'ai-2',
            title: 'DeepL 翻译',
            url: 'https://www.deepl.com',
            icon: Languages,
            description: '高精度神经网络翻译工具，学术摘要翻译首选，语意更通顺。',
            tags: ['翻译', '外部']
          },
          {
            id: 'ai-3',
            title: 'Scholarcy 文献速读',
            url: '#',
            icon: Zap,
            description: 'AI驱动的论文摘要工具，可快速提取关键信息并生成知识卡片。',
            tags: ['摘要', '科研']
          }
        ]
      }
    ]
  },
  {
    id: 'about',
    title: '关于与品牌设计',
    icon: Palette,
    sections: []
  }
];