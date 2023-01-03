import React, { useContext } from "react"
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";



let Footer = () => {
        let { balloons, setBalloons } = useContext<Array<IBalloon>>(BalloonContext);
        let handleClick = async (color: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            color
            let updatBalloons = balloons.map((balloons:IBalloon) => {
                if (balloons.color !== color) {
                    return balloons
                } else {
                    return {
                        ...balloons, count: balloons.count + 1
                    }
                }
            })
    
    
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