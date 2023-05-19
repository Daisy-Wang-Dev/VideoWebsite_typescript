import "./App.scss";
import Videos from "./data/videos.json";
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";

function App() {
  const [activeVideoID, setActiveVideoID] = useState(Videos[0].id);

  const changeActiveVideo = (id) => {
    setActiveVideoID(id);
  };

  return (
    <div className="App">
      <Header />
      <VideoPlayer Videos={Videos} activeVideoID={activeVideoID} />
      {/* /* todo: Add components */}
      <main>
        <div className="video-details-container">
          <VideoDetail activeVideoID={activeVideoID} />
        </div>
        <SideBar
          Videos={Videos}
          activeVideoID={activeVideoID}
          changeActiveVideo={changeActiveVideo}
        />
      </main>
    </div>
  );
}

export default App;
