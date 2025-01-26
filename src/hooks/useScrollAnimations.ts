// hooks/useScrollAnimations.ts
import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin once globally
gsap.registerPlugin(ScrollTrigger);

/**
 * Extended interface to define optional scroll-triggered animations.
 */
interface AnimationOptions {
  start?: string;          // e.g., "top 80%"
  end?: string;            // e.g., "bottom 20%"
  scrub?: boolean | number;
  markers?: boolean;
  once?: boolean;          // if true, animates only the first time it enters
  xOffset?: number;        // horizontal offset for the 'from' position
  yOffset?: number;        // vertical offset for the 'from' position
  duration?: number;
}

/**
 * Hook that takes an array of refs and animates them on scroll using from→to.
 * By default, elements will slide up 50px (yOffset) and fade in from 0 opacity.
 * You can override with xOffset and yOffset to slide from left/right, etc.
 */
export function useScrollAnimations(
  elements: RefObject<HTMLElement>[],
  {
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    markers = false,
    once = false,
    xOffset = 0,    // default no horizontal slide
    yOffset = 50,   // default slight vertical slide
    duration = 1,
  }: AnimationOptions = {}
) {
  useEffect(() => {
    elements.forEach((elementRef) => {
      const el = elementRef.current;
      if (!el) return;

      // Immediately set the element's initial state so it's offscreen/invisible
      gsap.set(el, {
        opacity: 0,
        x: xOffset,
        y: yOffset,
      });

      // Animate from (xOffset, yOffset, opacity: 0) to (0, 0, opacity: 1)
      gsap.fromTo(
        el,
        { 
          opacity: 0, 
          x: xOffset, 
          y: yOffset 
        },
        { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          duration,
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub,
            markers,
            // If once = true, do not reverse on scroll up
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    });

    // Cleanup on unmount
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
    duration
  ]);
}