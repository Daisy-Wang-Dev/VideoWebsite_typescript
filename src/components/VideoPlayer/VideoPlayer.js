import "./VideoPlayer.scss";
import Videos from "../../data/videos.json";

function VideoPlayer() {
  const displayVideo = Videos[0].image;

  return (
    <section className="videoPlayer">
      <video className="videoPlayer__preview" controls poster={displayVideo}></video>
    </section>
  );
}

export default VideoPlayer;
