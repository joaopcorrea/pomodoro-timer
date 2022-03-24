import * as React from 'react';
import { useEffect, useState } from 'react';
import tomato from './media/pomodoro.png';
import './style.css';
import 'typeface-roboto';
import 'typeface-nunito';
import 'typeface-quicksand';

import styled from 'styled-components';

import Cycles from './components/Cycles';


interface PomodoroProps {
  
}

const Square = styled.div`
  margin-top: 50px;
  width: 350px;
  background-color: #A2C4C940;
  text-align: center;
  border-radius: 2%;

  font-family: Quicksand;
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  
  
  font-size: 82px;
  margin: 5px;
`;

const Button = styled.button`
  margin: 15px;
  height: 40px;
  width: 200px;
  cursor: pointer;

  border: 0 none;
  border-radius: 20px;

  font-size: 20px;
  font-family: Quicksand;
  font-weight: bold;
  color: #1CAECE;

  box-shadow: 2px 5px 1px #A2C4C9;
`;

const Pomodoro: React.FC<PomodoroProps> = () => {
  const [clicked, setClicked] = useState(false);
  const [time, setTime] = useState(15);
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    if (started) {

    } else {
      
      setStarted(true);
    }
    setClicked(!clicked);
  }

  let imgClassName = "pomodoro";
  if (started) {
    imgClassName += " spin";
    if (!clicked)
      imgClassName += " pause";
  }
  
  return (
    <div className="container">
      <Square>
        <Text>15:00</Text>
        <Button 
          className={clicked ? "clicked" : ""}
          onClick={handleClick}
        >
          {clicked ? "STOP" : "START"}
        </Button>
      </Square>

      <Cycles cycle={1} />

      {/* <Input/> */}
      <img className={imgClassName} src={tomato} />
      <div className="cursor"/>
    </div>
  );
}
 
export default Pomodoro;