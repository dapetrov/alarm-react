import React, { useState } from "react"
import './Alarm.css'

export default function Alarm(){
    const [inputHours, setInputHours] = useState('7')
    const [inputMinuts, setInputMinuts] = useState('40') 
    const [TimeToAlarm, setTimeToAlarm] = useState('')

    function timeSubmit(){
        let newAlarm = {
            hours: inputHours,
            minuts: inputMinuts
        };
        var date = new Date(),
        RealHours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        RealMinuts = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        AlarmHours = newAlarm.hours,
        AlarmMinuts = newAlarm.minuts

        if (`${RealHours}` === `${AlarmHours}` && `${RealMinuts}` === `${AlarmMinuts}`){
            poraVstavat()
        }
        else{
                console.log('не пора вставать')
                function changeTimeToAlarm(){
                    setTimeToAlarm(calcTime())
                }
                changeTimeToAlarm()
            
                document.getElementById('AlarmM').className = 'block'
                console.log(TimeToAlarm)

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
                   
                    return (`${(Math.floor(hours))<10 ? '0' + (Math.floor(hours)) : (Math.floor(hours))}:${(Math.floor(minuts))<10 ? '0'+ (Math.floor(minuts)) : (Math.floor(minuts))}`)
                }
            }        
    }
   
    function poraVstavat(){
        console.log('Пора вставать')
        alert('Пора вставать')
    }
    
   
  

    return(
        
        <div className='timeInput'>  
            <input className='hoursInput' type="number" name='input1' value={inputHours} onChange={(event)=>setInputHours(event.target.value)} ></input>:
            <input className='minutsInput' type="number" name='input2' value={inputMinuts} onChange={(event)=>setInputMinuts(event.target.value)} ></input>
            <div><input className="submitInput" type="Submit" value="Принять"onClick={timeSubmit} /></div>
            <div className="none" id="AlarmM">{`Будильник зазвенит через ${TimeToAlarm}` }</div>
            {/* <div>{`будильник ${h}:${m}`}</div> */}
        </div>

    )  
}  
