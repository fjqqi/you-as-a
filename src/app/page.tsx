"use client";

import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";
import { MoodboardGrid } from "@/components/MoodboardGrid";
import { DownloadButton } from "@/components/DownloadButton";

export default function Home() {
  const [images, setImages] = useState<Record<string, string | null>>({});
  const [isExporting, setIsExporting] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (category: string, url: string) => {
    setImages((prev) => ({
      ...prev,
      [category]: url,
    }));
  };

  const handleDownload = async () => {
    if (!gridRef.current) return;
    setIsExporting(true);

    try {
      // Small delay to ensure all animations/rendering have settled
      await new Promise((resolve) => setTimeout(resolve, 100));

      const targetWidth = 1280;
      const currentWidth = gridRef.current.offsetWidth || 1;
      const scale = targetWidth / currentWidth;

      const dataUrl = await toPng(gridRef.current, {
        skipFonts: true, // Fix for browser fetch errors during export
        backgroundColor: "#ffffff",
        pixelRatio: Math.max(2, scale), // Ensure at least 1280px width
        width: currentWidth,
        height: currentWidth, // It's a 3x3 grid, so height must equal width
        style: {
          width: `${currentWidth}px`,
          height: `${currentWidth}px`,
          margin: "0"
        }
      });

      const link = document.createElement("a");
      link.download = "my-aku-gweh.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export image", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-8 bg-[#660000] text-white bg-[url('/bg.png')] bg-repeat"
    >
      <div className="w-full max-w-3xl mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-white">You as a....</h1>
        <p className="text-white/80 tracking-wide  font-semibold text-lg">
          pencet text-nya ia buat masukin gambarnyaaa ^^
        </p>
      </div>

      <div className="w-full mb-12">
        <MoodboardGrid
          ref={gridRef}
          images={images}
          onImageChange={handleImageChange}
        />
      </div>

      <DownloadButton
        onClick={handleDownload}
        isLoading={isExporting}
      />
    </main>
  );
}
