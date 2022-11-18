import React, { useState } from "react"
import { CountDown } from "../Timer/Timer"
import './Alarm.css'
export default function Alarm(){
    const [inputHours, setInputHours] = useState('7')
    const [inputMinuts, setInputMinuts] = useState('40') 
    const [TimeToAlarm, setTimeToAlarm] = useState('')
    const [shours, setShours] = useState('0')
    const [sminuts, setSminuts] = useState('0')
    const [countDownCallState, setCountdownCallState] = useState(false)

    function timeSubmit()
    {
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
                document.getElementById('closetab').className = 'block'
                document.getElementById('AlarmM').className = 'block'
                console.log(TimeToAlarm)

                function calcTime(state){
                    const a= Number(AlarmHours)*60+Number(AlarmMinuts);
                    const b= Number(RealHours)*60+Number(RealMinuts);
                    let d
                    if (a>b) { 
                        d = a - b
                    }
                    else{
                        d = Math.abs(1440 + a - b)
                    }
                    let hours
                    function Setthours(){
                        hours = ((d/60))
                    return hours                //сколько часов осталось спать
                    }
                    
                    let minuts
                    function Settminuts() {
                        minuts= (hours%1)*60    //сколько минут осталось спать
                        return minuts
                    }
                    Setthours()
                    Settminuts()
                    setShours(Math.floor(Setthours()))
                    setSminuts(Math.floor(Settminuts()))
                    console.log(shours)
                    console.log(sminuts)                  
                    setCountdownCallState(true)
                    return (`${(Math.floor(hours))<10 ? '0' + (Math.floor(hours)) : (Math.floor(hours))}:${(Math.floor(minuts))<10 ? '0'+ (Math.floor(minuts)) : (Math.floor(minuts))}`)
                }

            }        
    }
    function CountDownClose(){
    setCountdownCallState(false)
    document.getElementById('closetab').className = 'none'
    document.getElementById('AlarmM').className = 'none'
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
            {/* <div className="none" id="AlarmM">{`Будильник зазвенит через ${TimeToAlarm}` }</div> */}
            <div className="none" id="AlarmM">Будильник зазвенит через</div>
            { countDownCallState ? <CountDown  hours={shours} minutes={sminuts} /> : null }
            <div className="rock"><input id="closetab" className='none' type="Submit" value="Удалить"onClick={CountDownClose} /></div>
        </div>

    )  
}  
