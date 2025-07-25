 
 import React, { Suspense ,useContext,useState} from "react"
 import ReactDom from "react-dom/client"
 import Header  from "./Component/Header"
 import Body from "./Component/Body"
 import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom" 
 import Contact from "./Component/Contact"
 import Error from "./Component/Error"
 import ResPage from "./Component/ResPage"
 import { lazy } from "react"
 import userContext from "./utils/userContext"
 import Demo1 from "./Component/Demo1"
 import Demo2 from "./Component/Demo2"
 import { ReactMemo } from "./Component/ReactMemo"
 import Demo3 from "./Component/Demo3"
 import Cart from "./Component/cart"
import ShimmerUI from "./Component/ShimmerUI"
import { Provider } from "react-redux"
import store from "./utils/store"

 
 
// Create App Component 

const About =  lazy(()=>{
     return  import("./Component/About")
   })
   


   const App = () => {

      const [userName,setUserName] = useState("Guru")
      
       
      return (

         <Provider store={store}>

            <userContext.Provider value={{loggedUser:userName,setUserName}} >
       
                  <div > 
                     <Header/>
                     <Outlet/>
                  
                  </div>

                </userContext.Provider>
      

         </Provider>

      
         
            

        
           
        
          

      )
   }

   const AppRouter = createBrowserRouter([
      {
         path:"/",
         element: <App/>,
         errorElement: <Error/>,
         children:[
      {
         path:"/home",
         element: <Body/>
      },
      {
         path:"/about",
         element:(<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>)
      },
      {
         path:"/contact",
         element:<Contact/>
      },

       {
         path:"/demo",
         element:(
            <>
             <Demo1/>
              <Demo2/>
              <ReactMemo/>
              <Demo3/>
            </>
        
         )

         
        
         
      },
      {
         path:"/rest/:resId",
         element:<ResPage/>
      },

      {
         path:"/cart",
         element:<Cart/>
      }
      

         ]
      },
     
   ])

   const root = ReactDom.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router = {AppRouter}/>) 