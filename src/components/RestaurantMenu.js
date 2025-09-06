import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import ShimmerUi from './ShimmerUi';
import { FETCH_RESTAURANTS_MENU_URL } from '../utils/constants';
const RestaurantMenu = () => {
    const {resId}=useParams();
    const [restaurantInfo,setRestaurantInfo]=useState(null);

    const fetchMenu=async()=>{
        const data=await fetch(FETCH_RESTAURANTS_MENU_URL+resId);
        let json=await data.json();
      json= json?.data?.cards?.filter((card)=> card?.['card']?.['card']?.['info'] || card?.['groupedCard']?.['cardGroupMap']?.REGULAR?.cards);

      setRestaurantInfo([json[0]?.card?.card?.info || {},...json?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.
        cards?.filter(card=> card?.['card']?.['card']?.['title']==="Recommended")?.map(card=>card['card']['card']['itemCards'])||[]] );
    }

    useEffect(()=>{
        fetchMenu();
    },[])


let {name,cuisines,
costForTwoMessage}=restaurantInfo?.[0] || {};
  return (
   restaurantInfo===null?<ShimmerUi />:
     <div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(",")} - {costForTwoMessage} </h2>
      <h3>Menu</h3>
      <ol>
        {restaurantInfo?.[1]?.map((item)=>{

    let {id,name,defaultPrice,price}=item?.card?.info || {};
    return( <li key={id}>{name} - Rs.{price/100 || defaultPrice/100}</li>)
}
   )}
      </ol>


    </div>
   
  )
}

export default RestaurantMenu
