'use client'
import React from 'react'
import Hero from '../_components/Hero'
import Skills from '../_components/Skills'
import Work from '../_components/Work'
// import { ReactLenis } from "@studio-freight/react-lenis";

const HomePage = () => {
  return (
    <div>
      {/* <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}> */}
        <Hero />
        <Work />
      {/* </ReactLenis> */}
    </div >
  )
}

export default HomePage