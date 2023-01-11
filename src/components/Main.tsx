import React, { useContext, useEffect, useState } from "react";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";
import WinningBalloon from "./WinnerBalloon";
let Main = () => {
    let [displayState,setDisplayState] = useState(false);

    let { balloons } = useContext<any>(BalloonContext);


    let output:any = balloons.filter((el: IBalloon) => el.count >= 11).map((el: IBalloon) => el).sort((el1: any, el2: any) => {

        return (el1.count < el2.count) ? 1 : (el1.count > el2.count) ? -1 : 0;

});

if(output.length !== 0 ){
    setTimeout(()=> setDisplayState(!displayState),7000)
}
    return (
        <>
            <div className="main-flex">

       {output.length !==0 ? <WinningBalloon key={output[0].color} color={output[0].color} count={output[0].count} displayBool={displayState} basecolor={output[0].basecolor} subsurface={output[0].subsurface} />:"" }
                <div className="main-content">
                    <h1 id="ContentTypography">
                        Popular Colors
                    </h1>
                    {balloons.filter((el: IBalloon) => el.count >= 5 && el.count < 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}

                </div>

                <div className="main-content">
                    <h1 id="ContentTypography">
                        The Trending Color
                    </h1>
                    {balloons.filter((el: IBalloon) => el.count >= 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />).slice(0, 3)}
                </div>

                <div className="main-content">
                    <h1 id="ContentTypography">
                        Upcoming colors
                    </h1>
                    {balloons.filter((el: IBalloon) => el.count >= 1 && el.count <= 4).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}

                </div>
                
            </div>
        </>)
}

export default Main;
