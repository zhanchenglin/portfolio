import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import userPhoto from "./photo.png";

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const RESUME_DATA = {
  personal: {
    name: "詹成林",
    englishName: "COLIN ZHAN",
    title: "资深设计总监",
    email: "263585951@qq.com",
    phone: "186-8039-1151",
    location: "深圳 / 在职",
    info: "38岁 | 本科 | 15年+工作经验",
    summary: "15年+互联网及软硬件全链路设计经验，拥有8年管理经验（最高管理20+人设计团队）。\n具备从0到1构建全球化品牌视觉系统与数字体验系统的闭环落地能力；主导过多款智能硬件 OS 及配套数字体验设计，斩获 iF 国际设计大奖。\n深谙“科技+硬件+互联网”生态，擅长将 AI技术深度集成至设计工作中，以极致的设计表达力与全局的系统性思维，精准驱动业务商业目标的转化与落地。",
    tags: ["15y+ 资深设计", "0-1 体系构建", "IoT/OS 软硬结合", "AI 产品应用", "全球化商业增长"]
  },
  competencies: [
    { title: "体验与品牌双修", content: "软硬件全场景体验设计 (IoT/OS)、品牌视觉战略与全案治理" },
    { title: "前沿技术落地", content: "AI产品应用工作赋能与效能跃升" },
    { title: "全球化视野", content: "国际化多语言产品本地化适配与出海增长设计" },
    { title: "组织领导力", content: "跨部门百人团队协同、高标准设计规范制定与设计团队梯队建设" }
  ],
  experience: [
    {
      company: "深圳市叁六壹六科技有限责任公司",
      role: "设计负责人",
      period: "2025.02 - 至今",
      description: "主导 Qpon 产品从 0 到 1 的全球化用户体验设计与本地化视觉适配，制定核心交互原型及视觉标准，确保跨区域市场体验的高度一致性。深度参与业务增长策略，通过数据驱动与用户研究持续优化核心链路，助力产品在目标国家地区 DAU 于半年内突破百万量级。统筹管理 10 人设计团队，搭建敏捷设计规范与跨部门协作工作流，高效协同研发与产品团队，保障设计方案的高质量落地与交付时效。",
      keywords: ["UX/UI 全链路", "全球化适配", "数据驱动", "敏捷规范"]
    },
    {
      company: "顺丰科技有限公司",
      role: "设计负责人",
      period: "2023.03 - 2024.10",
      description: "负责顺丰速运业务核心线上触点的体验设计，通过 NPS 调研与反馈闭环精细化打磨产品体验，驱动整体用户满意度跃升 15%。统筹策划高价值线上增长活动视觉全案，结合转化数据动态调整设计策略，实现 MAU 提升 20% 及关键转化节点提升 12%。率先引入并建立 AIGC 辅助设计工作流，训练业务专属模型，大幅缩短创意周期 30%；主导建立标准化设计组件库，拉升团队整体人效 25%。",
      keywords: ["AIGC 工作流", "用户增长", "体验打磨", "组件化思维"]
    },
    {
      company: "成都拟合未来 (FITURE智能健身镜)",
      role: "平台设计负责人",
      period: "2022.06 - 2022.12",
      description: "负责 FITURE 智能健身魔镜软硬结合生态下的平台整体用户体验设计。从 0 到 1 定义魔镜端产品界面交互规范与视觉风格，确保沉浸式交互体验与硬件特性的完美融合。协同算法、硬件与软件研发团队推进体验方案落地，通过数据埋点闭环持续提升核心功能的用户留存与满意度。",
      keywords: ["软硬结合", "沉浸式交互", "IoT 生态", "OS 定义"]
    },
    {
      company: "华为",
      role: "设计专家",
      period: "2020.09 - 2022.04",
      description: "深度参与鸿蒙生态建设，统筹华为消费者业务音乐 APP 及 IoT 多终端（电视、手表、车载等）的融合体验设计与管理。带领 20+ 人设计团队攻坚跨端适配难题，制定并推行严格的多终端设计规范，确保品牌语言与交互逻辑的绝对统一。主导跨部门设计评审与运营质量提升机制，整合多方资源持续驱动体验创新。",
      keywords: ["鸿蒙生态", "跨端适配", "团队管理", "设计规范"]
    },
    {
      company: "腾讯音乐娱乐科技(深圳)有限公司",
      role: "设计组长",
      period: "2017.05 - 2020.07",
      description: "主导全民K歌国际化业务（WeSing）的设计战略规划及团队管理，构建适应多国文化的品牌视觉与体验体系，护航产品出海。统筹全民K歌国内版 APP 的体验创新与增长设计，以及 TV 版/智能硬件端的跨界界面与视觉风格。主导的全民K歌智能硬件项目表现优异，团队一举斩获 iF 国际设计大奖。",
      keywords: ["出海战略", "品牌视觉", "iF 国际大奖", "增长设计"]
    },
    {
      company: "深圳市火乐科技发展有限公司 (坚果投影)",
      role: "设计负责人",
      period: "2015.04 - 2017.04",
      description: "组建并管理 11 人团队，从零开始打造智能投影设备大屏操作系统（坚果 OS）的整体交互与视觉体系。统筹智能硬件产品的品牌视觉运营，建立多终端统一规范，拔高整体品牌宣发与硬件 UI 品质达 30% 以上。",
      keywords: ["坚果 OS", "0-1 体系构建", "大屏交互", "硬件 UI"]
    },
    {
      company: "腾讯",
      role: "高级视觉设计师",
      period: "2011.02 - 2014.02",
      description: "负责手机QQ钱包、腾讯充值及微信游戏微商店的核心视觉设计，深耕亿级用户的体验打磨。参与 QQ2012 版本设计、OA 系统重构及云顶数据分析项目，通过高标准数据可视化提升企业级信息传达效率。",
      keywords: ["亿级流量", "QQ/微信生态", "支付金融", "数据可视化"]
    }
  ],
  education: [
    {
      school: "北京师范大学珠海分校",
      degree: "本科 · 艺术设计",
      period: "2006.09 - 2010.06"
    }
  ],
  awards: [
    "iF 国际设计大奖 (全民K歌智能硬件项目)",
    "6项设计专利"
  ]
};

