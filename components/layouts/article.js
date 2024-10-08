import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.15, type: 'easeInOut' }}
      style={{ position: 'relative' }}
      maxW="4k"
    >
        <>
            {title && (
                <Head>
                    <title>{title} - afkdev8</title>
                </Head>
            )}
            {children}
            <GridItemStyle />
        </>
    </motion.article>
)

export default Layout
