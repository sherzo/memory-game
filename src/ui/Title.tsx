type TitleProps = {
  children: string | React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-5xl mb-2 text-gray-800">{children}</h1>
}
