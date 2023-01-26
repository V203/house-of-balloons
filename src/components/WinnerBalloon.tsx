import IBalloon from "../IBalloon";
import BalloonImages from "../assets/BalloonImages";
import { useState } from "react";

let WinningBalloon = (props: any) => {
    
    return (
        <>
                <div className="winnerBalloon"  style={{ display: props.displayBool ? "flex" : "none" }} >
                    <h5>
                        {props.color.toUpperCase()} the longest trending color
                    </h5>
                    <div>
                        {props ? <BalloonImages key={props.color} subsurface={props.subsurface}  basecolor={props.basecolor} /> : ""}
                        <img width={150} height={100} src="./prize.svg" />

                    </div>
                </div>            
        </>)
}

export default WinningBalloon;