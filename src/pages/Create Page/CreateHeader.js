import React from "react";

import firstLine from "../../assets/firstLine.png";
import secondLine from "../../assets/secondLine.png";
import leftArrow from "../../assets/leftArrow.png";

function CreateHeader({ handlePrev, step, setStep, handleNext }) {
  return (
    <div className="create-header">
      {/*  */}
      <div className="mobile-header">
        <img src={leftArrow} className="leftArrow-icon" onClick={handlePrev} />
        <div className="header-info">
          <h2 className="create-header-title">
            {step === 0 ? "თანამშრომლების ინფო" : "ლეპტოპის მახასიათებლები"}
          </h2>
          <span className="header-step-counter">
            {step === 0 ? "1/2" : "2/2"}
          </span>
        </div>
      </div>
      {/*  */}
      <div className="desktop-header">
        <div className="desktop-header-container">
          <div className="prev-btn-box" onClick={handlePrev}>
            <img src={leftArrow} />
          </div>
        </div>

        <div className="navigate-container">
          <div className="navigate-title-box">
            <p className="navigate-title" onClick={() => setStep(0)}>
              თანამშრომლის ინფო
            </p>
            {step === 0 && <img src={firstLine} className="header-line-img" />}
          </div>
          <div className="navigate-title-box">
            <p className="navigate-title laptop" onClick={handleNext}>
              ლეპტოპის მახასიათებლები
            </p>
            {step === 1 && <img src={secondLine} className="header-line-img" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateHeader;
