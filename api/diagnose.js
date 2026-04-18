const ANTHROPIC_MODEL = "claude-sonnet-4-20250514";
const ZHIPU_EMBEDDING_MODEL = "embedding-3";

const CATEGORY_LIBRARY = {
  美妆: [
    {
      id: "beauty-1",
      title: "油痘肌早八底妆全流程，12小时不斑驳实测",
      content:
        "我的通勤是地铁+步行，脸很容易泛油。先用控油妆前薄涂T区，再用轻薄粉底分区叠加，最后用定妆喷雾按压。中午补妆只补鼻翼和下巴，整体妆感会很干净。拍照也不会灰。",
      tags: "#油痘肌 #底妆教程 #通勤妆",
      embedding: null,
    },
    {
      id: "beauty-2",
      title: "学生党平价修护面霜清单，烂脸期真的稳住了",
      content:
        "换季时我会只保留洁面+修护面霜+防晒，减少活性叠加。这里整理了4款平价修护霜的质地和上脸感受，偏油皮和干皮分别给出选择建议，避免盲买踩雷。",
      tags: "#平价护肤 #修护面霜 #学生党好物",
      embedding: null,
    },
    {
      id: "beauty-3",
      title: "黄黑皮显白口红实测，3支日常不挑皮",
      content:
        "我选了奶咖豆沙、暖调红棕、低饱和玫瑰色做对比，室内外光线都拍了。每支都给了素唇试色和叠涂建议，还标注了通勤、约会、面试不同场景搭配。",
      tags: "#口红试色 #黄黑皮显白 #日常妆容",
      embedding: null,
    },
  ],
  旅游: [
    {
      id: "travel-1",
      title: "周末2天1夜杭州路线，人均800打卡不赶路",
      content:
        "我把西湖、法喜寺、河坊街串成同区域路线，省掉来回折返。每段都附上交通方式、排队时间和拍照机位，第一次去也能照着走，不会花冤枉时间。",
      tags: "#杭州旅游 #周末短途 #旅行攻略",
      embedding: null,
    },
    {
      id: "travel-2",
      title: "日本关西自由行避坑清单，第一次去就省下2000",
      content:
        "把交通卡、景点预约、行李转运、退税流程整合成一篇。重点写了新手最容易踩坑的换乘和营业时间问题，并且按早中晚拆分了行程，执行成本更低。",
      tags: "#日本自由行 #关西攻略 #旅行避坑",
      embedding: null,
    },
    {
      id: "travel-3",
      title: "海边城市拍照姿势合集，社恐也能拍出松弛感",
      content:
        "我把姿势分成站姿、坐姿、走动抓拍三类，每类给3个动作关键词。再补上穿搭配色、逆光时段和构图建议，不需要专业摄影也能稳定出片。",
      tags: "#旅行拍照 #海边穿搭 #出片教程",
      embedding: null,
    },
  ],
  美食: [
    {
      id: "food-1",
      title: "空气炸锅低卡鸡胸做法，外脆里嫩零失败",
      content:
        "把腌制比例、火候和翻面时间都写清楚了。关键是先锁水再增香，最后撒一点辣椒粉和海盐就很有满足感，减脂期也能吃得开心。",
      tags: "#减脂餐 #空气炸锅 #鸡胸肉做法",
      embedding: null,
    },
    {
      id: "food-2",
      title: "打工人15分钟晚餐模板，一周不重样",
      content:
        "每套都按主食+蛋白质+蔬菜去搭配，食材尽量复用，买菜成本更低。文中写了懒人备菜流程，回家基本开火就能做，效率很高。",
      tags: "#快手晚餐 #打工人做饭 #一周食谱",
      embedding: null,
    },
    {
      id: "food-3",
      title: "新手咖啡拉花入门，家用设备也能练出来",
      content:
        "我把奶泡状态判断、注入角度和手腕发力分步骤拆开。每一步都给了常见失败原因，尤其是奶泡太粗和融合不均的问题，修正后提升很明显。",
      tags: "#咖啡拉花 #居家咖啡 #新手教程",
      embedding: null,
    },
  ],
  穿搭: [
    {
      id: "outfit-1",
      title: "小个子通勤穿搭公式，显高显瘦一周模板",
      content:
        "把上短下长、同色延伸、腰线位置三个核心原则拆成可复用模板。每套我都写了平替单品和预算区间，学生党和上班族都能直接照抄。",
      tags: "#小个子穿搭 #通勤OOTD #显高技巧",
      embedding: null,
    },
    {
      id: "outfit-2",
      title: "梨形身材夏日穿搭避雷，腿粗胯宽也能自信穿",
      content:
        "重点讲版型和材质，A字裙、直筒裤、硬挺短外套都很好用。避开贴胯和过薄面料后，视觉会更利落，拍照角度也更友好。",
      tags: "#梨形身材 #夏日穿搭 #身材修饰",
      embedding: null,
    },
    {
      id: "outfit-3",
      title: "基础款也能穿出氛围感，配色思路一篇讲透",
      content:
        "我把配色分成同色系、邻近色、点缀色三种，给了可直接套用的比例。搭配首饰和包鞋时，先确定主色再补对比色，整体会更高级。",
      tags: "#基础款穿搭 #配色技巧 #氛围感",
      embedding: null,
    },
  ],
  生活方式: [
    {
      id: "lifestyle-1",
      title: "早起两小时晨间例行，精力翻倍的关键步骤",
      content:
        "我把晨间流程固定成喝水、拉伸、轻阅读、优先任务清单四步。每步只需要10到20分钟，执行阻力低，连续做两周后状态明显更稳。",
      tags: "#晨间仪式 #自律生活 #效率提升",
      embedding: null,
    },
    {
      id: "lifestyle-2",
      title: "租房党的极简收纳方案，20平也能住出秩序感",
      content:
        "先按使用频率划分区域，再用统一规格收纳盒提升可视化。文里写了玄关、厨房、衣柜三处高频乱点改造前后对比，操作成本很低。",
      tags: "#租房改造 #收纳整理 #极简生活",
      embedding: null,
    },
    {
      id: "lifestyle-3",
      title: "情绪低落自救清单，亲测有效的5个小动作",
      content:
        "情绪差时我不会逼自己高效，而是先做可完成的小动作：整理桌面、晒太阳、短时散步、写三行记录、关掉信息流。重点是先恢复掌控感。",
      tags: "#情绪管理 #生活疗愈 #自我成长",
      embedding: null,
    },
  ],
};

