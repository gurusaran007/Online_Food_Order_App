import {useRef, useState} from "react"

 const Demo3 = ()=>{

    
    const[countS,setCountS] = useState(0)
    let count = useRef(0)//this will return object with currentValue
    return (
        <div className="border border-black w-60 h-60 ml-3 text-center py-8 px-8 inline-block m-8">

            <h1 className="m-2">UseRef Example</h1>

            <h4 className="m-2">UseRef: {count.current}</h4>
            <h4 className="m-2">StateVariable: {countS}</h4>
            <button  className = "bg-green-400 rounded-lg p-2" onClick={()=>{
                count.current = count.current+1;
                console.log(count.current)
                
            }}>Click Me</button>


             <button  className = "bg-green-400 rounded-lg p-2 m-2" onClick={()=>{
                setCountS(countS+1)
               
                
            }}>Click Me S</button>


        </div>
    )
 }

 export default Demo3