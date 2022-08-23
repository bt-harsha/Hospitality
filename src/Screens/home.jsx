import React from "react";
import Content from "./content";
import GridLayout from "../Components/GridLayout";
import CountUp from "react-countup";
const HomePage = () => {
  return (
    <Content header={"Reviews & Ratings of Best Catering Service Providers Near You"}>
      {" "}
      <div className="container-fluid border">
        <h3 className="text-center mt-5 mb-5">Catering Service Categories</h3>
        <GridLayout />
      </div>
      <div className="container-fluid border">
        <div className="Content-Block mb-5">
          <h4>Why Businesses Trust Sayan's Catering</h4>
          <p>
            Sayan's Catering is growing day by day in terms of catering service
            providers listing, authenticated reviews and research conducted on
            the latest business trends
          </p>
          <div className="row">
            <div className="col-md-4 block1">
              <h6>Verified Reviews</h6>
              <p>
                Sayan's Catering has around 7k+ unbiased reviews from various
                catering service providers
              </p>
              <h2 className="text-center">
                <CountUp end={7000} duration={1} suffix="+" enableScrollSpy />
              </h2>
            </div>
            <div className="col-md-4 block2">
              <h6>Catering services</h6>
              <p>
                Sayan's Catering has more than 3K Caterers & catering service
                companies listed with detailed information
              </p>
              <h2 className="text-center">
                <CountUp end={3000} duration={1} suffix="+" enableScrollSpy />
              </h2>
            </div>
            <div className="col-md-4 block3">
              <h6>Research & Surveys</h6>
              <p>
                Sayan's Catering conducts research & surveys on catering
                industry’s trends to help you make an informed decision
              </p>
              <h2 className="text-center">
                <CountUp
                  start={0}
                  end={200}
                  duration={1}
                  suffix="+"
                  enableScrollSpy
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Content-Block-second">
          <h2>How it Works</h2>
          <p>
            {" "}
            So How Does Sayan's Catering <br />
            Process Work?
          </p>
          <div className="row align-content-center Last-Block">
            <div className="col-md-2 col-sm-5">
              <div className="RoundContainer">
                <i class="far fa-clipboard-list-check"></i>
              </div>
              <h4 className="mt-2">Choose a Service Category</h4>
              <p>Select the type of catering service you are looking for</p>
            </div>
            <div className="col-md-1  col-sm-1 mt-4">
              <i class="fad fa-angle-double-right"></i>
            </div>
            <div className="col-md-2 col-sm-5">
              <div className="RoundContainer">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <h4 className="mt-2">Select your Location</h4>
              <p>Select Your city to find best local caterers</p>
            </div>
            <div className="col-md-1 d-sm-none d-md-block mt-4">
              <i class="fad fa-angle-double-right"></i>
            </div>
            <div className="col-md-2 col-sm-5 ">
              <div className="RoundContainer">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <h4 className="mt-2">Check Caterers Reviews and Ratings</h4>
              <p>Check Our Verified Reviews and rating of Catering Companies</p>
            </div>
            <div className="col-md-1 col-sm-1 mt-4">
              <i class="fad fa-angle-double-right"></i>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="RoundContainer">
                <i class="fal fa-user-md-chat"></i>
              </div>
              <h4 className="mt-2">Contact the Best Caterer</h4>
              <p>Select and contact Caterers that best fit your requirements</p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default HomePage;
