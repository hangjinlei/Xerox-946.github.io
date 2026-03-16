export interface NavItem {
  label: string;
  path: string;
  icon: string;
  summary: string;
}

export interface HomeFeature {
  title: string;
  icon: string;
  summary: string;
}

export interface CampaignMessage {
  title: string;
  summary: string;
  detail: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  answer: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export interface KnowledgeTopic {
  title: string;
  image?: string;
  paragraphs: string[];
}

export interface UpdateSection {
  title: string;
  items: string[];
}

export const navItems: NavItem[] = [
  { label: '首页', path: '/', icon: 'home', summary: '疫情总览与重点信息速读' },
  { label: '防疫宣传', path: '/campaign', icon: 'campaign', summary: '宣传口号与行动倡议' },
  { label: '相关题目', path: '/quiz', icon: 'quiz', summary: '防疫知识答题卡' },
  { label: '知识普及', path: '/knowledge', icon: 'school', summary: '常见问题与科普要点' },
  { label: '疫情情报', path: '/updates', icon: 'insights', summary: '国内外疫情资讯摘录' },
  { label: '信息调查', path: '/survey', icon: 'assignment', summary: '留言与信息反馈表单' },
];

export const homeHighlights = [
  '2019 年 12 月以来，武汉持续开展相关疾病监测并发现多起病毒性肺炎病例。',
  '病原学检测很快锁定为一种新型冠状病毒，并完成全基因组序列解析。',
  '及时、准确、全面的信息公开，是建立公众信任和提高防控效率的关键。',
];

export const homeFeatures: HomeFeature[] = [
  { title: '病源检测', icon: 'biotech', summary: '实验室在 1 月 7 日检出新型冠状病毒，并从样本中完成分离。' },
  { title: '疫情信息', icon: 'public', summary: '各地通过通报、地图与官方渠道持续发布更透明的疫情信息。' },
  { title: '防控方案', icon: 'health_and_safety', summary: '国家卫健委连续印发诊疗、监测和防控方案，为各地执行提供依据。' },
  { title: '防控队伍', icon: 'groups', summary: '多支医疗救治队和护理专家组驰援武汉，为重症救治提供支持。' },
  { title: '物资调备', icon: 'inventory_2', summary: '中央医药储备和财政补助持续向重点地区投入防疫物资与资金。' },
];

export const campaignMessages: CampaignMessage[] = [
  {
    title: '温馨提示一：减少流动，健康最重要',
    summary: '出门戴口罩，别去凑热闹，洗手勤开窗，拜年发微信。',
    detail: '少出门、少聚集、勤洗手、勤通风，是最基础也最有效的自我保护方式。把线下走动变成线上问候，同样可以表达牵挂。',
  },
  {
    title: '温馨提示二：保持警惕，不轻视不恐慌',
    summary: '戴口罩、讲卫生、打喷嚏捂口鼻，有症状早就医。',
    detail: '面对疫情既不能掉以轻心，也不必制造恐慌。科学防护、及时就医、不造谣不传谣，才是对自己和他人负责。',
  },
  {
    title: '温馨提示三：返乡后主动隔离观察',
    summary: '从重点地区返回后，请主动报备并做好健康观察。',
    detail: '如果有重点地区旅居史，务必遵守属地防控要求，减少不必要接触。多一份谨慎，就多一层保护。',
  },
  {
    title: '温馨提示四：节日团圆可改为云聚会',
    summary: '电子拜年、线上问候，同样可以把祝福送到。',
    detail: '特殊时期减少面对面聚集，是为了换来更长久、更安全的团圆。平安本身，就是最好的祝福。',
  },
  {
    title: '温馨提示五：保护自己，也是保护他人',
    summary: '戴口罩、勤洗手，不给病毒可乘之机。',
    detail: '个人防护不是单向行为，而是一种社会责任。每一次规范佩戴口罩和手卫生，都会减少传播风险。',
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: '截至目前，世界卫生组织（WHO）对新型冠状病毒疾病的命名是？',
    answer: 'C',
    options: [
      { value: 'A', label: 'A. SARS-CoV' },
      { value: 'B', label: 'B. MERS-CoV' },
      { value: 'C', label: 'C. COVID-19' },
      { value: 'D', label: 'D. SARI' },
    ],
  },
  {
    id: 'q2',
    question: '下面哪种动物不是冠状病毒常见的宿主？',
    answer: 'D',
    options: [
      { value: 'A', label: 'A. 果子狸' },
      { value: 'B', label: 'B. 蝙蝠' },
      { value: 'C', label: 'C. 竹鼠' },
      { value: 'D', label: 'D. 蚊子' },
    ],
  },
  {
    id: 'q3',
    question: '已知的新型冠状病毒传播途径中，不包括以下哪种？',
    answer: 'C',
    options: [
      { value: 'A', label: 'A. 接触传播' },
      { value: 'B', label: 'B. 飞沫传播' },
      { value: 'C', label: 'C. 土壤传播' },
      { value: 'D', label: 'D. 气溶胶传播' },
    ],
  },
  {
    id: 'q4',
    question: '关于口罩的选择，以下哪种不适合预防新型冠状病毒？',
    answer: 'A',
    options: [
      { value: 'A', label: 'A. 纸质口罩' },
      { value: 'B', label: 'B. 一次性医用口罩' },
      { value: 'C', label: 'C. 医用外科口罩' },
      { value: 'D', label: 'D. N95 防护口罩' },
    ],
  },
  {
    id: 'q5',
    question: '关于废弃口罩处理方式，以下说法不正确的是？',
    answer: 'D',
    options: [
      { value: 'A', label: 'A. 随时用完随时丢弃' },
      { value: 'B', label: 'B. 有发热症状者需消毒、密封后再丢弃' },
      { value: 'C', label: 'C. 处理完口罩后要及时洗手' },
      { value: 'D', label: 'D. 废弃口罩都应丢入有害垃圾桶' },
    ],
  },
  {
    id: 'q6',
    question: '关于居家预防新型冠状病毒感染，以下说法不正确的是？',
    answer: 'C',
    options: [
      { value: 'A', label: 'A. 适当运动，早睡早起，提高免疫力' },
      { value: 'B', label: 'B. 室内多通风换气，并保持整洁卫生' },
      { value: 'C', label: 'C. 将白醋放在暖气片上消毒室内空气' },
      { value: 'D', label: 'D. 坚持安全饮食，肉类和蛋类要煮熟' },
    ],
  },
  {
    id: 'q7',
    question: '收到从重点地区发来的快递后，哪种做法不建议？',
    answer: 'A',
    options: [
      { value: 'A', label: 'A. 认为一定带毒并直接拒收' },
      { value: 'B', label: 'B. 使用 75% 酒精擦拭外包装' },
      { value: 'C', label: 'C. 接触后及时洗手' },
      { value: 'D', label: 'D. 放置通风处静置一段时间' },
    ],
  },
  {
    id: 'q8',
    question: '关于远途出行，以下行为不正确的是？',
    answer: 'C',
    options: [
      { value: 'A', label: 'A. 尽量不在旅途中摘下口罩吃喝' },
      { value: 'B', label: 'B. 摘口罩时不触碰外表面' },
      { value: 'C', label: 'C. 用过的口罩直接放入包里或兜里' },
      { value: 'D', label: 'D. 勤洗手，不乱摸，保持手部清洁' },
    ],
  },
  {
    id: 'q9',
    question: '关于预防新型冠状病毒感染肺炎，以下措施有效的是？',
    answer: 'D',
    options: [
      { value: 'A', label: 'A. 淡盐水漱口' },
      { value: 'B', label: 'B. 桑拿、汗蒸' },
      { value: 'C', label: 'C. 饮酒' },
      { value: 'D', label: 'D. 戴口罩' },
    ],
  },
  {
    id: 'q10',
    question: '如果怀疑自己感染了新型冠状病毒，应当怎么办？',
    answer: 'C',
    options: [
      { value: 'A', label: 'A. 继续坚持上班或上学' },
      { value: 'B', label: 'B. 立刻前往其他“无病毒”地区' },
      { value: 'C', label: 'C. 佩戴口罩并前往指定医院就医' },
      { value: 'D', label: 'D. 拒绝就医，先忍一忍' },
    ],
  },
];

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    title: '1. 选哪种口罩更合适？',
    image: 'assets/images/4.jpg',
    paragraphs: [
      '并不是所有口罩都能有效防护呼吸道飞沫传播。面对流感或新冠等呼吸道疾病风险时，应优先选择具备过滤和阻隔能力的合规口罩。',
      '口罩佩戴时间不宜过长。受潮或被口鼻分泌物污染后应及时更换，通常 4 到 6 小时更换一次更合理。',
    ],
  },
  {
    title: '2. 哪些人更容易感染？',
    image: 'assets/images/6.jpg',
    paragraphs: [
      '人群普遍易感。免疫功能低下人群、老年人、孕妇，以及有慢性疾病或肝肾功能异常的人群，感染后出现重症的风险更高。',
    ],
  },
  {
    title: '3. 新型冠状病毒有哪些传播途径？',
    paragraphs: [
      '经呼吸道飞沫传播和接触传播是主要途径；在相对封闭空间中长时间暴露于高浓度气溶胶环境时，也存在气溶胶传播的可能。',
    ],
  },
  {
    title: '4. 什么是密切接触者？',
    image: 'assets/images/8.jpg',
    paragraphs: [
      '共同居住、学习、工作，或在同一教室、办公室、房屋中长时间近距离接触的人。',
      '诊疗、护理、探视病例的医护人员、家属或陪护人员，以及在密闭环境中与病例近距离接触的人。',
      '乘坐同一交通工具并被评估为存在近距离接触风险的乘客、乘务员和相关工作人员。',
      '经现场调查评估后，其他符合密切接触判定标准的人员。',
    ],
  },
  {
    title: '5. 新冠肺炎患者有哪些临床表现？',
    image: 'assets/images/7.jpg',
    paragraphs: [
      '常见症状包括发热、干咳、乏力、呼吸不畅，也可能伴随腹泻等不典型表现；流涕、咳痰相对少见。',
      '部分患者起病轻微，甚至无发热；重症患者可在一周后出现呼吸困难，病情进展迅速。',
    ],
  },
];

