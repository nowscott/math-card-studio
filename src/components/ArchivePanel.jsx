import React from "react";
import { Archive, Clock3, Images, Layers3 } from "lucide-react";

export function ArchivePanel({ blocks, selectedBlockId, onSelect }) {
  return (
    <aside className="mx-auto w-full rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-card backdrop-blur lg:sticky lg:top-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-500">
          <Archive size={18} />
        </div>
        <div>
          <h2 className="font-black text-slate-700">已归档卡片</h2>
          <p className="text-xs text-slate-500">复核通过后加入归档</p>
        </div>
      </div>

      <div className="space-y-3">
        {blocks.map((block) => (
          <button
            className={`w-full rounded-[1.35rem] border p-4 text-left transition ${
              selectedBlockId === block.id
                ? "border-sky-200 bg-gradient-to-br from-sky-50 to-teal-50 shadow-soft"
                : "border-slate-100 bg-white/90 shadow-soft hover:border-sky-100 hover:bg-sky-50/60"
            }`}
            key={block.id}
            onClick={() => onSelect(block.id)}
            type="button"
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-black text-sky-500">
              <Layers3 size={14} />
              {block.stage} · {block.category}
            </div>
            <div className="font-black leading-snug text-slate-700">{block.title}</div>
            <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{block.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-bold text-slate-500">
              <div className="flex items-center gap-1.5 rounded-full border border-sky-100 bg-white/80 px-2 py-1">
                <Images size={13} />
                {block.cards.length} 张图片
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-teal-100 bg-white/80 px-2 py-1">
                <Clock3 size={13} />
                {block.updatedAt || block.createdAt}
              </div>
            </div>
            <div className="mt-2 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-center text-xs font-bold text-emerald-600">
              {block.status || "已归档"}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
