import { useState } from 'react'

export const Welcome = (): JSX.Element => {
  const [name, setName] = useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:w-1/2 mx-auto">
      <h1 className="text-5xl mb-2 text-gray-800">Memory Game</h1>
      <p className="text-lg text-gray-500">
        Test your concentration in a fun way
      </p>
      <form action="#" className="mt-4 min-w-full">
        <input
          name="full_name"
          onChange={handleOnChange}
          value={name}
          placeholder="What is your name"
          id="full_name"
          className="border px-4 py-4 rounded-md text-center min-w-full mb-2 border-gray-500 text-xl"
        />
        <button className="block bg-gray-800 text-white rounded-md p-4 min-w-full text-xl">
          Play!
        </button>
      </form>
    </div>
  )
}
