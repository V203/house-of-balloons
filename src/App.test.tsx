import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import axios from 'axios';
import IBalloon from './IBalloon';
import Services from "./Services/Services";
import { supabase } from './supabaseClient';



describe("\n House of balloons test suite", () => {
  var addFun = async (color: string, num: number) => {
    let balloon = Services();
    let i: number = 0
    while (i < num) {
      (await balloon).addBalloon(color)
      i++
    }

  }

  beforeEach(async ()=>{
    await supabase.rpc('reset');

  })

  test("Should retrieve all the balloons", async () => {
    let {data, error} = await supabase.rpc("all_balloons");
    console.log(data);
    
  

  })

  test("We should add red once and red should be available in the upcomming colors", async () => {
  

  })

  test("We should add yellow 6 times and the color should be promoted to the popular colors.", async () => {
    

  })

  test("Three colors should be added once each and the length of popular colors should equal 3", async () => {
   
      
  })

  test("The get all balloons method should return all 5 balloons that reside in the API", async () => {
   

  })

  test("The color red should be added 12 times and it should be promoted to trending colors",  () => {
    
   

    

  })





})
