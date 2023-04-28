type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | React.ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="block bg-gray-800 text-white rounded-md p-4 min-w-full text-xl"
      {...rest}
    >
      {children}
    </button>
  )
}
