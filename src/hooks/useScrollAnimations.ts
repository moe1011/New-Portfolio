// hooks/useScrollAnimations.ts
import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;
  xOffset?: number;
  yOffset?: number;
  duration?: number;
  scaleFrom?: number;  // e.g. 1.2
  scaleTo?: number;    // e.g. 1
}

/**
 * Enhanced scroll hook that can animate position, scale, and opacity.
 */
export function useScrollAnimations(
  elements: RefObject<HTMLElement>[],
  {
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    markers = false,
    once = false,
    xOffset = 0,
    yOffset = 0,
    duration = 1,
    scaleFrom = 1,
    scaleTo = 1,
  }: AnimationOptions = {}
) {
  useEffect(() => {
    elements.forEach((elementRef) => {
      const el = elementRef.current;
      if (!el) return;

      // Set initial state
      gsap.set(el, {
        opacity: 0,
        x: xOffset,
        y: yOffset,
        scale: scaleFrom,
      });

      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: xOffset,
          y: yOffset,
          scale: scaleFrom,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: scaleTo,
          duration,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub,
            markers,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    elements,
    start,
    end,
    scrub,
    markers,
    once,
    xOffset,
    yOffset,
    duration,
    scaleFrom,
    scaleTo,
  ]);
}