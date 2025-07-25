 import {STAR_URL, IMAGE_URL} from "../utils/constant.js" 
 
 
 
 const Restaurant_cards = ( props ) => {
     
         const {Item} = props;
         
        
          
     return (
         <div data-testid = "cards" className="m-4 w-64 bg-slate-400 rounded-xl shadow-md transform transition-transform duration-300 ease-in-out hover:scale-95 shadow-md hover:shadow-xl cursor-pointer">
 
              <img
              
             src={ IMAGE_URL + Item?.info?.cloudinaryImageId}
 
              className="w-[250px] h-52 rounded-md p-2"
 
               />
 
              <h1 className="font-bold mt-4 p-2">{Item.info.name}</h1>
 
              <h4>
                 <img src= {STAR_URL}  className="w-10 inline-block px-1 py-2"  /> 
                {Item.info.avgRating}    
                 
             </h4>
 
             <h4 className="font-serif p-2">
               <b>Cost:</b> {Item.info.costForTwo}
               </h4>
 
              <p className="w-64 break-words font-serif overflow-hidden p-2"><b>Cuisines: </b>{Item?.info?.cuisines?.join(",")}</p>
               
               <h4 className=" w-70 break-words font-serif p-2"><b>Location: </b> {Item?.info?.locality} . {Item?.info?.areaName}</h4>


               <p className="font-serif p-2"><b>Arriving in: </b> {Item?.info?.sla?.slaString}</p>
              
 
         </div>
 
     )
    }


    export const withUpdatedRestaurantCard = (Restaurant_cards)=>{
        return (Props)=>{
           return(
            <>
            <div className="absolute mx-20 mb-10">
                 <label className="bg-black text-white rounded-md p-2">Good Hotel</label>
                </div>
           
            <Restaurant_cards {...Props}/>
            </>
           )
        }
    }
 
export default Restaurant_cards