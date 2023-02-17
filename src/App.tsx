
import './App.css';
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header"
import { useState, useEffect, useContext } from 'react';
import { BalloonContext } from './context/Ballooncontext';
import axios, { AxiosResponse } from 'axios';
import IBalloon from './IBalloon';
import React from 'react';
import BalloonImages from './assets/BalloonImages';
import { supabase } from './supabaseClient';
import { getLatestTrending,  Popular, Trending, UpcomingBalloons } from './components/BalloonCategories';


function App() {

  let [longest,setLongest] = useState<any>([])

  let [displayState, setDisplayState] = useState(false);
  let [balloons, setBalloons] = useState<any>([]);


  // useEffect(() => {
  // axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => console.log(response.data.color)).catch(err => err.message);
  // console.log();
  // let D = JSON.parse(localStorage.getItem("balloons"))
  // let fakaIballoons = async () => {
  //   D.map(async (el: any) => await supabase.from("balloons").insert({ color: el.color, count: el.count, subsurface: el.subsurface, basecolor:el.basecolor }))

  //   }

  // fakaIballoons()

  // }, [])

  let update_time = async (time: number, color: string) => {
    await supabase.rpc('update_time', { new_time: time, color_param: color })

  }

   let getLongestTrending = async function (): Promise<any[] | null> {
    let {setLongest} = useContext(BalloonContext)
    let {data} = (await supabase.rpc("get_longest_trending"));
    console.log(data);
    
    setLongest(data)
    
    
    return data
    
  }
  

  let retrieveBalloons = async () => {
    let { data, error } = await supabase.from('balloons').select();
    balloons.length === 0 ? setBalloons(data) : console.log(error);
    // console.log(data);

  }
  useEffect(() => {
    retrieveBalloons()
  }, [])

  let insertTime = async (time_param: number) => {
    let { error } = await supabase.from("balloons").update({ time: time_param })
  }

  return (
    <div className="App">
      <>
        <BalloonContext.Provider value={{
          displayState,
          setDisplayState,
          balloons,
          setBalloons,
          Popular,
          UpcomingBalloons,
          Trending, getLatestTrending,
           retrieveBalloons,
          insertTime, update_time,longest,setLongest
        }}>


          <Header />
          <Main />
          <Footer />


        </BalloonContext.Provider>
      </>
    </div>
  );
}

export default App;
