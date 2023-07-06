import "./VideoPlayer.scss";

interface singleVideo {
  id: string;
  title: string;
  channel: string;
  image: string;
}

interface VideoPlayerProps {
  videos: singleVideo[];
  activeVideoID: String;
}

function VideoPlayer({ videos, activeVideoID }: VideoPlayerProps) {
 
  const displayedVideo = videos.find(
    (video) => video.id === activeVideoID
  );

  if (!displayedVideo) {
    return <p> Video Loading</p> 
  }

  const {image} = displayedVideo

  return (
    <section className="videoPlayer">
      <video
        className="videoPlayer__preview"
        controls
        poster={image}
      ></video>
    </section>
  );
}

export default VideoPlayer;
