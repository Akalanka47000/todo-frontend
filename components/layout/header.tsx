import { useState, useEffect } from 'react'
import { Button } from '../common'
import { ToastContainer, toast } from 'react-toastify'
// import { signOut } from "../../infrastructure/services/authService";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token) setLoggedIn(true)
    }
  }, [])

  //   const logout = async () => {
  //     try {
  //       await signOut();
  //       setLoggedIn(false);
  //     } catch (error: any) {
  //       toast.error(error.toString(), {
  //         autoClose: 2000,
  //       });
  //     }
  //   };

  return (
    <header>
      <div className="p-5 flex items-center bg-gray-100 shadow-xl shadow-gray-200/50">
        <h2 className="text-4xl text-center font-bold text-slate-900 pb-2">TODO</h2>
        <div className="relative md:absolute top-6 right-0 mr-6 mb-8 md:mb-0">
          <Button value="Logout" width="" padding="px-12 py-3" />
        </div>
      </div>
      <ToastContainer />
    </header>
  )
}

export default Header
