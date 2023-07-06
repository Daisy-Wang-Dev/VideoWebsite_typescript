import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import SideBar from "../../components/SideBar/SideBar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [videos, setVideos] = useState(null);
  const [activeVideoID, setActiveVideoID] = useState("");
  const { videoID } = useParams();

  const getVideos = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "/videos"
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videos) {
      if (!videoID) {
        setActiveVideoID(videos[0].id);
      } else {
        const displayedVideo = videos.find((video) => video.id === videoID);
        setActiveVideoID(displayedVideo.id);
      }
    }
  }, [videos, videoID]);

  if (!videos || !activeVideoID) {
    return <p>Page Loading...</p>;
  }

  const sideBarVideos = videos.filter((video) => video.id !== activeVideoID);

  return (
    <>
      <VideoPlayer videos={videos} activeVideoID={activeVideoID} />
      <main>
        <div className="video-details-container">
          <VideoDetail activeVideoID={activeVideoID} />
        </div>
        <SideBar videos={sideBarVideos} />
      </main>
    </>
  );
}

export default Home;
