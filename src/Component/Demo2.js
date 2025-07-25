 //using useMemo demo 

import { useState,useMemo, useCallback} from "react"

import findOdd from "../utils/findOdd"


 const Demo2 = ()=>{

    const[val,setval] = useState([])

  
    
    const isOddCall = useCallback(()=>findOdd(val),[val])//Memoize the heavy operation function definition
    const ans  = isOddCall()
       

    const [dark,setDark] = useState(false)
    return (
        <>
        <div className={`border border-black py-2 px-2 w-96 h-96 m-4  inline-block ${ (dark) && `bg-black text-white` }`} >
            
            <h1 className="text-center m-4">useCallBack Example</h1>

            <label><b>Enter the Number</b></label>

            <input  className="border border-black p-1 m-2 mt-8 ml-8" type="number" value={val} onChange={(e)=>{
                setval(e.target.value)
            }} />

       

            <h1 className="mt-8 ml-8">useMemo: {ans}</h1>

          

          
            <button  className = "bg-green-500 p-2 m-2 rounded-lg mt-6 ml-4" onClick={()=>{
               setDark(!dark)
               console.log("Hi")
            }}> Toggle </button>
          
        </div>



       
        </>
    )
 }

 export default Demo2