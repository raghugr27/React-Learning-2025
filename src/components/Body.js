import React,{useState} from 'react';
import RestaurantCard from './RestaurantCard';
import ShimmerUi from './ShimmerUi';

import useRestaurantsData from '../utils/useRestaurantsData';
const Body =()=>{

const[filteredRestaurants,setFilteredRestaurants]=useState([]);
const [searchText,setSearchText]=useState("");
const restaurants=useRestaurantsData(setFilteredRestaurants);


const filterTopRatedRestaurant=()=>{
  let filteredList=restaurants.filter((res)=>res.info.avgRating>4.5);
  setFilteredRestaurants(filteredList);}

const searchData=(e)=>{      

let searchResults=restaurants.filter((res)=>res.info.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
setFilteredRestaurants(searchResults);


}
  return(
 <div className='body'>
<div className='filter-section'>
  <button className='filter-btn' onClick={filterTopRatedRestaurant}>Top Rated Restaurants</button>
<input type="text" className='search-input' placeholder='Search' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
<button className='search-btn' onClick={searchData}>Search</button>
</div>
       
{restaurants.length===0?<ShimmerUi />:
<div className="res-container">
    {filteredRestaurants.map((restaurant)=><RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>)}

    </div>}
 </div>
  )


}

export default Body
