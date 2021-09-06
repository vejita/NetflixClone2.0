import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/Nav.css";

function Nav(props) {
  const [show, handleShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const doToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <div className={`nav ${show && "nav__black"}`}>
      {/* <div className="nav__coverForMobile" /> */}
      <div className="nav__container">
        <Link to="/">
          <img className="nav__logo" src="/images/logo.png" alt="" />
        </Link>
        <div
          className={toggle ? "cover set_cover" : "cover"}
          onClick={() => {
            setToggle(false);
          }}
        >
          <ul
            className={toggle ? "nav__components dotoggle" : "nav__components"}
          >
            <Link to="/">
              <li>home</li>
            </Link>

            <Link to="/tv-show">
              <li className={props.tvShow ? "active" : ""}>TV Shows</li>
            </Link>
            <Link to="/movies">
              <li className={props.movies && "active"}>Movies</li>
            </Link>
            <Link to="/my-list">
              <li className={props.activeState?.myList && "active"}>My List</li>
            </Link>
            <li className="nav__components__downArrow">
              <svg
                onClick={doToggle}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="in_li__downArrow"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
                />
              </svg>
            </li>
            {/* <Link to="#">
            <li></li>
          </Link> */}
          </ul>
        </div>
        <svg
          onClick={doToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="rgba(46, 46, 46, 0.75)"
          className={toggle ? "downArrow hide_downArrow" : "downArrow"}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
          />
        </svg>

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="/images/Netflix-avatar.png"
          alt=""
        />
      </div>
      <div className="nave__fade" />
    </div>
  );
}

export default Nav;
