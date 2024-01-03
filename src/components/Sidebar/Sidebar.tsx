import { useState } from "react"
import { motion, Variants } from "framer-motion"

import Links from "../Links"
import ToggleButton from "../ToggleButton"

import "./index.scss"

const variants: Variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
}

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false)
    
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links />
        </motion.div>

        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
