import React from "react";
import Videoplayer from "./components/Videoplayer";
import "./styles/App.css";

function App() {
  return (
    <div className='main'>
      <div className='main-body'>
        <h1>Video JS Integration Test</h1>
        <Videoplayer />
      </div>
    </div>
  );
}

export default App;
