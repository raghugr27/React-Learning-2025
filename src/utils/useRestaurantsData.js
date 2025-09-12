import { useEffect,useState } from "react";
import { FETCH_RESTAURANTS_URL } from "./constants";
const useRestaurantsData = () => {
const[restaurants,setRestaurants]=useState([]);

    const fetchData=async()=>{
      const data=await fetch(FETCH_RESTAURANTS_URL);
      let  json=await data.json();       
    json = json?.data?.cards?.filter((data)=> data?.card?.card?.header?.title==="Top restaurant chains in Bangalore")?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
    
    setRestaurants(json);
  
    };
    
    useEffect(()=>{
      fetchData();
    },[]);

    return restaurants;
}


export default useRestaurantsData;