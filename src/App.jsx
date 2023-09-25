/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LikeVideosPage from "./Pages/LikeVideosPage";
import SeeLaterPage from "./Pages/SeeLaterPage";
import MyLibraryPage from "./Pages/MyLibraryPage";
import HistoryPage from "./Pages/HistoryPage";
import VideoShowPage from "./Pages/VideoShowPage";
import NavBar from "./Components/NavBar_SideBar/NavBar";
import SideBar from "./Components/NavBar_SideBar/SideBar";
import NotFound from "./Pages/NotFound";
import "./App.css";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <div className="flex w-full h-screen">
            <SideBar videosShow={false} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/mylibrary" element={<MyLibraryPage />} />
              <Route path="/likevideos" element={<LikeVideosPage />} />
              <Route path="/seelater" element={<SeeLaterPage />} />
              <Route path="/videos/:videoId" element={<VideoShowPage />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>         
      </BrowserRouter>
  );
}

export default App;
