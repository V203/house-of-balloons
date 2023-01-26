
import './App.css';
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header"
import { useState, useEffect, useContext } from 'react';
import { BalloonContext } from './context/Ballooncontext';
import axios from 'axios';
import IBalloon from './IBalloon';
import React from 'react';
import BalloonImages from './assets/BalloonImages';

function App() {

  
  let [displayState, setDisplayState] = useState(false);
  let [balloons, setBalloons] = useState<any>([]);
  // { balloons, setBalloons } = useContext<any>(BalloonContext);

  let Popular = () => {
    let { balloons } = React.useContext<any>(BalloonContext);
    return balloons.filter((el: IBalloon) => el.count >= 5 && el.count < 11).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)
  }

  let UpcomingBalloons = () => {
    let { balloons, setBalloons } = React.useContext<any>(BalloonContext);
    return balloons.filter((el: IBalloon) => el.count >= 1 && el.count <= 4).map((el: IBalloon) => <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />)
  }

  let Trending = () => {
    let start = Date.now()

    let { balloons, setBalloons } = React.useContext<any>(BalloonContext);
    let trendingBalloons: Array<any> = balloons
      .filter((el: IBalloon) => el.count >= 11)
      .map((el: IBalloon) => !el["time"] ? el["time"] = start : el).sort((el1: any, el2: any) => {
        return (el1.time < el2.time) ? 1 : (el1.time > el2.time) ? -1 : 0;
      });

    if (trendingBalloons.length !== 0) {
      setTimeout(() => setDisplayState(!displayState), 50000);
      setTimeout(() => trendingBalloons ? trendingBalloons.map((el: IBalloon) => { (el.time === getLongestTrending(trendingBalloons)?.time ? el.count = 9 : null) }) : null, 100000);
    }

    return trendingBalloons.map((el: IBalloon) => {
      return <BalloonImages key={el.color} subsurface={el.subsurface} count={el.count} basecolor={el.basecolor} />
    })
  }

  let getLongestTrending = (trendBalloons: Array<IBalloon>) => {
    if (trendBalloons) {
      return trendBalloons.find((el) => el.time === Math.min(...trendBalloons.map((el) => el.time)));
    }
  }

  let getLatestTrending = (trendBalloons: Array<IBalloon>) => {
    if (trendBalloons) {
      return trendBalloons.find((el) => el.time === Math.max(...trendBalloons.map((el) => el.time)));
    }
  }

  useEffect(() => {
    axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => setBalloons(response.data)).catch(err => err.message);

  }, [])

  return (
    <div className="App">
      <>

        <BalloonContext.Provider value={{ balloons, setBalloons, Popular, UpcomingBalloons, Trending ,getLatestTrending, getLongestTrending }}>
          <Header />
          <Main />
          <Footer />
        </BalloonContext.Provider>
      </>
    </div>
  );
}

export default App;
