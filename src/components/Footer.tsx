import React, { useContext } from "react"
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";



let Footer = () => {
        let { balloons, setBalloons } = useContext(BalloonContext);
        let handleClick = async (color: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.preventDefault();

                let updatBalloons = balloons.map((balloons: IBalloon,index:number) => {
                        if (balloons.color !== color) {
                                return balloons
                        }else if(index >= 3 && balloons.count >= 10){
                                return {...balloons,count:balloons.count = 9}
                        } else {
                                return {
                                        ...balloons, count: balloons.count + 1
                                }
                        }
                }).sort((el1: any, el2: any) => {

                        return (el1.count < el2.count) ? 1 : (el1.count > el2.count) ? -1 : 0;
                
                });

                setBalloons(updatBalloons);
        
        }

        return (
                <>

                        <div className="footer">
                                <div className="btn-flex">
                                        <div className="btn-red" onClick={(e) => handleClick("red", e)}>
                                                <h5>Pick Red</h5>

                                        </div>
                                        <div className="btn-yellow" onClick={(e) => handleClick("yellow", e)}>
                                                <h5>Pick Yellow</h5>

                                        </div>
                                        <div className="btn-green" onClick={(e) => handleClick("green", e)}>
                                                <h5>Pick Green</h5>

                                        </div>
                                        <div className="btn-blue" onClick={(e) => handleClick("blue", e)}>
                                                <h5>Pick Blue</h5>

                                        </div>
                                        <div className="btn-pink" onClick={(e) => handleClick("pink", e)}>
                                                <h5>Pick Pink</h5>
                                        </div>
                                </div>
                        </div>
                </>)
}


export default Footer;