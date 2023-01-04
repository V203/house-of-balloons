
import './App.css';


import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header"
import { useState, useEffect } from 'react';
import { BalloonContext } from './context/Ballooncontext';
import { BalloonType } from './context/Ballooncontext';
import axios from 'axios';


function App() {

    
  let [balloons, setBalloons] = useState<any>([])
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
