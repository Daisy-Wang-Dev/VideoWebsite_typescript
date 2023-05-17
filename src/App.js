import "./App.scss";
// import Videos from "./data/videos.json"
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />

    </div>
  );
}

export default App;
