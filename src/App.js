import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    if (!isStarted) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isStarted]);



  function startStopHandler() {
    console.log('Clicked');
    if (isStarted === false) {
      setIsStarted(true);
      console.log("🧚 ~ true", true)
    } else {
      setIsStarted(false);
      console.log("🧚 ~ false", false)
    }
  }

  function resetHandler() {
    setIsStarted(false);
    setSeconds(0);
    console.log('Reset')
  }

  return (
    <div className="App">
      <header>
        <div>{`00:00:${seconds}`}</div>
        <button onClick={startStopHandler}>{isStarted ? 'Stop' : 'Start'}</button>
        <button onClick={resetHandler}>Reset</button>
      </header>
    </div>
  );
}

export default App;
