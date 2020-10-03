import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [cTime, setcTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setcTime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="clock-container">
      <h2>Digital Clock using React JS</h2>
      <h1 className="clock-text"> {cTime} </h1>

      <footer className="footer">
        <h2>Made by: Abdul Basit Mehtab</h2>
      </footer>
    </div>
  );

};

export default App;