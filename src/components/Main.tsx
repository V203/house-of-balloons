import React, { ReactElement, ReactComponentElement, createContext, useState, useEffect, useContext, useCallback, Dispatch } from "react";
import imageToAdd from "../assets/balloon.svg";
import express from "express";
import apiClient from "../api/balloon-api";
import axios, { AxiosResponse } from "axios";

import api from "../api/balloon-api";
import BalloonImages from "../assets/BalloonImages";
import { BalloonContext, balloonType } from "../context/Ballooncontext";
import IBalloon from "../IBalloon";


let Main = () => {

    let {balloons} = useContext<Array<IBalloon>>(BalloonContext);

    return (
        <>
            <div className="main-flex">


                <div className="main-content">
                    <h1 id="ContentTypography">
                        Popular Colors
                    </h1>
                    {balloons.filter((el: IBalloon) =>  el.count >= 5 && el.count < 11).map((el:IBalloon)=> <BalloonImages subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}

                </div>

                <div className="main-content">
                    <h1 id="ContentTypography">
                        The Trending Color
                    </h1>
                    {balloons.filter((el: IBalloon) =>  el.count >= 11).map((el:IBalloon)=> <BalloonImages subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />).slice(0,3)}
                </div>

                <div className="main-content">
                    <h1 id="ContentTypography">
                        Upcoming colors
                    </h1>
                    {balloons.filter((el: IBalloon) =>  el.count >= 1 && el.count <= 4).map((el:IBalloon)=> <BalloonImages subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)}
                    
                </div>

            </div>
        </>)
}

export default Main;
