import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h3 className="footer__uppertext">
          Questions? <Link to="#">Contact us</Link>.
        </h3>
        <div className="footer__content">
          <div className="content-box content-box-1">
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">investor Relations</Link>
              </li>
              <li>
                <Link to="#">Ways to watch</Link>
              </li>
              <li>
                <Link to="#">Corporate Information</Link>
              </li>
              <li>
                <Link to="#">Netflix Originals</Link>
              </li>
            </ul>
          </div>

          <div className="content-box content-box-2">
            <ul>
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="#">Jobs</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>W
              </li>
              <li>
                <Link to="#"> Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="content-box content-box-3">
            <ul>
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <Link to="#">REdeem Gift Cards</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
              <li>
                <Link to="#">Speed Test</Link>
              </li>
            </ul>
          </div>

          <div className="content-box content-box-4">
            <ul>
              <li>
                <Link to="#">Media Center</Link>
              </li>
              <li>
                <Link to="#">Buy Gift Cards</Link>
              </li>
              <li>
                <Link to="#">Cookie preference's</Link>
              </li>
              <li>
                <Link to="#"> Legal Notices</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
