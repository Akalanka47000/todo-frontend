import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Layout, Header, Footer, Container } from '../components/layout'
import { CreateTaskModal, TaskCard, StatusInfo } from '../components/task'
import { PlusIcon } from '@heroicons/react/solid'
import toast from '../libs/toastify'
import { getTaskList } from '../infrastructure/services/task.service'
import { getStatusList } from '../infrastructure/services/status.service'
import { Task, Status } from '../infrastructure/models'

const Home: NextPage = () => {
  const [statusList, setStatusList] = useState<Status[]>([])
  const [taskList, setTaskList] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Redirect to login page if user is not logged in
      if (!localStorage.getItem('rememberMe') && !sessionStorage.getItem('loggedIn')) {
        router.push({
          pathname: '/login',
        })
      } else {
        // Fetch and cache status list
        const cachedStatuses = localStorage.getItem('statuses')
        if (cachedStatuses) setStatusList(JSON.parse(cachedStatuses))
        else fetchStatusList()
        fetchTaskList()
      }
    }
  }, [router])

  const fetchStatusList = async () => {
    setLoading(true)
    try {
      const res = await getStatusList()
      if (res.status === 200) {
        localStorage.setItem('statuses', JSON.stringify(res.data.data))
        setStatusList(res.data.data)
      } else toast.error('Failed to fetch statuses')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
    setLoading(false)
  }

  const fetchTaskList = async () => {
    setLoading(true)
    try {
      const res = await getTaskList()
      if (res.status === 200) {
        setTaskList(res.data.data)
      } else toast.error('Failed to fetch tasks')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
    setLoading(false)
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
        <CreateTaskModal refresh={fetchTaskList} />
        {loading ? (
          <div className="w-full flex flex-col justify-center items-center min-h-70vh rounded-md bg-white/60 backdrop-blur-[2px]">
            <progress className="progress progress-primary w-10/12 md:w-8/12 lg:w-4/12"></progress>
            <span className="mt-4 font-semibold text-center">
              Fetching tasks, this wont take long
            </span>
          </div>
        ) : (
          <div>
            <StatusInfo statuses={statusList} />
            <TaskCard
              title="All tasks"
              tasks={taskList}
              statuses={statusList}
              refresh={fetchTaskList}
            />
          </div>
        )}
      </Container>
      <Footer />
    </Layout>
  )
}

export default Home
