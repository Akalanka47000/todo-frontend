import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '../common'
import toast from '../../libs/toastify'
import { logout } from '../../infrastructure/services/auth.service'

const Header = () => {
  const router = useRouter()

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
    <header>
      <div className="p-5 flex items-center bg-gray-100 shadow-xl shadow-gray-200/50">
        <h2 className="text-4xl text-center font-bold text-slate-900 pb-2">TODO</h2>
        <div className="relative md:absolute top-6 right-0 mr-6 mb-8 md:mb-0">
          <Button value="Logout" width="" padding="px-12 py-3" onClick={logoutUser} />
        </div>
      </div>
    </header>
  )
}

export default Header
