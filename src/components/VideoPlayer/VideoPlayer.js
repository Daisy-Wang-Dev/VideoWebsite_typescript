import "./VideoPlayer.scss";

function VideoPlayer({ Videos, activeVideoID }) {
  const displayedVideo = Videos.find(
    (Video) => Video.id === activeVideoID
  ).image;

  return (
    <section className="videoPlayer">
      <video
        className="videoPlayer__preview"
        controls
        poster={displayedVideo}
      ></video>
    </section>
  );
}

export default VideoPlayer;
