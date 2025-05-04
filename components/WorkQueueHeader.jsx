export default function WorkQueueHeader () {
  return (
    <div className='flex text-[.6rem] text-gray-400 p-2 bg-gray-700/20 uppercase tracking-wider gap-4'>
      <div className='w-[20%]'>Originator</div>
      <div className='w-[22%]'>Client / Line</div>
      <div className='w-[18%]'>Type</div>
      <div className='w-[15%]'>Status</div>
      <div className='w-[15%]'>Created</div>
    </div>
  )
}
