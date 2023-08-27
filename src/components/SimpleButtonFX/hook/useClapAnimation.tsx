// @ts-ignore
import mojs from 'mo-js';
import { useState, useLayoutEffect } from 'react';

interface UseClapAnimationProps {
  duration: number;
  bounceEl: HTMLElement | string;
  fadeEl: HTMLElement | string;
  burstEl: HTMLElement | string;
}

/** ====================================
   *          🔰Hook
        Hook for Animation
  ==================================== **/

const useClapAnimation = ({
  duration: tlDuration,
  bounceEl,
  fadeEl,
  burstEl
}: UseClapAnimationProps) => {
  const [animationTimeline, setAnimationTimeline] = useState<mojs.Timeline>(
    new mojs.Timeline()
  )

  useLayoutEffect(
    () => {
      if (!bounceEl || !fadeEl || !burstEl) {
        return
      }

      const triangleBurst = new mojs.Burst({
        parent: burstEl,
        radius: { 50: 95 },
        count: 5,
        angle: 30,
        children: {
          shape: 'polygon',
          radius: { 6: 0 },
          scale: 1,
          stroke: 'rgba(211,84,0 ,0.5)',
          strokeWidth: 2,
          angle: 210,
          delay: 30,
          speed: 0.2,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
          duration: tlDuration
        }
      })

      const circleBurst = new mojs.Burst({
        parent: burstEl,
        radius: { 50: 75 },
        angle: 25,
        duration: tlDuration,
        children: {
          shape: 'circle',
          fill: 'rgba(149,165,166 ,0.5)',
          delay: 30,
          speed: 0.2,
          radius: { 3: 0 },
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }
      })

      const countAnimation = new mojs.Html({
        el: bounceEl,
        isShowStart: false,
        isShowEnd: true,
        y: { 0: -30 },
        opacity: { 0: 1 },
        duration: tlDuration
      }).then({
        opacity: { 1: 0 },
        y: -80,
        delay: tlDuration / 2
      })

      const countTotalAnimation = new mojs.Html({
        el: fadeEl,
        isShowStart: false,
        isShowEnd: true,
        opacity: { 0: 1 },
        delay: (3 * tlDuration) / 2,
        duration: tlDuration,
        y: { 0: -3 }
      })

      const scaleButton = new mojs.Html({
        el: burstEl,
        duration: tlDuration,
        scale: { 1.3: 1 },
        easing: mojs.easing.out
      })

      if (typeof burstEl === 'string') {
        const id = burstEl.slice(1, burstEl.length);
        const el = document.getElementById(id);
        if (el) {
          el.style.transform = 'scale(1, 1)';
        }
      } else {
        burstEl.style.transform = 'scale(1, 1)'
      }

      const updatedAnimationTimeline = animationTimeline.add([
        countAnimation,
        countTotalAnimation,
        scaleButton,
        circleBurst,
        triangleBurst
      ])

      setAnimationTimeline(updatedAnimationTimeline)
    },
    [tlDuration, animationTimeline, bounceEl, fadeEl, burstEl]
  )

  return animationTimeline
}

export default useClapAnimation;