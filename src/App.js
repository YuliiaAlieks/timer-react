import { useEffect, useState } from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay';



function App() {
  const [secondsCount, setSecondsCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsCount((s) => s + 1);
    }, 1000);

    if (!isStarted) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isStarted]);



  function startStopHandler() {

    setIsStarted(!isStarted)
    // console.log('Clicked');
    // if (isStarted === false) {
    //   setIsStarted(true);
    //   console.log("🧚 ~ true", true)
    // } else {
    //   setIsStarted(false);
    //   console.log("🧚 ~ false", false)
    // }
  }

  function resetHandler() {
    setIsStarted(false);
    setSecondsCount(0);
    console.log('Reset')
  }

  return (
    <div className="App">
      <header>
        <TimeDisplay secondsCount={secondsCount}/>
        <button onClick={startStopHandler}>{isStarted ? 'Stop' : 'Start'}</button>
        <button onClick={resetHandler}>Reset</button>
      </header>
    </div>
  );
}

export default App;
