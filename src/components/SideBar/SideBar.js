import { Link } from "react-router-dom";
import Video from "../../components/Video/Video";
import "./SideBar.scss";

function SideBar({ Videos}) {
  return (
    <section className="sidebar">
      <h2 className="sidebar__title">NEXT VIDEOS</h2>
      {Videos.map((video) => (
        <Link to={`/video/${video.id}`} key={video.id}>
          <Video
            video={video}
          />
        </Link>
      ))}
    </section>
  );
}

export default SideBar;
