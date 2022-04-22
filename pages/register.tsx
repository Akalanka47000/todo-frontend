import type { NextPage } from 'next'
import { Layout } from '../components/layout'
import AuthForm from '../components/auth/auth_form'

const Register: NextPage = () => {
  return (
    <Layout title="Register | TODO">
      <div>
        <img src="/images/auth/bg.jpg" alt="Logo" className="h-screen w-screen object-cover absolute top-0" />
        <div className='h-screen w-screen flex justify-center items-center relative z-50'>
          <AuthForm type='register' />
        </div>
      </div>
    </Layout>
  )
}

export default Register
