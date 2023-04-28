import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Title } from '../ui/Title'
import { useUser } from '../context/user-context'
import { Timer } from '../components/Timer'
import { useTimer } from '../context/timer-context'

export const GameOver = (): JSX.Element => {
  const {
    state: { name },
    dispatch: disptachUser
  } = useUser()
  const {
    state: { time },
    dispatch: dispathTimer
  } = useTimer()
  const navigate = useNavigate()

  const restart = () => {
    dispathTimer({ type: 'reset' })
    navigate('/game')
  }
  const exit = () => {
    dispathTimer({ type: 'reset' })
    disptachUser({ type: 'set', payload: { name: '' } })
    navigate('/')
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:w-1/2 mx-auto">
      <Title>You Win 🎉!</Title>
      <Subtitle>
        Congrants {name}! You completed the game in{' '}
        <span className="font-bold">
          <Timer time={time} />
        </span>
      </Subtitle>
      <div className="flex mt-4 gap-4 justify-center items-center">
        <Button onClick={restart}>Restart 💪</Button>
        <Button onClick={exit}>Exit 🖐️</Button>
      </div>
    </div>
  )
}
