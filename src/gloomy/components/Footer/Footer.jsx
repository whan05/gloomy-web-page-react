import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-padding">
          <div className="footer-main">
            <h2>
              Ready to elevate your <br /> brand online?
              <span className="footer-link"> Let’s talk</span>
            </h2>
          </div>

          <div className="footer-info">
            <div className="footer-contact">
              <p>1940 El Cajon Blvd, San Diego,</p>
              <p>CA 92104, United States</p>
              <a  className="footer-email" href="mailto:info@domain.tld">info@domain.tld</a>
              <p className="phone">+1 215-606-0391</p>
            </div>

            <div className="footer-links">
              <div>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Our Work</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>

              <div>
                <a href="#">Websites</a>
                <a href="#">Marketing</a>
                <a href="#">Branding</a>
                <a href="#">Design</a>
                <a href="#">Strategy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-socials">
          <button className="social facebook">Facebook</button>
          <button className="social youtube">Youtube</button>
          <button className="social instagram">Instagram</button>
          <button className="social telegram">Telegram</button>
          <button className="social twitter">Twitter</button>
        </div>
      </div>

      <div className="footer-bottom">Copyright © Gloomy Studios</div>
    </footer>
  );
};

