import React, {useState} from "react";
import { BalloonContext } from "../context/Ballooncontext";
import { supabase } from "../supabaseClient";

const Reset = ()=> {
    let {balloons, setBalloons} = React.useContext<any>(BalloonContext);

    let handleClick = async ()=> {
     let {error} = await supabase.from("balloons").update({count:  0,time:0}).neq("color","not_color")
     let {data}  = await supabase.rpc('all_balloons');
     setBalloons(data)
     console.log(balloons);

    }

    return (

        <div className="reset  btn" onClick={handleClick}>
            <h4>Reset</h4>
        </div>
    )
}

export default Reset;