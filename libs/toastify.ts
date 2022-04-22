import { toast } from 'react-toastify'

const toastOptions = {
  autoClose: 2000,
}

const defaultErrorMessage = 'Something went wrong. Please try again later'

const success = (message: string) => {
  toast.success(message, toastOptions)
}

const error = (message: string) => {
  toast.error(message, toastOptions)
}

const convertAndNotifyError = (e: any) => {
  let errorMessage = defaultErrorMessage
  if (e.response.data.error) errorMessage = e.response.data.error
  error(errorMessage)
}

const customToast = {
  success,
  error,
  convertAndNotifyError,
}

export default customToast
