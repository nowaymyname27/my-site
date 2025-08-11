"use client";
import { useRef, useLayoutEffect } from "react";

/**
 * Smooth height animation (grow & shrink) using ResizeObserver.
 * - Animates from previous height to new height on any content resize.
 * - Prevents margin-collapsing by using display:grid on the inner wrapper.
 */
export default function AutoHeight({
  children,
  className = "",
  duration = 1000,
  easing = "cubic-bezier(0.25, 1.5, 0.5, 1)",
}) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const lastHeightRef = useRef(0);
  const cleanupRef = useRef(() => {});

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Initialize last height on mount
    lastHeightRef.current = inner.scrollHeight;

    const ro = new ResizeObserver(() => {
      const prev = lastHeightRef.current;
      const next = inner.scrollHeight;

      if (!outer) return;
      if (Math.round(prev) === Math.round(next)) return;

      // Cancel any previous cleanup
      cleanupRef.current();

      // Lock the current height to start the animation
      outer.style.height = `${prev}px`;
      outer.style.overflow = "hidden";
      outer.style.transition = `height ${duration}ms ${easing}`;

      // Next frame, animate to the new height
      requestAnimationFrame(() => {
        outer.style.height = `${next}px`;
      });

      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        outer.style.height = "auto";
        outer.style.overflow = "";
        outer.style.transition = "";
        outer.removeEventListener("transitionend", onEnd);
      };
      outer.addEventListener("transitionend", onEnd);

      // Save cleanup so a new resize can cancel this one
      cleanupRef.current = () => {
        outer.removeEventListener("transitionend", onEnd);
      };

      // Update last height for the next change
      lastHeightRef.current = next;
    });

    ro.observe(inner);

    return () => {
      ro.disconnect();
      cleanupRef.current();
    };
  }, [duration, easing]);

  return (
    <div ref={outerRef} className={className} style={{ height: "auto" }}>
      {/* grid prevents margin-collapsing affecting measured height */}
      <div ref={innerRef} style={{ display: "grid" }}>
        {children}
      </div>
    </div>
  );
}
