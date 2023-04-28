type SubtitleProps = {
  children: string | React.ReactNode
}

export const Subtitle = ({ children }: SubtitleProps) => {
  return <p className="text-lg text-gray-500 text-center">{children}</p>
}
