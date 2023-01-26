import React, { useCallback, useContext, useState } from "react";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";
import ContentBalloon from "./ContentBalloon";
import WinningBalloon from "./WinnerBalloon";

let Main = () => {
    let start = Date.now()
    let [displayState, setDisplayState] = useState(false);
    let { balloons, setBalloons } = useContext<any>(BalloonContext);
    let [isTrending, setTrend] = useState(true);
    let [openClose,setopenClose] = useState(false);


    let trendingBalloons: Array<any> = balloons
        .filter((el: IBalloon) => el.count >= 11)
        .map((el: IBalloon) => !el["time"] ? el["time"] = start : el).sort((el1: any, el2: any) => {
            return (el1.time < el2.time) ? 1 : (el1.time > el2.time) ? -1 : 0;    
    } );


    let getLongestTrending = (trendBalloons: Array<IBalloon>) => {

        if (trendBalloons) {
            return trendBalloons.find((el) => el.time === Math.min(...trendBalloons.map((el) => el.time)));
        }
    }
    
    let getLatestTrending = (trendBalloons: Array<IBalloon>) => {
        if (trendBalloons) {
            return trendBalloons.find((el) => el.time === Math.max(...trendBalloons.map((el) => el.time)));
        }
    }
    
    if (trendingBalloons.length !== 0) {
        setTimeout(() => setDisplayState(!displayState), 50000);        
        setTimeout(() => trendingBalloons ? trendingBalloons.map((el:IBalloon) => {(el.time === getLongestTrending(trendingBalloons)?.time ? el.count=9 :null )}  ) :null, 100000);
    }

    let closeWinner = () => setDisplayState(false);

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
