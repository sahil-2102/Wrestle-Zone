import { WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { index, title, description } = props
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  )
}
export default function Generator() {
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure"} />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button className="bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600" key={typeIndex}>
              <p className="capitalize">{type.replaceAll('_',' ')}</p>
            </button>
          )
        })}
      </div>

    </SectionWrapper>
  )
}
