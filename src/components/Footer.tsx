import React, { useContext } from "react"
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";



let Footer = () => {
        let getLongestTrending = (trendBalloons: Array<IBalloon>) => {

                if (trendBalloons) {
                    return trendBalloons.find((el) => el.time === Math.min(...trendBalloons.map((el) => el.time)));
                }
            }

            
        let { balloons, setBalloons } = useContext<any>(BalloonContext);
        let handleClick = async (color: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.preventDefault();



                let updateBalloons = balloons.map((balloons: IBalloon, index: number,arr:Array<IBalloon>) => {
                        
                        if (balloons.color !== color) {
                                return balloons
                        } 
                        else if (index >= 3 && balloons.count >= 10) {                                                        
                                arr[0].count = 9                            
                                return {...balloons,count:balloons.count + 1}
                        } else {
                                
                                return {
                                        ...balloons, count: balloons.count + 1
                                }
                        }
                }).sort((el1: any, el2: any) => {
                        return (el1.count < el2.count) ? 1 : (el1.count > el2.count) ? -1 : 0;
                });


                setBalloons(updateBalloons);
                localStorage.setItem("balloons",JSON.stringify(balloons));
                let savedBalloons:any = localStorage.getItem("balloons")
                console.log(JSON.parse(savedBalloons));
                

        }

        return (
                <>

                        <div className="footer">
                                <div className="btn-flex">
                                        <div className="btn-red btn" onClick={(e) => handleClick("red", e)}>
                                                <h5>Select Red</h5>

                                        </div>
                                        <div className="btn-yellow btn" onClick={(e) => handleClick("yellow", e)}>
                                                <h5>Select Yellow</h5>

                                        </div>
                                        <div className="btn-green btn" onClick={(e) => handleClick("green", e)}>
                                                <h5>Select Green</h5>

                                        </div>
                                        <div className="btn-blue btn" onClick={(e) => handleClick("blue", e)}>
                                                <h5>Select Blue</h5>

                                        </div>
                                        <div className="btn-pink btn" onClick={(e) => handleClick("pink", e)}>
                                                <h5>Select Pink</h5>
                                        </div>
                                </div>
                        </div>
                </>)
}


export default Footer;