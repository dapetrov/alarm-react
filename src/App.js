import './App.css';
import Header from './comp/header/Header';
import Clock from './comp/body/Clock/Clock';
import Alarm from './comp/body/Alarm/Alarm';

function App() {
  return (
    <div>
  <Header/>
  <Clock/>
  <p id='alarmGet' className='alarmGet'>Поставить будильник</p>
  <Alarm/>
  </div>
  );


}

export default App;
