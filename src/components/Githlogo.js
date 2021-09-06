import React from "react";
import "./css/Githlogo.css";

function Githlogo() {
  return (
    <div className="Githlogo">
      <a
        href="https://github.com/kritik-Verma/Netflix-React-Clone"
        className="Githlogo__link"
      >
        <h1 className="Githlogo__h1">GitHub</h1>
        <div className="Githlogo__loog">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
            srcSet=""
          />
        </div>
      </a>
    </div>
  );
}

export default Githlogo;
