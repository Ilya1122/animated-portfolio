/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./index.scss"

interface ParallaxProps {
    type?: string;
}

const Parallax: FC<ParallaxProps> = ({ type }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref as any,
        offset: ["start start", "end start"]
    })
    const yBg = useTransform(scrollYProgress as any, [0, 1], ['0%', '100%'])
    const yText = useTransform(scrollYProgress as any, [0, 1], ['0%', '500%'])

  return (
    <div
        ref={ref as any}
        className="parallax"
        style={{
            background: type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"
        }}
        
    >
        <motion.h1 style={{ y: yText }}>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>

        <motion.div className="mountains"></motion.div>
        <motion.div 
            style={{
                y: yBg,
                backgroundImage: `url(${type === "services" ? "planets.png" : "sun.png"})`
            }} 
            className="planets"
        >

        </motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax
