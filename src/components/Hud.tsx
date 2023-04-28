import { StopWatch } from './StopWatch'

export const Hud = ({
  score,
  misses
}: {
  score: number
  misses: number
}): JSX.Element => {
  return (
    <div
      className="flex bg-white mx-auto justify-between 
      sm:justify-around shadow-lg rounded-md mt-6 px-1 lg:px-6 py-2 
      lg:w-10/12 mb-10"
    >
      <span className="font-bold text-xl lg:text-2xl">
        ✅ Hits: <span className="font-black">{score}</span>
      </span>
      <StopWatch />
      <span className="font-bold text-xl lg:text-2xl">
        💥 Misses: <span className="font-black">{misses}</span>
      </span>
    </div>
  )
}
