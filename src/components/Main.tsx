import React from "react";



import ContentBalloon from "./ContentBalloon";


let Main = () => {
  
    return (
               <>
               <div className="main-flex">
               <ContentBalloon title={"Popular Colors"} />
               <ContentBalloon title={"Trending Colors"} />
               <ContentBalloon title={"Upcoming Colors"} />
               </div>
               </> 
      
        )
}

export default Main;
