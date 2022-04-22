import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Layout, Header, Footer, Container } from '../components/layout'
import CreateTaskModal from '../components/task/create_task_modal'
import { PlusIcon } from '@heroicons/react/solid'
import toast from '../libs/toastify'
import { getStatusList } from '../infrastructure/services/status.service'
import { Status } from '../infrastructure/models'

const Home: NextPage = () => {
  const [statusList, setStatusList] = useState<Status[]>([])

  // Fetch and cache status list
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cachedStatuses = localStorage.getItem('statuses')
      if (cachedStatuses) setStatusList(JSON.parse(cachedStatuses))
      else fetchStatusList()
    }
  }, [])

  const fetchStatusList = async () => {
    try {
      const res = await getStatusList()
      if (res.status === 200) {
        localStorage.setItem('statuses', JSON.stringify(res.data.data))
        setStatusList(res.data.data)
      } else toast.error('Failed to fetch statuses')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
  }

  return (
    <Layout title="Home | Todo">
      <Header />
      <img
        src="/images/home/bg.jpg"
        alt="Logo"
        className="h-screen w-screen object-cover fixed top-0 filter brightness-90"
      />
      <Container className="pt-1">
        <div className="flex items-center justify-between bg-white/90 mt-8 mb-8 p-3 px-8 rounded-md transform hover:scale-x-101 transition duration-300">
          <span className="text-3xl font-semibold text-gray-800 cursor-default">My Tasks</span>
          <label
            className="tooltip tooltip-primary modal-button flex justify-center items-center h-10 w-14 rounded text-white bg-primary-base cursor-pointer hover:bg-primary-hovertransition duration-300"
            data-tip="Add New Task"
            htmlFor="create_task_modal"
          >
            <PlusIcon className="h-8 w-8" />
          </label>
        </div>
        <CreateTaskModal />
      </Container>
      <Footer />
    </Layout>
  )
}

export default Home
