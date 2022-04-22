import type { NextPage } from 'next'
import { Layout, Header, Footer } from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home | TODO">
      <Header />
      <Footer />
    </Layout>
  )
}

export default Home
