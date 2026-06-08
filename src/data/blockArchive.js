const modules = import.meta.glob("../card-blocks/*/index.jsx", { eager: true });

export const blocks = Object.values(modules)
  .map((module) => module.default || module.block)
  .filter(Boolean)
  .sort((a, b) => {
    const dateDiff = new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt);
    return dateDiff || a.title.localeCompare(b.title, "zh-Hans-CN");
  });
