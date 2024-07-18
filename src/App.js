import './App.css';
import rock from './public/images/rock.png'
import paper from './public/images/paper.png'
import scissors from './public/images/scissors3.png'
import hourglass from './public/images/hourglass.png'
import robot from './public/images/robot.png'
import React, { useState , useEffect } from 'react';

function App() { 
//state holding the current selection
const [current, setCurrent] = useState("think");
//variable holding the cpus selection
let selectCpu = null;
//cpu's select img
const CpuSelected = document.querySelector("#cOptFor2 img");
//selection of the bar indicating the winning status
const WinnerBar = document.querySelector(".winner");

function handleOptionClick(type){
  setCurrent(type);
}

//use effect for switch the current selection
useEffect(() => {
  const coptimg = document.querySelector(".currentopt img");

if (current === "rock") {
  coptimg.src = rock;
} 
else if (current === "paper") {
  coptimg.src = paper;
} 
else if (current === "scissors") {
  coptimg.src = scissors;
}
else if(current === "think"){
  coptimg.src = hourglass;
}

}, [current])



function randomSelectForGpu(){
  return Math.floor(Math.random()*3) + 1;
}

//Displaying random moves on the screen
function randomimagesForGpu(){
 let i = 0;
let myinterval = setInterval(() => {
  if (i == 0 || i == 3) {
    CpuSelected.src = rock;
  } 
  else if (i == 1 || i == 4) {
    CpuSelected.src = paper;
  } 
  else if (i == 2 || i == 5) {
    CpuSelected.src = scissors;
  }
  i++;
  if (i > 4) {
    clearInterval(myinterval);
   
  }
}, 300);

} 

  function PlayButtonClick(){ 
    if (current != null && current != "think") {
      let playbutton = document.querySelector(".playbutton");
      playbutton.style.display = "none";
      let winStatus = "null"
      randomimagesForGpu();
      selectCpu = randomSelectForGpu();

      //Displaying the last selection on the screen a certain time after the interval ends
      setTimeout(() => {
        if (selectCpu == 1){CpuSelected.src = rock}
        if (selectCpu == 2){CpuSelected.src = paper}
        if (selectCpu == 3){CpuSelected.src = scissors}
      }, 1700);

      //Assigning the winning status
      if (current == "rock") {
        if (selectCpu == 1) {winStatus = "Draw"}
        if (selectCpu == 2) {winStatus = "You Lose"} 
        if (selectCpu == 3) {winStatus = "You Win"} 

      }
      else if(current == "paper"){
        if (selectCpu == 1) {winStatus = "You Win"} 
        if (selectCpu == 2) {winStatus = "Draw"} 
        if (selectCpu == 3) {winStatus = "You Lose"} 

      }
      else{
        if (selectCpu == 1) {winStatus = "You Lose"} 
        if (selectCpu == 2) {winStatus = "You Win"} 
        if (selectCpu == 3) {winStatus = "Draw"} 
      }

      //show winner
       setTimeout(() => {
        WinnerBar.innerText = winStatus;
        WinnerBar.style.display = "block"
        winStatus = "null"
        selectCpu = 0;
       }, 2000);


      //go to start
       setTimeout(() => {
        setCurrent("think");
        CpuSelected.src = robot;
        WinnerBar.style.display = "none"
        let playbutton = document.querySelector(".playbutton");
        playbutton.style.display = "block";
      }, 4250);
  }
  else{
    alert("choose one option");
  } 
}

  return (
    <div className="App">
        <div className="winner"></div>
        <div className="gameScene">
          <div className="player" id="p1">
              <b className="pName" id="p1name" >Player</b>
              <div className="currentopt" id="cOptFor1" ><img src="" alt="" /></div>
              <div className="optlist">
                  <div className="opt rock" onClick={(()=>{handleOptionClick("rock")})}>
                    <img src={rock} alt="rock" /> 
                  </div>
                  <div className="opt paper" onClick={(()=>{handleOptionClick("paper")})}>
                  <img src={paper} alt="paper" /> 
                  </div>
                  <div className="opt scissors" onClick={(()=>{handleOptionClick("scissors")})}>
                    <img src={scissors} alt="scissors" /> 
                  </div>
              </div>
          </div>
          <div className="player" id="p2">
            <b className="pName" id="p1name" >CPU</b>
                <div className="currentopt" id="cOptFor2"><img src={robot} alt="" /></div>
                <div className="optlist">
                  <div className="opt rock">
                    <img src={rock} alt="rock"/> 
                  </div>
                  <div className="opt paper">
                  <img src={paper} alt="paper" /> 
                  </div>
                  <div className="opt scissors">
                    <img src={scissors} alt="scissors" /> 
                  </div>
              </div>
            </div>
        </div>
       <button className="playbutton" onClick={PlayButtonClick}>Play</button> 
    </div>
  );
}

export default App;
