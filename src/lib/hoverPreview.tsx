"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

const PREVIEW_WIDTH = 280;
const PREVIEW_HEIGHT = 158;

type PreviewState = { cover?: string; x: number; y: number; visible: boolean };

/**
 * Desktop-only hover preview for a clickable list of project rows: shows
 * the project's cover image/video near the cursor (above-right), capped
 * at 280×158px, following the mouse while it's over any row. Wrap the
 * row list in a `relative` container with `containerRef`, call
 * `onRowMouseMove`/`onRowMouseLeave` on each row, and render
 * `<HoverPreviewBox />` as that same container's child.
 */
export function useHoverPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<PreviewState>({ x: 0, y: 0, visible: false });

  const onRowMouseMove = useCallback((e: MouseEvent, cover: string | undefined) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setState({ cover, x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  }, []);

  const onRowMouseLeave = useCallback(() => {
    setState((s) => ({ ...s, visible: false }));
  }, []);

  return { containerRef, state, onRowMouseMove, onRowMouseLeave };
}

export function HoverPreviewBox({ cover, x, y, visible }: PreviewState) {
  const [shown, setShown] = useState(true);
  const lastCover = useRef(cover);

  useEffect(() => {
    if (lastCover.current === cover) return;
    lastCover.current = cover;
    setShown(false);
    const t = setTimeout(() => setShown(true), 20);
    return () => clearTimeout(t);
  }, [cover]);

  if (!cover) return null;
  const isVideo = cover.endsWith(".mp4");
  const top = Math.max(y - PREVIEW_HEIGHT - 16, 0);
  const left = x + 16;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-50 hidden overflow-hidden rounded bg-[#1d1d1d] transition-opacity duration-150 ease-out md:block"
      style={{ left, top, width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT, opacity: visible ? 1 : 0 }}
    >
      <div className="h-full w-full transition-opacity duration-200 ease-out" style={{ opacity: shown ? 1 : 0 }}>
        {isVideo ? (
          <video src={cover} autoPlay loop muted playsInline className="h-full w-full object-cover" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} alt="" className="h-full w-full object-cover" />
        )}
      </div>
    </div>
  );
}
