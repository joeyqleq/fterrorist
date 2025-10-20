import React from "react";
import { cn } from "@/lib/utils";

interface IntegrationPillsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function IntegrationPills({
  categories,
  selectedCategory,
  onCategoryChange,
}: IntegrationPillsProps) {
  return (
    <div className="flex justify-center py-6 px-4" data-oid="qn8fckm">
      {/* Rectangular box around all pills */}
      <div
        className="group relative flex w-full max-w-3xl flex-wrap justify-center rounded-lg border-2 border-green-500/30 bg-black/50 backdrop-blur-sm px-2 py-2 shadow-2xl transition-all duration-500 ease-out hover:border-green-400/50 hover:bg-black/70 hover:shadow-2xl"
        style={{
          boxShadow:
            "0 0 20px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
        data-oid="324ry41"
      >
        {/* Glowing effect on hover */}
        <div
          className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-sm"
          data-oid="0ca5g14"
        />

        {categories.map((category, index) => {
          const isSelected = selectedCategory === category;
          const isAll = category === "All";

          return (
            <button
              key={index}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "m-0.5 transform cursor-pointer rounded-lg border-1 px-2 py-1 text-[10px] font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95",
                isSelected
                  ? "border-green-400 bg-green-500/20 text-green-300 shadow-lg shadow-green-500/25 font-bold scale-105"
                  : "border-green-600/50 bg-black/30 text-green-100 hover:border-green-400/70 hover:bg-green-500/10 hover:text-green-300",
                isAll &&
                  "border-yellow-500/50 text-yellow-200 hover:border-yellow-400 hover:text-yellow-100",
                isAll &&
                  isSelected &&
                  "border-yellow-400 bg-yellow-500/20 text-yellow-300 shadow-lg shadow-yellow-500/25",
              )}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
              data-oid="5bhhfeh"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
