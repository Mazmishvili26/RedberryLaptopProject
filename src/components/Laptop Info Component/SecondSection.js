import React from "react";

// import assets
import radioError from "../../assets/radioError.png";

// import components
import Select from "../Employee Info Component/Select";
import InputBox from "../Employee Info Component/InputBox";

function SecondSection({
  cpuSelectValue,
  showCpuDropdown,
  setShowCpuDropdown,
  handleShowCpuDropdown,
  cpu,
  handleChosenCPU,
  register,
  errors,
  cpuSelectError,
  setValues,
  values,
  setValue,
  trigger,
}) {
  return (
    <section className="second-section">
      <div className="secondSection-container">
        <div className="top-wrapper">
          <Select
            selectValue={cpuSelectValue}
            selectDefaultValue="CPU"
            showDropdownState={showCpuDropdown}
            setShowDropdownState={setShowCpuDropdown}
            showDropdownFunction={handleShowCpuDropdown}
            data={cpu}
            handleChosenItem={handleChosenCPU}
            register={register}
            errors={errors}
            selectError={cpuSelectError}
          />
          <div className="cpuCore-inputbox">
            <InputBox
              htmlFor="cpuCore"
              labelValue="CPU-ს ბირთვი"
              errorsValue="cpuCore"
              type="text"
              name="cpuCore"
              placeholder="14"
              registerValue="cpuCore"
              requiredError="მოცემული ველი სავალდებულოა"
              minLengthError="გამოიყენე მინიმუმ 2 ასო"
              patternError="გამოიყენე მხოლოდ ციფრები"
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

          <div className="cpuThread-inputbox">
            <InputBox
              htmlFor="cpuThread"
              labelValue="CPU-ს ნაკადი"
              errorsValue="cpuThread"
              type="text"
              name="cpuThread"
              placeholder="365"
              registerValue="cpuThread"
              requiredError="მოცემული ველი სავალდებულოა"
              minLengthError="გამოიყენე მინიმუმ 2 ასო"
              patternError="გამოიყენე მხოლოდ ციფრები"
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
        </div>

        <div className="bottom-wrapper">
          <InputBox
            htmlFor="laptopRam"
            labelValue="ლეპტოპის RAM (GB)"
            errorsValue="laptopRam"
            type="text"
            name="laptopRam"
            placeholder="16"
            registerValue="laptopRam"
            requiredError="მოცემული ველი სავალდებულოა"
            minLengthError="გამოიყენე მინიმუმ 2 ასო"
            patternError="გამოიყენე მხოლოდ ციფრები"
            patternErrorValue={/^\d+$/}
            defaultErrorMsg="მხოლოდ ციფრები"
            register={register}
            errors={errors}
            values={values}
            setValues={setValues}
            setValue={setValue}
            trigger={trigger}
          />
          <div className="memoryRadio-container">
            <div className="radio-title">
              <label
                className={
                  errors.memoryType
                    ? "memoryType-title memory-error"
                    : "memoryType-title"
                }
              >
                მეხსიერების ტიპი
              </label>
              {errors.memoryType && (
                <img src={radioError} className="radioError-img" />
              )}
            </div>
            <div className="memoryRadio-wrapper">
              <div className="radio-box">
                <input
                  type="radio"
                  id="radio-input"
                  name="memoryType"
                  value="SSD"
                  {...register("memoryType", {
                    required: { message: "aucilebelia", value: true },
                  })}
                />{" "}
                SSD
              </div>
              <div className="radio-box">
                <input
                  type="radio"
                  id="radio-input"
                  name="memoryType"
                  value="HDD"
                  {...register("memoryType", {
                    required: { message: "aucilebelia", value: true },
                  })}
                />{" "}
                HDD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
