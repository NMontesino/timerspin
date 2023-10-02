import { useState } from 'react';
import './App.css';
import AddTimer from './components/AddTimer';
import TimerContainer from './components/TimerContainer';

const App = () => {

  const [timerList, setTimerList] = useState([])

  const createTimer = (label, hrs, mins) => {
      setTimerList(...timerList, {label, hrs, mins})
  }

  return (
    <div className="App">
      <AddTimer add={createTimer}></AddTimer>
      <TimerContainer list={timerList}></TimerContainer>
    </div>
  )

}

export default App
