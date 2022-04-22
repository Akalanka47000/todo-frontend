import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { LazyMotion, AnimatePresence,domAnimation, m } from 'framer-motion'
import { fadeIn } from "../animations"

function MyApp({ Component, pageProps, router }: AppProps) {
  const animation = fadeIn
  return (
    <div className="app-wrap">
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter>
          <m.div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  )
}

export default MyApp
