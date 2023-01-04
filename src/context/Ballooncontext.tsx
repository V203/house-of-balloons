import React from "react";
import IBalloon from "../IBalloon";

export type BalloonType =[{
    color:string,
    count:number,
    basecolor:string,
    subsurface:string
    
}];

export let BalloonContext = React.createContext<any>([]);

  