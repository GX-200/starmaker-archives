
import { Character, CharacterRole, HackerCode, UpdateLog } from './types';
import { Target, Users } from 'lucide-react';
import React from 'react';

// 本地图片路径前缀 - 使用中文文件名
const IMG_PATH = "./images/";

export const HACKER_CODES: HackerCode[] = [
  { code: 'BLDRS GT', answer: 'Baldurs Gate', meaning: '博德之门' },
  { code: 'BRDRLNDS', answer: 'Borderlands', meaning: '无主之地' },
  { code: 'CLL F DTY', answer: 'Call Of Duty', meaning: '使命召唤' },
  { code: 'CNTRK', answer: 'Counter Strike', meaning: '反恐精英' },
  { code: 'DBG', answer: 'Diablo', meaning: '暗黑破坏神' },
  { code: 'DM', answer: 'Doom', meaning: '毁灭战士' },
  { code: 'DNY KNG', answer: 'Donkey Kong', meaning: '大金刚' },
  { code: 'DRGN G', answer: 'Dragon Age', meaning: '龙腾世纪' },
  { code: 'FLLT NW VGS', answer: 'Fallout New Vegas', meaning: '辐射新维加斯' },
  { code: 'FF', answer: 'Fifa', meaning: '实况足球' },
  { code: 'GD F WR', answer: 'God Of War', meaning: '战神' },
  { code: 'G F MPRS', answer: 'Age Of Empires', meaning: '帝国时代' },
  { code: 'GRND THFT AT', answer: 'Grand Theft Auto', meaning: '侠盗猎车手' },
  { code: 'HL', answer: 'Halo', meaning: '光环' },
  { code: 'HLF LF', answer: 'Half Life', meaning: '半条命' },
  { code: 'LDN RNG', answer: 'Elden Ring', meaning: '艾尔登法环' },
  { code: 'LGND F ZLD', answer: 'The Legend of Zelda', meaning: '塞尔达传说' },
  { code: 'MSS FFCT', answer: 'Mass Effect', meaning: '质量效应' },
  { code: 'MTL GR SLD', answer: 'Metal Gear Solid', meaning: '合金装备' },
  { code: 'MNCRFT', answer: 'Minecraft', meaning: '我的世界' },
  { code: 'NDRTL', answer: 'Undertale', meaning: '传说之下' },
  { code: 'PRTL', answer: 'Portal', meaning: '传送门' },
  { code: 'STRT FGHTR', answer: 'Street Fighter', meaning: '街头霸王' },
  { code: 'SKYRM', answer: 'Skyrim', meaning: '上古卷轴' },
  { code: 'SPR MR SNSHN', answer: 'Super Mario Sunshine', meaning: '超级马里奥-太阳之光' },
  { code: 'SPDR MN', answer: 'Spider Man', meaning: '蜘蛛侠' },
  { code: 'TH LGND F ZLD', answer: 'The Legend of Zelda', meaning: '塞尔达传说' },
  { code: 'TH LST F S', answer: 'The Last Of Us', meaning: '最后生还者' },
  { code: 'TH SMS', answer: 'The Sims', meaning: '模拟人生' },
  { code: 'TTR', answer: 'Tetris', meaning: '俄罗斯方块' },
  { code: 'WRLD F WRCRFT', answer: 'World of Warcraft', meaning: '魔兽争霸' },
];

