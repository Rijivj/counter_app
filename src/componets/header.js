// src/components/Counter.js
import React, { useState, useEffect } from "react";
import "./css/counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [leftImage, setLeftImage] = useState("https://via.placeholder.com/100");
  const [rightImage, setRightImage] = useState(
    "https://via.placeholder.com/100"
  );

  // Example of updating image URLs periodically (e.g., every 10 seconds)
  useEffect(() => {
    const updateImages = () => {
      setLeftImage(
        `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`
      );
      setRightImage(
        `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`
      );
    };

    updateImages(); // Initial load
    const intervalId = setInterval(updateImages, 10000); // Update every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="counter-container">
      <img src={leftImage} alt="Left Image" className="side-image left-image" />
      <div className="counter-content">
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <h2 className="counter-heading">Counter: {count}</h2>
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
      <img
        src={rightImage}
        alt="Right Image"
        className="side-image right-image"
      />
    </div>
  );
}

export default Counter;
