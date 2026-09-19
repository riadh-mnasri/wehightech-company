"use client";

import { useRef } from "react";
import { useMotionValue, useTransform } from "framer-motion";

/**
 * Subtle mouse-driven 3D tilt for card-glow surfaces.
 * Extracted from the original Services.tsx card implementation so every
 * card-glow surface (Services, Sectors, Clients) shares the same feel.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [4, -4]);
  const ry = useTransform(mx, [-0.5, 0.5], [-4, 4]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  return { ref, style: { rotateX: rx, rotateY: ry, perspective: 1000 }, onMouseMove, onMouseLeave };
}
