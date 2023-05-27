import { Link } from "react-router-dom";
import Video from "../../components/Video/Video";
import "./SideBar.scss";

function SideBar({ videos }) {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <section className="sidebar">
      <h2 className="sidebar__title">NEXT VIDEOS</h2>
      {videos.map((video) => (
        <Link
          to={`/video/${video.id}`}
          key={video.id}
          className="sidebar__link"
          onClick={handleClick}
        >
          <Video video={video} />
        </Link>
      ))}
    </section>
  );
}

export default SideBar;
