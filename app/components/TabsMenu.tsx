// app/components/TabsMenu.tsx
"use client";

import { useState, useMemo } from "react";

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  section?: string;
};

export type TabConfig = {
  id: "bebidas" | "comidas";
  label: string;
  items: MenuItem[];
};

const ITEMS_PER_PAGE = 10;

export default function TabsMenu({ tabs }: { tabs: TabConfig[] }) {
  const [activeTabId, setActiveTabId] = useState<"bebidas" | "comidas">(
    tabs[0]?.id ?? "bebidas"
  );
  const [page, setPage] = useState(1);

  const activeTab = useMemo(
    () => tabs.find((t) => t.id === activeTabId),
    [tabs, activeTabId]
  );

  const totalPages = activeTab
    ? Math.max(1, Math.ceil(activeTab.items.length / ITEMS_PER_PAGE))
    : 1;

  const visibleItems = useMemo(() => {
    if (!activeTab) return [];
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return activeTab.items.slice(start, end);
  }, [activeTab, page]);

  const handleTabChange = (id: "bebidas" | "comidas") => {
    setActiveTabId(id);
    setPage(1);
  };

  const handlePrev = () => {
    setPage((p) => Math.max(1, p - 1));
  };

  const handleNext = () => {
    setPage((p) => (p < totalPages ? p + 1 : p));
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="inline-flex rounded-full border border-neutral-800 bg-black/50 p-1 text-xs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`rounded-full px-4 py-1.5 font-semibold uppercase tracking-wide transition-colors ${
                isActive
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-neutral-100"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Lista de productos */}
      <div className="space-y-4">
        {visibleItems.length === 0 && (
          <p className="text-sm text-neutral-400">
            No hay productos en esta categoría todavía.
          </p>
        )}

        {visibleItems.length > 0 && (
          <div className="divide-y divide-neutral-900/80 border-y border-neutral-900/80">
            {visibleItems.map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  {item.section && (
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500">
                      {item.section}
                    </p>
                  )}
                  <h3 className="text-sm font-medium text-neutral-100">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-neutral-400">
                      {item.description}
                    </p>
                  )}
                </div>
                <p className="text-sm font-medium text-neutral-100 sm:text-right">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Paginación */}
      {activeTab && activeTab.items.length > ITEMS_PER_PAGE && (
        <div className="flex items-center justify-between gap-4 text-xs text-neutral-400">
          <button
            type="button"
            onClick={handlePrev}
            disabled={page === 1}
            className={`rounded-full border px-3 py-1 transition-colors ${
              page === 1
                ? "border-neutral-800 text-neutral-600"
                : "border-neutral-700 hover:border-neutral-400 hover:text-neutral-100"
            }`}
          >
            ← Anterior
          </button>
          <span>
            Página {page} de {totalPages}
          </span>
          <button
            type="button"
            onClick={handleNext}
            disabled={page === totalPages}
            className={`rounded-full border px-3 py-1 transition-colors ${
              page === totalPages
                ? "border-neutral-800 text-neutral-600"
                : "border-neutral-700 hover:border-neutral-400 hover:text-neutral-100"
            }`}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
}
