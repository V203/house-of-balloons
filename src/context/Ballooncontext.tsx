import React from "react";
    
    export type BalloonType =[{
        color:string,
        count:number,
        basecolor:string,
        subsurface:string        
    }];
  
export let  BalloonContext = React.createContext<any>([]);