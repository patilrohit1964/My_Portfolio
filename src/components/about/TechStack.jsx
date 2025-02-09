import React, { useEffect, useState } from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiGithubBadge,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { Card } from "semantic-ui-react";

const TechStack = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="techstack">
      <h1>
        My{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          SkillSet
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={width > 768 ? 5 : 2}>
          <Card raised className="item">
            {" "}
            <CgCPlusPlus
              style={{ width: "100%", height: "auto", color: "black" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiPython
              style={{ width: "100%", height: "auto", color: "red" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiJavascript1
              style={{ width: "100%", height: "auto", color: "#FFC300" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiReact
              style={{ width: "100%", height: "auto", color: "#61DBFB" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiNodejs
              style={{ width: "100%", height: "auto", color: "green" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiMongodb
              style={{ width: "100%", height: "auto", color: "green" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <SiMysql
              style={{ width: "100%", height: "auto", color: "#00758f" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiGit
              style={{ width: "100%", height: "auto", color: "green" }}
            />{" "}
          </Card>
          <Card raised className="item">
            {" "}
            <DiGithubBadge
              style={{ width: "100%", height: "auto", color: "orange" }}
            />{" "}
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default TechStack;
