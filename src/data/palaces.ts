// 十二宫共享数据：主页面（表盘）与 12 个详情页共用
export interface Palace {
  no: string;
  name: string;
  hover: string;
  q: string;
}

export const palaces: Palace[] = [
  { no: "01", name: "命宫", hover: "灵魂", q: "你如何定义自己？" },
  { no: "02", name: "兄弟宫", hover: "朋友", q: "谁与你并肩同行？" },
  { no: "03", name: "夫妻宫", hover: "爱", q: "你如何爱与被爱？" },
  { no: "04", name: "子女宫", hover: "未来", q: "你想留下什么？" },
  { no: "05", name: "财帛宫", hover: "欲望", q: "钱对你意味着什么？" },
  { no: "06", name: "疾厄宫", hover: "感知", q: "身体在提醒你什么？" },
  { no: "07", name: "迁移宫", hover: "行为", q: "你敢走多远？" },
  { no: "08", name: "交友宫", hover: "社交", q: "你在人群里是谁？" },
  { no: "09", name: "官禄宫", hover: "价值观", q: "什么让你觉得值得？" },
  { no: "10", name: "田宅宫", hover: "过去", q: "你的安全感藏在哪里？" },
  { no: "11", name: "福德宫", hover: "精神", q: "独处时，你是谁？" },
  { no: "12", name: "父母宫", hover: "执念", q: "你从何处来？" },
];