function cosineSimilarity(vecA, vecB) {
  if (!Array.isArray(vecA) || !Array.isArray(vecB)) {
    return -1;
  }
  const size = Math.min(vecA.length, vecB.length);
  if (size === 0) return -1;

  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < size; i += 1) {
    dot += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  return denominator === 0 ? -1 : dot / denominator;
}

function stripMarkdownCodeFence(text) {
  const trimmed = (text || "").trim();
  if (trimmed.startsWith("```")) {
    return trimmed.replace(/^```[a-zA-Z]*\n?/, "").replace(/\n?```$/, "").trim();
  }
  return trimmed;
}

async function getZhipuEmbedding(inputText) {
  const response = await fetch("https://open.bigmodel.cn/api/paas/v4/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ZHIPU_API_KEY}`,
    },
    body: JSON.stringify({
      model: ZHIPU_EMBEDDING_MODEL,
      input: inputText,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Zhipu embedding request failed: ${detail}`);
  }

  const data = await response.json();
  return data?.data?.[0]?.embedding;
}

function findNearestCategoryAndTopPosts(userEmbedding) {
  const categoryScores = Object.entries(CATEGORY_LIBRARY).map(([category, posts]) => {
    const scoredPosts = posts.map((post) => ({
      ...post,
      similarity: cosineSimilarity(userEmbedding, post.embedding),
    }));

    scoredPosts.sort((a, b) => b.similarity - a.similarity);
    const top3 = scoredPosts.slice(0, 3);
    const avgSimilarity =
      top3.reduce((sum, post) => sum + (Number.isFinite(post.similarity) ? post.similarity : 0), 0) /
      (top3.length || 1);
    return { category, avgSimilarity, top3 };
  });

  categoryScores.sort((a, b) => b.avgSimilarity - a.avgSimilarity);
  return categoryScores[0];
}

async function runClaudeDiagnosis(userNote, nearestCategory, similarPosts) {
  const systemPrompt =
    "你是内容诊断专家。请根据用户笔记和同类参考爆款内容进行结构化诊断。必须只输出 JSON，不要输出任何解释文字或 Markdown。";

  const userPrompt = {
    task: "请基于用户笔记与参考爆款完成四维诊断",
    dimensions: ["标题结构", "开头钩子", "信息密度", "互动引导词"],
    user_note: userNote,
    nearest_category: nearestCategory,
    similar_hot_posts: similarPosts.map((post) => ({
      title: post.title,
      content: post.content,
      tags: post.tags,
      similarity: Number((post.similarity ?? -1).toFixed(4)),
    })),
    output_rules: [
      "仅输出合法 JSON",
      "字段必须是 category,total_score,scores,suggestions,rewrite_title",
      "scores 必须含 title,hook,density,engagement，取值 0-100 数字",
      "suggestions 必须输出 3 条中文建议数组",
      "rewrite_title 必须是中文优化标题字符串",
    ],
    output_schema_example: {
      category: "美妆",
      total_score: 78,
      scores: { title: 80, hook: 75, density: 77, engagement: 79 },
      suggestions: ["建议1", "建议2", "建议3"],
      rewrite_title: "优化后的标题",
    },
  };

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: JSON.stringify(userPrompt) }],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Anthropic request failed: ${detail}`);
  }

  const data = await response.json();
  const rawText = data?.content?.find((item) => item.type === "text")?.text || "";
  const jsonText = stripMarkdownCodeFence(rawText);
  return JSON.parse(jsonText);
}

