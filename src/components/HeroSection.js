import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Slide indicators={true}>
        <div
          style={{
            backgroundImage: `url("/images/bg.jpg")`,
          }}
          className="hero-btns"
        >
          <p style={{ textAlign: "left" }}>
            THIS IS A PLACE WHERE TECHNOLOGY &<br />
            CREATIVITY FUSED INTO DIGITAL CHEMISTRY
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url("/images/about-bg.jpg")`,
          }}
          className="hero-btns"
        >
          <p style={{ textAlign: "left" }}>
            WE DON'T HAVE THE BEST BUT WE HAVE THE
            <br />
            GREATEST TEAM
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default HeroSection;
