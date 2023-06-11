import React, { useEffect } from "react";
import { Card, CardImg } from "react-bootstrap";
import "./HomeStyle.scss";
import flowerImage from "../assets/flower-image.jpg";
import waveFormImage from "../assets/waveformImage.png";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const navigateToSpeechApp = (path: string) => {
    navigate(path);
  };
  return (
    <div className="home-container">
      <div className="title">Smart App</div>
      <div className="all-card-container">
        <Card
          className="margin-x card-container"
          onClick={() => navigateToSpeechApp("/speech-recognition")}
        >
          <CardImg src={waveFormImage} width={50} height={100} />

          <div className="card-body">
            <div className="card-title title-text">Speech Recognition</div>
            <div className="card-text">
              This is a simple app which listen to your audio for 3 seconds and
              display it on UI.
            </div>
          </div>
        </Card>
        <Card
          className="margin-x card-container"
          onClick={() => navigateToSpeechApp("/style-your-image")}
        >
          <CardImg
            src={flowerImage}
            width={50}
            height={100}
            className="img-border"
          />

          <div className="card-body">
            <div className="card-title title-text">Style your image</div>
            <div className="card-text">
              A simple app to give your pictures a new look. You can apply some
              basic filters and cool custom frames.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
