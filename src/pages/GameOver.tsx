import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Title } from '../ui/Title'

export const GameOver = (): JSX.Element => {
  const navigate = useNavigate()

  const restart = () => {
    navigate('/game')
  }
  const exit = () => {
    navigate('/')
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:w-1/2 mx-auto">
      <Title>Your Win 🎉!</Title>
      <Subtitle>
        Congrants Saul! You are complete the game in{' '}
        <span className="font-bold">⏱️ 12:30s</span>
      </Subtitle>
      <div className="flex mt-4 gap-4 justify-center items-center">
        <Button onClick={restart}>Restart 💪</Button>
        <Button onClick={exit}>Exit 🖐️</Button>
      </div>
    </div>
  )
}
