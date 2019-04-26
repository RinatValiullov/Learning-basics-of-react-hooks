import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect hook here!");
  }, [count]);

  let handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  return (
    <div>
      <h3 className="text-center">Welcome to the Counter of Life </h3>
      <button className="center-block" onClick={handleClick}>
        {count}
      </button>
      <p className="center">
        {" "}
        at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
