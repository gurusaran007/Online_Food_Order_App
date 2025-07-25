 
 import Restaurant_cards,{withUpdatedRestaurantCard} from "./Restaurant_cards"
 import { useState,useEffect, useContext } from "react";
 import ShimmerUI from "./ShimmerUI";
  import { Link } from "react-router-dom"
 import arr from "../utils/mockAPI"
 import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

export  const Restaurant_updated = withUpdatedRestaurantCard(Restaurant_cards)
 
 
 // create Body Component 
    const Body = () => {

         const [ListOfRestaurants, setListOfRestaurants] = useState( "");
         const[filteredrestaurant,setFilteredrestaurant] = useState("")
         const[searchtext,setSearchText] = useState("");
         const onlineStatus = useOnlineStatus();
         const {loggedUser,setUserName} = useContext(userContext)
        

         useEffect ( () => {
            fetchData();
         }, [])
       

       const  fetchData = async () => {


          const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9973691&lng=76.9588876&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
          
          const json = await data.json();
         
                   
         setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

         
       }

         
       if(!onlineStatus ){
          return <h3>Look like you are offline!!!!.. Please check your internet</h3>
       }

       
       
      // console.log(ListOfRestaurants)

       return  ListOfRestaurants?.length === 0 ? <ShimmerUI /> : (
         <>
         
         {/* //Search bar Creation */}
         <div className="flex"> 

            <div className="px-2 py-2" >
              <input type = "text" className = "border border-black" value={searchtext}  data-testid = "input_box" onChange={
               (e) => {
                  setSearchText(e.target.value);
               }
              } />

            </div>

           {/* Search Button logic */}

            <div className="px-8" >
               <button className="bg-slate-300 px-4 py-2 rounded-md"  onClick={
                  ( ) => {
                     //filter the  restro cards based on searchText
                       
                    const filterRes =  ListOfRestaurants.filter( (res) => {
                    
                       return res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                     })

                      setFilteredrestaurant(filterRes);
                  }
                 
               }> Search </button>
            </div>

   

          {/* Filtered Logic  */}

           <div className="px-4 " >
            
              <button className=" bg-slate-300 px-4 py-2 rounded-md"   onClick={()=> {
               //filter the array based on rating

              const filterData =    ListOfRestaurants.filter( (data) => {
                 return  data.info.avgRating > 4
                 })

                  setFilteredrestaurant(filterData)

               //   console.log(filterData)
                 
           }}>
            
             Tap to Filter the Restaurant</button>


           
           </div>

             <input  className="p-2  mx-1 text-center border-2 border-black"
             
             value = {loggedUser}
             onChange={(e)=>{
               setUserName(e.target.value)
               
             }}>
            
             </input>


         
          </div>   

          {/* Passing filtered data or normal data to create Restaurant cards  */}
 
          <div className="m-4 flex flex-wrap" >
           {
            
            //pass the filtered data to restaurant cards to create restaurant cards 
              filteredrestaurant.map( (resCards,index) => <Link  key ={index}to={`/rest/${resCards.info.id}`}>{resCards.info.avgRating >= 4.5 ? <Restaurant_updated  Item = {resCards}  key={index} /> : <Restaurant_cards Item = {resCards}  key={index} />} </Link> )   
           }  

         </div>
         </>
          
       )
    }
 
    export default Body