import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import SpeechRecognitionApp from "./SpeechRecognition";
import Home from "./Home";
import StyleYourImageApp from "./StyleYourImage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech-recognition" element={<SpeechRecognitionApp />} />
        <Route path="/style-your-image" element={<StyleYourImageApp />} />
      </Routes>
    </BrowserRouter>
  );
};
export default React.memo(AppRoutes);
