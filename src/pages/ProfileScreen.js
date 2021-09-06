import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
// import { selectUser } from "../features/counter/userSlice";
// import { auth } from "../firebase";s
import "./css/profileScreen.css";
import Githlogo from "../components/Githlogo";
function ProfileScreen() {
  // const user = useSelector(selectUser);
  return (
    <div className="ProfileScreen">
      <Nav />
      <Githlogo />
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="ProfileScreen__details">
            <h2>abc@gmail.com</h2>
            <div className="ProfileScreen__Planes">
              <Link to="/">
                <button
                  className="ProfileScreen__singOut"
                  // onClick={() => auth.signOut()}
                >
                  Sing Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
