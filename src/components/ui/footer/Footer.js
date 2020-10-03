import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>EcoNutric</h3>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="ion-ios-arrow-right"></i> 
                  <Link to="/">Home</Link></li>
                  <li><i className="ion-ios-arrow-right"></i> 
                  <Link to="/about">About us</Link></li>
                  <li><i className="ion-ios-arrow-right"></i> 
                  <Link to="#">Services</Link></li>
                  <li><i className="ion-ios-arrow-right"></i> 
                  <Link to="#">Terms of service</Link></li>
                  <li><i className="ion-ios-arrow-right"></i> 
                  <Link to="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br/>
                  New York, NY 535022<br/>
                  United States <br/>
                  <strong>Phone:</strong> +1 5589 55488 55<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>

                <div className="social-links">
                  <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
                  <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
                  <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
                  <Link to="#" className="google-plus"><i className="fa fa-google-plus"></i></Link>
                  <Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </footer>








    </>
  )
}

export default Footer
