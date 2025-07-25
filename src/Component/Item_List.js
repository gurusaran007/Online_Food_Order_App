 
 import { useContext, useState } from "react"
import  {IMAGE_URL} from "../utils/constant"
import userContext from "../utils/userContext"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

 const Item_List = ({itemDetails}) => {

    const {loggedUser} = useContext(userContext)

    const dispatch = useDispatch()

    const handleOnclick = (itemDetails) => {
      dispatch (addItem(itemDetails))
    }
    return (
        <>

        <div className="border-b border-b-gray-300  p-4 flex items-start  w-9/12" data-testid="groupItems">


            <div className="w-8/12 pr-4">

                <span className="font-bold text-base mb-2"> {itemDetails?.name}</span>

                <span className=" font-bold text-sm  block mb-2" >₹{(itemDetails?.price)? (itemDetails?.price/100 ):(itemDetails?.finalPrice)? (itemDetails?.finalPrice/100): (itemDetails?.defaultPrice/100)}</span>
                
                <p className="text-sm text-gray-600 leading-relaxed">{itemDetails.description}</p>

            </div>

           <div className="w-4/12 flex  justify-end relative">
             <img src={IMAGE_URL + itemDetails?.imageId } className=" w-28 h-28 object-cover rounded-xl" ></img>  
              <button  className="absolute  transform -translate-x-1/2 translate-y-1/2 
                 bg-black text-white text-sm font-semibold px-4 py-1 
                 shadow-md rounded-md"    onClick={()=>handleOnclick(itemDetails)}> ADD</button>
        </div>
            

        </div>
        </>
    )
 }

 export default Item_List
 