import React from "react";

export function GeometrySketch() {
  return (
    <svg viewBox="0 0 260 180" className="h-44 w-full" role="img" aria-label="立体几何线面关系示意图">
      <defs>
        <linearGradient id="planeFill" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#f0fdfa" />
        </linearGradient>
      </defs>
      <polygon points="40,125 175,95 230,130 92,160" fill="url(#planeFill)" stroke="#38bdf8" strokeWidth="2" />
      <line x1="73" y1="135" x2="195" y2="109" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
      <line x1="72" y1="51" x2="194" y2="25" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
      <line x1="70" y1="51" x2="70" y2="135" stroke="#94a3b8" strokeDasharray="5 6" strokeWidth="2" />
      <line x1="194" y1="25" x2="194" y2="109" stroke="#94a3b8" strokeDasharray="5 6" strokeWidth="2" />
      <text x="30" y="147" fill="#0369a1" fontSize="14" fontWeight="700">平面 α</text>
      <text x="205" y="106" fill="#2563eb" fontSize="14" fontWeight="700">m</text>
      <text x="202" y="29" fill="#ea580c" fontSize="14" fontWeight="700">l</text>
      <path d="M102 70 C121 61, 143 56, 166 52" fill="none" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 5" />
      <text x="102" y="91" fill="#0f766e" fontSize="13">找平面内平行线</text>
    </svg>
  );
}

export function TriangleSketch() {
  return (
    <svg viewBox="0 0 260 170" className="h-40 w-full" role="img" aria-label="三角形边角关系示意图">
      <polygon points="44,132 212,132 91,35" fill="#fff7ed" stroke="#fb923c" strokeWidth="3" />
      <path d="M68 132 A28 28 0 0 1 78 111" fill="none" stroke="#2563eb" strokeWidth="3" />
      <text x="50" y="107" fill="#2563eb" fontSize="15" fontWeight="700">A</text>
      <text x="121" y="151" fill="#ea580c" fontSize="15" fontWeight="700">c</text>
      <text x="139" y="76" fill="#ea580c" fontSize="15" fontWeight="700">b</text>
      <text x="58" y="79" fill="#ea580c" fontSize="15" fontWeight="700">a</text>
      <circle cx="44" cy="132" r="4" fill="#60a5fa" />
      <circle cx="212" cy="132" r="4" fill="#60a5fa" />
      <circle cx="91" cy="35" r="4" fill="#60a5fa" />
    </svg>
  );
}
