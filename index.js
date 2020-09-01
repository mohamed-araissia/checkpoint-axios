const axios =require ('axios');
const express = require ('express');
const app=express();

app.get('/',(req,res)=>{
    
const requestOne = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid=d6b59c4f336b67d8aa4d06a88f0d9f49");
const requestTwo = axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=04b52521b44d5fd52c5f15a9c48e15db");
const requestThree = axios.get("https://api.openweathermap.org/data/2.5/weather?q=Algeria&appid=2d75adc17d0b440dd00487e18bb7920a");

    axios
  .all([requestOne, requestTwo, requestThree])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });
  });






app.listen(3000,er=>{if(er)console.log(er) 
    else console.log('server is connected on port 3000')}) ;