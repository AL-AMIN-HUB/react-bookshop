import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-color py-4">
        <div className="row w-75 mx-auto">
          <div className="col-md-7  text-center">
            <p className="lead fs-4 text-white">Get up to date on the last news, special event arrivals</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control fs-4"
                placeholder="Enter your e-mail address here..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-danger px-3 fs-4" type="button" id="button-addon2">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <p className="lead fs-4 text-white">Follow our social media accounts for news and updates</p>
            <i className="fab fa-facebook-f fs-3 text-light me-4"></i>
            <i className="fab fa-twitter fs-3 text-light me-4"></i>
            <i className="fab fa-google-plus-g fs-3 text-light me-4"></i>
            <i className="fab fa-pinterest-p fs-3 text-light me-4"></i>
            <i className="fab fa-youtube fs-3 text-light me-4"></i>
          </div>
        </div>
      </div>

      <div className="row py-5 container mx-auto">
        <div className="col-md-3">
          <h3 className="text-muted">
            {" "}
            <i className="fas fa-book-reader"></i> BOOKSHOP
          </h3>
          <p className="lead">
            Literacy Studio for schools: engage & support struggling readers. Dreaming up New Books: Easy to Read. Hard to Put Down. Follow Us On
            Social Media. Explore The Library. Contact Us For Details. Donate Online.
          </p>
          <p className="lead">Happy Book Shopping!</p>
        </div>
        <div className="col-md-3">
          <h4>
            {" "}
            <i className="fas fa-map-marker-alt"></i> OUR MAIN OFFICE
          </h4>
          <p className="lead">
            542 W. 27th Street, 4th Floor, New York, New York, United States <br /> Phone: +880177926-**** <br /> Mail: alaminsbl***@gmail.com
          </p>
        </div>
        <div className="col-md-3">
          <h3>
            {" "}
            <i className="fas fa-info rounded-circle fs-5 border border-3 p-2"></i> INFORMATION
          </h3>
          <li className="lead">Contacts</li>
          <li className="lead">About us</li>
          <li className="lead">FAQs</li>
          <li className="lead">FAQs</li>
          <li className="lead">Terms and condition</li>
          <li className="lead">My account</li>
          <li className="lead">Blog</li>
        </div>
        <div className="col-md-3">
          <h3>
            {" "}
            <i className="fas fa-cog"></i> SERVICE
          </h3>
          <li className="lead">Help Center</li>
          <li className="lead">Exchange & Return</li>
          <li className="lead">How To Buy</li>
          <li className="lead">Gift Card Policy</li>
          <li className="lead">Payment Method</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
