import React from 'react'

const ShimmerUi = () => {
  return (
    <div className=' flex gap-7 flex-wrap'>
        {Array(10).fill("").map((e,index)=><div key={index} className='w-65 h-90 border border-gray-200 rounded-xl transition-shadow animate-pulse bg-gray-200'>
            
        </div>)}
      
    </div>
  )
}

export default ShimmerUi
