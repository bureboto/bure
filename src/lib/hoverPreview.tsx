"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

const PREVIEW_WIDTH = 280;
const PREVIEW_HEIGHT = 158;
// How quickly the box eases toward the cursor each frame (0–1): lower = more
// trailing lag/inertia, higher = snappier. This is the "magnetic follower"
// feel (e.g. https://www.awwwards.com/inspiration/footer-alec-tear) — the
// box glides toward the cursor instead of teleporting to it instantly.
const EASE = 0.22;

/**
 * Desktop-only hover preview for a clickable list of project rows: shows
 * the project's cover image/video near the cursor (above-right), capped
 * at 280×158px, easing toward the cursor with a short trailing delay
 * while it's over any row (not an instant snap) — then fades out on
 * mouseleave.
 *
 * The follow animation runs its own requestAnimationFrame loop writing
 * straight to the DOM node's style (not through React state), so it's
 * perfectly smooth regardless of React's render cycle. Only
 * cover/visibility go through state, since those only change
 * occasionally (on row change), not every frame.
 *
 * Wrap the row list in a `relative` container with `containerRef`, call
 * `onRowMouseMove`/`onRowMouseLeave` on each row, and render
 * `<HoverPreviewBox previewRef={previewRef} cover={cover} visible={visible} />`
 * as that same container's child.
 */
export function useHoverPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [cover, setCover] = useState<string | undefined>(undefined);
  const [visible, setVisible] = useState(false);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const preview = previewRef.current;
      if (preview) {
        current.current.x += (target.current.x - current.current.x) * EASE;
        current.current.y += (target.current.y - current.current.y) * EASE;
        preview.style.left = `${current.current.x}px`;
        preview.style.top = `${current.current.y}px`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const setTarget = useCallback((clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const left = clientX - rect.left + 16;
    const top = Math.max(clientY - rect.top - PREVIEW_HEIGHT - 16, 0);
    target.current = { x: left, y: top };
    if (!initialized.current) {
      // Appear right at the cursor the first time, then ease from there on.
      initialized.current = true;
      current.current = { x: left, y: top };
    }
  }, []);

  const onRowMouseMove = useCallback(
    (e: MouseEvent, nextCover: string | undefined) => {
      setTarget(e.clientX, e.clientY);
      setVisible(true);
      setCover((prev) => (prev === nextCover ? prev : nextCover));
    },
    [setTarget]
  );

  const onRowMouseLeave = useCallback(() => {
    setVisible(false);
    initialized.current = false;
  }, []);

  return { containerRef, previewRef, cover, visible, onRowMouseMove, onRowMouseLeave };
}

export function HoverPreviewBox({
  previewRef,
  cover,
  visible,
}: {
  previewRef: React.RefObject<HTMLDivElement | null>;
  cover: string | undefined;
  visible: boolean;
}) {
  const [shown, setShown] = useState(true);
  const lastCover = useRef(cover);

  useEffect(() => {
    if (lastCover.current === cover) return;
    lastCover.current = cover;
    setShown(false);
    const t = setTimeout(() => setShown(true), 20);
    return () => clearTimeout(t);
  }, [cover]);

  const isVideo = cover?.endsWith(".mp4");

  return (
    <div
      ref={previewRef}
      aria-hidden
      className="pointer-events-none absolute z-50 hidden overflow-hidden rounded bg-[#1d1d1d] transition-opacity duration-150 ease-out md:block"
      style={{ width: PREVIEW_WIDTH, height: PREVIEW_HEIGHT, opacity: visible && cover ? 1 : 0 }}
    >
      {cover && (
        <div className="h-full w-full transition-opacity duration-200 ease-out" style={{ opacity: shown ? 1 : 0 }}>
          {isVideo ? (
            <video src={cover} autoPlay loop muted playsInline className="h-full w-full object-cover" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} alt="" className="h-full w-full object-cover" />
          )}
        </div>
      )}
    </div>
  );
}
