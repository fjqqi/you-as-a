"use client";

import React from "react";
import { Download } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface DownloadButtonProps extends HTMLMotionProps<"button"> {
  isLoading?: boolean;
}

export function DownloadButton({ isLoading, className, ...props }: DownloadButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center justify-center gap-2 px-8 py-4",
        "bg-white text-black font-semibold tracking-wide",
        "border border-black hover:bg-black hover:text-white",
        "transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
      ) : (
        <Download size={16} />
      )}
      <span>{isLoading ? "Capturing..." : "Download!!!"}</span>
    </motion.button>
  );
}
