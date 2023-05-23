import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.scss";
import Videos from "./data/videos.json";
import Header from "./components/Header/Header.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import SideBar from "./components/SideBar/SideBar";
import UploadPage from "./pages/UploadPage/UploadPage";
import { useState } from "react";
// import Home from "./pages/Home/Home";

function App() {
  const [activeVideoID, setActiveVideoID] = useState(Videos[0].id);

  const changeActiveVideo = (id) => {
    setActiveVideoID(id);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="upload" element={<UploadPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <div className="App">
        <VideoPlayer Videos={Videos} activeVideoID={activeVideoID} />
        <main>
          <div className="video-details-container">
            <VideoDetail activeVideoID={activeVideoID} />
          </div>
          <SideBar
            Videos={Videos}
            activeVideoID={activeVideoID}
            changeActiveVideo={changeActiveVideo}
          />
        </main> */}
      {/* </div> */}
    </>
  );
}

export default App;
