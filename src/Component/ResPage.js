
import ShimmerUI from "./ShimmerUI"

import { useParams } from "react-router";
import useResPage from "../utils/useResPage"
import { useState } from "react";
import Restaurantcategory from "./Restaurantcategory.js";


 const ResPage = () => {

    const {resId} = useParams();
     
    const [showItem,setShowItem] = useState(false)

    const[showIndex,setShowIndex] = useState(null)

   //using custom hook get the data 
    const resData = useResPage(resId)
    
    console.log()
    //  console.log(resData[0].card.card.text)
    if(resData.length === 0){
      
       return <ShimmerUI/>
    }

       console.log(resData)

       const resD = resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

      //  console.log(resD)
   
  
    return (
                
      <>

         <div className="font-bold text-center text-xl font-serif pr-40">
              {resData[0]?.card?.card?.text}
         </div>
        <div>
          {
            resD.map((res,index) => {
             return (res?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ?
                <Restaurantcategory 
                items = {res} 
                key={index}  
               
                showItem ={index === showIndex && true} 
                setShowIndex={()=>{
                  setShowIndex(index)
                }
                }>

                </Restaurantcategory> : 
                <h1 key={index}></h1>
           })
          } 
        </div>
        
      </>
         
        
    )
 }

 export default ResPage