import React, { useCallback, useContext, useState } from "react";
import { updateReturn } from "typescript";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";
import WinningBalloon from "./WinnerBalloon";
import performance from "perf_hooks";


let Main = () => {
    let start = Date.now()
    let [displayState, setDisplayState] = useState(false);
    let { balloons } = useContext<any>(BalloonContext);

    let trendingBalloons: Array<any> = balloons
        .filter((el: IBalloon) => el.count >= 11)
        .map((el: IBalloon) => !el["time"] ? el["time"] = start : el);


    let getLongestTrending = (trendBalloons: Array<IBalloon>) => {
        // let trend = trendBalloons.filter((x:IBalloon)=> x.time < z.time);
        if (trendBalloons) {
            return trendBalloons.find((el) => el.time === Math.min(...trendBalloons.map((el) => el.time)));

        }
    }

    let closeWinner = () => { setDisplayState(false) }



    let getLatestTrending = (trendBalloons: Array<IBalloon>) => {
        if (trendBalloons) {
            return trendBalloons.find((el) => el.time === Math.max(...trendBalloons.map((el) => el.time)));

        }

    }

    if (trendingBalloons.length !== 0) {
        setTimeout(() => setDisplayState(true), 7000)
    }


    ;

    return (
        <>
            <div className="main-flex">


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
                    {
                        !displayState ?
                            balloons.filter((el: IBalloon) => el.count >= 11)
                                .map((el: IBalloon) => <BalloonImages
                                    key={el.color}
                                    subsurface={el.subsurface}
                                    count={el.count}
                                    basecolor={el.basecolor}
                                />).slice(0, 3) : balloons
                                    .map((el: IBalloon) => el.time !== getLongestTrending(trendingBalloons)?.time && el.count > 11? el.count = 9 : <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)

                    }
                </div>

                <div className="main-content">
                    <h1 id="ContentTypography">
                        Upcoming colors
                    </h1>
                    {balloons.filter((el: IBalloon) => el.count >= 1 && el.count <= 4).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}

                </div>
                {getLongestTrending(trendingBalloons) !== undefined ? <WinningBalloon onClick={closeWinner} key={getLongestTrending(trendingBalloons)?.color} color={getLongestTrending(trendingBalloons)?.color} count={getLongestTrending(trendingBalloons)?.count} displayBool={displayState} basecolor={getLongestTrending(trendingBalloons)?.basecolor} subsurface={getLongestTrending(trendingBalloons)?.subsurface} /> : ""}
            </div>
        </>)
}

export default Main;
