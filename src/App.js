import { useEffect, useState } from 'react';
import TimeDisplay from './components/TimeDisplay';



function App() {
  const [secondsCount, setSecondsCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [miliseconds, setMiliseconds] = useState(1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsCount((s) => s + 1);
    }, miliseconds);

    if (!isStarted) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isStarted, miliseconds]);

  function startStopHandler() {
    setIsStarted(!isStarted)
    console.log("🧚 ~ isStarted", isStarted)
  }

  function resetHandler() {
    setIsStarted(false);
    setSecondsCount(0);
    console.log('Reset')
  }

  function slowdownHandler() {
    if (miliseconds < 2000) {
      setMiliseconds((ms) => ms + 100); 
      console.log("🧚 ~ miliseconds", miliseconds)
    } else {
      console.log("🧚 ~ miliseconds", miliseconds)
      return;
    }
  }

  function speedupHandler() {
    if (miliseconds > 100) {

      setMiliseconds((ms) => ms - 100); 
      console.log("🧚 ~ miliseconds", miliseconds)
    } else {
      console.log("🧚 ~ miliseconds", miliseconds)
      return;
    }
  }

  return (
    <div className="container">
  
        <TimeDisplay secondsCount={secondsCount} />
        <button className="button-64" onClick={startStopHandler}>{isStarted ? 'Stop' : 'Start'}</button>
        <button className="button-64" onClick={resetHandler}>Reset</button>
        <button className="button-64" onClick={slowdownHandler}>Slow down</button>
        <button className="button-64" onClick={speedupHandler}>Speed up</button>
    </div>
  );
}

export default App;
