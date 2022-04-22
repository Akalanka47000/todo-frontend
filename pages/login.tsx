import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import AuthForm from '../components/auth/auth_form'

const Login: NextPage = () => {
  return (
    <Layout title="Home | TODO">
      <div>
        <img src="/images/login/bg.jpg" alt="Logo" className="h-screen w-screen object-cover absolute top-0" />
        <div className='h-screen w-screen flex justify-center items-center relative z-50'>
          <AuthForm type='login' />
        </div>
      </div>
    </Layout>
  )
}

export default Login
