import { motion, Variants } from "framer-motion"

const variants: Variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const ItemsVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}

const Links = () => {
    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]

  return (
    <motion.div className="links" variants={variants}>
        {items.map(item => (
            <motion.a 
                key={item} 
                href={`#${item}`} 
                variants={ItemsVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {item}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links