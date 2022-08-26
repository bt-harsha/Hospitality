import React from "react";
import { Const_Images } from "../Constants";
const GridLayout = () => {
  const services = [
    { name: "Marriage Catering", icon: `${Const_Images.MARRIAGE_LOGO}` },
    { name: "Home Catering", icon: `${Const_Images.HOME_LOGO}` },
    { name: "Indoor Catering", icon: `${Const_Images.INDOOR_LOGO}` },
    { name: "Birthday Catering", icon: `${Const_Images.BIRTHDAY_LOGO}` },
    { name: "Outdoor Catering", icon: `${Const_Images.OUTDOOR_LOGO}` },
    { name: "Event Catering", icon: `${Const_Images.EVENT_LOGO}` },
    { name: "Office Party Catering", icon: `${Const_Images.OFFICE_LOGO}` },
    { name: "College-Function Catering", icon: `${Const_Images.COLLEGE_LOGO}` },
    { name: "Kitty Party Catering", icon: `${Const_Images.KITTY_LOGO}` },
    { name: "Club Function Catering", icon: `${Const_Images.CLUB_LOGO}` },
  ];
  return (
    <div class="grid-container">
      {services.map((item, index) => (
        <div key={index}>
          <div className="Icon-Container">
            <img src={item.icon} alt="icons" />
          </div>
          <div className="grid-item">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
