import { ChangeEventHandler } from 'react'

interface InputProps {
  id: string
  placeholder: string
  type?: string
  extraClasses?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  required?: boolean
  prefixIcon?: JSX.Element
}

const Input = ({
  id,
  placeholder,
  type,
  extraClasses,
  onChange,
  required,
  prefixIcon,
}: InputProps): JSX.Element => {
  console.log(prefixIcon)
  return (
    <div className="relative my-2">
      {prefixIcon && (
        <div className="w-10 py-2.5 lg:py-3.5 absolute left-0 rounded-l-md border-r-1 border-black flex justify-center items-center bg-primary-base hover:bg-primary-hover cursor-pointer transition duration-300">
          <div className="w-5 h-5 text-white">{prefixIcon}</div>
        </div>
      )}
      <input
        id={id}
        placeholder={placeholder}
        type={type || 'text'}
        className={`w-full shadow-ds2 pr-4 py-2.5 lg:py-3.5 ${
          prefixIcon ? 'pl-14' : 'pl-4'
        } border-none text-sm font-semibold focus:outline-primary-base rounded-md ${extraClasses}`}
        onChange={onChange}
        required={required || false}
      />
    </div>
  )
}

export default Input
