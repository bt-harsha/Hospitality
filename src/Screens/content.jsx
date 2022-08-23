import React, { useState } from "react";
import logo from "../Assets/catering-background.jpg";
import Dropdown from "../Components/Dropdown";
import JsonData from "../JSON/records";
import Footer from "../Components/Footer";
import CaterList from "./CaterList";
const Content = ({ children, header }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [index, setIndex] = useState(-1);
  const [index2, setIndex2] = useState(-1);
  const [emptyArray, setArray] = useState([]);
  const data = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
  const data1 = [
    "Marriage Catering Services",
  ];
  const search = (name, type) => {
    let filteredData = JsonData.records.filter(
      (item) => item.city === name && item.category_type === type
    );
    setArray(filteredData);
  };
  return (
    <>
      <div className="LogoContainer">
        <img src={logo} alt="bg" className="bg-logo" />
        <div className="TextContainer">
          <h4>
            {emptyArray.length === 0
              ? header
              : data1[index2] + " " + data[index]}
          </h4>
          <p>
            Sayan's Catering has helped 10,000+ Customers to find the right
            caterers for their functions and events
          </p>
          <div className="d-md-flex justify-content-center">
            <Dropdown
              city={data}
              show={show}
              setShow={setShow}
              index={index}
              setIndex={setIndex}
              initial={"Select Your City"}
            />
            <Dropdown
              city={data1}
              show={show1}
              setShow={setShow1}
              index={index2}
              setIndex={setIndex2}
              initial={"Select Service Category"}
            />
            <button
              type="button"
              className="search-btn"
              onClick={() => search(data[index], data1[index2])}
            >
              <i class="far fa-search"></i>Search
            </button>
          </div>
        </div>
      </div>
      {emptyArray.length === 0 ? children : <CaterList array={emptyArray} />}
      <Footer />
    </>
  );
};

export default Content;
