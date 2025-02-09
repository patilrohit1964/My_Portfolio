import React from "react";
import TypeAnimation from "./TypeAnimation";
import HomeBottomPage from "./HomeBottomPage";
import developer from "../../assets/developer.svg";
import Tilt from "react-parallax-tilt";
const HomePage = () => {
  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-content">
          <div className="heading-text">
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              HI
            </h1>
            <h1
              style={{
                fontFamily: "Fira Code",
                fontSize: "2.5rem",
                position: "static",
              }}
            >
              I'M{" "}
              <span
                style={{
                  color: "#32CD30",
                  position: "static",
                  textDecoration: "",
                }}
              >
                ROHIT PATIL
              </span>
            </h1>
          </div>
          <div className="text-animation">
            <TypeAnimation />
          </div>
        </div>
        <img
          className="rounded h-36 w-36  homepage-avatar"
          src={developer}
          alt="Extra large avatar"
        />
      </div>
      <HomeBottomPage />
    </div>
  );
};

export default HomePage;
