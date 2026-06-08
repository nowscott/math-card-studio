# Math Card Studio

面向初高中数学教研场景的知识点卡片图片生成器。

[在线演示](https://math-card-studio.vercel.app) · [GitHub 仓库](https://github.com/nowscott/math-card-studio)

这是一个用于生成初高中数学知识点卡片图片的 React + Tailwind CSS 项目。项目采用“知识板块归档”的工作流：

- 每个知识板块是一条归档记录
- 每个板块可以包含多张知识图片
- 归档页点击某个板块后，右侧展示该板块全部图片
- 每张图片可单独下载，也可以一键下载当前板块全部图片
- 数学公式统一使用 MathML，几何图形优先使用组件内 SVG
- 新增公式推荐使用 `Formula` 组件书写 TeX，组件会输出 KaTeX HTML 与 MathML
- 样式使用浅色系，适合直接生成高清图片

## 启动

```bash
npm run dev
```

## 添加新知识板块

在 `src/card-blocks` 下新建一个文件夹，例如：

```text
src/card-blocks/function-basics/index.jsx
```

该文件默认导出一个 `block` 对象：

```jsx
const block = {
  id: "function-basics",
  title: "函数基础",
  stage: "初中数学",
  category: "函数专题",
  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
  status: "已复核归档",
  description: "本板块说明。",
  tags: ["函数", "图像", "性质"],
  cards: [
    {
      id: "function-definition",
      imageTitle: "图片 01",
      title: "函数概念",
      subtitle: "一一对应关系的理解",
      tags: ["核心概念"],
      summary: "图片摘要。",
      points: [],
      reviewItems: ["知识准确", "图文分离"],
    },
  ],
};

export default block;
```

卡片只写知识点、公式、推导、方法和易错提醒，不写学习记录、个人信息或真实姓名。

## 公式写法

推荐在板块文件中引入：

```jsx
import { Formula } from "../../components/Formula.jsx";
```

然后用 TeX 快速写公式：

```jsx
<Formula tex={String.raw`\sqrt{g(x)}:\ g(x)\ge 0`} />
```

这样比手写 MathML 更快，同时保留 KaTeX 生成的 MathML，适合后续批量制卡。
