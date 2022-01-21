import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export default function Animate({ delay, duration, type }) {
  const animation = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
    if (!inView) {
      animation.start('hidden')
    }
    console.log('useeffect, inView = ', inView)
  }, [inView])

  return <div></div>
}
