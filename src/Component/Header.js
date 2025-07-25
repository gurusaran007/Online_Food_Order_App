  import { LOGO_URL,CART_URL } from "../utils/constant"

  import { useState,useEffect, useContext} from "react"
  import {Link} from "react-router-dom"
  import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext"
import { useSelector } from "react-redux"

  
  
  
  // create Header Component 
  
 const Header = () => {

   const [btnReact, setBtnreact] = useState("Login")
   const onlineStatus = useOnlineStatus();
   const {loggedUser} = useContext(userContext)

   const item = useSelector((store) => store.cart.items)
   
      useEffect( () => {
        
      },[btnReact])

   

      return (
          <div className="flex justify-between my-4 bg-slate-300 shadow-md px-4 py-4">
              <div >  
                   <img 
                   className="w-24" 
                   src= {LOGO_URL}
                   />
                </div>

                <div className="mt-5">
                    <ul className="flex ">   
                        <li className="px-4 py-2"><b>Online Status</b>: {(onlineStatus)?'✅':'🔴'}</li>
                        <li className="px-4 py-2"><b><Link to="/home">Home</Link></b></li>
                        <li className="px-4 py-2"><b><Link to="/about">About Us</Link></b></li>
                        <li className="px-4 py-2"><b><Link to="/contact">Contact Us</Link></b></li>
                          <li className="px-4 py-2"><b> Username: {loggedUser}</b></li>
                        <li>
                            <button  className = "bg-green-400  px-4 py-2  rounded-md " onClick = {() => {
                               (btnReact === "Login" ?  setBtnreact("LogOut") :  setBtnreact("Login"))
                            }}>{btnReact}</button>
                        </li>
                        <li className="px-4 py-2"><b><Link to="/demo">Demo</Link></b></li>
                        <li className="px-4 py-2"  data-testid="cart-items"><b><Link to="/cart">Cart: {item.length} items</Link></b></li>
                    </ul>
                   
                </div>
          </div>
      )
   }

   export default Header