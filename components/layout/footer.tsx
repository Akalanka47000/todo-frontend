import { HeartIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white/50 to-white/20 backdrop-blur relative z-50 h-16 flex justify-center items-center">
      <div className="px-5 py-3 flex flex-col items-center">
        <p className="flex flex-row items-center text-black">
          Made with&nbsp;
          <HeartIcon className="fill-red-700 h-5" />
          &nbsp; By&nbsp;
          <Link href="https://akalanka47000.github.io/portfolio/">
            <a className="text-primary-base hover:text-primary-hover transition-all duration-200">Akalanka Perera</a>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