function normalizeDiagnosisResult(result) {
  const scores = result?.scores || {};
  const normalizedScores = {
    title: Math.max(0, Math.min(100, Number(scores.title) || 0)),
    hook: Math.max(0, Math.min(100, Number(scores.hook) || 0)),
    density: Math.max(0, Math.min(100, Number(scores.density) || 0)),
    engagement: Math.max(0, Math.min(100, Number(scores.engagement) || 0)),
  };
  const totalScore =
    Number(result?.total_score) ||
    Math.round(
      (normalizedScores.title + normalizedScores.hook + normalizedScores.density + normalizedScores.engagement) /
        4
    );

  return {
    category: result?.category || "未分类",
    total_score: Math.max(0, Math.min(100, totalScore)),
    scores: normalizedScores,
    suggestions: Array.isArray(result?.suggestions) ? result.suggestions.slice(0, 3) : [],
    rewrite_title: result?.rewrite_title || "",
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.ANTHROPIC_API_KEY || !process.env.ZHIPU_API_KEY) {
    return res.status(500).json({ error: "Missing ANTHROPIC_API_KEY or ZHIPU_API_KEY" });
  }

  try {
    const { title = "", content = "", tags = "" } = req.body || {};
    if (!title.trim() || !content.trim()) {
      return res.status(400).json({ error: "title and content are required" });
    }

    const userText = `标题：${title}\n正文：${content}\n标签：${tags}`;
    const userEmbedding = await getZhipuEmbedding(userText);
    if (!Array.isArray(userEmbedding)) {
      throw new Error("Invalid embedding vector from Zhipu");
    }

    const nearest = findNearestCategoryAndTopPosts(userEmbedding);
    if (!nearest) {
      throw new Error("Failed to find nearest category");
    }

    const diagnosis = await runClaudeDiagnosis({ title, content, tags }, nearest.category, nearest.top3);
    const result = normalizeDiagnosisResult(diagnosis);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: "Diagnosis failed",
      detail: error.message,
    });
  }
}
