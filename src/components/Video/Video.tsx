import "./Video.scss";

interface singleVideo {
  id: string;
  title: string;
  channel: string;
  image: string;
}

interface VideoProp {
  video: singleVideo;
}
function Video({ video }: VideoProp) {
  return (
    <article className="sidebar__video">
      <div className="sidebar__video-img-container">
        <img
          className="sidebar__video-img"
          src={video.image}
          alt={`Next video: ${video.title}`}
        />
      </div>
      <div className="sidebar__video-text">
        <h3 className="sidebar__video-title">{video.title}</h3>
        <p className="sidebar__video-channel">{video.channel}</p>
      </div>
    </article>
  );
}

export default Video;
