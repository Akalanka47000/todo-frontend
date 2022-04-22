import { CheckIcon } from '@heroicons/react/solid'

interface CheckboxProps {
  checked: boolean
  toggle: any
  extraClasses?: string
}

const Button = ({ checked, toggle, extraClasses }: CheckboxProps): JSX.Element => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer h-6 w-6 rounded shadow-ds2 hover:bg-primary-base transition duration-300 ${extraClasses} ${
        checked ? 'bg-primary-base' : 'bg-white'
      }`}
      onClick={() => toggle(!checked)}
    >
      <CheckIcon className={`h-5 w-5 hover:text-white ${checked ? 'text-white' : 'text-gray-600'}`} />
    </div>
  )
}

export default Button
