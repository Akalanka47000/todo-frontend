import { FormEvent, ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { UserIcon, KeyIcon, MailIcon } from '@heroicons/react/solid'
import { Input, Button, Checkbox, NextLottie } from '../common'
import toast from '../../libs/toastify'
import welcomeAnimation from '../../public/animations/welcome.json'
import arrowAnimation from '../../public/animations/arrow-right.json'
import { login, register } from '../../infrastructure/services/auth.service'

interface AuthProps {
  type?: 'login' | 'register'
}

const AuthForm = ({ type }: AuthProps): JSX.Element => {
  const router = useRouter()
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      let res: any
      if (type == 'login') {
        formData.email = formData.username
        res = await login(formData)
      } else {
        res = await register(formData)
      }
      if (res.status === 200) {
        if (rememberMe) localStorage.setItem('rememberMe', 'true')
        sessionStorage.setItem('loggedIn', 'true')
        router.push({
          pathname: '/',
        })
      } else toast.error(type == 'login' ? 'Failed to login' : 'Failed to register')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
  }
  return (
    <div className="bg-white/70 backdrop-blur py-12 px-7 md:px-12 w-11/12 lg:w-1/2 rounded-2xl">
      <div className="flex justify-center items-center">
        <div className="w-10/12 lg:w-3/4 border-b-2 border-black mb-10">
          <NextLottie animationData={welcomeAnimation} />
        </div>
      </div>
      <form id={`${type}Form`} className="flex flex-col " onSubmit={onSubmit}>
        <Input
          type="text"
          id="username"
          placeholder={type == 'login' ? 'Username/Email' : 'Username'}
          required
          onChange={handleInputChange}
          prefixIcon={<UserIcon />}
        />
        {type == 'register' && (
          <Input
            type="text"
            id="email"
            placeholder="Email"
            required
            onChange={handleInputChange}
            prefixIcon={<MailIcon />}
          />
        )}
        <Input
          id="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleInputChange}
          prefixIcon={<KeyIcon />}
        />

        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <Checkbox checked={rememberMe} toggle={setRememberMe} />
            <p className="text-sm text-blue ml-2 font-semibold">Remember Me</p>
          </div>
        </div>
        <Button
          value={type == 'login' ? 'Login' : 'Register'}
          padding="px-12 py-2 md:py-3"
          extraClasses="mt-4"
        />
        <div className="group flex justify-end items-center mt-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-blue ml-2 font-semibold">
              {type == 'login' ? "Don't have an account yet" : 'Already have an account'}
            </p>{' '}
            <div className="h-8 w-8 invert -rotate-90">
              <NextLottie animationData={arrowAnimation} />
            </div>{' '}
            <a
              className="cursor-pointer text-sm text-primary-base hover:text-primary-hover group-hover:mr-2 transition-all duration-300"
              href={type == 'login' ? '/register' : '/login'}
            >
              {type == 'login' ? 'Register' : 'Login'}
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
