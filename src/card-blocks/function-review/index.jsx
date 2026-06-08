import React from "react";
import { ArrowLeftRight, FunctionSquare, Search } from "lucide-react";
import { Formula } from "../../components/Formula.jsx";
import {
  DomainSketch,
  ParityMonotonicitySketch,
  TransformationZeroSketch,
} from "../../components/FunctionSketches.jsx";

const block = {
  id: "function-chapter-review",
  title: "函数章节复习",
  stage: "高中数学",
  category: "函数专题",
  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
  status: "已复核归档",
  description:
    "聚焦高中函数章节本身，不进入导数。选取最容易丢分的定义域、性质判断、图像变换与零点三个板块，形成三张复习卡片。",
  tags: ["函数", "章节复习", "易错整理"],
  cards: [
    {
      id: "domain-priority",
      imageTitle: "图片 01",
      title: "定义域：先限制，再化简",
      subtitle: "函数题第一步不是计算，而是锁定自变量允许取值",
      tags: ["易错板块", "定义域"],
      summary:
        "定义域是后续单调性、值域、复合函数的地基。常见失分点是先约分、先开方、先代入，导致把原函数不允许的点误放回来。",
      points: [
        {
          icon: Search,
          label: "易错总纲",
          title: "定义域的限制条件要先列全",
          visual: <DomainSketch />,
          conclusion: (
            <>
              函数定义域必须由
              <strong className="font-bold text-slate-700">原式本身</strong>
              决定，不能被后续化简“洗掉”限制条件。
            </>
          ),
          formulas: [
            { name: "分母限制", body: <Formula tex={String.raw`\frac{1}{g(x)}:\ g(x)\ne 0`} /> },
            { name: "偶次根式", body: <Formula tex={String.raw`\sqrt{g(x)}:\ g(x)\ge 0`} /> },
            { name: "对数限制", body: <Formula tex={String.raw`\log_a g(x):\ g(x)>0,\ a>0,\ a\ne1`} /> },
          ],
          steps: [
            "先看原式结构，逐项列出限制条件。",
            "分母不为 0，偶次根式被开方数不小于 0，对数真数大于 0。",
            "若有复合函数，外层与内层定义域要同时满足。",
            "最后求所有限制条件的交集，再进行化简或代入。",
          ],
          theorem: (
            <>
              复合函数定义域可写成：
              <span className="mx-1 inline-flex whitespace-nowrap rounded-full bg-sky-50 px-2 py-1 text-sky-600">
                <Formula tex={String.raw`D_{f\circ g}=\{x\mid x\in D_g,\ g(x)\in D_f\}`} />
              </span>
            </>
          ),
        },
      ],
      reviewItems: ["不先化简", "限制条件取交集", "复合函数内外同时检查"],
    },
    {
      id: "monotonicity-parity",
      imageTitle: "图片 02",
      title: "函数性质：单调性与奇偶性",
      subtitle: "不用导数，也能用定义、图像、代数变形稳定判断",
      tags: ["性质判断", "易错板块"],
      summary:
        "函数性质题的核心是先确定讨论区间，再判断变化趋势或对称关系。最常见错误是跨区间谈单调、定义域不对称却判断奇偶。",
      points: [
        {
          icon: FunctionSquare,
          label: "性质闭环",
          title: "先看定义域，再判单调与奇偶",
          visual: <ParityMonotonicitySketch />,
          conclusion: (
            <>
              单调性必须在
              <strong className="font-bold text-slate-700">指定区间</strong>
              内讨论；奇偶性必须先满足定义域关于原点对称。
            </>
          ),
          formulas: [
            { name: "递增定义", body: <Formula tex={String.raw`x_1<x_2\Rightarrow f(x_1)<f(x_2)`} /> },
            { name: "偶函数", body: <Formula tex={String.raw`f(-x)=f(x)`} /> },
            { name: "奇函数", body: <Formula tex={String.raw`f(-x)=-f(x)`} /> },
          ],
          steps: [
            "先写定义域，确认是否需要分区间讨论。",
            "判奇偶前先看定义域是否关于原点对称。",
            "用 f(-x) 与 f(x) 的关系判断奇偶，不只看图像形状。",
            "判单调时固定在一个区间内，可用作差、作商或图像趋势。",
          ],
          theorem: (
            <>
              高频误区：
              <span className="mx-1 whitespace-nowrap rounded-full bg-orange-50 px-2 py-1 text-orange-600">
                不能把两个区间合并说单调
              </span>
              <span className="mx-1 whitespace-nowrap rounded-full bg-violet-50 px-2 py-1 text-violet-600">
                定义域不对称则无奇偶性
              </span>
            </>
          ),
        },
      ],
      reviewItems: ["先判定义域", "区间内谈单调", "奇偶性先查对称"],
    },
    {
      id: "graph-transform-zero",
      imageTitle: "图片 03",
      title: "图像变换：平移、对称与零点",
      subtitle: "把式子的变化转成图像动作，再读交点与范围",
      tags: ["图像思想", "零点问题"],
      summary:
        "函数图像题容易错在方向：x 里面的变化常常与直觉相反，函数值外面的变化才是上下移动。零点问题则要回到图像与 x 轴的交点。",
      points: [
        {
          icon: ArrowLeftRight,
          label: "图像转化",
          title: "式子变化对应图像动作",
          visual: <TransformationZeroSketch />,
          conclusion: (
            <>
              图像变换要区分
              <strong className="font-bold text-slate-700">自变量内部变化</strong>
              与
              <strong className="font-bold text-slate-700">函数值外部变化</strong>
              ，再读零点、值域和交点。
            </>
          ),
          formulas: [
            { name: "平移模型", body: <Formula tex={String.raw`y=f(x-a)+b`} /> },
            { name: "零点意义", body: <Formula tex={String.raw`f(x)=0\Longleftrightarrow \text{图像与 }x\text{ 轴交点}`} /> },
          ],
          chain: ["式子变化", "图像动作", "交点零点", "范围判断"],
          steps: [
            "先识别是 x 内部变化，还是整个 f(x) 外部变化。",
            "y=f(x-a)+b 表示向右平移 a 个单位，再向上平移 b 个单位。",
            "关于 x 轴、y 轴、原点的对称要分别对应函数值、自变量、二者同时变号。",
            "求零点时看图像与 x 轴交点，本质仍是解 f(x)=0。",
          ],
          theorem: (
            <>
              记忆方向：
              <span className="mx-1 whitespace-nowrap rounded-full bg-sky-50 px-2 py-1 text-sky-600">
                x 内反向
              </span>
              <span className="mx-1 whitespace-nowrap rounded-full bg-teal-50 px-2 py-1 text-teal-600">
                f 外同向
              </span>
              <span className="mx-1 whitespace-nowrap rounded-full bg-orange-50 px-2 py-1 text-orange-600">
                零点看交点
              </span>
            </>
          ),
        },
      ],
      reviewItems: ["平移方向明确", "零点与交点互化", "不涉及导数"],
    },
  ],
};

export default block;
