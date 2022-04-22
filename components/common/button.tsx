interface ButtonProps {
  value: string
  onClick?: () => void
  width?: string
  padding?: string
  radius?: string
  extraClasses?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ value, onClick, width, padding, radius, extraClasses, type }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${width} ${radius} ${extraClasses} text-white bg-primary-base hover:bg-primary-hover outline-none rounded-md transition duration-300 shadow-sm`}
      type={type}
    >
      {value}
    </button>
  )
}

export default Button
