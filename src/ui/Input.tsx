type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="border px-4 py-4 rounded-md text-center min-w-full mb-2 border-gray-500 text-xl"
    />
  )
}
