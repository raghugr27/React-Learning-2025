import React from 'react';
import { useNavigate } from 'react-router';
import { CARD_LOGO_URL } from '../utils/constants';
const RestaurantCard = ({restaurant}) => {
const navigate=useNavigate();
const pageNavigation =(id)=> navigate(`/restaurant/${id}`);
     let {name,cloudinaryImageId,cuisines,costForTwo,avgRating,id}=restaurant.info;

  return (
      <div className="res-card" key={id} onClick={()=>pageNavigation(id)}>
<img className="res-logo" alt="res-logo" src={CARD_LOGO_URL+cloudinaryImageId} />
<h2>{name}</h2>    
<h4 className='cuisines'>{cuisines.join(",")}</h4>
<h4>{costForTwo}</h4>
<h4>Rating {avgRating}</h4>
     </div>
  )
}

export default RestaurantCard
