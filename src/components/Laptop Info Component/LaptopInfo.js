import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./LaptopInfo.css";

// import components
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

// api link
const cpuAPI = "https://pcfy.redberryinternship.ge/api/cpus";

function LaptopInfo({
  register,
  errors,
  laptopBrandSelectValue,
  setLaptopBrandSelectValue,
  cpuSelectValue,
  setCpuSelectValue,
  laptopSelectError,
  cpuSelectError,
  submitChecker,
  handlePrev,
  files,
  setFiles,
  setChosenBrandID,
  brands,
  selectedDate,
  setSelectedDate,
  setValues,
  values,
  setValue,
  trigger,
  uploadFileError,
}) {
  const [cpu, setCpu] = useState([]);
  const [showLaptopDropdown, setShowLaptopDropdown] = useState(false);
  const [showCpuDropdown, setShowCpuDropdown] = useState(false);

  useEffect(() => {
    const getCpuData = async function () {
      const response = await axios.get(cpuAPI);
      const data = response.data.data;
      setCpu(data);
    };
    getCpuData();
  }, []);

  const handleShowLaptopDropdown = () => {
    setShowLaptopDropdown(!showLaptopDropdown);
  };

  const handleShowCpuDropdown = () => {
    setShowCpuDropdown(!showCpuDropdown);
  };

  const handleChosenLaptop = (e, id) => {
    setShowLaptopDropdown(false);
    setLaptopBrandSelectValue(e.target.innerText);
    setChosenBrandID(id);
  };

  const handleChosenCPU = (e) => {
    setShowCpuDropdown(false);
    setCpuSelectValue(e.target.innerText);
  };

  return (
    <div className="laptopInfo-container">
      <FirstSection
        setShowLaptopDropdown={setShowLaptopDropdown}
        showLaptopDropdown={showLaptopDropdown}
        setLaptopBrandSelectValue={setLaptopBrandSelectValue}
        files={files}
        setFiles={setFiles}
        register={register}
        errors={errors}
        handleShowLaptopDropdown={handleShowLaptopDropdown}
        handleChosenLaptop={handleChosenLaptop}
        laptopBrandSelectValue={laptopBrandSelectValue}
        brands={brands}
        laptopSelectError={laptopSelectError}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
        uploadFileError={uploadFileError}
      />

      <SecondSection
        cpuSelectValue={cpuSelectValue}
        showCpuDropdown={showCpuDropdown}
        setShowCpuDropdown={setShowCpuDropdown}
        handleShowCpuDropdown={handleShowCpuDropdown}
        cpu={cpu}
        handleChosenCPU={handleChosenCPU}
        register={register}
        errors={errors}
        cpuSelectError={cpuSelectError}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />

      <ThirdSection
        register={register}
        errors={errors}
        handlePrev={handlePrev}
        submitChecker={submitChecker}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        values={values}
        setValues={setValues}
        setValue={setValue}
        trigger={trigger}
      />
    </div>
  );
}

export default LaptopInfo;
