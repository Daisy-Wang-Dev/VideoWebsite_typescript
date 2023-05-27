import "./VideoPlayer.scss";

function VideoPlayer({ videos, activeVideoID }) {
  const displayedVideo = videos.find(
    (video) => video.id === activeVideoID
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
