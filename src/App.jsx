import html2canvas from "html2canvas";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { ArchivePanel } from "./components/ArchivePanel.jsx";
import { BlockDetail } from "./components/KnowledgeCard.jsx";
import { blocks } from "./data/blockArchive.js";

function safeFileName(value) {
  return String(value)
    .replace(/[\\/:*?"<>|]/g, "-")
    .replace(/\s+/g, "")
    .slice(0, 80);
}

function makeFileName(block, card) {
  return `${safeFileName(block.title)}-${safeFileName(card.imageTitle)}-${safeFileName(card.title)}.png`;
}

export default function App() {
  const [selectedBlockId, setSelectedBlockId] = useState(blocks[0]?.id);
  const cardRefs = useRef(new Map());

  const selectedBlock = useMemo(
    () => blocks.find((block) => block.id === selectedBlockId) || blocks[0],
    [selectedBlockId],
  );

  const registerCardRef = useCallback(
    (cardId) => (node) => {
      if (node) {
        cardRefs.current.set(cardId, node);
      } else {
        cardRefs.current.delete(cardId);
      }
    },
    [],
  );

  async function downloadNode(node, fileName) {
    if (!node) return;

    const canvas = await html2canvas(node, {
      backgroundColor: null,
      scale: 3,
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function handleDownloadCard(card) {
    if (!selectedBlock) return;
    await downloadNode(cardRefs.current.get(card.id), makeFileName(selectedBlock, card));
  }

  async function handleDownloadBlock() {
    if (!selectedBlock) return;

    for (const card of selectedBlock.cards) {
      await downloadNode(cardRefs.current.get(card.id), makeFileName(selectedBlock, card));
      await new Promise((resolve) => setTimeout(resolve, 180));
    }
  }

  if (!selectedBlock) {
    return (
      <main className="min-h-screen bg-sky-50 p-6">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/80 bg-white/90 p-8 text-center shadow-card">
          <h1 className="text-2xl font-black text-slate-700">暂无知识板块</h1>
          <p className="mt-2 text-slate-600">请在 src/card-blocks 下新建一个板块文件夹。</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dff6ff,transparent_32%),radial-gradient(circle_at_bottom_right,#f5e8ff,transparent_30%),linear-gradient(135deg,#f8fbff_0%,#f7fffd_48%,#fffaf4_100%)] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-card backdrop-blur">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold text-sky-500">Knowledge Card Archive</p>
              <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-700">初高中数学知识点卡片库</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                每个知识板块独立归档，板块内可包含多张可下载图片。以后新增内容时，只需在
                <span className="mx-1 rounded-full bg-sky-50 px-2 py-0.5 font-bold text-sky-600">src/card-blocks</span>
                下创建一个新的板块文件夹。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 px-4 py-3">
                <div className="text-2xl font-black text-sky-600">{blocks.length}</div>
                <div className="text-xs font-bold text-slate-500">归档板块</div>
              </div>
              <div className="rounded-2xl border border-teal-100 bg-teal-50/80 px-4 py-3">
                <div className="text-2xl font-black text-teal-600">
                  {blocks.reduce((sum, block) => sum + block.cards.length, 0)}
                </div>
                <div className="text-xs font-bold text-slate-500">知识图片</div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[340px_1fr] lg:items-start">
          <ArchivePanel
            blocks={blocks}
            onSelect={setSelectedBlockId}
            selectedBlockId={selectedBlockId}
          />
          <BlockDetail
            block={selectedBlock}
            onDownloadBlock={handleDownloadBlock}
            onDownloadCard={handleDownloadCard}
            registerCardRef={registerCardRef}
          />
        </div>
      </div>
    </main>
  );
}
