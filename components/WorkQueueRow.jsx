import { PiDotsThreeCircleVerticalLight } from 'react-icons/pi'

const statusColor = {
    New: 'bg-blue-500',
    Pending: 'bg-yellow-400',
    Completed: 'bg-green-500'
  }
  
function WorkQueueRow( {sortItems} ) {
    return (
        <div>
            {sortItems.map((item, i) => (
          <div
            key={i}
            className={`flex p-2 items-center gap-4 ${
              i % 2 === 1 ? 'bg-gray-700/20 border-y border-gray-600/20' : ''
            }`}
          >
            <div className='w-[20%] flex items-center gap-3'>
              <div className='bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium uppercase'>
                {item.name.slice(0, 2)}
              </div>
              <span className='text-sm font-medium'>{item.name}</span>
            </div>
            <div className='text-sm w-[22%]'>
              <div className='font-medium'>{item.company}</div>
              <div className='text-gray-400 text-xs'>{item.line}</div>
            </div>
            <div className='text-sm w-[18%]'>{item.type}</div>
            <div className='text-sm flex items-center gap-1 w-[15%]'>
              <div
                className={`w-2 h-2 rounded-full ${statusColor[item.status]}`}
              ></div>
              {item.status}
            </div>
            <div className='flex items-center gap-4 w-[15%]'>
              <div className='text-sm'>{item.date}</div>
              <div className='text-2xl hover:scale-110 '>
                <button className=' cursor-pointer'><PiDotsThreeCircleVerticalLight /></button>
              </div>
            </div>
          </div>
        ))}
        </div>
    )
}

export default WorkQueueRow
