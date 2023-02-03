import React from "react";

// import components

import InputBox from "./InputBox";

function UserInfo({ register, errors, setValues, values, setValue, trigger }) {
  return (
    <div className="user-info-wrapper">
      <InputBox
        htmlFor="firstName"
        labelValue="სახელი"
        errorsValue="firstName"
        type="text"
        name="firstName"
        placeholder="სახელი"
        registerValue="firstName"
        requiredError="მოცემული ველი სავალდებულოა"
        minLengthError="გამოიყენე მინიმუმ 2 ასო"
        patternError="გამოიყენე ქართული ასოები"
        patternErrorValue={/^[\u10A0-\u10FF\s]+$/}
        defaultErrorMsg="მინიმუმ 2 სიმბოლო, ქართული ასოები"
        register={register}
        errors={errors}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />

      <InputBox
        htmlFor="lastName"
        labelValue="გვარი"
        errorsValue="lastName"
        type="text"
        name="lastName"
        placeholder="გვარი"
        registerValue="lastName"
        requiredError="მოცემული ველი სავალდებულოა"
        minLengthError="გამოიყენე მინიმუმ 2 ასო"
        patternError="გამოიყენე ქართული ასოები"
        patternErrorValue={/^[\u10A0-\u10FF\s]+$/}
        defaultErrorMsg="მინიმუმ 2 სიმბოლო, ქართული ასოები"
        register={register}
        errors={errors}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />
    </div>
  );
}

export default UserInfo;
