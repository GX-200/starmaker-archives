
import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CharacterCard from './components/CharacterCard';
import CharacterDetail from './components/CharacterDetail';
import HackerMiniGame from './components/HackerMiniGame';
import DonationModal from './components/DonationModal';
import { ViewState, Character, CharacterRole } from './types';
import { CHARACTERS, GAME_CHANGELOG, TOOL_CHANGELOG, AUTHOR_INFO, SUPPORTERS } from './constants';
import { Search, Bell, Sparkles, Gamepad2, Info, ChevronLeft, ChevronRight, Star, BookOpen, Terminal, History, HeartHandshake, Heart, MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  // Custom hero images for the carousel
  const heroCharacters = [
    { id: 'hero-1', avatarUrl: '/images/1.png' },
    { id: 'hero-2', avatarUrl: '/images/2.png' },
    { id: 'hero-3', avatarUrl: '/images/3.png' },
    { id: 'hero-4', avatarUrl: '/images/4.png' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroCharacters.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroCharacters.length]);

  // Separate data based on views
  const characterList = useMemo(() => {
    return CHARACTERS.filter(c => c.role !== CharacterRole.SYSTEM);
  }, []);

  const guideList = useMemo(() => {
    return CHARACTERS.filter(c => c.role === CharacterRole.SYSTEM);
  }, []);

  // Search logic
  const filteredItems = useMemo(() => {
    let sourceList = characterList;
    
    if (!searchQuery) return sourceList;
    
    // If searching globally while in other views, search everything
    if (currentView !== ViewState.CHARACTER_LIST) {
       sourceList = CHARACTERS;
    }

    return sourceList.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, currentView, characterList]);

  const handleCharacterSelect = (char: Character) => {
    setSelectedCharacter(char);
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HACKER_TOOL:
        return <HackerMiniGame />;
      
      case ViewState.CHANGELOG:
        return (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Tool Updates */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-800 font-sans flex items-center gap-4">
                <Sparkles size={32} className="text-win-accent fill-win-accent" /> 
                工具更新日志 (v1.0)
              </h2>
              {TOOL_CHANGELOG.map((log, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-baseline mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-slate-800">v{log.version}</h3>
                    <span className="font-mono text-slate-400 text-sm">{log.date}</span>
                  </div>
                  <ul className="space-y-4">
                    {log.changes.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-600 text-base">
                        <span className="w-2 h-2 bg-win-accent rounded-full mt-2 shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Game Updates */}
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-800 font-sans flex items-center gap-4">
                <Gamepad2 size={32} className="text-purple-500 fill-purple-500" /> 
                游戏更新内容
              </h2>
              {GAME_CHANGELOG.map((log, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm opacity-90">
                  <div className="flex justify-between items-baseline mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-slate-700">v{log.version}</h3>
                    <span className="font-mono text-slate-400 text-sm">{log.date}</span>
                  </div>
                  <ul className="space-y-4">
                    {log.changes.map((change, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-500 text-base">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case ViewState.ABOUT:
        return (
          <div className="max-w-4xl mx-auto pt-12">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">关于 Starmaker Archives</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">{AUTHOR_INFO.description}</p>
            </div>
            
            {/* Author Support Section */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl mb-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 relative z-10">
                <HeartHandshake size={28} className="text-blue-500 fill-blue-500" />
                关注作者
              </h3>
              
              <p className="text-slate-600 mb-8 relative z-10">{AUTHOR_INFO.supportMessage}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {AUTHOR_INFO.platforms.map((platform, idx) => (
                  <a 
                    key={idx}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center font-bold text-slate-700 text-base hover:bg-blue-50 hover:text-blue-800 hover:border-blue-200 transition-colors shadow-sm flex flex-col items-center gap-2"
                  >
                    <span className="text-2xl">{platform.icon}</span>
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Supporters Section */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl mb-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
               
               <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 relative z-10">
                 <Star size={28} className="text-yellow-500 fill-yellow-500" />
                 特别感谢名单 (Special Thanks)
               </h3>
               
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                 {SUPPORTERS.map((name, idx) => (
                   <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center font-bold text-slate-700 text-base hover:bg-yellow-50 hover:text-yellow-800 hover:border-yellow-200 transition-colors shadow-sm">
                     {name}
                   </div>
                 ))}
                 <div className="col-span-full mt-6 text-center text-sm text-slate-400">
                   感谢所有提供反馈和支持的玩家！名单持续更新中...
                 </div>
               </div>
            </div>
          </div>
        );

      case ViewState.CHARACTER_LIST:
      case ViewState.GAME_GUIDES:
        const isGuideView = currentView === ViewState.GAME_GUIDES;
        return (
          <div className="space-y-10 animate-fade-in">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">
                  {isGuideView ? '游戏百科 & 节日' : '人物档案库'}
                </h2>
                <p className="text-slate-500 text-base mt-2">
                  {isGuideView ? '系统玩法 / 节日活动 / 常见问题' : '主要角色 / 配角 / 隐藏人物攻略'}
                </p>
              </div>
              <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-mono text-slate-400 shadow-sm font-bold">
                ITEMS: {filteredItems.length}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-24">
              {filteredItems.map(char => (
                <CharacterCard 
                  key={char.id} 
                  character={char} 
                  onClick={() => handleCharacterSelect(char)} 
                />
              ))}
            </div>
          </div>
        );

      case ViewState.FESTIVALS:
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">节日系统</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">全年节日时间表、特殊奖励及参与方式</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">节日系统介绍</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                游戏中有多个节日活动，每个节日都有特定的触发时间和特殊奖励。节日期间可以与特定角色互动，解锁特殊对话和剧情。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">主要节日列表</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• <strong>新年庆典</strong> (1月1日) - 特殊对话选项，好感度大幅提升</li>
                    <li>• <strong>情人节</strong> (2月14日) - 浪漫剧情触发，限定礼物交换</li>
                    <li>• <strong>万圣节</strong> (10月31日) - 特殊服装解锁，隐藏彩蛋</li>
                    <li>• <strong>圣诞节</strong> (12月25日) - 限定礼物交换，特殊结局触发</li>
                    <li>• <strong>生日派对</strong> (角色生日) - 专属剧情，好感度翻倍</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">季节性活动</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• <strong>春季赏花</strong> (3-4月) - 好感度提升，拍照功能解锁</li>
                    <li>• <strong>夏季海滩</strong> (7-8月) - 泳装剧情，特殊互动</li>
                    <li>• <strong>秋季收获</strong> (9-10月) - 特殊道具获取，隐藏成就</li>
                    <li>• <strong>冬季滑雪</strong> (12-1月) - 隐藏成就，限定服装</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">节日参与技巧</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">时间管理</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• 提前准备节日礼物</li>
                    <li>• 合理安排时间参加所有活动</li>
                    <li>• 注意节日触发条件</li>
                    <li>• 保存多个存档点</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">奖励获取</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• 完成节日任务获得特殊道具</li>
                    <li>• 与特定角色互动解锁隐藏剧情</li>
                    <li>• 收集节日限定服装</li>
                    <li>• 达成节日相关成就</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">节日示意图</h3>
              <div className="flex justify-center">
                <img 
                  src="/images/节日示意图.png" 
                  alt="节日活动示意图" 
                  className="rounded-2xl max-w-full h-auto shadow-md"
                />
              </div>
            </div>
          </div>
        );

      case ViewState.SPECIAL_EVENTS:
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">特殊事件触发</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">隐藏剧情、彩蛋及特殊条件事件</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">特殊事件系统介绍</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                游戏中包含多种特殊事件，包括隐藏人物触发、彩蛋事件、限定剧情等。这些事件通常需要特定条件才能触发，为游戏增加了丰富的探索性。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">隐藏人物事件</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• <strong>赛里斯</strong> - 特定时间地点触发，需要完成前置任务</li>
                    <li>• <strong>女鬼事件</strong> - 夜晚特定地点，需要特定道具</li>
                    <li>• <strong>AI赛里斯</strong> - 特殊条件解锁，多周目要素</li>
                    <li>• <strong>隐藏结局</strong> - 完成所有隐藏条件</li>
                    <li>• <strong>限定NPC</strong> - 特定版本或活动期间出现</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">彩蛋事件</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• <strong>开发者彩蛋</strong> - 特定组合键触发</li>
                    <li>• <strong>隐藏对话</strong> - 重复访问特定地点</li>
                    <li>• <strong>特殊成就</strong> - 完成特定挑战任务</li>
                    <li>• <strong>限定道具</strong> - 时间敏感获取</li>
                    <li>• <strong>隐藏剧情</strong> - 多分支选择触发</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">触发条件详解</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">时间条件</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• 特定时间段（白天/夜晚）</li>
                    <li>• 特定日期或节日</li>
                    <li>• 游戏进度要求</li>
                    <li>• 多周目解锁</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">道具条件</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• 持有特定道具</li>
                    <li>• 完成前置任务</li>
                    <li>• 达到特定好感度</li>
                    <li>• 解锁特定技能</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">特殊事件示意图</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src="/images/女鬼触发.png" 
                  alt="女鬼触发条件" 
                  className="rounded-2xl w-full h-auto shadow-md"
                />
                <img 
                  src="/images/女鬼触发2.png" 
                  alt="女鬼触发条件2" 
                  className="rounded-2xl w-full h-auto shadow-md"
                />
              </div>
              <div className="mt-6 flex justify-center">
                <img 
                  src="/images/AI赛里斯触发条件.png" 
                  alt="AI赛里斯触发条件" 
                  className="rounded-2xl max-w-full h-auto shadow-md"
                />
              </div>
            </div>
          </div>
        );

      case ViewState.BASIC_GUIDES:
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">基础攻略指南</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">新手入门、系统机制及核心玩法</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">属性系统</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 魅力 - 影响对话选项成功率</li>
                  <li>• 智力 - 解锁特殊剧情分支</li>
                  <li>• 体力 - 决定活动参与次数</li>
                  <li>• 幸运 - 影响随机事件触发</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">时间管理</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 每日时间分配策略</li>
                  <li>• 季节性活动优先级</li>
                  <li>• 人物好感度培养周期</li>
                  <li>• 隐藏要素解锁时机</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">属性加点示意图</h3>
              <div className="flex justify-center">
                <img 
                  src="/images/加点示意图.png" 
                  alt="属性加点示意图" 
                  className="rounded-2xl max-w-full h-auto shadow-md"
                />
              </div>
            </div>
          </div>
        );

      case ViewState.FAQ:
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">常见问题解答</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">游戏卡死、修改器使用及技术问题</p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">游戏卡死问题</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 存档损坏：使用备份存档或重新开始</li>
                  <li>• 脚本冲突：关闭其他修改器</li>
                  <li>• 内存不足：清理缓存重启游戏</li>
                  <li>• 版本不匹配：更新到最新版本</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">修改器使用建议</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 建议使用官方推荐修改器</li>
                  <li>• 避免同时使用多个修改器</li>
                  <li>• 修改前备份存档文件</li>
                  <li>• 注意版本兼容性问题</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">技术问题</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• 画面闪烁：更新显卡驱动</li>
                  <li>• 声音异常：检查音频设置</li>
                  <li>• 加载缓慢：清理磁盘空间</li>
                  <li>• 崩溃问题：查看错误日志</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case ViewState.FULL_EFFECTS:
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">全特征展示</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">游戏内所有特征、属性及视觉效果完整展示</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">全特征展示图</h3>
              <div className="flex justify-center">
                <img 
                  src="/images/全特效示意图.png" 
                  alt="全特征展示图" 
                  className="rounded-2xl max-w-full h-auto shadow-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">角色特征系统</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• <strong>外貌特征</strong> - 发型、肤色、体型等</li>
                  <li>• <strong>性格特征</strong> - 开朗、内向、傲娇等</li>
                  <li>• <strong>能力特征</strong> - 智力、体力、魅力等</li>
                  <li>• <strong>特殊特征</strong> - 隐藏属性、天赋技能</li>
                  <li>• <strong>成长特征</strong> - 可培养属性和技能</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">视觉效果系统</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• <strong>战斗特效</strong> - 技能释放动画、暴击特效</li>
                  <li>• <strong>剧情特效</strong> - 对话选项、好感度变化</li>
                  <li>• <strong>环境特效</strong> - 天气变化、时间流逝</li>
                  <li>• <strong>界面特效</strong> - 菜单动画、提示效果</li>
                  <li>• <strong>隐藏特效</strong> - 彩蛋、特殊成就效果</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">特征解锁条件</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">基础特征</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• 初始角色自带特征</li>
                    <li>• 通过剧情解锁</li>
                    <li>• 完成特定任务</li>
                    <li>• 达到特定等级</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4">隐藏特征</h4>
                  <ul className="space-y-3 text-slate-600">
                    <li>• 多周目解锁</li>
                    <li>• 特殊条件触发</li>
                    <li>• 限定活动获取</li>
                    <li>• 彩蛋事件解锁</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case ViewState.LOCALIZATION_ISSUES:
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl font-black text-slate-800 mb-6 tracking-tight">汉化问题</h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">Starmaker Story 汉化工具使用指南及问题解决方案</p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">游戏攻略作者</h3>
                <div className="space-y-4 text-slate-600">
                  <p>司暴君的个人空间-哔哩哔哩【喜欢的可以充电支持】</p>
                  <p>司暴君的抖音 - 抖音【喜欢的可以抖+支持】</p>
                  <p className="font-bold">特别感谢名单：</p>
                  <p className="text-center">➡➡➡点击查看 特别感谢名单 看看有没有你⬅⬅⬅</p>
                  <p className="font-bold">攻略链接：</p>
                  <p>Starmaker+Story+【造星物语】1.7详细攻略（持续更新）</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">此汉化工具开发者</h3>
                <div className="space-y-4 text-slate-600">
                  <p>GitHub - bbepis/XUnity.AutoTranslator v4.12.0</p>
                  <p>Starmaker Story 自从v1.4更新后用AutoTranslator的汉化工具会出现"口口口"这种无法正常汉化的情况，是因为游戏本身更换了新的字体，AutoTranslator作者提供的TMP字体无法兼容新字体导致的，所以我为各位臭宝准备了一个新的自制字体可以完美兼容此游戏和其他一些特殊字体游戏文本。</p>
                  <p>如果不会使用AutoTranslator的请自行查看视频：</p>
                  <p className="font-bold">https://www.bilibili.com/video/BV1kL2VYAEoX/</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">使用方法</h3>
                <div className="space-y-4 text-slate-600">
                  <p>首先把下载好的字体放在游戏的根目录</p>
                  <p>在游戏目录下AutoTranslator文件夹下打开Config.ini</p>
                  <p>在Config.ini 按Ctrl+F快速搜索"OverrideFontTextMeshPro"和"FallbackFontTextMeshPro"在等号后面更改成新的字体文件名即可</p>
                  <p className="font-bold">如下图：</p>
                  <div className="flex justify-center">
                    <img 
                      src="/images/如下图展示.png" 
                      alt="字体配置示意图" 
                      className="rounded-2xl max-w-full h-auto shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">翻译后效果</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img 
                    src="/images/汉化后效果1.png" 
                    alt="汉化效果展示1" 
                    className="rounded-2xl w-full h-auto shadow-md"
                  />
                  <img 
                    src="/images/汉化图效果2.png" 
                    alt="汉化效果展示2" 
                    className="rounded-2xl w-full h-auto shadow-md"
                  />
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">新字体下载链接</h3>
                <div className="space-y-4 text-slate-600">
                  <p>百度网盘【提取码】1t8t</p>
                  <p>备用链接：蓝奏云【提取码】g52j</p>
                  <p className="font-bold">Starmaker+Story+【造星物语】1.7详细攻略（持续更新）：点击这里查看完整版攻略</p>
                  <p>（翻译功能最好有魔法上网梯子配合才会有最好的效果，部分人可以直接使用）</p>
                  <p>什么翻译不出来，什么卡翻译，有关这些问题的请你先了解怎么用魔法/梯子再用这个插件</p>
                  <p className="text-center font-bold">别忘了给小UP点赞评论点个关注，感谢~</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">支持作者</h3>
                <div className="space-y-4 text-slate-600 text-center">
                  <p className="text-2xl">🤩🤩🤩 纯凭心意对攻略作者进行 支持和投喂 为爱发电 🤩🤩🤩</p>
                  <p className="text-2xl">💗💗💗感谢各位臭宝的支持 比心💗💗💗</p>
                  <p className="font-bold">➡➡➡ 点击查看 特别感谢名单 看看有没有你 ⬅⬅⬅</p>
                </div>
              </div>
            </div>
          </div>
        );

      case ViewState.DASHBOARD:
      default:
        // Dashboard / Cover Page
        return (
          <div className="space-y-10 animate-fade-in pb-16">
            {/* Hero Section */}
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
              {/* Background Slideshow */}
              {heroCharacters.map((char, index) => (
                <div 
                  key={char.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === heroImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={char.avatarUrl} 
                    alt="Hero" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
                </div>
              ))}

              {/* Hero Content */}
              <div className="absolute inset-0 p-16 flex flex-col justify-center max-w-3xl text-white z-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-sm font-bold tracking-widest uppercase mb-6 w-fit">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                  Online v1.0
                </div>
                <h1 className="text-7xl font-black mb-6 tracking-tighter leading-tight">
                  造星物语<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">详细攻略档案</span>
                </h1>
                <p className="text-xl text-slate-200 mb-10 leading-relaxed text-shadow-sm max-w-xl">
                  一站式查询所有人物剧情分支、隐藏要素、节日活动及黑客代码。
                  {AUTHOR_INFO.description}
                </p>
                
                <div className="flex gap-6">
                  <button 
                    onClick={() => setCurrentView(ViewState.CHARACTER_LIST)}
                    className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 shadow-lg shadow-white/10"
                  >
                    开始查阅 <ChevronRight size={24} />
                  </button>
                  <button 
                    onClick={() => setCurrentView(ViewState.GAME_GUIDES)}
                    className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors"
                  >
                    新手指南
                  </button>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-8 right-10 flex gap-3">
                {heroCharacters.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setHeroImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === heroImageIndex ? 'w-12 bg-white' : 'w-3 bg-white/40'}`}
                    title={`切换到幻灯片 ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div 
                onClick={() => setCurrentView(ViewState.CHARACTER_LIST)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">人物档案</h3>
                <p className="text-base text-slate-500">主要角色、配角、隐藏人物详细攻略。</p>
              </div>

              <div 
                onClick={() => setCurrentView(ViewState.GAME_GUIDES)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Gamepad2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">游戏百科</h3>
                <p className="text-base text-slate-500">系统玩法、节日活动、常见问题解答。</p>
              </div>

              <div 
                onClick={() => setCurrentView(ViewState.HACKER_TOOL)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  <Terminal size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">黑客答案</h3>
                <p className="text-base text-slate-500">萨曼莎电脑密码、游戏答案一键查询。</p>
              </div>

              <div 
                onClick={() => setCurrentView(ViewState.CHANGELOG)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <History size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">更新日志</h3>
                <p className="text-base text-slate-500">查看工具版本更新内容及游戏版本变动。</p>
              </div>

              <div 
                onClick={() => setCurrentView(ViewState.ABOUT)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                  <HeartHandshake size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">鸣谢名单</h3>
                <p className="text-base text-slate-500">感谢所有提供反馈和支持的玩家。</p>
              </div>

              <div 
                onClick={() => setIsDonationOpen(true)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">支持作者</h3>
                <p className="text-base text-slate-500">投喂支持作者，鼓励更多优质内容。</p>
              </div>

              <div 
                onClick={() => alert('期待后续更新')}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">玩家反馈</h3>
                <p className="text-base text-slate-500">期待后续更新，欢迎提供宝贵建议。</p>
              </div>

              <div 
                onClick={() => setCurrentView(ViewState.GAME_GUIDES)}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  <Info size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">基础问答</h3>
                <p className="text-base text-slate-500">常见卡死修复、修改器建议及操作指引。</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-win-bg font-sans text-win-text overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView}
        onOpenDonation={() => setIsDonationOpen(true)}
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Top Glass Bar */}
        <header className="h-20 flex items-center px-10 justify-between z-30 sticky top-0">
          {/* Breadcrumb / Title placeholder */}
          <div className="flex items-center gap-3 text-slate-400 text-base font-medium">
            <span>APP</span>
            <ChevronRight size={16} />
            <span className="text-slate-800 font-bold uppercase">{currentView.replace('_', ' ')}</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative w-80 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-win-accent transition-colors" size={20} />
              <input
                type="text"
                placeholder="全局搜索..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (currentView === ViewState.DASHBOARD) setCurrentView(ViewState.CHARACTER_LIST);
                }}
                className="w-full bg-white/80 backdrop-blur-sm border border-transparent hover:border-slate-200 focus:border-win-accent rounded-full pl-12 pr-6 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-win-accent/20 transition-all shadow-sm"
              />
            </div>
            
            <button 
              className="relative p-3 rounded-full hover:bg-white/50 text-slate-500 hover:text-slate-800 transition-colors"
              title="通知"
            >
              <Bell size={24} />
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 pt-2 relative scroll-smooth">
          <div className="max-w-[1600px] mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>

      {/* Modals */}
      {selectedCharacter && (
        <CharacterDetail 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}

      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
      />
    </div>
  );
};
