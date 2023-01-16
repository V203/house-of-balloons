import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import axios from 'axios';
import IBalloon from './IBalloon';
import Services from "./Services/Services";




describe("\n House of balloons test suite", () => {
  var addFun = async (color: string, num: number) => {
    let balloon = Services();
    let i: number = 0
    while (i < num) {
      (await balloon).addBalloon(color)
      i++
    }

  }

  test("We should add red once and red should be available in the upcomming colors", async () => {
    let balloon = Services();
    let balloonArr: Array<IBalloon> = []
    await axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => balloonArr = response.data).catch(err => err.message);

    (await balloon).addBalloon("blue")
    expect((await balloon).getUpcomingColors().length).toEqual(1)

  })

  test("We should add yellow 6 times and the color should be promoted to the popular colors.", async () => {
    let balloon = Services();
    let balloonArr: Array<IBalloon> = [];
    await axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => balloonArr = response.data).catch(err => err.message);

    (await balloon).addBalloon("yellow");
    (await balloon).addBalloon("yellow");
    (await balloon).addBalloon("yellow");
    (await balloon).addBalloon("yellow");
    (await balloon).addBalloon("yellow");
    (await balloon).addBalloon("yellow");

    expect((await balloon).getPopularColors().length).toEqual(1)

  })

  test("Three colors should be added once each and the length of popular colors should equal 3", async () => {
    let balloon = Services();
    let balloonArr: Array<IBalloon> = [];
    await axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => balloonArr = response.data).catch(err => err.message);

    (await balloon).addBalloon("blue");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("yellow");

    expect((await balloon).getUpcomingColors().length).toEqual(3)

  })

  test("The get all balloons method should return all 5 balloons that reside in the API", async () => {
    let balloon = Services();
    let balloonArr: Array<IBalloon> = [];
    await axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => balloonArr = response.data).catch(err => err.message);



    expect((await balloon).getAllBalloons().length).toEqual(5)

  })

  test("The color red should be added 12 times and it should be promoted to trending colors", async () => {
    let balloon = Services();
    let balloonArr: Array<IBalloon> = [];
    await axios.get("https://v203.github.io/balloon-api/balloons.json").then((response) => balloonArr = response.data).catch(err => err.message);

    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");
    (await balloon).addBalloon("red");

   

    expect((await balloon).getTrendingColors().length).toEqual(1);

  })





})
