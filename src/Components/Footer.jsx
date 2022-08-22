import React from "react";
import logo from "../Assets/logo.png";
import { Const_Images } from "../Constants";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12">
            <img src={logo} alt="logo" width="100" height="100" />
            <p>
              310, Lenin Street, Opp. Lindsay Hotel, Kolkata West Bengal 700054
            </p>
          </div>
          <div className="col-md-2 col-sm-6 col-6">
            <h3>Top Cities</h3>
            <p>Delhi</p>
            <p>Mumbai</p>
            <p>Kolkata</p>
            <p>Chennai</p>
            <p>Ahmedabad</p>
            <p>Bangalore</p>
            <p>Hyderabad</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6">
            {" "}
            <h3>Top Categories</h3>
            <p>Wedding Catering</p>
            <p>Indoor Catering</p>
            <p>Birthday Catering</p>
            <p>Office Party Catering</p>
            <p>Event Catering</p>
          </div>
          <div className="col-md-2 col-sm-6 col-6">
            {" "}
            <h3>Resources</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact Us</p>
            <p>Privacy</p>
          </div>

          <div className="col-md-2 col-sm-6 col-6">
            {" "}
            <h3>Contact</h3>
            <p>Need Help?</p>
            <p>info@sayanscatering.in</p>
            <p>7980557689</p>
            <h4>follow us</h4>
            <div className="d-flex">
              <img
                src={Const_Images.Google_PLUS}
                alt="logo"
                className="google me-3"
              />
              <img
                src={Const_Images.FACEBOOK}
                alt="logo"
                className="facebook"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <h5 className="text-center">&#169;2022 Sayan's Catering</h5>
      </div>
    </>
  );
};

export default Footer;
