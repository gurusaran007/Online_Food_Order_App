 import User from "./User"
 import UserClass from "./UserClass"
 import { Component } from "react"
 
 
//  class About extends Component{
//     constructor(){

        
//        super()
//        console.log("parent class constructor ")
//       }
      
//     render(){
//         console.log("parent class Render")
//         return (
//         <>
//         <h1>User Details</h1>
//         {/* <User  name = {"Gurusaran (function)"} location = {"karur,Tamilnadu"}/> */}

//          <UserClass name = {"First Child"} location = {"FiveRoad,Tamilnadu"}/>
//          {/* <UserClass name = {"Second Child"} location = {"FiveRoad,Tamilnadu"}/>
//           <UserClass name = {"Third Child"} location = {"FiveRoad,Tamilnadu"}/> */}
//         </>
//     )
//     }

    
//  }
 
 
 
 
 
 const About = () => {
  
    
    return (
        <>
        <h1>User Details</h1>
        <User  name = {"Gurusaran (function)"} location = {"karur,Tamilnadu"}/>

         <UserClass name = {"Saranya (class)"} location = {"FiveRoad,Tamilnadu"}/>
        </>
    )
 }

 export default About