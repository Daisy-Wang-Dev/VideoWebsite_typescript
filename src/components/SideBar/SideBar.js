import Video from "../../components/Video/Video";

function SideBar({ Videos, activeVideoID, changeActiveVideo }) {
  const sideBarVideos = Videos.filter((Video) => Video.id !== activeVideoID);
  return (
    <section className="sidebar">
      <h2 className="sidebar__title">Next Videos</h2>
      {sideBarVideos.map((video) => (
        <Video
          key={video.id}
          video={video}
          changeActiveVideo={changeActiveVideo}
        />
      ))}
    </section>
  );
}

export default SideBar;
