import {motion} from "framer-motion"
import { useState } from "react"

const Test = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
  return (
    <div className="course">
        <motion.div 
            className="box" 
            initial={{ opacity: 0.5, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1, x: 200, y: 200 }}
            // transition={{ duration: 2 }}
            // whileInView={{ opacity: 1, scale: 2 }}
            // drag
            variants={variants}
            animate={open ? "visible" : "hidden"}
        >
            Test
        </motion.div>

        <button onClick={() => setOpen(prev => !prev)}>Test</button>
    </div>
  )
}

export default Test