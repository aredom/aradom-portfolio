"use client"
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypedText({ strings }) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings.split(', '),
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    })

    return () => typed.destroy()
  }, [strings])

  return <span ref={el} />
}