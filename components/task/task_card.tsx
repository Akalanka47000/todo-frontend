import { useEffect } from 'react'
import { Task, Status } from '../../infrastructure/models'
import SwipeToDelete from 'react-swipe-to-delete-component'
import { NextLottie } from '../common'
import arrowAnimation from '../../public/animations/arrow-right.json'
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css'
import toast from '../../libs/toastify'
import { updateTask, deleteTask } from '../../infrastructure/services/task.service'

interface TaskCardProps {
  title: string
  tasks: Task[]
  statuses: Status[]
  refresh: Function
}

const TaskCard = ({ title, tasks, statuses, refresh }: TaskCardProps): JSX.Element => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.querySelectorAll('.js-content').forEach((element: any) => {
        element.classList.add('w-full', 'flex', 'justify-between', 'items-center')
      })
    }
  }, [])

  const onSwipeRight = (id: number) => {
    if (typeof window !== 'undefined')
      document.querySelectorAll(`#swipe-info-${id}`)[0].classList.add('hidden')
  }

  const onSwipeCancel = (id: number) => {
    if (typeof window !== 'undefined')
      document.querySelectorAll(`#swipe-info-${id}`)[0].classList.remove('hidden')
  }

  const onDelete = async (id: number) => {
    try {
      const res = await deleteTask(id)
      if (res.status === 200) toast.success('Task deleted successfully')
      else toast.error('Failed to delete task')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
  }

  const statusUpdate = async (taskId: number, statusId: number) => {
    try {
      const payload = {
        status_id: statusId,
      }
      const res = await updateTask(taskId, payload)
      if (res.status === 200) {
        toast.success('Task updated successfully')
        refresh()
      } else toast.error('Failed to update task')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-20vh rounded-md bg-white/60 backdrop-blur-[2px] relative pb-12">
      <div className="group">
        <div className="absolute top-0 left-0 bg-primary-base group-hover:bg-primary-hover py-3 w-28 md:w-48 rounded-tl-md flex justify-center items-center shadow-md transition-all duration-300">
          <span className="text-white font-semibold ml-2 cursor-default">{title}</span>
        </div>
        <div className="absolute top-0 left-10 md:left-30 py-3 w-36 bg-primary-base group-hover:bg-primary-hover mask mask-triangle-2 transform scale-x-150 shadow-md transition-all duration-300">
          <span className="opacity-0 pointer-events-none">{title}</span>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-col justify-start items-center">
        {tasks.map((task: Task) => {
          return (
            <div
              key={task.id}
              className="w-full dropdown dropdown-top flex flex-row justify-center items-center"
            >
              <SwipeToDelete
                classNameTag="w-11/12 flex flex-row justify-start items-center rounded-md group my-2"
                deleteSwipe={0.7}
                background={
                  <div className="w-full h-full flex bg-white group-hover:bg-gray-100 transition-all duration-300"></div>
                }
                onRight={() => onSwipeRight(task.id!)}
                onCancel={() => onSwipeCancel(task.id!)}
                onDelete={() => onDelete(task.id!)}
              >
                <div className="w-8/12 lg:w-4/12 flex justify-bewtween items-center">
                  <div className={`w-12 h-12 rounded-l p-0.8 bg-blue-200 dropdown`}>
                    <div
                      tabIndex={task.id}
                      className={`w-full h-full rounded-l filter hover:brightness-105 transition-all duration-300`}
                      style={{ backgroundColor: `${task.status!.color}` }}
                    />
                  </div>
                  <div className="w-full flex justify-bewtween items-center rounded-md py-3 px-3 pl-4">
                    <div>{task.name}</div>
                  </div>
                </div>
                <div
                  id={`swipe-info-${task.id}`}
                  className="flex justify-center items-center pr-6 opacity-60 transition-display duration-300"
                >
                  <div className="h-10 w-10 invert -rotate-90">
                    <NextLottie animationData={arrowAnimation} />
                  </div>
                  <span className="ml-2 font-semidbold hidden md:flex">Swipe to delete</span>
                </div>
              </SwipeToDelete>
              <div className="w-full absolute flex justify-center items-center">
                <div className="w-11/12 flex justify-start items-center">
                  <div
                    tabIndex={task.id}
                    className="dropdown-content menu shadow bg-base-100 rounded-lg"
                  >
                    {statuses.map((status: Status) => {
                      return (
                        <div
                          key={status.id}
                          className="group"
                          onClick={() => statusUpdate(task.id!, status.id)}
                        >
                          <div className="w-full flex flex-row justify-start items-center cursor-pointer py-2 pl-3 pr-12 group-hover:bg-gray-200 transition-all duration-300">
                            <div className={`w-6 h-6 rounded-l p-0.5 bg-blue-200`}>
                              <div
                                className={`w-full h-full rounded-l filter hover:brightness-105 transition-all duration-300`}
                                style={{ backgroundColor: `${status!.color}` }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-semibold">{status!.name}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskCard
