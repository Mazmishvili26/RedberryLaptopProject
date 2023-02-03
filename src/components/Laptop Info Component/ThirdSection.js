import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

// import assets
import radioError from "../../assets/radioError.png";

// import components
import InputBox from "../Employee Info Component/InputBox";

function ThirdSection({
  register,
  errors,
  handlePrev,
  submitChecker,
  selectedDate,
  setSelectedDate,
  setValues,
  values,
  setValue,
  trigger,
}) {
  return (
    <section className="third-section">
      <div className="thirdSection-container">
        <div className="firstLaptop-box">
          {" "}
          <div>
            <label className="date-title">შეძენის რიცხვი (არჩევითი)</label>
            <ReactDatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="დდ / თთ / წწწწ"
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableMonthYearDropdown
            />
          </div>
          <InputBox
            htmlFor="laptopPrice"
            labelValue="ლეპტოპის ფასი"
            errorsValue="laptopPrice"
            type="text"
            name="laptopPrice"
            placeholder="0000"
            registerValue="laptopPrice"
            requiredError="მოცემული ველი სავალდებულოა"
            minLengthError="გამოიყენე მინიმუმ 2 ასო"
            patternError="მხოლოდ ციფრები"
            patternErrorValue={/^\d+$/}
            defaultErrorMsg="მხოლოდ ციფრები"
            register={register}
            errors={errors}
            values={values}
            setValues={setValues}
            setValue={setValue}
            trigger={trigger}
          />
        </div>
        <div className="laptopState-box">
          <div className="radio-title">
            <label
              className={
                errors.laptopState
                  ? "laptopState-title laptopState-error"
                  : "laptopState-title"
              }
            >
              ლეპტოპის მდგომარეობა
            </label>
            {errors.laptopState && (
              <img src={radioError} className="radioError-img" />
            )}
          </div>
          <div className="laptopState-container">
            <div className="radio-box">
              <input
                type="radio"
                name="laptopState"
                value="new"
                id="radio-input"
                {...register("laptopState", { required: true })}
              />
              ახალი
            </div>
            <div className="radio-box">
              <input
                type="radio"
                name="laptopState"
                value="used"
                id="radio-input"
                {...register("laptopState", { required: true })}
              />
              მეორადი
            </div>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <button type="button" className="prev-btn" onClick={handlePrev}>
          უკან
        </button>
        <button type="submit" onClick={submitChecker} className="submit-btn">
          დამახსოვრება
        </button>
      </div>
    </section>
  );
}

export default ThirdSection;
