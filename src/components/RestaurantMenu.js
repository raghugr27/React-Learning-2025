import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import ShimmerUi from './ShimmerUi';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {
    const {resId}=useParams();
const {info:resInfo,recommended}=useRestaurantMenu(resId);
let {name,cuisines,
costForTwoMessage}=resInfo || {};
  return (
  resInfo===null?<ShimmerUi />:
     <div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(",")} - {costForTwoMessage} </h2>
      <h3>Menu</h3>
      <ol>
        {recommended?.map((item)=>{

    let {id,name,defaultPrice,price}=item || {};
  
    return( <li key={id}>{name} - Rs.{price/100 || defaultPrice/100}</li>)
}
   )}
      </ol>


    </div>
   
  )
}

export default RestaurantMenu
