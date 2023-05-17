import "./App.scss";
// import Videos from "./data/videos.json"
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetail from "./components/VideoDetail/VideoDetail";

function App() {
  // todo: state for videoPlayer and next video
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      {/* todo: Add components */}
      <main>
        <div className="video-details">
          <VideoDetail />
        </div>
        {/* <SideBar /> */}
      </main>
    </div>
  );
}

export default App;
