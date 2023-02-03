import React from "react";

// import components

import UploadPhoto from "./UploadPhoto";
import Select from "../Employee Info Component/Select";
import InputBox from "../Employee Info Component/InputBox";

function FirstSection({
  setShowLaptopDropdown,
  showLaptopDropdown,
  files,
  setFiles,
  register,
  errors,
  handleShowLaptopDropdown,
  handleChosenLaptop,
  laptopBrandSelectValue,
  brands,
  laptopSelectError,
  getValues,
  setValues,
  values,
  setValue,
  trigger,
  uploadFileError,
}) {
  return (
    <section className="first-section">
      <UploadPhoto
        files={files}
        setFiles={setFiles}
        values={values}
        setValues={setValues}
        setValue={setValue}
        getValues={getValues}
        uploadFileError={uploadFileError}
      />

      <div
        className="laptopInfo-wrapper"
        id={files ? "photo-added" : undefined}
      >
        <InputBox
          htmlFor="laptopName"
          labelValue="ლეპტოპის სახელი"
          errorsValue="laptopName"
          type="text"
          name="laptopName"
          placeholder="HP"
          registerValue="laptopName"
          requiredError="მოცემული ველი სავალდებულოა"
          minLengthError="გამოიყენე მინიმუმ 2 ასო"
          patternError="მხოლოდ ლათინური ასოები , ციფრები, !@#$%^&*.."
          patternErrorValue={/^[a-zA-Z0-9 !@#\$%\^&\*\(\)\_\+=]+$/}
          defaultErrorMsg="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
          register={register}
          errors={errors}
          values={values}
          setValues={setValues}
          setValue={setValue}
          trigger={trigger}
        />

        <Select
          selectValue={laptopBrandSelectValue}
          selectDefaultValue="ლეპტოპის ბრენდი"
          showDropdownState={showLaptopDropdown}
          setShowDropdownState={setShowLaptopDropdown}
          showDropdownFunction={handleShowLaptopDropdown}
          data={brands}
          handleChosenItem={handleChosenLaptop}
          register={register}
          errors={errors}
          selectError={laptopSelectError}
        />
      </div>
    </section>
  );
}

export default FirstSection;
