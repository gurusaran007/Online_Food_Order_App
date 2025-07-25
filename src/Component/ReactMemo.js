import React,{ useState } from "react"

export const ReactMemo = () => {

    const [isShow,setShow] = useState(false);
    return (
        <>
        <div className="border border-black w-60 h-60 ml-3 text-center py-8 px-8">
            <h1>{isShow}</h1>
            <button className="bg-green-400 rounded-lg p-2" onClick={()=>{
                setShow(!isShow);
                
            }}>Click Me</button>
            <Child1 name={"Guru"}></Child1>
           <Child2 name={"Saran"}/>
        </div>
        </>
    )
}


export const Child1 = React.memo((props)=>{
    return(
        <>
        <div>
            <h1>{props.name}</h1>
        </div>
        </>
    )
}
)

export const Child2 = React.memo((props)=>{
    return(
        <>
        <div>
            <h1>{props.name}</h1>
        </div>
        </>
    )
}) 