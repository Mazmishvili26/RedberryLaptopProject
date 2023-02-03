import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Create.css";

// import components
import EmployeeInfo from "../../components/Employee Info Component/EmployeeInfo";
import LaptopInfo from "../../components/Laptop Info Component/LaptopInfo";
import CreateHeader from "./CreateHeader";

// import assets
import logo2 from "../../assets/logo2.png";

function Create({ teams, positionData, brands }) {
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem("formValues")) || {}
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    defaultValues: values,
  });

  const [step, setStep] = useState(0);

  const [formChecked, setFormChecked] = useState(false);
  // selectedDated state
  const [selectedDate, setSelectedDate] = useState(null);

  // customSelectbox values
  const [teamSelectValue, setTeamSelectValue] = useState("");
  const [positionSelectValue, setPositionSelectValue] = useState("");
  const [laptopBrandSelectValue, setLaptopBrandSelectValue] = useState("");
  const [cpuSelectValue, setCpuSelectValue] = useState("");

  // selectID states
  const [selectPositionID, setSelectPositionID] = useState(null);
  const [chosenTeamID, setChosenTeamID] = useState(null);
  const [chosenBrandID, setChosenBrandID] = useState(null);

  // filesUpload state
  const [files, setFiles] = useState("");

  // customSelectbox errorHandler
  const [laptopSelectError, setLaptopSelectError] = useState(false);
  const [teamSelectError, setTeamSelectError] = useState(false);
  const [positionSelectError, setPositionSelectError] = useState(false);
  const [cpuSelectError, setCpuSelectError] = useState(false);
  const [uploadFileError, setUploadFileError] = useState(null);

  const navigate = useNavigate();

  const handlePrev = () => {
    if (step == 1) {
      setStep(step - 1);
    }

    if (step == 0) {
      navigate("/");
    }
  };

  // toGoStep2 validations

  useEffect(() => {
    if (teamSelectError && teamSelectValue) {
      setTeamSelectError(false);
    }
    if (positionSelectError && positionSelectValue) {
      setPositionSelectError(false);
    }

    if (laptopSelectError && laptopBrandSelectValue) {
      setLaptopSelectError(false);
    }

    if (cpuSelectError && cpuSelectValue) {
      setCpuSelectError(false);
    }

    if (formChecked && teamSelectValue && !positionSelectValue) {
      setPositionSelectError(true);
    }
  }, [
    teamSelectValue,
    positionSelectValue,
    laptopBrandSelectValue,
    cpuSelectValue,
  ]);

  const handleNext = useCallback(() => {
    setFormChecked(true);

    // customSelectbox checker
    if (step === 0 && !teamSelectValue) {
      setStep(0);
      setTeamSelectError(true);
    } else {
      setTeamSelectError(false);
    }

    if (step === 0 && teamSelectValue && !positionSelectValue) {
      setPositionSelectError(true);
      setStep(0);
    }
    if (step === 0 && teamSelectValue && positionSelectValue) {
      setPositionSelectError(false);
    }

    if (step === 0) {
      handleSubmit((data) => {
        if (step === 0) {
          setStep(step + 1);
        }
        if (!positionSelectValue) {
          setStep(0);
        }
      })();
    }
  }, [teamSelectValue, positionSelectValue]);

  // toGoStep2 validations

  // --------------------------

  // submit function / checker

  const submitChecker = () => {
    if (step === 1 && !laptopBrandSelectValue) {
      setStep(1);
      setLaptopSelectError(true);
    } else {
      setLaptopSelectError(false);
    }

    if (step === 1 && !cpuSelectValue) {
      setStep(1);
      setCpuSelectError(true);
    } else {
      setCpuSelectError(false);
    }

    if (step === 1 && !files) {
      setStep(1);
      setUploadFileError(true);
    } else {
      setUploadFileError(false);
    }
  };

  // formatDate function
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  }

  // formatDate function

  const onSubmit = (data) => {
    if (laptopBrandSelectValue && cpuSelectValue && !uploadFileError) {
      axios
        .post(
          "https://pcfy.redberryinternship.ge/api/laptop/create/",
          {
            name: data.firstName,
            surname: data.lastName,
            team_id: chosenTeamID,
            position_id: selectPositionID,
            phone_number: data.phoneNumber,
            email: data.email,
            token: "147a7c5bc30931049a575e1d26483d48",
            laptop_name: data.laptopName,
            laptop_image: files[0],
            laptop_brand_id: chosenBrandID,
            laptop_cpu: cpuSelectValue,
            laptop_cpu_cores: data.cpuCore,
            laptop_cpu_threads: data.cpuThread,
            laptop_ram: data.laptopRam,
            laptop_hard_drive_type: data.memoryType,
            laptop_state: data.laptopState,
            laptop_purchase_date: selectedDate && formatDate(selectedDate),
            laptop_price: data.laptopPrice,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((resp) => {
          navigate("/success");
          localStorage.clear();
        })
        .catch((err) =>
          alert(`დაფიქსირდა შეცდომა მიზეზი : ${err.response.data.message}`)
        );
    }
  };

  // -------------------------------

  // for localStorage
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(values));
  }, [values]);

  return (
    <section className="create-section">
      <CreateHeader
        handlePrev={handlePrev}
        step={step}
        setStep={setStep}
        handleNext={handleNext}
      />
      {/*  */}
      <div
        className={step === 1 ? "create-container step-2" : "create-container"}
      >
        {step === 0 && (
          <form onSubmit={handleSubmit}>
            <EmployeeInfo
              register={register}
              errors={errors}
              teamSelectValue={teamSelectValue}
              setTeamSelectValue={setTeamSelectValue}
              positionSelectValue={positionSelectValue}
              setPositionSelectValue={setPositionSelectValue}
              teamSelectError={teamSelectError}
              positionSelectError={positionSelectError}
              setSelectPositionID={setSelectPositionID}
              chosenTeamID={chosenTeamID}
              setChosenTeamID={setChosenTeamID}
              teams={teams}
              positionData={positionData}
              values={values}
              setValues={setValues}
              setValue={setValue}
              trigger={trigger}
            />
            <div className="create-btn-container">
              {step === 0 && (
                <button type="button" onClick={handleNext} className="next-btn">
                  შემდეგი
                </button>
              )}
            </div>
          </form>
        )}
        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <LaptopInfo
              register={register}
              errors={errors}
              laptopBrandSelectValue={laptopBrandSelectValue}
              setLaptopBrandSelectValue={setLaptopBrandSelectValue}
              cpuSelectValue={cpuSelectValue}
              setCpuSelectValue={setCpuSelectValue}
              laptopSelectError={laptopSelectError}
              cpuSelectError={cpuSelectError}
              submitChecker={submitChecker}
              handlePrev={handlePrev}
              files={files}
              setFiles={setFiles}
              setChosenBrandID={setChosenBrandID}
              brands={brands}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              values={values}
              setValues={setValues}
              setValue={setValue}
              trigger={trigger}
              uploadFileError={uploadFileError}
            />
          </form>
        )}
      </div>
      {/*  */}
      <img src={logo2} className="logo2-img" />
    </section>
  );
}
export default Create;
