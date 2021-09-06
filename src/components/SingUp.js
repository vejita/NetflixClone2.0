import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./css/SingUp.css";
// import { auth } from "../firebase";

function SingUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const register = (el) => {
  //   el.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then((authUser) => {
  //       console.log(authUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  // const signIn = (el) => {
  //   el.preventDefault();

  //   auth
  //     .signInWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then((authUser) => {
  //       console.log(authUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  // const logout = (el)=>{

  // }

  return (
    <div className="singupScreen">
      <form action="">
        <h1>Sing in</h1>
        <input ref={emailRef} type="email" name="" id="" placeholder="email" />
        <input
          ref={passwordRef}
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <Link to="/home">
          <button className="submit_btn" type="submit">
            Sing in
          </button>
        </Link>
        <h4>
          <span className="grey"> New to Netflix? </span>
          <span className="link">sign up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SingUp;
