export const GameFinished = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen lg:w-1/2 mx-auto">
      <h1 className="text-5xl mb-2 text-gray-800">You Win</h1>
      <p className="text-lg text-gray-500">
        Congrants! You are complete the game in{' '}
        <span className="font-bold">12:30s</span>
      </p>
      <div className="flex mt-4 gap-4 justify-center items-center">
        <button className="block bg-gray-800 text-white rounded-md p-4 min-w-full text-xl">
          Restart
        </button>
        <button className="block bg-gray-800 text-white rounded-md p-4 min-w-full text-xl">
          Exit
        </button>
      </div>
    </div>
  )
}
