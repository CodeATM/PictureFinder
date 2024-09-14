import React from 'react'

const Skeleton = () => {

  return (
    <div className='my-8' >
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
        <div className="rounded-[4px] w-full h-[400px] bg-[#e3e3e3]"></div>
      </div>
    </div>
  )
}

export default Skeleton