import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../ui/Button'
import { Title } from '../ui/Title'
import { Subtitle } from '../ui/Subtitle'
import { Input } from '../ui/Input'

export const Welcome = (): JSX.Element => {
  const [name, setName] = useState<string>('')
  const navigate = useNavigate()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
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
          value={name}
          placeholder="What is your name?"
          id="full_name"
          className="border  px-4 py-4 rounded-md text-center min-w-full mb-2 border-gray-500 text-xl"
        />
        <Button disabled={name.length < 3}>Play 🕹️</Button>
      </form>
    </div>
  )
}
