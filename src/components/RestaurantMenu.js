import React,{useState} from 'react'
import { useParams } from 'react-router';
import ShimmerUi from './ShimmerUi';
import RestaurantMenuItem from './RestaurantMenuItem';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { CARD_LOGO_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
const RestaurantMenu = () => {
  const dispatch=useDispatch();

  const [showIndex,setShowIndex]=useState(null);
    const {resId}=useParams();
const {info:resInfo,categorizedData}=useRestaurantMenu(resId);
let {name,cuisines,
costForTwoMessage}=resInfo || {};
const addFoodItem=(item)=>{
  dispatch(addItem(item));
}
  return (
    <div className='p-4'>{
  resInfo===null?<ShimmerUi />:
     <div className='w-1/2 m-auto  p-4 shadow-lg shadow-gray-800'>
      <h1 className='text-center font-bold text-2xl'>{name}</h1>
      <h2 className='text-center font-bold text-2xl'>{cuisines?.join(",")} - {costForTwoMessage} </h2>
    
      <div>
        {categorizedData?.map((item)=>{

    let {categoryId:id,title,itemCards=[]}=item || {}; 

    return( 
   <div key={id}>
 <div className='flex justify-between p-2 rounded- border cursor-pointer border-gray-200 shadow-xl shadow-gray-400 mb-5 '  onClick={()=>{setShowIndex((prevId)=> prevId===id ? null : id)}}>
       <div className='font-bold text-xl w-full'>{title} ({itemCards?.length})</div>
       ⬇️
    </div>
    {showIndex===id && itemCards?.map(item=><RestaurantMenuItem key ={item?.card?.info?.id} menuItem={item?.card?.info} addFoodItem={addFoodItem}/>)}

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
