import { useRouteError } from "react-router" 
 
 
 const Error = () => {

    const err = useRouteError();
    console.log(err);
    return (
        <>
         <h1>{err.status} {err.statusText}</h1>
        
        </>
    )
 }

 export default Error