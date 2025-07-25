import { useState } from "react";
import Item_List from "./Item_List";

const Restaurantcategory = (props) => {
 
    const {items,showItem,setShowIndex} = props;
   
    
       const categories = items?.card?.card?.itemCards;
    //    console.log(categories)
   const handleOnClick = () => {
    return setShowIndex()
   }


    return (
        <>
          <div>
             <div className="p-4  w-11/12 m-auto ">

                <div className="p-4 m-auto">
                   
                   <div className=" w-11/12 ml-44">

                   <div className="flex justify-between w-9/12  cursor-pointer shadow-lg"  onClick={handleOnClick}>
                           <span className=" font-bold font-serif p-4" >{items?.card?.card?.title  } ({items?.card.card.itemCards?.length})</span> 
                            <span className="p-4 pr-24">⬇️</span>
                   </div>
                      

                       <div>

                        

                          {categories.map((c, index) => {
                            
                               
                              return  (showItem) && <Item_List itemDetails = {c?.card?.info} key={index}/>
                               
                               
                            
                             })}

                         </div>
                   

                    </div>


                        
                   

             </div>
                
              
             </div>

            
            </div>
        </>
    )
}

export default Restaurantcategory