import React, { useState } from "react"
import { CountDown } from "../Timer/Timer"
import './Alarm.css'
export default function Alarm(){
    const [inputHours, setInputHours] = useState('7')
    const [inputMinuts, setInputMinuts] = useState('40') 
    const [TimeToAlarm, setTimeToAlarm] = useState('')
    const [shours, setShours] = useState('0')
    const [sminuts, setSminuts] = useState('0')
    const [sseconds, setSseconds] = useState('0')
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
        RealSeconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(),
        AlarmHours = newAlarm.hours,
        AlarmMinuts = newAlarm.minuts,
        AlarmSeconds = 0;

        document.getElementById('submitINP').className='none'
        document.getElementById('hoho').className='none'
        document.getElementById('alarmGet').className='none'
   
        function changeTimeToAlarm(){
            setTimeToAlarm(calcTime())
            }
        changeTimeToAlarm()
        document.getElementById('closetab').className = 'none'
        document.getElementById('AlarmM').className = 'none'
        document.getElementById('closetab').className = 'block'
        document.getElementById('AlarmM').className = 'block'
        console.log(TimeToAlarm)

        function calcTime(state){
            const a= Number(AlarmHours)*3600+Number(AlarmMinuts)*60+Number(AlarmSeconds);
            const b= Number(RealHours)*3600+Number(RealMinuts)*60+Number(RealSeconds);
            let d
            if (a>b) { 
                d = a - b
            }
            else{
                d = Math.abs(86400 + a - b)
            }
            let hours
            function Setthours(){
                hours = ((d/3600))
            return hours                
            }
                    
            let minuts
            function Settminuts() {
                minuts= (hours%1)*60   
                return minuts
            }
            let seconds
            function Settseconds(){
                seconds = (minuts%1*60)
                return seconds
            }
            Setthours()
            Settminuts()
            Settseconds()
            setShours(Math.floor(Setthours()))
            setSminuts(Math.floor(Settminuts()))
            setSseconds(Math.floor(Settseconds()))
            console.log(shours)
            console.log(sminuts)
            console.log(sseconds)                 
            setCountdownCallState(true)
            return (`${(Math.floor(hours))<10 ? '0' + (Math.floor(hours)) : (Math.floor(hours))}:${(Math.floor(minuts))<10 ? '0'+ (Math.floor(minuts)) : (Math.floor(minuts))}`)
        }

                  
    }

    function CountDownClose(){
        setCountdownCallState(false)
        document.getElementById('closetab').className = 'none'
        document.getElementById('AlarmM').className = 'none'
        document.getElementById('submitINP').className='submitInput'
        document.getElementById('hoho').className='block'
        document.getElementById('alarmGet').className='alarmGet'
    }
   
    return(
        
        <div className='timeInput'>
        <div id="hoho" className="timeInput">
            <input id="inputHours" className='hoursInput' type="number" name='input1' value={inputHours} onChange={(event)=>setInputHours(event.target.value)} ></input>:
            <input id="inputMinuts" className='minutsInput' type="number" name='input2' value={inputMinuts} onChange={(event)=>setInputMinuts(event.target.value)} ></input>
            </div>
            <div><input id="submitINP" className="submitInput" type="Submit" value="Принять"onClick={timeSubmit} /></div>
            <div className="none" id="AlarmM">Будильник установлен на {inputHours}:{inputMinuts} и зазвенит через</div>
            { countDownCallState ? <CountDown  hours={shours} minutes={sminuts} seconds={sseconds}/> : null }
            <div className="rock"><input id="closetab" className='none' type="Submit" value="Удалить"onClick={CountDownClose} /></div>
        </div>

    )  
}  
