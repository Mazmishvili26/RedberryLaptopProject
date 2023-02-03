import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Unique.css";

// import assets
import leftArrow from "../../assets/leftArrow.png";

// import components
import TopContent from "./TopContent";
import MiddleContent from "./MiddleContent";
import BottomContent from "./BottomContent";
import Loading from "../../components/Loading Component/Loading";

function Unique({ teams, positionData, brands }) {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [laptopsInfo, setLaptopsInfo] = useState([]);

  useEffect(() => {
    const getUniqueLaptopData = async function () {
      const response = await axios.get(
        `https://pcfy.redberryinternship.ge/api/laptop/${params.uniqueID}?token=147a7c5bc30931049a575e1d26483d48`
      );
      const data = response.data.data;
      setLaptopsInfo(data);
      setIsLoading(false);
    };
    getUniqueLaptopData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  //filter data

  const filterTeams = teams.filter(
    (teamID) => teamID.id === laptopsInfo.user.team_id
  );

  const filterPosition = positionData.filter(
    (positionID) => positionID.id === laptopsInfo.user.position_id
  );

  const filterLaptopBrand = brands.filter(
    (brandID) => brandID.id === laptopsInfo.laptop.brand_id
  );

  const phoneNumber = laptopsInfo.user.phone_number;
  const formattedNumber = [
    phoneNumber.substring(0, 4),
    phoneNumber.substring(4, 7),
    phoneNumber.substring(7, 9),
    phoneNumber.substring(9, 11),
    phoneNumber.substring(11, 13),
  ];
  const filteredNumber = formattedNumber.join(" ");

  if (laptopsInfo.laptop.state === "new") {
    laptopsInfo.laptop.state = "ახალი";
  } else if (laptopsInfo.laptop.state === "used") {
    laptopsInfo.laptop.state = "მეორადი";
  }

  return (
    <section className="unique-section">
      <div className="uniqueSection-header">
        <div className="uniqueHeader-box">
          <Link to="/list">
            <div className="prevBtn-box">
              <img src={leftArrow} className="uniqueHeader-prev" />
            </div>
          </Link>
          <h2 className="uniqueHeader-title">ლეპტოპის ინფო</h2>
        </div>

        <div className="unique-container">
          {/*  */}
          <TopContent
            laptopsInfo={laptopsInfo}
            filterTeams={filterTeams}
            filterPosition={filterPosition}
            filteredNumber={filteredNumber}
          />
          {/*  */}
          <MiddleContent
            laptopsInfo={laptopsInfo}
            filterLaptopBrand={filterLaptopBrand}
          />
          {/*  */}
          <BottomContent laptopsInfo={laptopsInfo} />
        </div>
      </div>
    </section>
  );
}

export default Unique;
