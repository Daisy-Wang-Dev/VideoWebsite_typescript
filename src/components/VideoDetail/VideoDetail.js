import "./VideoDetail.scss";
import VideoDetails from "../../data/video-details.json";
import ViewIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";

function VideoDetail({ activeVideoID }) {
  const activeVideoDetails = VideoDetails.find(
    (VideoDetail) => VideoDetail.id === activeVideoID
  );

  const { title, channel, timestamp, views, likes } = activeVideoDetails;

  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const year = date.getFullYear();

  const readDate = `${day}/${month}/${year}`;

  //   dateEl.innerText = `${dayOfWeek} ${month} ${day} ${year}`;

  return (
    <section className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <div className="video-details__metadata-container">
        <div className="video-details__metadata-text">
          <h3>{channel}</h3>
          <h3>{readDate}</h3>
        </div>
        <div className="video-details__metadata-interact">
          <div className="video-details__views">
            <img
              className="video-details__views-icon"
              src={ViewIcon}
              alt="views button"
            />
            <h3 className="video-details__views-num">{views}</h3>
          </div>

          <div className="video-details__likes">
            <img
              className="video-details__likes-btn"
              src={LikesIcon}
              alt="Likes button"
            />
            <h3 className="video-details__likes-num">{likes}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default VideoDetail;
