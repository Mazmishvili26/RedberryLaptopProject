import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

// import assets
import successIMG from "../../assets/successIMG.png";

function Success() {
  return (
    <section className="success-section">
      <div className="success-container">
        <img src={successIMG} className="successIMG" />
        <p className="success-title">ჩანაწერი დამატებულია!</p>
        <div className="success-btn-container">
          <Link to="/list">
            <button className="go-list-btn">სიაში გადაყვანა</button>
          </Link>
          <Link to="/" className="home-tag">
            <button className="home-btn">მთავარი</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Success;
