import axios from "axios";

export default axios.create({
    baseURL: "https://v203.github.io/balloon-api/balloons.json",
    headers: {
      "Content-type": "application/json"
    }
  });


  