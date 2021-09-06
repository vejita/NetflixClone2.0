import React from "react";
import { Link } from "react-router-dom";
import "./css/Demo.css";

function Demo(props) {
  return (
    <div>
      <div className="demo">
        <h1 className="demo__heading">oops! something went wrong </h1>
        <h3 className="demo__homeLink">
          <Link href="/">
            Continue Surfing <span>Home</span>
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default Demo;
