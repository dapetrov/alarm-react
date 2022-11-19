import React from "react";
import './Timer.css';
const oxxy = require("./Ox.mp3");
export const CountDown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  
    const tick = () => {
      if (over) return;
      // eslint-disable-next-line eqeqeq
      if (h === 0 && m === 0 && s === 0) {
        setOver(true);
      } else if (m === 0 && s === 0) {
        setTime([h - 1, 59, 59]);
      // eslint-disable-next-line eqeqeq
      } else if (s == 0) {
        setTime([h, m - 1, 59]);
      } else {
        setTime([h, m, s - 1]);
      }
    };

    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
      <div id="CountDowns" className="block">
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        <div>{over ? "Присядь недорэперок" : ''}</div>
        <div>{over ?  <audio src={oxxy} type = "audio/mpeg" autoPlay='true'></audio> : ' ' }</div>
      </div>
    );
  };