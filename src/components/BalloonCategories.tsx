import React, { useContext } from "react";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";
import { supabase } from "../supabaseClient";

export let Popular = () => {
    let { balloons } = React.useContext<any>(BalloonContext);
    return balloons.filter((el: IBalloon) => el.count >= 5 && el.count < 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)
  }


  let get_trends = async ()=> {
    var { update_time } = React.useContext<any>(BalloonContext);
  
    let  {data, error} = await supabase.rpc("get_trends");
    if(data) data.map((el:IBalloon)=> console.log(el))
    if(error)console.log(error);;
    console.log(data);
    
    
    return data;
  }

  // get_trends()
  

export  let UpcomingBalloons =  () => {

  let { balloons, setBalloons } = React.useContext<any>(BalloonContext);
  return balloons.filter((el: IBalloon) => el.count >= 1 && el.count <= 4).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)
}

export   let Trending =  () => {
  let start = Date.now()

  let { balloons,displayState,setDisplayState,getLongestTrending,update_time,insertTime ,longest,setLongest} = React.useContext<any>(BalloonContext);

  let default_longest_trending = async  (param:number)=> {
    // console.log(param);
    
    await supabase.rpc("default_longest_trending",{time_param:param})
  }
  
  let trendFilter:Array<IBalloon> = balloons.filter((el:IBalloon)=> el.count >= 11 );

  let trendingBalloons: Array<any> = balloons
    .filter((el: IBalloon) => el.count >= 11)
    .map( (el: IBalloon) =>  el
    // .map( (el: IBalloon) =>  !el["time"] ? update_time(start,el.color) && el: default_longest_trending(getLongestTrending(trendFilter)) 
    );
    
    // getLongestTrending(balloons);
    //  el.time === null ? update_time({new_time:start, color_param:el.color})  : el).sort((el1: any, el2: any) => {
    // // .map((el: IBalloon) => el.time === null ? update_time(start,el.color) : el).sort((el1: any, el2: any) => {
    //   return (el1.time < el2.time) ? 1 : (el1.time > el2.time) ? -1 : 0;
    // }
    // console.log(trendingBalloons);
    
    // console.log(trendingBalloons.length);

    let trendLength = trendingBalloons.length
    

  if (trendingBalloons.length !== 0) {
    setTimeout(() => setDisplayState(!displayState), 5000);
    // setTimeout(() => trendingBalloons ? trendingBalloons.map((el: IBalloon) => { (el.time === getLongestTrending(trendingBalloons)?.time ? supabase.rpc("default_to_upcoming",{color_param:el.color})  : null) }) : null, 1000);
  }

  return trendingBalloons.map((el: IBalloon) => {
    return <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />
  })
}




export let getLatestTrending = (trendBalloons: Array<IBalloon>) => {
  if (trendBalloons) {
    let result = trendBalloons.find((el) => el.time === Math.max(...trendBalloons.map((el) => el.time)));
    console.log(result);
    
    return result
  }
}






