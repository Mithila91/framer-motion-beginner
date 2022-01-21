import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Box4() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        drag
        animate={{
          scale: [1, 1.4, 1.4, 1, 1, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '20'],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 10,
        }}
      ></motion.div>
    </div>
  )
}
