"use client";

import { useEffect } from "react";

/**
 * Native browser "scroll to #fragment" navigation is unreliable on this page
 * (long single-page layout, client-rendered motion sections): the initial
 * load-with-hash and native anchor clicks both silently fail to scroll.
 * This restores the expected behavior for both cases, in-page.
 *
 * Scrolls smoothly, then snaps to the exact position shortly after as a
 * safety net in case the animated scroll gets interrupted or throttled
 * (e.g. by a backgrounded tab) partway through.
 */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  setTimeout(() => {
    const stillOff = Math.abs(el.getBoundingClientRect().top) > 4;
    if (stillOff) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, 900);
}

export default function HashScroll() {
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToId(location.hash.slice(1)));
    }

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href") || "";
      if (hash.length < 2) return;
      const id = hash.slice(1);
      if (!document.getElementById(id)) return;
      // Run ahead of (and override) Next.js's own global anchor-click interception,
      // which otherwise swallows same-page fragment links without scrolling.
      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, "", hash);
      scrollToId(id);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
