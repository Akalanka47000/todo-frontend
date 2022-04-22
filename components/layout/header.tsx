import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '../common'
import toast from '../../libs/toastify'
import { logout } from '../../infrastructure/services/auth.service'

const Header = () => {
  const router = useRouter()

  // Redirect to login page if user is not logged in
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('rememberMe') && !sessionStorage.getItem('loggedIn'))
        router.push({
          pathname: '/login',
        })
    }
  }, [router])

  const logoutUser = async () => {
    try {
      const res = await logout()
      if (res.status === 200) {
        localStorage.clear()
        sessionStorage.clear()
        router.push({
          pathname: '/login',
        })
      } else toast.error('Failed to logout')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
  }

  return (
    <header className="w-full h-20 absolute z-50 p-5 flex justify-between items-center bg-white/50 backdrop-blur shadow-xl shadow-gray-500/10">
      <h2 className="text-4xl text-center font-bold text-slate-900 pb-2 cursor-default">TODO</h2>
      <Button value="Logout" width="" padding="px-12 py-3" onClick={logoutUser} />
    </header>
  )
}

export default Header
