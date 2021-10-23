import React from "react"
import { useState, useEffect, useRef } from "react"

import CLOUDS from "vanta/dist/vanta.clouds.min"
// Need to load three or will get "TypeError: undefined has no properties". not completely sure why
import * as THREE from "three"

const VantaCloudsAnimation = props => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          THREE, // used here to prevent "TypeError: undefined has no properties". not completely sure why
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          // skyColor: 0x791de1,
          speed: 1.7,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className="vanta-clouds-background" ref={myRef}>
      {/* Foreground content goes here */}
      {props.children}
    </div>
  )
}

export default VantaCloudsAnimation
