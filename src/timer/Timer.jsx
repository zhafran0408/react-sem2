import { useRef, useState } from "react";
import "./Timer.css"; // ini penting

export default function Timer() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);

  function handleStart() {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(new Date().getTime());
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <div className="container">
      <h1 className="time">Time : {now - start} ms</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}


