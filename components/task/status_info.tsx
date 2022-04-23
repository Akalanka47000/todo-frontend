import { Status } from '../../infrastructure/models'

interface StatusInfoProps {
  statuses: Status[]
}

const StatusInfo = ({ statuses }: StatusInfoProps): JSX.Element => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center p-3 rounded-md bg-white/40 backdrop-blur-[2px] relative mb-12">
      {statuses.map((status: Status) => {
        return (
          <div key={status.id} className="flex justify-center items-center mr-8 my-1 md:my-0">
            <div className={`w-5 h-5 rounded-l p-0.5 bg-blue-200`}>
              <div
                className={`w-full h-full rounded-l filter hover:brightness-105 transition-all duration-300`}
                style={{ backgroundColor: `${status!.color}` }}
              />
            </div>
            <span className='ml-2 text-sm font-semibold'>{status!.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default StatusInfo
