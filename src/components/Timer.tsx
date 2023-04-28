export const Timer = ({ time }: { time: number }): JSX.Element => {
  return (
    <span>
      ⏱️
      {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
      {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
    </span>
  )
}
