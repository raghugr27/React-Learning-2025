import React from 'react'

const ShimmerUi = () => {
  return (
    <div className='shimmer-ui-container'>
        {Array(10).fill("").map((e,index)=><div key={index} className='shimmer-ui-card'>
            
        </div>)}
      
    </div>
  )
}

export default ShimmerUi
