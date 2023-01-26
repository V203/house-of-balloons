import React, { useContext } from "react";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";

let ContentBalloon = (props: any) => {
    let start = Date.now()
    let { balloons, setBalloons } = useContext<any>(BalloonContext);
    let trendingBalloons: Array<any> = balloons
        .filter((el: IBalloon) => el.count >= 11)
        .map((el: IBalloon) => !el["time"] ? el["time"] = start : el).sort((el1: any, el2: any) => {
            return (el1.time < el2.time) ? 1 : (el1.time > el2.time) ? -1 : 0;
        });

    switch (props.title) {
        case "Upcoming Colors":
            return <>
                <div className="main-content">
                    <h1 id="ContentTypography">
                        {props.title}
                    </h1>
                    {balloons.filter((el: IBalloon) => el.count >= 1 && el.count <= 4).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}

                </div>
            </>

        case "Trending Colors":
            return <>
                <div className="main-content">
                    <h1 id="ContentTypography">
                        {props.title}
                    </h1>
                    {
                        trendingBalloons.map((el: IBalloon) => {
                            return <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />
                        })
                    }
                </div>
            </>

        case "Popular Colors":
            return <div className="main-content">
                <h1 id="ContentTypography">
                    {props.title}
                </h1>
                {balloons.filter((el: IBalloon) => el.count >= 5 && el.count < 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}
            </div>


        default:
            return <></>
    }

}


export default ContentBalloon;