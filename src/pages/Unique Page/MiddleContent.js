import React from "react";

function MiddleContent({ laptopsInfo, filterLaptopBrand }) {
  return (
    <div className="middleUnique-wrapper">
      <div className="middleUnique-container">
        {/*  */}
        <div className="middleLeft-side">
          <ul className="middleLeft-ul">
            <div className="middleLeft-li-box">
              <li>ლეპტოპის სახელი:</li>
              <p>{laptopsInfo.laptop.name}</p>
            </div>
            <div className="middleLeft-li-box">
              <li>ლეპტოპის ბრენდი:</li>
              <p>{filterLaptopBrand[0]?.name}</p>
            </div>
            <div className="middleLeft-li-box">
              <li>RAM:</li>
              <p>{laptopsInfo.laptop.ram}</p>
            </div>
            <div className="middleLeft-li-box">
              <li>მეხსიერების ტიპი:</li>
              <p>{laptopsInfo.laptop.hard_drive_type}</p>
            </div>
          </ul>
        </div>
        {/*  */}
        <div className="middleRight-side">
          <ul className="middleRight-ul">
            <div className="middleRight-li-box">
              <li>CPU:</li>
              <p>{laptopsInfo.laptop.cpu.name}</p>
            </div>
            <div className="middleRight-li-box">
              <li>CPU-ს ბირთვი:</li>
              <p>{laptopsInfo.laptop.cpu.cores}</p>
            </div>
            <div className="middleRight-li-box">
              <li>CPU-ს ნაკადი:</li>
              <p>{laptopsInfo.laptop.cpu.threads}</p>
            </div>
          </ul>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default MiddleContent;
