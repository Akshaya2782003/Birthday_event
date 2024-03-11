import '../assets/css/Footercss.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faInstagram, faWhatsapp,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="container first_class">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <h3>BE THE FIRST TO KNOW</h3>
              <p>Expert event planners specializing in unforgettable birthday celebrations, crafting personalized experiences tailored to your unique preferences and desires.</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <form className="newsletter">
                <div className="newsletter-input">
                  <input type="text" placeholder="Email Address" className="input-field" />
                </div>
              </form>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="col-md-12">
                <div className="standard_social_links">
                  <div>
                  <li className="round-btn btn-facebook"><a href="#"><FontAwesomeIcon icon={faFacebookF} /> </a></li>
                  <li className="round-btn btn-linkedin"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                  <li className="round-btn btn-twitter"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                   <li className="round-btn btn-instagram"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                       <li className="round-btn btn-whatsapp"><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                      <li className="round-btn btn-envelop"><a href="#"><FontAwesomeIcon icon={faEnvelope} /></a></li>

                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-md-12"><h3 style={{ textAlign: "right" }}>Stay Connected</h3></div>
            </div>
          </div>
        </div>
        <div className="second_class">
          <div className="container second_class_bdr">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer-logo"><img src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1708890030/logo_fcam9q.png" alt="logo" /></div>
                <p>Your one-stop planning platform to find venue, cakes, chocolates, decoration, etc. for your birthday event.</p>
              </div>
              <div className="col-md-2 col-sm-6">
                <h3>Quick Links</h3>
                <ul className="footer-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Party Worx Partners</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#" target="_blank">Terms &amp; Conditions</a></li>
                  <li><a href="#" target="_blank">Privacy Policy</a></li>
                  <li><a href="#">Sitemap</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>OUR SERVICES</h3>
                <ul className="footer-category">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services </a></li>
                  <li><a href="#">Packages</a></li>
                  <li><a href="#">Reminder</a></li>
                  <li><a href="#">Party Worx </a></li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3>Party Worx Events</h3>
                <ul className="footer-links">
                  <li><a href="#">Party Worx Events</a></li>
                  <li><a href="#">Location</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid">
            <div className="copyright">Copyright 2019 | All Rights Reserved by Party Worx.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
