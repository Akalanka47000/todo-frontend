import axiosIns from '../../libs/axios'
import { User } from '../models'

export const login = (loginData: User) => {
  return axiosIns.post('/auth/login', loginData)
}

export const register = (registerData: User) => {
  return axiosIns.post('/auth/register', registerData)
}

export const logout = () => {
  return axiosIns.post('/auth/logout')
}
