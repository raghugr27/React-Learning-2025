import React,{useState} from 'react'
import { useParams } from 'react-router';
import ShimmerUi from './ShimmerUi';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CARD_LOGO_URL } from '../utils/constants';
const RestaurantMenu = () => {
  const [showIndex,setShowIndex]=useState(null);
    const {resId}=useParams();
const {info:resInfo,categorizedData}=useRestaurantMenu(resId);
let {name,cuisines,
costForTwoMessage}=resInfo || {};
  return (
    <div className='p-4'>{
  resInfo===null?<ShimmerUi />:
     <div className='w-1/2 m-auto  p-4 shadow-lg shadow-gray-800'>
      <h1 className='text-center font-bold text-2xl'>{name}</h1>
      <h2 className='text-center font-bold text-2xl'>{cuisines?.join(",")} - {costForTwoMessage} </h2>
    
      <div>
        {categorizedData?.map((item)=>{

    let {categoryId:id,title,itemCards=[]}=item || {};
  debugger;
    return( 
   <div>
 <div className='flex justify-between p-2 rounded- border cursor-pointer border-gray-200 shadow-xl shadow-gray-400 mb-5 ' key={id} onClick={()=>{setShowIndex(id)}}>
       <div className='font-bold text-xl w-full' key={id} >{title} ({itemCards?.length})</div>
       ⬇️
    </div>
    {showIndex===id && itemCards?.map(item=>{
      let {id,name,defaultPrice,price,description,imageId}=item?.card?.info || {};
      return(
        <div className='flex justify-between  p-2  border-b border-gray-200 mb-3' key={id}>
          <div className='' key={id}>
          <div className='font-bold text-sm'  >{name}</div>  
          <div>₹{price/100 || defaultPrice/100}</div>
          <div>{description}</div>
       
          </div>
             <img className='w-32 rounded-xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId} />
        </div>
      )
    })}

   </div>
    
   )
}
   )}
      </div>


    </div>}
    </div>
   
  )
}

export default RestaurantMenu