export const CHARACTERS: Character[] = [
  {
    id: 'system_guide',
    name: '基础攻略 & 常见问题',
    role: CharacterRole.SYSTEM,
    locations: ['系统设置', '存档'],
    avatarUrl: `${IMG_PATH}基础攻略.png`,
    description: '包含游戏的基础修改技巧、[r]常见问题修复[/r]以及基础密码。',
    unlockConditions: '无需解锁',
    guideSteps: [
      'CE修改方法：使用CE修改器，双浮点搜索数值进行修改。建议CE加速5倍为最佳，但注意在进门前必卡，请换回1倍速。',
      '可修改内容包括但不限于：[g]金钱[/g]、[g]粉丝[/g]、[g]指向日期[/g]、[g]锁日期[/g]、[g]游戏血量[/g]、[r]健身点击次数8次[/r]、[r]点击绿条判定[/r]、[r]训练一次等于5次[/r]。',
      '游戏卡死修复：如果游戏卡在界面，可以连续按 [big][r]10次 F1[/r][/big] 键进行重置（由水友吴*发现，特别感谢）。',
      '女鬼触发条件：点击客厅电视机[r]红色按钮[/r]，如果闪烁出现对话即达成（没触发睡觉再试）。触发完成后获得塔防道具"鬼"。',
      'AI赛里斯触发条件：马里奥豪宅的图书馆墙上有个[r]红色按钮[/r]可以解锁实验室。',
      '存档路径：AppData\\LocalLow\\Arvus Games\\Starmaker Story',
      '约瑟夫保险箱密码：[big][b]7172[/b][/big]'
    ],
    tips: [
      '怪物打法：[r]鼠标右键格挡[/r]，红色区域鼠标武器离开该区域即可。',
      '跳舞小游戏：鼠标碰到[b]小星星[/b]得5分，[b]大星星[/b]得1分，碰到物品扣分，碰到骷髅死亡。',
      '武器购买：前往[b]大师商店[/b]。生命值购买：前往[b]医院找医生[/b]。'
    ]
  },
  {
    id: 'festivals',
    name: '节日与特殊事件',
    role: CharacterRole.SYSTEM,
    locations: ['日历事件'],
    avatarUrl: `${IMG_PATH}节日.png`,
    description: '1.6B版本增加的节日系统，包含情人节、万圣节、圣诞节等特殊剧情。',
    unlockConditions: '特定日期触发',
    guideSteps: [
      '[big]情人节[/big]：一旦你走出卧室，安娜（如果被踢了）和约瑟夫都会开始这个场景。注意：[r]不要选择"听起来很沮丧数我出去"[/r]，否则场景将结束。要么3个人都去看电影，要么只有安娜和主角会有相同的场景。',
      '[big]复活节[/big]：目前没有这个假期的场景。你可以在地图上找到蛋（酒吧、桑拿、马里奥别墅、酒店、胡同）。',
      '[big]主角生日[/big]：去厨房和安娜谈谈，她会邀请你到衣柜里来一个特别的惊喜。也可以去阿德里安房间拜访，获得[b]死灵法师迷你[/b]。',
      '[big]安娜生日[/big]：走出房间开始对话。场景转移到餐桌。完全分享并完成远足：安娜将赤身，多人会议。仅分享或单独：安娜会放下叉子给你一个秘密CG。结束后去客厅夏洛特会给礼物。',
      '[big]万圣节[/big]：安娜邀请参加夏洛特派对。接受后直接传送到夏洛特房子。秘密场景：检查卧室PC骷髅图标，去洗手间镜子前说词，去神社点亮蜡烛出现门户。',
      '[big]除夕夜[/big]：走出卧室安娜谈论派对。可邀请阿米莉亚、凯特、托尼、喜万里其中之一。若选"这次不"，将与安娜共度时光。'
    ],
    routes: [
      {
        name: '万圣节传送门选择',
        steps: [
          '选择1："我看到曲线......䏎？恶魔之物......" -> 主角 x 扎齐亚。',
          '选择2："我看到了一些巨大的东西......怪物？恶魔？" -> 主角 x 安娜 x 瓦尔托。',
          '注意：[r]不要选择"上帝！保护我..."或者"Honestly...我不知道"[/r]，这会结束场景。'
        ]
      }
    ]
  },
  {
    id: 'full_effects',
    name: '全特效展示图',
    role: CharacterRole.SYSTEM,
    locations: ['游戏设置', '视觉效果'],
    avatarUrl: `${IMG_PATH}全特效示意图.png`,
    description: '游戏全特效展示，包含所有视觉效果的预览和说明。',
    unlockConditions: '无需解锁',
    guideSteps: [
      '全特效包含游戏中的所有视觉效果，包括光影、粒子、环境效果等。',
      '建议在高性能设备上开启全特效以获得最佳游戏体验。',
      '如果遇到性能问题，可以适当降低特效等级。',
      '全特效开启后，游戏画面会更加精美，但可能会影响帧率。'
    ],
    tips: [
      '全特效展示图展示了游戏中最精美的视觉效果。',
      '建议根据设备性能调整特效设置。',
      '特效等级越高，游戏画面越精美，但对硬件要求也越高。'
    ]
  },
  {
    id: 'anna',
    name: '安娜 (Anna)',
    role: CharacterRole.MAIN,
    locations: ['家', '教堂', '商场', '健身房', '市中心', '海滨', '野外旅行', '花店', '荒地', '牧场'],
    avatarUrl: `${IMG_PATH}安娜.png`,
    description: '女主角，核心剧情人物。安娜的5颗心会根据她的[r]堕落[/r]和[g]善良[/g]值来选择路线。调皮行为增加堕落值（恶魔图标），保持纯洁减少堕落值（天使图标）。[r]堕落值超过10[/r]进入放纵路线，反之浪漫路线。',
    unlockConditions: '初始角色',
    guideSteps: [
      '给安娜拍照，直到达到1颗心。周三初始场景后她邀请你去衣柜（[r]不要急于将订阅者到1000[/r]，否则会提前结束衣柜场景）。',
      '达到2颗心后，星创页面会收到肯的任务邮件。你需要[b]300名订阅者[/b]才能达到2颗心。',
      '收集所有照片后，购买升级以提高订阅者数量。达到[b]1000名订阅者[/b]后，安娜会给你地下室的钥匙。',
      '达到[b]2500名订阅者[/b]后，安娜会要求与你拍摄亲密照片，这将使安娜达到3颗心。',
      '在多次互动并拍摄足够照片后，会触发一个场景。她失控并主动亲近你，使安娜达到4颗心。',
      '安娜达到4颗心后，你会收到星际展的邮件。',
      '5心事件：根据堕落/善良值自动选择路线。之后可以在工作室与她进行更亲密的行为。'
    ],
    tips: [
      '周五商场：开车送安娜去商场时，可触发洗手间场景（需4颗心）。',
      '周二花店：安娜会让你去“The Line”花店接她（放纵线第3次后无法继续）。',
      '周一加油站：可参加洗车活动。',
      '后宫结局条件：完成安娜故事、阿德里安和约瑟夫离开路线、夏洛特安娜路线。周一在客厅见到两人，选择[g]邀请一起上游艇[/g]。'
    ],
    routes: [
      { 
        name: '热带假期 (三星达成)', 
        steps: [
          '第一个星：去海滩，阳光下放松 -> 选日光浴 -> 遇到短发女粉丝 -> 邀请到房间触发CG (推荐5心再来)。', 
          '第二个星：参加选美比赛（你会输） -> 去商场找祖里要特别泳衣 -> 再次参加并获胜。',
          '第三个星：去酒吧触发莱拉尼CG -> 参加选美 -> 下次访问海滩遇到芙蕾雅 -> 告诉安娜[b]“我们在阳光下放松一下怎么样？”[/b] -> “当然没问题” -> “你为什么不给我看看？” -> 下次拜访芙蕾雅邀请到房间。'
        ] 
      },
      { 
        name: '霜度假期 (三星达成)', 
        steps: [
          '第一个星：去泡温泉鼓掌。浪漫路线：[g]“我看得出来，你正在发光”[/g]；堕落路线：[r]“这是一个仅供成年人使用的地方” -> “我们可以做任何我们想做的事”[/r]。',
          '第二个星：去参加节日喝点酒，之后安娜会送你一份礼物。',
          '第三个星：去镇上警告狼人事情 -> 去露营遇到狼人 -> 再见老人 -> 商场买精致的肉类 -> 返回喂狼人。'
        ] 
      },
      { 
        name: '日本度假 (三星达成)', 
        steps: [
          '前置：需与阿德里安成为朋友（给旅行钱，分享至少一个女孩）。',
          '第一个星：去神社见千寻 -> 一周后回去 -> 问千寻大寿说了什么 -> 下周寻找弘二并付钱 -> 下周见千寻要求加入。',
          '第二个星：去咖啡馆两次 -> 询问是否在菜单上并付款 -> 下周她邀请到后面，付钱给她一场戏。',
          '第三个星：去寺庙火车遇到梅和丈夫两次，第二次给地址 -> 给她打电话到酒店两次。'
        ] 
      }
    ]
  },
  {
    id: 'adrian',
    name: '阿德里安 (Adrian)',
    role: CharacterRole.MAIN,
    locations: ['家', '海滨', '霓虹灯街', '教堂', '野外旅行'],
    avatarUrl: `${IMG_PATH}阿德里安.png`,
    description: '家庭成员，关键剧情人物。看完约瑟夫和阿德里安的对话后，前往他的房间。可以选择让他离开或留下。',
    unlockConditions: '初始角色',
    guideSteps: [
      '离开路线：攒下 20,000 美元，在阿德里安的房间里送给他。',
      '无共享路线：告诉安娜“什么都没有。我相信他不会告密”。',
      '共享路线（关键）：获得[b]“黑客”特性[/b]后，前去科技商店买喷油器。周四去他房间电脑用注射器。',
      '告诉安娜勾引阿德里安（只有在周五可执行）。',
      '周二去海滩分享安娜（查看两个CG场面）。',
      '周一去泳池，给安娜拍一张照片，点击右下角对话气泡。',
      '在完全说服了阿德里安后，周二会来到阿德里安的房间（触发“游戏星期二 2.0”）。'
    ],
    tips: ['需要获得“黑客”特性（找萨曼莎/肯剧情线）才能推进部分剧情。']
  },
  {
    id: 'joseph',
    name: '约瑟夫 (Joseph)',
    role: CharacterRole.MAIN,
    locations: ['家', '门前', '野外旅行'],
    avatarUrl: `${IMG_PATH}约瑟夫.png`,
    description: '可以有两次机会让约瑟夫离开：一次是共享伊莎贝拉后告诉安娜，一次是入口选择不安慰并羞辱他。',
    unlockConditions: '初始角色',
    guideSteps: [
      '保险箱密码：[big][b]7172[/b][/big]',
      '入口剧情：每周五在入口处与约瑟夫见面给他一杯啤酒，这样做5次。',
      '在星期五第三次给约瑟夫喝啤酒会触发过场动画。',
      '你可以通过说“安娜和我正在运营一个星创页面”来告诉他真相。',
      '伊莎贝拉共享：CG伊莎贝拉后返回办公室与约瑟夫交谈 -> 选择告诉他 -> 返回酒店触发多人CG -> 出门后选择随便选（选告诉安娜他就会离开）。',
      '野营多人共享：需完成阿德里安与安娜分享路线和约瑟夫与安娜共享路线。周四上楼接受约瑟夫远足邀请。'
    ],
    tips: ['约瑟夫的离职路线：去厨房找安娜拿钥匙 -> 上楼告诉阿德里安原因 -> 告诉他真相会导致不能和阿德里安一起玩。']
  },
  {
    id: 'charlotte',
    name: '夏洛特 (Charlotte)',
    role: CharacterRole.MAIN,
    locations: ['家', '客厅', '商场', '车库', '游艇'],
    avatarUrl: `${IMG_PATH}夏洛特.png`,
    description: '富家女，拥有游艇。周一在客厅与夏洛特和安娜交谈三次，她会在周一早上邀请您到她的游艇上。',
    unlockConditions: '周一客厅对话触发。',
    guideSteps: [
      '夏洛特路线：仅与夏洛特的亲密互动场面。',
      '安娜路线：周一在游艇上继续与夏洛特互动。安娜将在下周参观游艇。完成夏洛特任务后在走廊触发剧情。周二去停车场，一路跟随进入安娜房间。',
      '保镖故事线：在商场遇到首富男骚扰夏洛特后帮助解围。第二天白天去健身房与凤凰提议做保镖。然后去门前引荐凤凰。再次去商场遇到首富男被凤凰撵走。',
      '多人CG：周一去游艇解锁多人CG。再去商场的服装店与凤凰和夏洛特进行多人CG。'
    ]
  },
  {
    id: 'ken',
    name: '肯 (Ken)',
    role: CharacterRole.SUPPORT,
    locations: ['郊区住宅', '郊区泳池', '工作室'],
    avatarUrl: `${IMG_PATH}肯.png`,
    description: '头号粉丝，萨曼莎的儿子。与安娜达到2颗心后，肯将在星创平台上发送邮件。',
    unlockConditions: '安娜2颗心后收到邮件。',
    guideSteps: [
      '点击邮件并去厨房找安娜开始任务。',
      '注意：[r]不要告诉她肯有问题[/r]，否则会无法开启肯的安娜互动路线。',
      '前往阳光岭找肯交谈。进入他家完成对话，把地址给他（[r]不要推脱说安娜很忙[/r]）。',
      '周四在你家入口处与他见面。',
      '后续：周一、周三或周四去他家三次，他会开始每周帮你采购。与萨曼莎亲密互动后，去肯家他会坦诚感情经历，此时可选择安娜路线或萨曼莎路线。'
    ]
  },
  {
    id: 'samantha',
    name: '萨曼莎 (Samantha)',
    role: CharacterRole.SUPPORT,
    locations: ['郊区住宅', '郊区泳池', '海滨'],
    avatarUrl: `${IMG_PATH}萨曼莎.png`,
    description: '肯的母亲，黑客小游戏来源。',
    unlockConditions: '达到1000名订阅者并解锁肯后，可拜访萨曼莎。',
    guideSteps: [
      '每周二或周五可前往她家。',
      '完成5次黑客小游戏可获得[b]“黑客”特性[/b]（答案见黑客工具）。',
      '第三次拜访后会触发海滩邀约。周一在海滩互动3次，周二/周五为她拍摄3次照片。',
      '阿德里安加入：完成肯的萨曼莎路线。周二前往海滩与萨曼莎会面。在购物中心寻找阿德里安和萨曼莎。返回肯的住处建议邀请阿德里安。'
    ],
    tips: ['萨曼莎路线选择：立即向肯展示萨曼莎的照片 -> 在家中见面提出亲密请求 -> 告诉肯“我和萨曼莎聊过了，下次我们可以一起” -> 再次拜访观看互动。']
  },
  {
    id: 'amelia',
    name: '阿米莉亚 (Amelia)',
    role: CharacterRole.SUPPORT,
    locations: ['咖啡店', '海滨', '家'],
    avatarUrl: `${IMG_PATH}阿米莉亚.png`,
    description: '咖啡店老板。',
    unlockConditions: '工作3次后可在周三邀约一起跑步。',
    guideSteps: [
      '需获得[g]“健康”[/g]和[g]“运动员”[/g]特性才能推进。',
      '完成3次周三邀约后开启海滩剧情。',
      '继续工作选择私下交流进行互动CG。',
      '再次邀请周三跑步可以解锁CG。',
      '解锁牧场任务后，周三可以邀请到牧场。'
    ]
  },
  {
    id: 'phoenix',
    name: '凤凰 (Phoenix)',
    role: CharacterRole.SUPPORT,
    locations: ['健身馆', '门前', '商场', '牧场'],
    avatarUrl: `${IMG_PATH}凤凰.png`,
    description: '健身教练。健身房每训练3次获得一个特性，共两个特性“运动员”“专业运动员”改名为“合身”。',
    unlockConditions: '健身房训练获得特性。',
    guideSteps: [
      '安娜分享线：满足特性后在走廊遇到安娜并答应带她去健身馆。再次去健身馆解锁安娜与凤凰多人CG。',
      '保镖分享线：在商场帮助夏洛特解围 -> 推荐凤凰做保镖 -> 门前引荐 -> 商场赶走首富男 -> 游艇多人CG。',
      '河分享线：必须满足所有凤凰前置任务。在公园解锁厕所后会遇到河与凤凰。'
    ]
  },
  {
    id: 'gabriel',
    name: '加百利 (Gabriel)',
    role: CharacterRole.SUPPORT,
    locations: ['郊区公园', '商场', '山丘大厦'],
    avatarUrl: `${IMG_PATH}加百利.png`,
    description: '摄影大师。获得安娜1星查看电脑邮箱收到加百利邮件触发。',
    unlockConditions: '邮件触发。',
    guideSteps: [
      '每周二学习“摄影”（3次获得特性）。',
      '拍摄凯特任务：之后可邀请凯特作为模特。去凯特住处拍照（会紧张）。',
      '周四去酒吧触发凯特喝酒壮胆对话鼓励。最后再选择拍照凯特会完成任务。',
      '完整流程可获得“专业摄影师”特性。'
    ]
  },
  {
    id: 'kate',
    name: '凯特 (Kate)',
    role: CharacterRole.SUPPORT,
    locations: ['商场', '海滨', '凯特家'],
    avatarUrl: `${IMG_PATH}凯特.png`,
    description: '校友。酒吧不让进入时可以在凯特这里学习“城市语言学家”特性。',
    unlockConditions: '酒吧学习特性。',
    guideSteps: [
      '获得“有抱负的摄影师”后继续发展。',
      '解锁凯特的住处后进行拍照（会紧张）。',
      '周四去酒吧触发凯特喝酒壮胆对话鼓励。',
      '周四同时再去海边触发凯特泳装对话鼓励。',
      '最终照相成功解锁后续剧情和达成结局。'
    ]
  },
  {
    id: 'alice',
    name: '爱丽丝 (Alice)',
    role: CharacterRole.SUPPORT,
    locations: ['家', '教堂', '霓虹灯街', '荒地'],
    avatarUrl: `${IMG_PATH}爱丽丝.png`,
    description: '哥特女。教堂访问3次后触发。',
    unlockConditions: '教堂访问3次后触发。',
    guideSteps: [
      '可选择共享或独占路线。',
      '需学习[b]“城市语言学家”[/b]特性技能推进剧情。',
      '在舞厅可以选择共享和独享路线。',
      '跳舞小游戏：鼠标碰到小星星5分，大星星1分，物品扣分，骷髅死亡。'
    ]
  },
  {
    id: 'tristan',
    name: '特里斯坦 (Tristan)',
    role: CharacterRole.SUPPORT,
    locations: ['商场', '海滨', '市中心'],
    avatarUrl: `${IMG_PATH}特里斯坦.png`,
    description: '富哥+三姐妹。需5000订阅者解锁特里斯坦（天国丈夫特性）。',
    unlockConditions: '需5000订阅者。',
    guideSteps: [
      '周三(第一次)购物中心：“你是谁” -> “你只选择年轻女性...” -> “孤独是这里的关键词”。',
      '周三(第二次)海滩：“我已经长大了...” -> “我的榜样是我的......”。',
      '周三(第三次)市中心街道：“耶稣，抓住它”。[r]不要选择“也许你应该结束它”或“你可能会变成一个小丑”[/r]。对话安慰他解锁“天国丈夫”特性。'
    ]
  },
  {
    id: 'isabella',
    name: '伊莎贝拉 (Isabella)',
    role: CharacterRole.SPECIAL,
    locations: ['家', '商场', '市中心'],
    avatarUrl: `${IMG_PATH}伊莎贝拉.png`,
    description: '约瑟夫的前任。每日收入超5k且安娜4心在约瑟夫办公室解锁。',
    unlockConditions: '每日收入超5k且安娜4心。',
    guideSteps: [
      '到商场偶遇伊莎贝拉，约周四酒店互动推进剧情。',
      '3次互动后触发特殊状态（可与约瑟夫共享）。'
    ]
  },
  {
    id: 'liz',
    name: '丽兹 (Liz)',
    role: CharacterRole.SUPPORT,
    locations: ['酒馆', '旅店'],
    avatarUrl: `${IMG_PATH}丽兹.png`,
    description: '酒保。安娜5心后周二酒吧触发。',
    unlockConditions: '安娜5心后周二酒吧触发。',
    guideSteps: [
      '需要三次每周二推进。',
      '解锁酒店3人互动后解锁（定期服务）。'
    ]
  },
  {
    id: 'chloe',
    name: '克罗伊 (Chloe)',
    role: CharacterRole.SUPPORT,
    locations: ['山丘大厦'],
    avatarUrl: `${IMG_PATH}克罗伊.png`,
    description: '网红。安娜完成特定拍摄后解锁。',
    unlockConditions: '安娜完成特定拍摄后解锁。',
    guideSteps: ['每周拜访推进剧情。', '周三解锁最终场景。']
  },
  {
    id: 'mario',
    name: '马里奥 (Mario)',
    role: CharacterRole.SPECIAL,
    locations: ['车库', '山丘豪宅', '森林'],
    avatarUrl: `${IMG_PATH}马里奥.png`,
    description: '州长，反派角色。车库对话开启任务。',
    unlockConditions: '车库对话开启任务。',
    guideSteps: [
      '每周工作推进剧情。完成3个小游戏后解锁新角色。',
      '侦探游戏答案：第1次([b]无[/b]/[b]地址[/b]/[b]年龄[/b]) -> 第2次([b]无[/b]/[b]收入[/b]/[b]收入[/b]) -> 第3次([b]无[/b]/[b]职业[/b]/[b]姓名[/b])。注意：无就直接点确定。',
      '完成后会让你调查秘书（每周二选择桑拿直到秘书解锁CG）。',
      '第四次选择桑拿邀请马里奥解锁分享秘书路线。'
    ]
  },
  {
    id: 'katharina',
    name: '卡塔琳娜 (Katharina)',
    role: CharacterRole.SPECIAL,
    locations: ['山丘豪宅', '商场', '海滨', '牧场'],
    avatarUrl: `${IMG_PATH}卡塔琳娜.png`,
    description: '州长夫人。',
    unlockConditions: '获得马里奥信任。',
    guideSteps: [
      '先获得马里奥的信任。',
      '办公室互动后露台发展关系。',
      '随机商场相遇（可选择厕所触发CG）。'
    ]
  },
  {
    id: 'emma',
    name: '艾玛 (Emma)',
    role: CharacterRole.SPECIAL,
    locations: ['山丘豪宅', '牧场'],
    avatarUrl: `${IMG_PATH}艾玛.png`,
    description: '秘书。',
    unlockConditions: '获得马里奥信任。',
    guideSteps: [
      '先获得马里奥的信任。然后调查艾玛。',
      '桑拿房3次相遇后选择路线。',
      '不同选择影响后续发展【共享】【独享】。'
    ]
  },
  {
    id: 'sophia',
    name: '索菲亚 (Sophia)',
    role: CharacterRole.SUPPORT,
    locations: ['商场', '加油站', '山丘豪宅', '森林', '海滨', '酒馆'],
    avatarUrl: `${IMG_PATH}索菲亚.png`,
    description: '女警察。购物中心相遇后开启任务。',
    unlockConditions: '购物中心相遇。',
    guideSteps: [
      '加油站对话决定路线走向。可选择对抗或合作马里奥。',
      '合作：注意顺序先同意对抗，然后对话马里奥时[r]不要选择告密[/r]。周五找索菲亚触发换装，带索菲亚进入再告密，马里奥才会关押在客房里。',
      '对抗：选择不告诉马里奥，收集马里奥证据（可能需要三周）。周五去商店加油站找索菲亚抓捕马里奥。',
      '解救：完成抓捕后解锁海边住处。再次去住处发现被抓，森林解锁破屋。注意解救索菲亚需要[b]满级健身[/b]或者[b]满级修行[/b]。'
    ]
  },
  {
    id: 'frost_nina',
    name: '弗罗斯特 & 妮娜 (Frost & Nina)',
    role: CharacterRole.SUPPORT,
    locations: ['医院'],
    avatarUrl: `${IMG_PATH}弗罗斯特与妮娜.png`,
    description: '医生与护士。神社之门小游戏失败解锁医院。',
    unlockConditions: '神社之门小游戏失败解锁医院。',
    guideSteps: [
      '医生可以购买升级解锁（对话选项解锁CG）。',
      '护士小游戏失败3次（每次解锁一个CG）。',
      '牧场前置任务：需要与医生选择“找一些东西生产牛奶“，解锁特性[b]“催奶诱导师”[/b]。'
    ]
  },
  {
    id: 'nyxara',
    name: 'NYXARA & 大师',
    role: CharacterRole.SPECIAL,
    locations: ['森林', '神社', '霓虹灯街'],
    avatarUrl: `${IMG_PATH}NYXARA.png`,
    description: '神秘的大师和魔物娘。森林开启任务。',
    unlockConditions: '森林开启任务。',
    guideSteps: [
      '完成每次神社之门的挑战，与大师对话。分别在3次、4次、5次会遇到NYXARA。',
      '如果第四次遇到NYXARA时先选择不要放走。会二次对话，大师质问时选择它答应不再使用邪恶能力。',
      '完成大师的最终考验获得[b]“活武器”特性[/b]后大师会建造花园。',
      '在道具店会有后续剧情。如果堕落模式选择共享安娜新解锁CG。'
    ]
  },
  {
    id: 'zuri',
    name: '祖里 (Zuri)',
    role: CharacterRole.SUPPORT,
    locations: ['商场', '市中心', '酒馆'],
    avatarUrl: `${IMG_PATH}祖里.png`,
    description: '服装店老板。配合乔伊的恶作剧开启。',
    unlockConditions: '配合乔伊恶作剧开启。',
    guideSteps: [
      '骗祖里路到洗手间。如果你选择告知真相则独享；如果配合乔伊恶作剧则共享。',
      '之后每周四可以在酒吧里遇到，并约到旅馆互动。',
      '安娜泳装比赛失败后可以在服装店买新泳装。'
    ]
  },
  {
    id: 'celeste_ai',
    name: '赛里斯 (Celeste - AI)',
    role: CharacterRole.SPECIAL,
    locations: ['实验室'],
    avatarUrl: `${IMG_PATH}赛里斯.png`,
    description: '隐藏角色，AI机器人。',
    unlockConditions: '马里奥豪宅图书馆墙上红色按钮解锁实验室。',
    guideSteps: [
      '马里奥豪宅的图书馆墙上有个[r]红色按钮[/r]可以解锁实验室。',
      '进入实验室后与赛里斯对话进行对应的CG互动。'
    ]
  },
  {
    id: 'river',
    name: '河 (River)',
    role: CharacterRole.SUPPORT,
    locations: ['郊区公园', '厕所', '家'],
    avatarUrl: `${IMG_PATH}河.png`,
    description: '男娘角色。与塔莎对话后解锁。',
    unlockConditions: '与塔莎对话后解锁。',
    guideSteps: [
      '周五公园互动推进。故事时间后每周五睡醒选择河来推进剧情（解锁伪娘CG）。',
      '完成所有河的剧情后每周一可以去公园让河帮忙制作安娜服装。',
      '凤凰分享线：必须完成所有凤凰前置任务。在公园解锁厕所后会遇到河与凤凰。在厕所与河进行互动CG。'
    ]
  },
  {
    id: 'himari',
    name: '喜万里 (Himari)',
    role: CharacterRole.SUPPORT,
    locations: ['家', '商场', '荒地'],
    avatarUrl: `${IMG_PATH}喜万里.png`,
    description: '汽车销售。获得特性后经销商处解锁。',
    unlockConditions: '获得特性后经销商处解锁。',
    guideSteps: [
      '回到住处的车库选择前门触发喜万里假扮男友（解锁电梯）。',
      '每周出门前可以先上电梯与喜万里父母进行对话推进剧情（解锁CG）。',
      '直到触发喜万里想让父母离开，对话选择获得最终信任完成喜万里任务。',
      '完成喜万里后摩托车比赛可以邀请她。'
    ]
  },
  {
    id: 'zero',
    name: '零小姐 (Zero)',
    role: CharacterRole.SUPPORT,
    locations: ['霓虹灯街'],
    avatarUrl: `${IMG_PATH}零小姐.png`,
    description: '道具店老板。需完成加油站洗车任务。',
    unlockConditions: '需完成加油站洗车任务。',
    guideSteps: [
      '只要每周一触发擦车任务，完成三次即可解锁[b]“变态”[/b]。',
      '在道具店新对话来触发CG。',
      'NYXARA线：如果在大师任务中选择放走NYXARA在店铺会有后续剧情。'
    ]
  },
  {
    id: 'tasha',
    name: '塔莎 (Tasha)',
    role: CharacterRole.SUPPORT,
    locations: ['漫画店', '森林'],
    avatarUrl: `${IMG_PATH}塔莎.png`,
    description: '漫画店老板。商店对话开启任务。',
    unlockConditions: '商店对话开启任务。',
    guideSteps: [
      '神社随机相遇。',
      '私家侦探男友背叛任务去酒吧收集证据。酒吧不让进入时可以在凯特那里学习[b]“城市语言学家”[/b]特性。',
      '把获得的照片拿给塔莎看获得信任后隔一天再次访问解锁CG。'
    ]
  },
  {
    id: 'tony',
    name: '托尼 (Tony)',
    role: CharacterRole.SUPPORT,
    locations: ['荒地', '家', '市中心'],
    avatarUrl: `${IMG_PATH}托尼.png`,
    description: '修车女，赛车手。首先要解锁安娜工作室没网。',
    unlockConditions: '安娜工作室没网。',
    guideSteps: [
      '去购物商场找乔伊(Joy)他会让你帮助他拍照。',
      '去服装店拍照后获得乔伊信任会告诉你托尼位置（荒地解锁新场景）。',
      '参加摩托车需要6万美元资金（巷子里与托尼对话可以升级摩托车）。',
      '赛车比赛三次（需要三周）去巷子里与托尼对话触发CG可以解锁住处。',
      '然后可以把托尼带回家的停车场帮忙。'
    ]
  },
  {
    id: 'celeste_influencer',
    name: '塞莱斯特 (Celeste - Influencer)',
    role: CharacterRole.SPECIAL,
    locations: ['网络', '商场', '荒地', '星际展'],
    avatarUrl: `${IMG_PATH}塞莱斯特.png`,
    description: '超级网红。需要30k订阅，直播已解锁（完成托尼的任务），治愈安娜的抑郁症。',
    unlockConditions: '30k订阅，直播已解锁，治愈安娜抑郁。',
    guideSteps: [
      '当您玩游戏时，一旦您开始提高订阅者，塞莱斯特候出现在商场。',
      '在商场再次找到她，她会邀请你去荒芜之地的主题公园聊聊。被保镖拦住选第一个选项。',
      '完成托尼继续任务后，前往粉丝见面会，与安娜对话可以邀请塞莱斯特。',
      '周去主题公园见面，选择展示小东西。第二天再次访问，选择想找点好玩的。'
    ]
  },
  {
    id: 'kirby_robert',
    name: '柯比 & 罗伯特 (Kirby & Robert)',
    role: CharacterRole.SUPPORT,
    locations: ['市中心', '牧场'],
    avatarUrl: `${IMG_PATH}柯比.png`,
    description: '牧场经营者，牛娘。在市中心街道触发NPC解锁地图农场。',
    unlockConditions: '市中心街道触发NPC解锁农场。',
    guideSteps: [
      '去医院找医生选择“找一些东西生产牛奶“ 解锁特性[b]“催奶诱导师”[/b]。',
      '去农场找柯比对话后，再去谷仓解锁“产奶器”。',
      '产出金币后对话选择坚持让她帮忙挤解锁CG。',
      '完成4次后会遇到木村夫人她想收购农场（强支线：卖/不卖）。'
    ]
  },
  {
    id: 'clay',
    name: '黏土 (Clay)',
    role: CharacterRole.SUPPORT,
    locations: ['牧场'],
    avatarUrl: `${IMG_PATH}黏土.png`,
    description: '牧场男。',
    unlockConditions: '农场房子里触发。',
    guideSteps: ['在农场房子里触发NPC对话。', '解锁催奶诱导师后解锁商店功能。']
  },
  {
    id: 'claudia',
    name: '克劳迪娅 (Claudia)',
    role: CharacterRole.SPECIAL,
    locations: ['电视', '市中心'],
    avatarUrl: `${IMG_PATH}克劳迪娅.png`,
    description: '电视主播。',
    unlockConditions: '周四客厅电视活动选择看“新闻”。',
    guideSteps: [
      '星期三去市中心街道的酒吧可以预见（随机）。',
      '对话选择：“抱歉 我不知道你是谁” -> “有一些方法可以娱乐你…” -> “我们现在就可以…” -> “你为什么告诉我…”。',
      '接近后开始CG（选择其“他”会消失）。'
    ]
  },
  {
    id: 'melody',
    name: '乐声 (Melody)',
    role: CharacterRole.SPECIAL,
    locations: ['海滨'],
    avatarUrl: `${IMG_PATH}乐声.png`,
    description: '音乐人。',
    unlockConditions: '星期五流行音乐教父和乐声在海滩解锁。',
    guideSteps: ['互动需要[b]”变态“[/b]或[b]“活武器”[/b]特性。']
  },
  {
    id: 'mrs_kimura',
    name: '木村夫人 (Mrs. Kimura)',
    role: CharacterRole.SPECIAL,
    locations: ['家', '牧场', '市中心'],
    avatarUrl: `${IMG_PATH}木村夫人.png`,
    description: '喜万里的母亲。',
    unlockConditions: '完成4次牧场挤奶任务触发买卖农场剧情。',
    guideSteps: [
      '可以选择考虑 -> 询问其他意见。选择不卖柯比会留下（强支线）；选择卖掉柯比会生气的离开。',
      '选择考虑后木村夫人会在街道区域酒店里出现，但是不要理会。',
      '多次无视她直到出现抗议，然后解锁69号房间。对话后解锁CG。'
    ]
  }
];

