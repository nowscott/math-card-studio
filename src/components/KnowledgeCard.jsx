import React from "react";
import {
  CheckCircle2,
  Download,
  Files,
  Images,
  Layers3,
  Lightbulb,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Tag({ children, tone = "sky" }) {
  const tones = {
    sky: "border-sky-100 bg-sky-50 text-sky-600",
    teal: "border-teal-100 bg-teal-50 text-teal-600",
    orange: "border-orange-100 bg-orange-50 text-orange-600",
    violet: "border-violet-100 bg-violet-50 text-violet-600",
  };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${tones[tone] || tones.sky}`}>
      {children}
    </span>
  );
}

function SoftButton({ children, onClick, icon: Icon = Download }) {
  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-bold text-sky-600 shadow-soft transition hover:-translate-y-0.5 hover:bg-sky-50"
      onClick={onClick}
      type="button"
    >
      <Icon size={16} />
      {children}
    </button>
  );
}

function PointBlock({ point, index }) {
  const Icon = point.icon || Lightbulb;

  return (
    <section className="rounded-[1.75rem] border border-slate-100 bg-white/90 p-4 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-[52px_1fr] sm:items-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-teal-50 text-sky-500 shadow-soft">
          <Icon size={22} />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Tag tone="orange">{point.label}</Tag>
            <span className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-400">
              模块 {index + 1}
            </span>
          </div>
          <h3 className="text-xl font-black leading-snug text-slate-700">{point.title}</h3>
        </div>
      </div>

      {point.visual && (
        <div className="mt-4 rounded-[1.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-teal-50 p-3">
          {point.visual}
        </div>
      )}

      <div className="mt-4 rounded-[1.5rem] border border-sky-100 bg-sky-50/70 p-3 text-sm leading-7 text-slate-700">
        <div className="mb-2 flex items-center gap-2 font-black text-sky-700">
          <Sparkles size={16} />
          核心结论
        </div>
        {point.conclusion}
        {point.formula && <div className="mt-3 text-lg text-slate-700">{point.formula}</div>}
      </div>

      {point.chain && (
        <div className="mt-4 flex items-center gap-2 overflow-x-auto rounded-[1.5rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-teal-50 px-4 py-3 text-sm font-bold text-sky-700">
          {point.chain.map((item, chainIndex) => (
            <span className="flex items-center gap-2 whitespace-nowrap" key={item}>
              <span className="rounded-full border border-white bg-white px-3 py-1 shadow-soft">{item}</span>
              {chainIndex < point.chain.length - 1 && <span className="text-teal-400">⇌</span>}
            </span>
          ))}
        </div>
      )}

      {point.formulas && (
        <div className="mt-4 grid gap-2">
          {point.formulas.map((formula) => (
            <div
              className="grid gap-2 rounded-[1.25rem] border border-slate-100 bg-slate-50/80 px-4 py-2.5 sm:grid-cols-[112px_1fr] sm:items-center"
              key={formula.name}
            >
              <span className="text-sm font-bold text-slate-500">{formula.name}</span>
              <span className="text-base text-slate-700">{formula.body}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 rounded-[1.5rem] border border-teal-100 bg-teal-50/70 p-3">
        <div className="mb-3 flex items-center gap-2 text-sm font-black text-teal-700">
          <ListChecks size={17} />
          推导与解题步骤
        </div>
        <ol className="space-y-1.5">
          {point.steps.map((step, stepIndex) => (
            <li
              className="grid grid-cols-[28px_1fr] gap-3 rounded-2xl border border-white/80 bg-white/90 px-3 py-1.5 text-sm leading-6 text-slate-700"
              key={step}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-teal-100 bg-teal-50 text-xs font-black text-teal-600">
                {stepIndex + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {point.theorem && (
        <div className="mt-4 rounded-[1.5rem] border border-orange-100 bg-orange-50/80 p-3 text-sm leading-7 text-slate-700">
          <strong className="font-bold text-slate-700">高频提醒：</strong>
          {point.theorem}
        </div>
      )}
    </section>
  );
}

function ReviewStrip({ items }) {
  if (!items?.length) return null;

  return (
    <div className="grid gap-2 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/75 p-4 sm:grid-cols-3">
      {items.map((item) => (
        <div className="flex items-center gap-2 text-sm font-bold leading-5 text-emerald-700" key={item}>
          <CheckCircle2 size={16} className="shrink-0" />
          {item}
        </div>
      ))}
    </div>
  );
}

export function KnowledgeImageCard({ block, card, index, total, registerCardRef, onDownloadCard }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/80 bg-white/75 p-3 shadow-soft backdrop-blur print:hidden">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-black text-violet-600">
            {card.imageTitle || `图片 ${String(index + 1).padStart(2, "0")}`}
          </span>
          <span className="text-xs font-bold text-slate-400">
            {index + 1} / {total}
          </span>
        </div>
        <SoftButton onClick={() => onDownloadCard(card)}>下载本张</SoftButton>
      </div>

      <article ref={registerCardRef(card.id)} className="card-surface aspect-[9/16] overflow-hidden">
        <div className="card-page-content flex h-full flex-col">
          <div className="shrink-0 bg-gradient-to-br from-sky-50 via-white to-teal-50 p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              <Tag>{block.stage}</Tag>
              <Tag tone="teal">{block.category}</Tag>
              {card.tags.map((tag) => (
                <Tag key={tag} tone="violet">
                  {tag}
                </Tag>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-white/90 bg-white/80 p-4 shadow-soft">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-400">{block.title}</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-700">{card.title}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{card.subtitle}</p>
              <p className="mt-3 rounded-[1.25rem] border border-slate-100 bg-slate-50/80 p-3 text-sm leading-6 text-slate-600">
                {card.summary}
              </p>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col justify-between gap-4 bg-gradient-to-b from-white to-sky-50/50 p-4">
            <div className="space-y-4">
              {card.points.map((point, pointIndex) => (
                <PointBlock index={pointIndex} key={point.title} point={point} />
              ))}
            </div>

            <ReviewStrip items={card.reviewItems} />
          </div>
        </div>
      </article>
    </div>
  );
}

export function BlockDetail({ block, registerCardRef, onDownloadCard, onDownloadBlock }) {
  return (
    <section className="space-y-5">
      <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-card backdrop-blur">
        <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-start">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              {block.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <h2 className="text-2xl font-black text-slate-700">{block.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500">{block.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-3 text-center">
              <div className="flex items-center justify-center gap-2 text-xl font-black text-sky-600">
                <Images size={19} />
                {block.cards.length}
              </div>
              <div className="text-xs font-bold text-slate-500">本板块图片</div>
            </div>
            <SoftButton icon={Files} onClick={onDownloadBlock}>下载全部</SoftButton>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {block.cards.map((card, index) => (
            <a
              className="rounded-[1.25rem] border border-slate-100 bg-white/80 p-3 text-sm font-bold text-slate-600 shadow-soft transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/70"
              href={`#${card.id}`}
              key={card.id}
            >
              <div className="mb-2 flex items-center gap-2 text-sky-500">
                <Layers3 size={16} />
                {card.imageTitle || `图片 ${index + 1}`}
              </div>
              {card.title}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {block.cards.map((card, index) => (
          <div id={card.id} key={card.id}>
            <KnowledgeImageCard
              block={block}
              card={card}
              index={index}
              onDownloadCard={onDownloadCard}
              registerCardRef={registerCardRef}
              total={block.cards.length}
            />
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/80 p-5 text-sm leading-7 text-emerald-800 shadow-soft">
        <div className="mb-1 flex items-center gap-2 font-black">
          <ShieldCheck size={17} />
          归档复核
        </div>
        本板块以“知识准确、公式 MathML、图文分离、浅色截图、无个人信息”为复核标准。通过后即作为一条知识板块归档，板块内每张图片均可独立下载。
      </div>
    </section>
  );
}
