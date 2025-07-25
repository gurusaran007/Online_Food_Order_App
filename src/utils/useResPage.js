import { useEffect, useState } from "react"

 
 
 const useResPage = (resId) => {

    const [resData,setResData] = useState([])

    useEffect(()=>{
      fetchData();
    },[])

   
 

 const fetchData = async() => {
       const data =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.9973691&lng=76.9588876&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)

        const dJ = await data.json()
        console.log(dJ)
       setResData(dJ?.data?.cards)
        
   }


    return resData
}

  export default useResPage