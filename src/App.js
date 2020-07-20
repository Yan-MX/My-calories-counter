import React, { useState } from "react";
import Add from "./component/Add";
import Chart from "./component/Chart";
import Display from "./component/Display";
import mySvg from "./eclipse.svg";
function App() {
  const [food, setFood] = useState([]);
  const [sum, setSum] = useState(0);
  return (
    <div className="App">
      <div style={{ color: "white", textShadow: "2px 2px salmon" }}>
        <h1>
          My Calories Counter
          <img src={mySvg} alt="pic" style={{ width: "10%", height: "8%" }} />
          <img src={mySvg} alt="pic" style={{ width: "20%", height: "25%" }} />
        </h1>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <Add setFood={setFood} foodlist={food} setSum={setSum} />
      <Display foodlist={food} sum={sum} />
      <Chart />
      <footer>&#169;Copyright. All Rights Reserved. Yan Jiang</footer>
    </div>
  );
}

export default App;
