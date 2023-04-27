export const Hud = (): JSX.Element => {
  return (
    <div
      className="flex bg-white mx-auto justify-between 
      sm:justify-around shadow-lg rounded-md mt-6 px-6 py-2 
      lg:w-10/12 mb-10"
    >
      <span className="font-bold text-2xl ">
        Hits: <span className="font-black">1</span>
      </span>
      <div
        className="bg-blue-900 h-16 w-24 rounded-md sm:w-40
          shadow-lg absolute left-1/2 transform -translate-x-1/2 
          -translate-y-1/2 mt-4 flex justify-center items-center 
        "
      >
        <span className="text-2xl text-white font-bold">01:45</span>
      </div>
      <span className="font-bold text-2xl ">
        Misses: <span className="font-black">20</span>
      </span>
    </div>
  )
}
