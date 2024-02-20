import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  function showTime() {
    setCurrentTime((time = new Date().toLocaleTimeString()));
  }
  setInterval(showTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
