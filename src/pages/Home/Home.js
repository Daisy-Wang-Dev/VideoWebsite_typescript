import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import SideBar from "../../components/SideBar/SideBar";
import { BASE_URL, API_KEY } from "../../utils/API";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const [videos, setVideos] = useState(null);
  const [activeVideoID, setActiveVideoID] = useState("");

  const getVideos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);
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
      setActiveVideoID(videos[0].id);
    }
  }, [videos]);

  if (!videos || !activeVideoID) {
    return <p>Page Loading...</p>;
  }

  return (
    <>
      <VideoPlayer Videos={videos} activeVideoID={activeVideoID} />
      <main>
        <div className="video-details-container">
          <VideoDetail activeVideoID={activeVideoID} />
        </div>
        <SideBar
          Videos={videos}
          activeVideoID={activeVideoID}
        />
      </main>
    </>
  );
}

export default Home;
