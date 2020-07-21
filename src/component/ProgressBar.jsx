import React from "react";
import styled from "styled-components";

function ProgressBar({ sum }) {
  const Track = styled.div`
    width: 80%;
    height: 20px;
    background-color: whitesmoke;
    border-radius: 6px;
    box-shadow: inset 0 0 5px salmon;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  `;
  const w = Math.min(Math.max(0, parseInt(sum) / 2000), 1) * 100;
  const Thumb = styled.div`
    width: ${w}%;
    height: 20px;
    background-color: hotpink;
    border-radius: 5px;
    box-shadow: inset 0 0 5px pink;
    transition: width 0.3s ease-in-out;
    margin-top: 10px;
    margin-bottom: 20px;
  `;

  return (
    <div>
      <Track>
        <Thumb />
      </Track>
      {sum > 2000 ? (
        <p className="warn"> You have had too much food for today!!! </p>
      ) : (
        <p className="title">Remember to eat healthy:)</p>
      )}
    </div>
  );
}

export default ProgressBar;
