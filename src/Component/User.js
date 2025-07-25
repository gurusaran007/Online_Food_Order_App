import { useState } from "react";

 const User = (Props) => {

    const {name,location} = Props;
    const[count] = useState(0);
    const[count1] = useState(1);
    return (
        <>
         <div className="container_user">
            <h4>Count:{count}</h4>
            <h4>Count1:{count1}</h4>
            <h4>Name:{name}</h4>
            <h4>Location:{location}</h4>
            <h4>Contact:{"GuruCharan (Insta_Id)"}</h4>
            </div>
        </>
    )
 }

 export default User