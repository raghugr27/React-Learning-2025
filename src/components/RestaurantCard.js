import React from 'react';
import { useNavigate } from 'react-router';
import { CARD_LOGO_URL } from '../utils/constants';
const RestaurantCard = ({restaurant}) => {
const navigate=useNavigate();
const pageNavigation =(id)=> navigate(`/restaurant/${id}`);
     let {name,cloudinaryImageId,cuisines,costForTwo,avgRating,id}=restaurant.info;

  return (
      <div className="w-70 p-4 border  border-gray-200 rounded-xl hover:shadow-2xl hover:shadow-gray-800" key={id} onClick={()=>pageNavigation(id)}>
<img className="w-full h-52" alt="res-logo" src={CARD_LOGO_URL+cloudinaryImageId} />
<h2 className='font-bold '>{name}</h2>    
<h4 className='text-sm font-semibold break-words' >{cuisines.join(",")}</h4>
<h4 className='text-sm font-semibold'>{costForTwo}</h4>
<h4 className='text-sm font-semibold'>Rating {avgRating}</h4>
     </div>
  )
}

export default RestaurantCard
