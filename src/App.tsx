
import './App.css';


import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header"
import { useState, Dispatch, useEffect } from 'react';
import { BalloonContext } from './context/Ballooncontext';
import { balloonType } from './context/Ballooncontext';
import axios, { AxiosResponse } from 'axios';
import IBalloon from './IBalloon';







function App() {

  let [balloons, setBalloons] = useState<balloonType>([])
  useEffect(()=>{
    axios.get("https://v203.github.io/balloon-api/balloons.json").then((response)=>setBalloons(response.data)).catch(err=> err.message);

  },[])

  return (
    <div className="App">
      <>

        <BalloonContext.Provider value={ {balloons, setBalloons} }>
          <Header />
          <Main />
          <Footer />
        </BalloonContext.Provider>
      </>


    </div>
  );
}

export default App;
