import React from "react";
import StarsRating from "stars-rating";
const CaterList = ({ array}) => {
  return (
    <div class="container mx-auto mt-4">
      <div class="row justify-content-center justify-content-md-start justify-content-sm-start">
  
        {array.map((item, index) => (
          <div className="col-md-4 col-sm-6 col-8 mb-3">
            <div class="card" key={index}>
              <img
                class="card-img-top"
                src={item.image}
                alt="Card"
                height="200"
              />
              <div class="card-body">
                <p>
                  <StarsRating count={5} size={24} edit color1={"#ffd700"} />
                  {item.category_type} {item.city}
                </p>
                <h5 class="card-title">{item.caterer_name}</h5>
                <p class="card-text">
                  {item.desc.substring(0, 200) + "......"}{" "}
                  <a href="/#" className="readtxt">
                    Read More
                  </a>
                </p>
                <div className="priceContainer mt-2">
                  <p>
                    Price Starts From <br />
                    <span>&#x20b9; {item.price}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CaterList;
