import { Button } from '../ui/Button'
import { Subtitle } from '../ui/Subtitle'
import { Title } from '../ui/Title'

export const GameOver = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:w-1/2 mx-auto">
      <Title>Your Win!</Title>
      <Subtitle>
        Congrants! You are complete the game in{' '}
        <span className="font-bold">12:30s</span>
      </Subtitle>
      <div className="flex mt-4 gap-4 justify-center items-center">
        <Button>Restart</Button>
        <Button>Exit</Button>
      </div>
    </div>
  )
}
