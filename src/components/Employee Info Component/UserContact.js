import React from "react";

// import components
import InputBox from "./InputBox";

function UserContact({
  register,
  errors,
  setValues,
  values,
  setValue,
  trigger,
}) {
  return (
    <div className="user-contactInfo-wrapper">
      <InputBox
        htmlFor="email"
        labelValue="მეილი"
        errorsValue="email"
        type="email"
        name="email"
        placeholder="nick.mazmishvili@redberry.ge"
        registerValue="email"
        requiredError="მოცემული ველი სავალდებულოა"
        minLengthError="გამოიყენე მინიმუმ 2 ასო"
        patternError="აუცილებელია მთავრდებოდეს @redberry.ge-ით"
        patternErrorValue={/[a-z0-9]+@redberry.ge$/}
        defaultErrorMsg="უნდა მთავრდებოდეს @redberry.ge-ით"
        register={register}
        errors={errors}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />

      <InputBox
        htmlFor="phoneNumber"
        labelValue="ტელეფონის ნომერი"
        errorsValue="phoneNumber"
        type="text"
        name="phoneNumber"
        placeholder="+995 593 20 99 77"
        registerValue="phoneNumber"
        requiredError="მოცემული ველი სავალდებულოა"
        minLengthError="გამოიყენე მინიმუმ 2 ასო"
        patternError="გამოიყენე ქართული მობ-ნომრის ფორმატი"
        patternErrorValue={/^(\+995)(79\d{7}|5\d{8})$/}
        defaultErrorMsg="ქართული მობ-ნომრის ფორმატი"
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

export default UserContact;
