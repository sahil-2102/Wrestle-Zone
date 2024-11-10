
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4 p-4">
        <p>Time to go Zoned Out</p>

        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Wrestle<span className="text-blue-400">Zone</span></h1>
      </div>

      <p className="text-sm md:text-base font-light">WrestleZone is a global talent showcasing platform where <span className="text-blue-400 font-medium">talents</span> from <span className="text-blue-400 font-medium">different regions</span> present their Wrestling skills and it gives <span className="text-blue-400 font-medium">opportunities</span> to build characters and be ready to become a successfull <span className="text-blue-400 font-medium">pro wrestler.</span> JOIN THE REVOLUTION!</p>

      <button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200"><p>Accept & Begin</p></button>
    </div>
  )
}
