import React, { useContext } from "react"
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";
import { supabase } from "../supabaseClient";



let Footer = () => {
        // let getLongestTrending = (trendBalloons: Array<IBalloon>) => {

        //         if (trendBalloons) {
        //                 return trendBalloons.find((el) => el.time === Math.min(...trendBalloons.map((el) => el.time)));
        //         }
        // }


        let { balloons, setBalloons, retrieveBalloons,Trending } = useContext<any>(BalloonContext);

        let handleClick = async (color: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.preventDefault();

                
                if( Trending.length > 3 || Trending){
                        
                        const { error } = await supabase.rpc('update_balloon_v2', { color_param: color });
                        const { data } = await supabase.rpc('all_balloons');
                        error ? console.log(error ): null;
                        
                        setBalloons(data);
                }else{
                        console.log(balloons);
                        
                }


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