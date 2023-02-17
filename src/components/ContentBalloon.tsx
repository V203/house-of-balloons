import React, { useContext } from "react";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext,  } from "../context/Ballooncontext";

import IBalloon from "../IBalloon";

let 
ContentBalloon = (props: any) => {
    
    let { Popular, Trending,UpcomingBalloons} = useContext<any>(BalloonContext);
    //  getBalloons().map(((el:IBalloon)=> console.log(el.color)) );
    // console.log(Popular, Trending, UpcomingBalloons);
    
    
    
    switch (props.title) {
        case "Upcoming Colors":
            return <>
                <div className="main-content">
                    <h1 id="ContentTypography">
                        {props.title}
                    </h1>                   
                    <UpcomingBalloons />
                </div>
            </>

        case "Trending Colors":
            return <>
                <div className="main-content">
                    <h1 id="ContentTypography">
                        {props.title}
                    </h1>                                       
                        <Trending />        
                </div>
            </>

        case "Popular Colors":
            return <div className="main-content">
                <h1 id="ContentTypography">
                    {props.title}
                </h1>
                < Popular />
            </div>


        default:
            return <></>
    }

}


export default ContentBalloon;