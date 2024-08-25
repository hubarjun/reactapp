import "../styles/Footer.css";
import heyareweareLogo from "../assets/Powered by HAWA .png";

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
            <a href="https://www.agscinemas.com/movies.php">
              Book Your Tickets
            </a>
            <p>BookMyShow</p>
          </div>
          <div className="content-button"></div>
        </div>
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
