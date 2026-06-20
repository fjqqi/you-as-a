"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridCellProps {
  category: string;
  image: string | null;
  onImageChange: (imageUrl: string) => void;
}

export function GridCell({ category, image, onImageChange }: GridCellProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          onImageChange(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full pb-[100%] bg-white">
      <div
        onClick={handleClick}
        className={cn(
          "absolute inset-0 cursor-pointer flex flex-col items-center justify-center bg-white overflow-hidden",
          "transition-colors hover:bg-neutral-50"
        )}
      >
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {image ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative group"
          >
            <img
              src={image}
              alt={category}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 backdrop-blur-sm">
              <span className="bg-black text-white font-bold text-sm px-4 py-2 uppercase tracking-widest shadow-lg">
                replace
              </span>
            </div>
          </motion.div>
        ) : (
          <span className="text-black text-lg">
            {category}
          </span>
        )}
      </div>
    </div>
  );
}
