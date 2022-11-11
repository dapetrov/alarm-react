import React, { useState } from "react"
import './Alarm.css'

export default function Alarm(){
    const [inputHours, setInputHours] = useState('7')
    const [inputMinuts, setInputMinuts] = useState('40') 
    const [TimeToAlarm, setTimeToAlarm] = useState('')
    // const [hoursToAlarm, setHoursToAlarm] = useState('')
    // const [minutsToAlarm, setMinutsToAlarm] = useState ('')
    const [RealHours, setRealHours] = useState ('')
    const [RealMinuts, setRealMinuts] = useState ('')
    const [AlarmHours, setAlarmHours] = useState ('')
    const [AlarmMinuts, setAlarmMinuts] = useState ('')
   
    // const [h, setH]= useState('')
    // const [m, setM]= useState('')
    // useEffect( () => {
    //         TimeToAlarm()
    //   }, [])

    function timeSubmit(){
        let newAlarm = {
            hours: inputHours,
            minuts: inputMinuts
        };
        var date = new Date(),
        RealHours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        RealMinutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        AlarmHours = newAlarm.hours,
        AlarmMinuts = newAlarm.minuts

        setAlarmHours(AlarmHours)
        setAlarmMinuts(AlarmMinuts)
        setRealHours(RealHours)
        setRealMinuts(RealMinutes)

        if (`${RealHours}` === `${AlarmHours}` && `${RealMinutes}` === `${AlarmMinuts}`){
            poraVstavat()
        }
        else{
        nePoraVstavat()
        nePoraVstatOut()
        // console.log('не пора вставать')
        // document.getElementById('AlarmM').className = 'block'
        // setInterval(setTimeToAlarm(calcTime()), 1000)
        // setInterval(console.log(TimeToAlarm), 1000)
                
        // function CountDown(){
        //     let h = TimeToAlarm.slice(0,2);
        //     let m = TimeToAlarm.slice(3,5);
        //     console.log(h)
        //     console.log(m)
        //     setH(h)
        //     setM(m)
        //     const tick = () => {
        //        if (h === 0 && m === 0) {
        //      } else if (h<0||m<0){

        //      } else if (m === 0) {
        //         h = h - 1;
        //         setH(h)
        //         m = 59
        //         setM(m)
                                    
        //      } else {
        //         m = m - 1;
        //         setM(m)
        //      }
        //     };
        //  setInterval(() => tick(), 1000)
        // }
        // CountDown()
                
        }

         
    }
   
    function poraVstavat(){
        console.log('Пора вставать')
        alert('Пора вставать')
    }
    
    function nePoraVstavat(){
        console.log('не пора вставать')
        return setTimeToAlarm(calcTime())
        
    }
    function nePoraVstatOut(){
        document.getElementById('AlarmM').className = 'block'
        console.log(TimeToAlarm)
    }
   
    function calcTime(){
        const a= Number(AlarmHours)*60+Number(AlarmMinuts);
        const b= Number(RealHours)*60+Number(RealMinuts);
        let d
        if (a>b) { 
            d = a - b
        }
        else{
            d = Math.abs(1440 + a - b)
        }
        const hours=((d/60))                  //сколько часов осталось спать
        const minuts= (hours%1)*60           //сколько минут осталось спать
        // setHoursToAlarm(Math.floor(hours)) 
        // setMinutsToAlarm(Math.floor(minuts))
        // console.log(hoursToAlarm)
        // console.log(minutsToAlarm)
        
        return (`${(Math.floor(hours))<10 ? '0' + (Math.floor(hours)) : (Math.floor(hours))}:${(Math.floor(minuts))<10 ? '0'+ (Math.floor(minuts)) : (Math.floor(minuts))}`)
    }

    return(
        
        <div className='timeInput'>  
            <input className='hoursInput' type="number" name='input1' value={inputHours} onChange={(event)=>setInputHours(event.target.value)} ></input>:
            <input className='minutsInput' type="number" name='input2' value={inputMinuts} onChange={(event)=>setInputMinuts(event.target.value)} ></input>
            <div><input className="submitInput" type="Submit" value="Принять"onClick={timeSubmit} /></div>
            <div className="none" id="AlarmM">{`Будильник зазвенит через ${TimeToAlarm}` }</div>
            {/* <div>{`будильник ${h}:${m}`}</div> */}
        </div>

    )  }    