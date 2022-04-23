import axiosIns from '../../libs/axios'
import { Task } from '../models'

export const getTaskList = () => {
  return axiosIns.get('/task')
}

export const createTask = (task: Task) => {
  return axiosIns.post('/task', task)
}

export const updateTask = (id: number, task: Task) => {
  return axiosIns.put(`/task/${id}`, task)
}

export const deleteTask = (id: number) => {
  return axiosIns.delete(`/task/${id}`)
}
