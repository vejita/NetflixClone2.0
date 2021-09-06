import React, { useState, useEffect } from "react";
import "./css/RowBanner.css";

function RowBanner(props) {
  // const [movie, setMovie] = useState({});
  const [show, setShow] = useState(true);

  useEffect(() => {
    // setMovie(props.movie);
  }, [props.movie]);

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: ` linear-gradient(to right, black 50%,transparent  ), url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`,

    backgroundPosition: "center center",
  };

  const click = () => {
    setShow(false);
  };
  return (
    <div className={`rowBanner ${!show && "hideBanner"}`} style={bannerStyle}>
      <div className="rowBanner__content">
        <h1 className="rowBanner__title">Movie name</h1>
        <p className="rowBanner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          laudantium sint optio illo voluptatibus, consectetur ab quidem omnis
          necessitatibus est temporibus, dignissimos pariatur.
        </p>
        <button className="rowBanner__btn">Play</button>
      </div>
      <div className="rowBanner__icon" onClick={click}>
        <div className="s s1" onClick={click}></div>
        <div className="s s2" onClick={click}></div>
      </div>
    </div>
  );
}

export default RowBanner;
