import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/LoginPage.css";
import Githlogo from "../components/Githlogo";
import SingUp from "../components/SingUp";
function LoginPage() {
  const [singin, setSingin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <Githlogo />
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSingin(true)} className="loginScreen__btn">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {!singin ? (
          <>
            <h1>Unlimited films,TV programes and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates ut ducimus ex sint quaerat, in quia architecto
              voluptuous totam dolore!
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <Link to="/home">
                  <button
                    // onClick={() => setSingin(true)}
                    className="loginScreen__getStarted"
                  >
                    GRT Started{" "}
                  </button>
                </Link>
              </form>
            </div>
          </>
        ) : (
          <SingUp />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