export const updateOverview = [
  { label: '新增确诊', value: '5 例', note: '6 月 4 日，均为境外输入病例' },
  { label: '现有确诊', value: '66 例', note: '其中重症病例 1 例' },
  { label: '累计治愈', value: '78,327 例', note: '当日新增治愈 8 例' },
  { label: '累计死亡', value: '4,634 例', note: '全国累计报告确诊 83,027 例' },
];

export const domesticUpdates: UpdateSection[] = [
  {
    title: '国内最新资讯',
    items: [
      '6 月 4 日 0—24 时，31 个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例 5 例，均为境外输入病例（上海 4 例，四川 1 例）；无新增死亡病例；无新增疑似病例。',
      '当日新增治愈出院病例 8 例，解除医学观察的密切接触者 508 人，重症病例减少 1 例。',
      '境外输入现有确诊病例 61 例（无重症病例），现有疑似病例 2 例；累计确诊病例 1,768 例，累计治愈出院病例 1,707 例，无死亡病例。',
      '截至 6 月 4 日 24 时，全国现有确诊病例 66 例，累计追踪到密切接触者 746,349 人，尚在医学观察的密切接触者 4,117 人。',
      '31 个省（自治区、直辖市）和新疆生产建设兵团报告新增无症状感染者 3 例；尚在医学观察无症状感染者 297 例。',
      '港澳台地区累计通报确诊病例 1,587 例，其中香港 1,099 例、澳门 45 例、台湾 443 例。',
    ],
  },
];

export const internationalUpdates: UpdateSection[] = [
  {
    title: '海外相关信息',
    items: [
      '海外媒体报道指出，美国情报系统在向总统进行疫情情报简报时面临巨大阻力，专业判断常常难以被充分吸收。',
      '在累计确诊和死亡病例均位居全球前列的背景下，美国国内关于疫情应对失误的反思持续升温。',
      '《纽约时报》援引多名情报界人士说法称，早在 1 月下旬就已向高层提示病毒威胁，但警报传递与决策采纳之间存在明显落差。',
      '多位现任和前任情报官员表示，面对不断偏离主题、耐心不足的汇报对象，科学、连续、可执行的信息传达极具挑战。',
      '这也再次说明，面对公共卫生危机，尊重专业判断、提升决策透明度与执行一致性同样重要。',
    ],
  },
];

export const surveyTips = [
  '请填写真实姓名和可联系的邮箱，方便后续回访。',
  '如果你有校园或社区防疫建议，也欢迎写在留言中。',
  '本表单为演示用途，提交后仅在本地页面内反馈结果。',
];
