import { useState, ChangeEvent, FormEvent } from 'react'
import toast from '../../libs/toastify'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { createTask } from '../../infrastructure/services/task.service'
import { Input, Button } from '../common'

const CreateTaskModal = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await createTask(formData)
      if (res.status === 200) {
        // Reset form and close modal
        if (typeof window !== 'undefined') {
          const form = e.target as HTMLFormElement
          form.reset()
          const modalCheckbox = document.getElementById('create_task_modal') as HTMLInputElement
          modalCheckbox.checked = !modalCheckbox.checked
        }
      } else toast.error('Failed to create task')
    } catch (error: any) {
      toast.convertAndNotifyError(error)
    }
  }
  return (
    <div>
      <input type="checkbox" id="create_task_modal" className="modal-toggle"></input>
      <div id="create_task_modal_actual" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="create_task_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl">Add Task</h3>
          <form onSubmit={onSubmit}>
            <div className="mt-5">
              <Input
                type="text"
                id="name"
                placeholder="Task Name"
                required
                onChange={handleInputChange}
                prefixIcon={<InformationCircleIcon />}
              />
            </div>
            <Button value="Add" padding="px-12 py-2 md:py-3" extraClasses="w-full mt-4" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskModal
