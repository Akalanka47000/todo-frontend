import axiosIns from '../../libs/axios'

export const getStatusList = () => {
  return axiosIns.get('/status')
}
