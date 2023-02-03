import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EmployeeInfo.css";

// import components
import Select from "./Select";
import UserInfo from "./UserInfo";
import UserContact from "./UserContact";

function EmployeeInfo({
  register,
  errors,
  teamSelectValue,
  setTeamSelectValue,
  positionSelectValue,
  setPositionSelectValue,
  teamSelectError,
  positionSelectError,
  setSelectPositionID,
  chosenTeamID,
  setChosenTeamID,
  teams,
  positionData,
  setValues,
  values,
  setValue,
  trigger,
}) {
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showPositionDropdown, setShowPositionDropdown] = useState(false);

  const handleChosenTeamID = (e, id) => {
    setChosenTeamID(id);
    setShowTeamDropdown(false);
    setTeamSelectValue(e.target.innerText);
  };

  const filterPositionData = positionData.filter(
    (position) => position.team_id === chosenTeamID
  );

  const handleChosenPosition = (e, id) => {
    setShowPositionDropdown(false);
    setPositionSelectValue(e.target.innerText);
    setSelectPositionID(id);
  };

  const handleShowPositionDropdown = () => {
    if (teamSelectValue) {
      setShowPositionDropdown(!showPositionDropdown);
    }
  };

  const handleShowTeamDropdown = () => {
    setShowTeamDropdown(!showTeamDropdown);
  };

  return (
    <section className="employee-section">
      <UserInfo
        register={register}
        errors={errors}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />

      <div className="select-box-wrapper">
        <Select
          selectValue={teamSelectValue}
          selectDefaultValue="თიმი"
          showDropdownState={showTeamDropdown}
          setShowDropdownState={setShowTeamDropdown}
          showDropdownFunction={handleShowTeamDropdown}
          data={teams}
          handleChosenItem={handleChosenTeamID}
          register={register}
          errors={errors}
          selectError={teamSelectError}
        />
        <Select
          selectValue={positionSelectValue}
          selectDefaultValue="პოზიცია"
          showDropdownState={showPositionDropdown}
          setShowDropdownState={setShowPositionDropdown}
          showDropdownFunction={handleShowPositionDropdown}
          data={filterPositionData}
          handleChosenItem={handleChosenPosition}
          register={register}
          errors={errors}
          selectError={positionSelectError}
        />
      </div>

      {/*  */}

      <UserContact
        register={register}
        errors={errors}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />
    </section>
  );
}
export default EmployeeInfo;
