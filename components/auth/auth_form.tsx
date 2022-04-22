import { FormEvent, useState } from 'react'
import { UserIcon, KeyIcon } from '@heroicons/react/solid'
import { Input, Button, Checkbox } from '../common'
import Lottie from 'react-lottie'
import welcomeAnimation from '../../public/animations/welcome.json'

interface AuthProps {
  type?: 'login' | 'register'
}

const AuthForm = ({ type }: AuthProps): JSX.Element => {
  const welcomeAnimationOptions = {
    animationData: welcomeAnimation,
    loop: true,
    autoplay: true,
  }
  const [rememberMe, setRememberMe] = useState(false)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <div className="bg-white/70 backdrop-blur py-12 px-6 md:px-12 w-11/12 lg:w-1/2 rounded-2xl">
      <div className="flex justify-center items-center">
        <div className="w-10/12 lg:w-3/4 border-b-2 border-black mb-10">
          <Lottie options={welcomeAnimationOptions} />
        </div>
      </div>
      <form id={`${type}Form`} className="flex flex-col " onSubmit={onSubmit}>
        <Input type="text" id="username" placeholder="Username" extraClasses="" required prefixIcon={<UserIcon/>}/>
        <Input id="password" type="password" placeholder="Password" extraClasses="" required prefixIcon={<KeyIcon/>}/>

        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            {type == 'login' && (<Checkbox checked={rememberMe} toggle={setRememberMe} />)}
            <p className="text-xs text-blue ml-2 font-semibold">Remember Me</p>
          </div>
        </div>
        <Button value="Login" width="" padding="px-12 py-2 md:py-3" extraClasses="mt-4" />
      </form>
    </div>
  )
}

export default AuthForm
