// import React from "react";
// export const CountDown = (promise) => {
//     const [over, setOver] = React.useState(false);
//     const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  
//     const tick = () => {
//       if (over) return;
  
//       if (h === 0 && m === 0 && s === 0) {
//         setOver(true);
       
//       } else if (h<0||m<0||s<0){
//         setOver(true)
//       } else if (m === 0 && s === 0) {
//         setTime([h - 1, 59, 59]);
//       } else if (s === 0) {
//         setTime([h, m - 1, 59]);
//       } else {
//         setTime([h, m, s - 1]);
//       }
//     };

//     React.useEffect(() => {
//       const timerID = setInterval(() => tick(), 1000);
//       return () => clearInterval(timerID);
//     });
  
//     return (
//       <div className="none" id="Timer">
//         <p>{`${h.toString().padStart(2, '0')}:${m
//           .toString()
//           .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
//         <div>{over ? "Пора вставать" : ''}</div>
//       </div>
//     );
//   };