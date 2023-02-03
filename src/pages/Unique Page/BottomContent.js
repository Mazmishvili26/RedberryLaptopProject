import React from "react";

function BottomContent({ laptopsInfo }) {
  let finallyDate;
  if (laptopsInfo.laptop.purchase_date) {
    const parsedDate = laptopsInfo.laptop.purchase_date;
    const dateArray = parsedDate.split("-");
    finallyDate = dateArray.join("/");
  }

  return (
    <div className="bottomUnique-wrapper">
      <div className="bottomUnique-container">
        <div className="bottomLeft-side">
          <ul className="bottomLeft-ul">
            <div className="bottomLeft-li-box">
              <li className="mobile-text">მდგომარეობა:</li>
              <li className="desktop-text">ლეპტოპის მდგომარეობა:</li>
              <p>{laptopsInfo.laptop.state}</p>
            </div>
            <div className="bottomLeft-li-box">
              <li>ლეპტოპის ფასი:</li>
              <p>{laptopsInfo.laptop.price}</p>
            </div>
          </ul>
        </div>
        {laptopsInfo.laptop.purchase_date && (
          <div className="bottomRight-side">
            <ul className="bottomRight-ul">
              <div className="bottomRight-li-box">
                <li>შეძენის რიცხვი:</li>
                <p>{finallyDate}</p>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BottomContent;
