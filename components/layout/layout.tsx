import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title || 'App | Todo'}</title>
        <meta name="description" content="Simple TODO app to manage your day to day tasks" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-white text-black font-inter min-h-screen overflow-x-hidden">
        {children}
        <ToastContainer />
      </main>
    </>
  )
}

export default Layout