// --- Components ---

const SectionHeader = ({ title, subTitle }: { title: string; subTitle: string }) => (
  <div className="flex items-center gap-3 mb-6 group">
    <div className="w-3 h-3 bg-[#C83E2F] shrink-0 group-hover:scale-110 transition-transform duration-300" />
    <h2 className="text-lg font-bold text-zinc-900 tracking-wide flex items-baseline gap-2">
      {title}
      <span className="text-xs font-normal text-zinc-400 uppercase tracking-widest font-mono">{subTitle}</span>
    </h2>
  </div>
);

const CompetencyItem = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-5 border-l-2 border-zinc-100 pl-4 hover:border-[#C83E2F] transition-colors duration-300">
    <h3 className="text-sm font-bold text-zinc-900 mb-1">{title}</h3>
    <p className="text-sm text-zinc-600 leading-relaxed">{content}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#C83E2F] selection:text-white">

      {/* Top Hero Section - Split Layout Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[40vh]">

        {/* Left: Image / Visual Area */}
        <div className="lg:col-span-5 bg-zinc-100 relative overflow-hidden min-h-[300px] lg:min-h-auto flex items-center justify-center group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-200 via-transparent to-transparent opacity-50" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-64 h-64 rounded-full p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <img
                src={userPhoto}
                alt="詹成林"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Info Area */}
        <div className="lg:col-span-7 bg-[#F5F5F4] flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-6 lg:p-10 text-right hidden sm:block">
            <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-1">Contact</div>
            <div className="text-sm font-medium text-zinc-800">{RESUME_DATA.personal.phone}</div>
            <div className="text-sm font-medium text-zinc-800">{RESUME_DATA.personal.email}</div>
          </div>

          <div className="p-8 lg:p-16 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-zinc-900 mb-4 leading-[0.9]">
                {RESUME_DATA.personal.name}
              </h1>
              <div className="inline-flex items-center px-4 py-1.5 border border-zinc-900 rounded-full mb-8">
                <span className="text-sm font-bold tracking-widest uppercase">{RESUME_DATA.personal.title}</span>
              </div>

              <div className="space-y-2 sm:hidden mb-8">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <Phone className="w-4 h-4" /> {RESUME_DATA.personal.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <Mail className="w-4 h-4" /> {RESUME_DATA.personal.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <MapPin className="w-4 h-4" /> {RESUME_DATA.personal.location}
                </div>
              </div>

              <div className="mb-6 text-sm font-medium text-zinc-500 tracking-wide uppercase">
                {RESUME_DATA.personal.info}
              </div>

              <p className="text-zinc-600 leading-relaxed max-w-2xl text-sm lg:text-base border-l-2 border-[#C83E2F] pl-6 py-1 whitespace-pre-line mb-8">
                {RESUME_DATA.personal.summary}
              </p>

              <div className="flex flex-wrap gap-2 pl-6">
                {RESUME_DATA.personal.tags?.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#C83E2F]/5 text-[#C83E2F] text-xs font-bold border border-[#C83E2F]/20 rounded-sm uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content - Grid matches Hero split (5:7) */}
      <div className="py-16 lg:py-24 border-t border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Column (Sidebar style) - lg:col-span-5 */}
          <div className="lg:col-span-5 flex flex-col lg:items-center lg:border-r border-zinc-100 py-4 lg:py-0">
            <div className="w-full lg:max-w-[420px] space-y-16 px-8 lg:px-0">

              {/* Core Competencies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeader title="核心竞争力" subTitle="CORE COMPETENCIES" />
                <div className="space-y-2 pl-6">
                  {RESUME_DATA.competencies.map((item, i) => (
                    <CompetencyItem key={i} title={item.title} content={item.content} />
                  ))}
                </div>
              </motion.section>

              {/* Awards */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <SectionHeader title="获奖经历" subTitle="AWARDS" />
                <div className="space-y-4 pl-6">
                  {RESUME_DATA.awards.map((award, i) => (
                    <div key={i} className="bg-zinc-50 p-4 border-l-2 border-zinc-200 hover:border-[#C83E2F] transition-colors">
                      <p className="text-sm font-medium text-zinc-800">{award}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Education moved back here */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <SectionHeader title="教育背景" subTitle="EDUCATION" />
                <div className="space-y-6 pl-6">
                  {RESUME_DATA.education.map((edu, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-zinc-900 text-base">{edu.school}</h3>
                      <p className="text-sm text-zinc-500 mb-1">{edu.degree}</p>
                      <p className="text-xs font-mono text-zinc-400">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>

          {/* Right Column (Main Content) - lg:col-span-7 */}
          {/* px-8 lg:px-16 matches the hero side padding to align content with summary red line */}
          <div className="lg:col-span-7 px-8 lg:px-16 pt-16 lg:pt-0 space-y-24">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="工作履历" subTitle="EXPERIENCE" />

              <div className="space-y-12">
                {RESUME_DATA.experience.map((job, index) => (
                  <div key={index} className="group relative pl-6">
                    {/* Gray Dot aligned with SectionHeader red square */}
                    <div className="absolute left-0 top-[14px] w-3 flex justify-center">
                      <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#C83E2F] transition-colors">
                        {job.company}
                      </h3>
                      <span className="font-mono text-xs text-zinc-400 tracking-wider mt-1 sm:mt-0">
                        {job.period}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-zinc-500 mb-4 uppercase tracking-wide">
                      {job.role}
                    </div>

                    <p className="text-zinc-600 leading-[1.5] text-sm sm:text-base text-justify mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {job.keywords?.map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-zinc-100/50 text-zinc-500 text-[11px] font-medium rounded border border-zinc-200/50"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    {index !== RESUME_DATA.experience.length - 1 && (
                      <div className="h-px bg-zinc-100 w-full mt-12 mb-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tighter">CZ.</div>
          <div className="text-xs text-zinc-500 font-mono">
            © {new Date().getFullYear()} COLIN ZHAN. DESIGNED WITH REACT & TAILWIND.
          </div>
          <a
            href="Portfolio_2025.pdf"
            download="詹成林个人作品集_2025.pdf"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#C83E2F] transition-colors"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </footer>

    </div>
  );
}
