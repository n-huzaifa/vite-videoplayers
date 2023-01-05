import React from "react";
import ReactPlayer from "react-player";
import Videoplayer from "./components/Videoplayer";
import "./styles/App.css";

function App() {
  return (
    <div className='main'>
      <div className='main-body'>
        <h1>Video JS Integration Test</h1>
        <Videoplayer />
        <br />
        <h1>React Player Integration Test</h1>
        <ReactPlayer url='/720p.mp4' controls />
      </div>
    </div>
  );
}

export default App;
