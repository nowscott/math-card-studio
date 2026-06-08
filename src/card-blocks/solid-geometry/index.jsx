import React from "react";
import { Boxes, Compass, FunctionSquare } from "lucide-react";
import { CosineLaw, DistanceFormula, SlopeProduct, VectorParallel } from "../../components/MathBits.jsx";
import { GeometrySketch, TriangleSketch } from "../../components/GeometrySketch.jsx";

const block = {
  id: "solid-geometry-triangle-methods",
  title: "立体几何与解三角形",
  stage: "高中数学",
  category: "几何专题",
  createdAt: "2026-06-08",
  updatedAt: "2026-06-08",
  status: "已复核归档",
  description:
    "围绕空间关系证明、三角形边角互化、解析几何代数化三个方向整理，适合拆分为多张知识点图片发放。",
  tags: ["立体几何", "解三角形", "解析几何"],
  cards: [
    {
      id: "line-plane-parallel",
      imageTitle: "图片 01",
      title: "线面关系：升维与降维",
      subtitle: "空间证明的核心是把目标关系转化为可落笔的平面关系",
      tags: ["重点方法", "证明逻辑"],
      summary:
        "判断空间平行关系时，不能只依赖图形直观。稳定做法是先找目标平面内的辅助线，再用线线平行推出线面平行。",
      points: [
        {
          icon: Boxes,
          label: "核心方法",
          title: "线面平行的证明闭环",
          visual: <GeometrySketch />,
          conclusion: (
            <>
              证明空间直线与平面平行，关键是找到平面内可承接证明的
              <strong className="font-bold text-slate-700">辅助直线</strong>。
            </>
          ),
          chain: ["线线平行", "线面平行", "面面平行"],
          steps: [
            "明确目标：要证明哪条直线与哪个平面平行。",
            "在目标平面内寻找或构造一条直线。",
            "证明空间直线与平面内直线平行。",
            "引用判定定理，完成从线线平行到线面平行的转化。",
          ],
          theorem: (
            <>
              证明书写顺序可固定为：
              <span className="mx-1 whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-blue-600">找线</span>
              <span className="mx-1 whitespace-nowrap rounded-full bg-teal-50 px-2 py-1 text-teal-600">证平行</span>
              <span className="mx-1 whitespace-nowrap rounded-full bg-orange-50 px-2 py-1 text-orange-600">套定理</span>
              <span className="mx-1 whitespace-nowrap rounded-full bg-violet-50 px-2 py-1 text-violet-600">写结论</span>
            </>
          ),
        },
      ],
      reviewItems: ["定理表述完整", "逻辑链条不断行", "图形辅助清晰"],
    },
    {
      id: "cosine-law-transform",
      imageTitle: "图片 02",
      title: "余弦定理：边角互化",
      subtitle: "两边及夹角求边、三边求角的统一工具",
      tags: ["必考题型", "公式推导"],
      summary:
        "余弦定理的本质是把角度信息转化为边长计算，也能把三边关系反向转化为角度判断。",
      points: [
        {
          icon: Compass,
          label: "公式主线",
          title: "余弦定理的两种用法",
          visual: <TriangleSketch />,
          conclusion: (
            <>
              已知“两边及夹角”或“三边求角”时，优先使用
              <strong className="font-bold text-slate-700">余弦定理</strong>建立边角关系。
            </>
          ),
          formula: <CosineLaw />,
          steps: [
            "标清边角对应关系：角 A 的对边为 a。",
            "两边及夹角求边时，直接代入公式并开方取正值。",
            "三边求角时，先整理出 cos A。",
            "结合三角形内角范围判断角的大小，避免反三角函数误判。",
          ],
          theorem: (
            <>
              三边求角时常用整理式：
              <math className="mx-1">
                <mi>cos</mi>
                <mi>A</mi>
                <mo>=</mo>
                <mfrac>
                  <mrow>
                    <msup>
                      <mi>b</mi>
                      <mn>2</mn>
                    </msup>
                    <mo>+</mo>
                    <msup>
                      <mi>c</mi>
                      <mn>2</mn>
                    </msup>
                    <mo>-</mo>
                    <msup>
                      <mi>a</mi>
                      <mn>2</mn>
                    </msup>
                  </mrow>
                  <mrow>
                    <mn>2</mn>
                    <mi>b</mi>
                    <mi>c</mi>
                  </mrow>
                </mfrac>
              </math>
            </>
          ),
        },
      ],
      reviewItems: ["MathML 公式完整", "分数线居中", "边角对应明确"],
    },
    {
      id: "analytic-geometry-translation",
      imageTitle: "图片 03",
      title: "解析几何：几何语言代数化",
      subtitle: "把垂直、平行、距离、共线转成可计算条件",
      tags: ["易错提醒", "公式工具"],
      summary:
        "坐标题的得分关键，是把题目中的几何关键词稳定翻译为斜率、距离、向量等代数条件。",
      points: [
        {
          icon: FunctionSquare,
          label: "公式工具",
          title: "常见几何条件的代数表达",
          conclusion: (
            <>
              解析几何不是先算，而是先翻译：把
              <strong className="font-bold text-slate-700">垂直、平行、距离、共线</strong>
              逐一转为公式条件。
            </>
          ),
          formulas: [
            { name: "两点距离", body: <DistanceFormula /> },
            { name: "直线垂直", body: <SlopeProduct /> },
            { name: "向量共线", body: <VectorParallel /> },
          ],
          steps: [
            "圈出关键词：垂直、平行、中点、距离、定值。",
            "把关键词翻译成斜率、距离或向量条件。",
            "联立条件求参数。",
            "回代检验范围，特别注意斜率不存在的情况。",
          ],
        },
      ],
      reviewItems: ["公式均为 MathML", "易错条件已提示", "步骤可直接复用"],
    },
  ],
};

export default block;
