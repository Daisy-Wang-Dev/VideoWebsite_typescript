import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import UploadPage from "./pages/UploadPage/UploadPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="video/:videoID" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
