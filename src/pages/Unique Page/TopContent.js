import React from "react";

function TopContent({
  laptopsInfo,
  filterTeams,
  filterPosition,
  filteredNumber,
}) {
  return (
    <div className="topUnique-wrapper">
      <div className="topUnique-container">
        <div className="topLeft-side">
          <img
            src={
              "https://pcfy.redberryinternship.ge/" + laptopsInfo.laptop.image
            }
          />
        </div>
        <div className="topRight-side">
          <ul className="top-ul">
            <div className="top-li-box">
              <li>სახელი:</li>
              <p>{laptopsInfo.user.name + " " + laptopsInfo.user.surname}</p>
            </div>
            <div className="top-li-box">
              <li>თიმი:</li>
              <p>{filterTeams[0]?.name}</p>
            </div>
            <div className="top-li-box">
              <li>პოზიცია:</li>
              <p>{filterPosition[0]?.name}</p>
            </div>
            <div className="top-li-box">
              <li>მეილი:</li>
              <p>{laptopsInfo.user.email}</p>
            </div>
            <div className="top-li-box">
              <li>ტელ.ნომერი:</li>
              <p>{filteredNumber}</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContent;
