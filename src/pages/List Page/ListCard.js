import React from "react";
import { Link } from "react-router-dom";

function ListCard({ laptopList }) {
  const { laptop, user } = laptopList;

  return (
    <div className="list-card">
      <div className="listCard-imgBox">
        <img src={`https://pcfy.redberryinternship.ge/` + laptop.image} />
      </div>
      <div className="listCardInfo">
        <div className="userFullName-box">
          <h2 className="userFullName">{user.name + " " + user.surname}</h2>
        </div>
        <p className="laptopName">{laptop.name}</p>
        <Link to={`unique/${laptop.id}`}>
          <button className="detail-btn">მეტის ნახვა</button>
        </Link>
      </div>
    </div>
  );
}

export default ListCard;
