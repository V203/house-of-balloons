import React, { useEffect, useContext } from "react";
import IBalloon from "../IBalloon";

export type balloonType =[{
    color:string,
    count:number,
    basecolor:string,
    subsurface:string
    
}];

export let BalloonContext = React.createContext<balloonType | Array<IBalloon> >([]);

  