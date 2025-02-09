import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";
const AboutInfo = () => {
  return (
    <div className="about">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#32CD30" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hi people, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Rohit Patil
            </span>{" "}
            from Maharashtra, India. I did my Bsc.IT in Information Technology
            from{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Swarnium University
            </span>{" "}
            and currently I'm working at{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Techno Bot System Technology
            </span>
            .
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Apart from developement, some things I like are<br></br>
            <br></br>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Watching Cricket
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Wrestling
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Travelling
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Critical Thinking
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Playing Video Games
              </li>
            </ul>
          </p>
        </div>
        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      <TechStack />
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "50px" }}
          username="patilrohit1964"
          blockMargin={6}
          blockSize={12}
          fontSize={16}
          color={"#32CD30"}
          year={2025}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
