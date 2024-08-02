import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body = () => {
  //Local State variable - Super powerful variable
  const arr = useState(resList);
  const [listOfRestaurants, setListOfRestaurant] = arr;
  const [filteredRestaurant, setFilteredRestaurant] = arr;
  // const [anotherRestaurant, setAnotherRestaurant] = arr;
  const [searchText, setSearchText] = useState("");

  //whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered");

  // useEffect(arrow function, dependency array)
  // useEffect(()=> {
  //   fetchData();
  // }, []);

  // const fetchData = async() =>{
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurant(json.data.cards);
  // };

  //If Body is empty then it will show on ui.
  //conditional rendering
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  // Normal JS Variable
  // let listOfRestaurants = [
  //   {
  //     "info": {
  //       "id": "728301",
  //       "name": "Burger King",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_728301.JPG",
  //       "locality": "New Palasia",
  //       "areaName": "Indore",
  //       "costForTwo": "₹350 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American"
  //       ],
  //       "avgRating": 4.2,
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     },
  //   },
  //   {
  //     "info": {
  //       "id": "728302",
  //       "name": "Dominos",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_728301.JPG",
  //       "locality": "New Palasia",
  //       "areaName": "Indore",
  //       "costForTwo": "₹450 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "American"
  //       ],
  //       "avgRating": 3.8,
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     },
  //   },
  // ];
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI
              //SearchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((resList) =>
                resList.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here

            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(listOfRestaurants);
            setListOfRestaurant(filteredList);
          }}
        >
          Top-rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* RestaurantCard */}
        {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/> */}
        {/* <RestaurantCard resName="Burger King" rate="5.6"/>
                <RestaurantCard resName="Apna Dhaba" rate="4.8"/>
                <RestaurantCard resName="Singh Dhaba"/>
                <RestaurantCard resName="Pandit ji ki thali"/>
                <RestaurantCard/>
                <RestaurantCard/> */}
      </div>
    </div>
  );
};
export default Body;
