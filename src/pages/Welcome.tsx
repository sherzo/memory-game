import { useNavigate } from 'react-router-dom'

import { Button } from '../ui/Button'
import { Title } from '../ui/Title'
import { Subtitle } from '../ui/Subtitle'
import { Input } from '../ui/Input'
import { useUser } from '../context/user-context'

export const Welcome = (): JSX.Element => {
  const { state, dispatch } = useUser()
  const navigate = useNavigate()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'set',
      payload: {
        name: e.target.value
      }
    })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    navigate('/game')
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:w-1/2 mx-auto">
      <Title>Memory Game 🎮</Title>
      <Subtitle>Test your concentration in a fun way</Subtitle>
      <form action="#" className="mt-4 min-w-full" onSubmit={handleSubmit}>
        <Input
          name="full_name"
          onChange={handleOnChange}
          value={state.name}
          placeholder="What is your name?"
          id="full_name"
          className="border  px-4 py-4 rounded-md text-center min-w-full mb-2 border-gray-500 text-xl"
        />
        <Button disabled={state.name.length < 3}>Play 🕹️</Button>
      </form>
    </div>
  )
}
