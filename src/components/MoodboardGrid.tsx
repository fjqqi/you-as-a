"use client";

import React, { forwardRef } from "react";
import { GridCell } from "./GridCell";

const CATEGORIES = [
  "animal",
  "place",
  "plant",
  "character",
  "season",
  "hobby",
  "color",
  "outfit",
  "food",
];

export interface MoodboardGridProps {
  images: Record<string, string | null>;
  onImageChange: (category: string, url: string) => void;
}

export const MoodboardGrid = forwardRef<HTMLDivElement, MoodboardGridProps>(
  ({ images, onImageChange }, ref) => {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full border border-black p-2 bg-white">
          <div ref={ref} className="w-full flex flex-wrap">
            {CATEGORIES.map((category) => (
              <div key={category} className="w-1/3">
                <GridCell
                  category={category}
                  image={images[category] || null}
                  onImageChange={(url) => onImageChange(category, url)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

MoodboardGrid.displayName = "MoodboardGrid";
