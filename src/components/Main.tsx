import React, { useState } from "react";
import ContentBalloon from "./ContentBalloon";

import Reset from "../components/Reset";
import { BalloonContext } from "../context/Ballooncontext";
import WinningBalloon from "./WinnerBalloon";

import { supabase } from "../supabaseClient";
import IBalloon from "../IBalloon";


let Main =  () => {
 let { balloons, setBalloons,displayState,longest, setDisplayState ,getLongestTrending } = React.useContext<any>(BalloonContext);
 
 //  getLongestTrending().map(el=> console.log( el));
//  let getThem  = async ()=>   setLongest((await supabase.from("balloons").select("*")).data)
 
 
//  console.log(longest);
 
 return (
        <>
            <div className="main-flex">
                <ContentBalloon title={"Popular Colors"} />
                <ContentBalloon title={"Trending Colors"} />
                <ContentBalloon title={"Upcoming Colors"} />
                
                
               {   true? longest.map(( el:IBalloon)=><WinningBalloon key={longest.color} displayBool={true} color={longest.color}/> ):""}
 
    
                
            </div>

            <Reset />
        </>
    )
}

export default Main;