export const TOOL_CHANGELOG: UpdateLog[] = [
  {
    version: '1.0',
    date: '2024-03-20',
    changes: [
      'UI重构：全面升级为Win11 Mica风格，界面更明亮、大气。',
      '结构优化：取消引导页，将人物详情整合为单页显示，提升阅读体验。',
      '内容更新：补全所有人物的详细攻略流程、对话选择及节日事件。',
      '功能更新：黑客工具箱更名为黑客答案，修正部分文案。',
      '侧边栏升级：更大的动态标题，更清晰的导航结构。',
      '体验优化：点击黑客代码即可自动复制，新增特别感谢名单。',
      '视觉增强：整体字体放大，按照攻略重点增加了颜色高亮（红/蓝/绿）和加粗显示，提升阅读轻松度。'
    ]
  }
];

export const GAME_CHANGELOG: UpdateLog[] = [
  {
    version: 'Game Updates',
    date: 'Latest',
    changes: [
      '请访问官方更新日志查看最新游戏内容：',
      'https://arvusgames.itch.io/starmakerstory'
    ]
  },
  {
    version: '1.7',
    date: '2023-10-01',
    changes: [
      '新增：农场/牧场游戏模式和场景。',
      '新增：角色柯比、罗伯特、黏土、木村夫人。',
      '修复：修复了“死机”卡顿问题（F1 x 10）。',
      '新增：节日系统。',
      '剧情：增加了索菲亚的新分支路径。'
    ]
  },
  {
    version: '1.6B',
    date: '2023-08-15',
    changes: [
      '新增：节日活动（情人节、万圣节、圣诞节）。',
      '功能：更新了摄影机制。',
      '剧情：扩展了夏洛特的保镖线。'
    ]
  }
];

export const SUPPORTERS = [
  "水友吴*", "司暴君 (作者)", "所有支持过爱发电的玩家"
];

export const AUTHOR_INFO = {
  name: '司暴君',
  platforms: [
    { 
      name: 'Bilibili', 
      icon: <Target className="w-4 h-4" />,
      link: 'https://space.bilibili.com/30964521?spm_id_from=333.1387.0.0'
    },
    { 
      name: '抖音', 
      icon: <Users className="w-4 h-4" />,
      link: 'https://www.douyin.com/user/MS4wLjABAAAAWwSM3NnmEU7SDAl0r0POjk34gSZZ1SFYz0JXM0a_YOPylnDyF4ODBBnD-Ld5wDs5?from_tab_name=main'
    }
  ],
  description: '全网最全攻略作者，坚持手打更新。',
  supportMessage: '纯凭心意对攻略作者进行支持和投喂，为爱发电！',
  supportersLink: '#',
  feedbackGroupLink: 'https://qm.qq.com/cgi-bin/qm/qr?k=placeholder',
  qrWechat: `${IMG_PATH}微信.png`,
  qrAlipay: `${IMG_PATH}支付宝.png`
};
