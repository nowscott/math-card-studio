import React from "react";

function Axis({ yLabel = "y", xLabel = "x" }) {
  return (
    <>
      <line x1="30" y1="130" x2="230" y2="130" stroke="#bae6fd" strokeWidth="2" />
      <line x1="78" y1="24" x2="78" y2="150" stroke="#bae6fd" strokeWidth="2" />
      <path d="M230 130 L222 126 L222 134 Z" fill="#7dd3fc" />
      <path d="M78 24 L74 32 L82 32 Z" fill="#7dd3fc" />
      <text x="235" y="135" fill="#38bdf8" fontSize="13" fontWeight="700">{xLabel}</text>
      <text x="67" y="20" fill="#38bdf8" fontSize="13" fontWeight="700">{yLabel}</text>
    </>
  );
}

export function DomainSketch() {
  return (
    <svg viewBox="0 0 260 170" className="h-40 w-full" role="img" aria-label="函数定义域限制示意图">
      <Axis />
      <path d="M80 130 C101 96, 125 75, 156 64 C178 57, 197 55, 222 55" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="128" cy="130" r="6" fill="#fff7ed" stroke="#fb923c" strokeWidth="3" />
      <line x1="128" y1="43" x2="128" y2="146" stroke="#fb923c" strokeDasharray="5 6" strokeWidth="2" />
      <rect x="24" y="137" width="50" height="18" rx="9" fill="#f0fdfa" stroke="#99f6e4" />
      <text x="32" y="151" fill="#0d9488" fontSize="12" fontWeight="700">不可取</text>
      <text x="137" y="45" fill="#ea580c" fontSize="12" fontWeight="700">分母为 0</text>
      <text x="150" y="86" fill="#0284c7" fontSize="12" fontWeight="700">先定范围</text>
    </svg>
  );
}

export function ParityMonotonicitySketch() {
  return (
    <svg viewBox="0 0 260 180" className="h-44 w-full" role="img" aria-label="函数奇偶性和单调性示意图">
      <Axis />
      <path d="M38 118 C59 96, 68 56, 78 48 C88 56, 98 96, 119 118" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
      <path d="M130 134 C154 132, 167 110, 181 92 C195 74, 209 57, 232 54" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <line x1="78" y1="38" x2="78" y2="144" stroke="#ddd6fe" strokeDasharray="4 5" strokeWidth="2" />
      <text x="42" y="43" fill="#7c3aed" fontSize="12" fontWeight="700">关于 y 轴对称</text>
      <text x="151" y="48" fill="#0284c7" fontSize="12" fontWeight="700">区间内递增</text>
      <circle cx="150" cy="125" r="4" fill="#7dd3fc" />
      <circle cx="218" cy="57" r="4" fill="#7dd3fc" />
    </svg>
  );
}

export function TransformationZeroSketch() {
  return (
    <svg viewBox="0 0 260 180" className="h-44 w-full" role="img" aria-label="函数图像变换与零点示意图">
      <Axis />
      <path d="M42 70 C72 126, 120 145, 158 118 C178 104, 195 79, 220 44" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 6" />
      <path d="M58 92 C92 146, 142 150, 180 122 C199 108, 214 87, 234 58" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="84" cy="130" r="5" fill="#fff7ed" stroke="#fb923c" strokeWidth="3" />
      <circle cx="171" cy="130" r="5" fill="#fff7ed" stroke="#fb923c" strokeWidth="3" />
      <text x="91" y="124" fill="#ea580c" fontSize="12" fontWeight="700">零点</text>
      <text x="177" y="124" fill="#ea580c" fontSize="12" fontWeight="700">零点</text>
      <path d="M133 64 C146 62, 157 59, 169 52" fill="none" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#14b8a6" />
        </marker>
      </defs>
      <text x="122" y="48" fill="#0d9488" fontSize="12" fontWeight="700">平移后再读交点</text>
    </svg>
  );
}
