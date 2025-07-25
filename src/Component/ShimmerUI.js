 const ShimmerUI = ( ) => {
    return (
        <>

       <div className="bg-slate-100">
           {Array(14).fill("").map((_, i) => (
        <div
          key={i}
          className="bg-slate-200 h-60 rounded-lg animate-pulse shadow m-4 w-40 inline-block" 
        ></div>
      ))}
       </div>
        </>
    )
 }

 export default ShimmerUI;