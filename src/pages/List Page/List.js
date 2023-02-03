import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";

// import assets
import leftArrow from "../../assets/leftArrow.png";
import ListCard from "./ListCard";
import { Link } from "react-router-dom";

// import component
import Loading from "../../components/Loading Component/Loading";

const getLaptops =
  "https://pcfy.redberryinternship.ge/api/laptops?token=147a7c5bc30931049a575e1d26483d48";

function List() {
  const [laptops, setLaptops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLaptopsData = async function () {
      const response = await axios.get(getLaptops);
      const data = response.data.data;
      setLaptops(data);
      setIsLoading(false);
    };
    getLaptopsData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="list-section">
      <div className="list-header">
        <div className="list-headerPrev-box">
          <Link to="/">
            <div className="listPrev-box">
              <img src={leftArrow} className="listPrev-btn" />
            </div>
          </Link>
          <h2 className="listHeader-title">ჩანაწერების სია</h2>
        </div>
      </div>
      <div className="list-container">
        {laptops.map((laptopList) => {
          return (
            <ListCard key={laptopList.laptop.id} laptopList={laptopList} />
          );
        })}
      </div>
    </section>
  );
}

export default List;
