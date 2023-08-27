import React from 'react'

type LoadingFallbackProps = {
  asOverlay?: boolean
  fullscreen?: boolean
}

const LoadingFallback = (props: LoadingFallbackProps) => {
  const { fullscreen } = props
  return (
    <div>Loading...</div>
  )
}

export default LoadingFallback;