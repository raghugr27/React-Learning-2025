import React from 'react'
import { CARD_LOGO_URL } from '../utils/constants';
const RestaurantMenuItem = ({menuItem,addFoodItem}) => {

    let {id:itemId,name,defaultPrice,price,description,imageId}=menuItem || {};
      return(
        <div className='flex justify-between  p-2  border-b border-gray-200 mb-3' key={itemId}>
          <div className=''>
          <div className='font-bold text-sm'  >{name}</div>  
          <div>₹{price/100 || defaultPrice/100}</div>
          <div>{description}</div>
       
          </div>
             <img className='w-32 rounded-xl cursor-pointer' src={CARD_LOGO_URL+imageId}  
             onClick={()=>{addFoodItem(menuItem)}}/>
        </div>
      )
 
}

export default RestaurantMenuItem;
