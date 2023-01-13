import React from "react";
import VideoJS from "../lib/VideoJS";

function Videoplayer() {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    fluid: true,
    muted: false,
    responsive: true,
    sources: {
      src: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
      type: "application/x-mpegURL",
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // player event handler
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
}

export default Videoplayer;
