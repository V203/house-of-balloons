import axios from "axios";
import BalloonImages from "../assets/BalloonImages";
import IBalloon from "../IBalloon";

import React, { useState } from "react";

let Services =  async () => {
    let balloons:Array<any> = [];
 await  axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => balloons = response.data).catch(err => err.message);
    
    let getUpcomingColors =  ()=>{
        
        
      return  balloons.filter((el: IBalloon) => el.count >= 1 && el.count <= 4).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)
    }

    let getPopularColors= ()=>{
        return balloons.filter((el: IBalloon) => el.count >= 5 && el.count < 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)

    }

    let getTrendingColors = ()=> {
        // balloons.filter((el: IBalloon) => el.count >= 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />).slice(0, 3);
        
        
        return balloons.filter((el: IBalloon) => el.count >= 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />).sort((el1: any, el2: any) => {

            return (el1.count > el2.count) ? 1 : (el1.count < el2.count) ? -1 : 0;
    
    }).slice(0, 3)
    }

    let addBalloon =  (color: string)=>{
        
   let arr =   balloons.map((balloons: IBalloon,index:number) => {
            if (balloons.color !== color) {
                    return balloons
            }else if(index >= 3 && balloons.count >= 10){
                    return {...balloons,count:balloons.count = 9}
            } else {
                    return {
                        
                        
                            ...balloons, count: balloons.count++
                    }
            }
    }).sort((el1: any, el2: any) => {

            return (el1.count < el2.count) ? 1 : (el1.count > el2.count) ? -1 : 0;
    
    })
    return   arr;

    }
    let getAllBalloons =   () => {
        return balloons
    }

    return {
        getUpcomingColors,
        getPopularColors,
        getTrendingColors,
        addBalloon,
        getAllBalloons
    }

}

export default Services;