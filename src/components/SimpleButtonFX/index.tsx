import React from 'react'
import { useClapAnimation, useClapState, useDOMRef, useEffectAfterMount } from './hook';
import ClapContainer from './ClapContainer'
import ClapIcon from './ClapIcon';
import CountTotal from './CountTotal';
import ClapCount from './ClapCount';

const SimpleButtonFX = () => {
  const { clapState, togglerProps, counterProps } = useClapState()
  const { count, countTotal, isClicked } = clapState

  const [
    { clapContainerRef, clapCountRef, countTotalRef },
    setRef
  ] = useDOMRef()

  const animationTimeline = useClapAnimation({
    duration: 300,
    bounceEl: clapCountRef,
    fadeEl: countTotalRef,
    burstEl: clapContainerRef
  })

  useEffectAfterMount(
    () => {
      animationTimeline.replay()
    },
    [count]
  )

  return (
    <ClapContainer
      ref={setRef}
      data-refkey='clapContainerRef'
      {...togglerProps}
    >
      <ClapIcon isClicked={isClicked} />
      <ClapCount ref={setRef} data-refkey='clapCountRef' {...counterProps} />
      <CountTotal
        ref={setRef}
        data-refkey='countTotalRef'
        countTotal={countTotal}
      />
    </ClapContainer>
  )
}

export default SimpleButtonFX;
