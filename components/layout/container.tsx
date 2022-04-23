interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mt-20 min-h-90vh relative z-40 mx-3 sm:mx-8 lg:mx-12 ${className}`}>
      {children}
    </div>
  )
}

export default Container
