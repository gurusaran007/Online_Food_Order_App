 
 import React from 'react'
 
 
 class UserClass extends React.Component{

    constructor(props){
         super(props)
         this.state={
          
         }

         console.log("Child Constructor")
         this.intervalId = null;
    }
   render(){

    console.log("Child  Render Component")
   const {name,location} = this.props
   
    return (
        <>
        <div className="container_user">

            <h4>Name:{this.state.name}</h4>
            <h4>Location:{this.state.location}</h4>
            <h4>Contact:{"Saran Saran(Insta_Id)"}</h4>
        </div>
        </>
    )

   
   }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/octocat")
        const json = await data.json();
        this.setState(json)


        this.intervalId =  setInterval(()=>{
           console.log("Guru how are you")
        },5000)
    }

   
 componentWillUnmount(){
        clearInterval(this.intervalId);
        console.log("Interval cleared")
    }


    componentDidUpdate(){
        console.log("Component Did update")
    }
   
 }

 export default UserClass