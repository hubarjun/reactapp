import "../styles/Footer.css";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import heyareweareLogo from "../assets/heyareweare production logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div
          className="button-container"
          onClick={() =>
            (window.location.href = "https://www.agscinemas.com/movies.php")
          }
        >
          <div className="button-content">
            <a
              style={{ fontSize: "0.5rem" }}
              href="https://www.agscinemas.com/movies.php"
            >
              Book Your Tickets
            </a>
            <p>BookMyShow</p>
          </div>
          <div className="content-button"></div>
        </div>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/agsentertainmentpvtltd/">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/agsentertainment/?hl=en">
          <RiInstagramFill />
        </a>
        <a href="https://twitter.com/Ags_production">
          <RiTwitterXLine />
        </a>
        <a href="https://www.youtube.com/@agsentertainment">
          <FaYoutube />
        </a>
      </div>
      <div
        className="heyareweare-logo"
        onClick={() => (window.location.href = "https://www.heyareweare.com/")}
      >
        <img src={heyareweareLogo} alt="HeyAreWeAre Technologies" />
      </div>
    </>
  );
};

export default Footer;
