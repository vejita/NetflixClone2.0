import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import LoginPage from "./pages/LoginPage";
import ProfileScreen from "./pages/ProfileScreen";
import TrailerScreen from "./pages/TrailerScreen";
import TrailerMovie from "./pages/TrailerMovie";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import SeasonScreen from "./pages/SeasonScreen";
import MyList from "./pages/My_list";
// import { auth } from "./firebase";
// import { login, logout, selectUser } from "./features/counter/userSlice";
import dotenv from "dotenv";

// import "../.env"
function App() {
  dotenv.config();
  // const user = useSelector(selectUser);
  // console.log(process.env.API_KEY);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       // logged in
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //     } else {
  //       // logrdout
  //       dispatch(logout());
  //     }
  //   });

  // return unsubscribe;
  // }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {/* {!user ? ( */}
        {/* ) : ( */}
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/home" exact>
            <HomeScreen />
          </Route>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/TrailerMovie/:id">
            <TrailerMovie />
          </Route>
          <Route path="/trailerScreen/:id">
            <TrailerScreen />
          </Route>
          <Route path="/tv-show">
            <TvShows />
          </Route>
          <Route path="/movies">
            <Movies topRated={true} />
          </Route>
          <Route path="/my-list">
            <MyList myList={true} />
          </Route>
          <Route path="/stemson/:seasonNum/:id/:numberS/:link">
            <SeasonScreen />
          </Route>
          <Route path="/trailerMovie/:id/trailer/:link">
            <SeasonScreen movie={true} />
          </Route>
        </Switch>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
