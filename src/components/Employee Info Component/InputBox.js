import React from "react";

// import asset
import money from "../../assets/Money.png";

function InputBox({
  register,
  errors,
  htmlFor,
  errorsValue,
  type,
  name,
  placeholder,
  registerValue,
  requiredError,
  minLengthError,
  patternError,
  patternErrorValue,
  labelValue,
  defaultErrorMsg,
  setValues,
  values,
  setValue,
  trigger,
}) {
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setValue(registerValue, e.target.value);
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <div className="input-box">
      <label
        htmlFor={htmlFor}
        className={
          errors[errorsValue] ? "input-label label-error" : "input-label"
        }
      >
        {labelValue}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        {...register(registerValue, {
          required: { message: requiredError, value: true },
          ...(registerValue !== "email" &&
            registerValue !== "phoneNumber" &&
            registerValue !== "cpuCore" &&
            registerValue !== "laptopName" &&
            registerValue !== "cpuThread" &&
            registerValue !== "laptopRam" &&
            registerValue !== "laptopPrice" && {
              minLength: { message: minLengthError, value: 2 },
            }),
          pattern: {
            message: patternError,
            value: patternErrorValue,
          },
        })}
        onBlur={() => handleBlur(registerValue)}
        onChange={handleChange}
        className={errors[errorsValue] && "input-error"}
      />
      <h4 className="input-validator">
        {errors[errorsValue] ? (
          <p className="errors-msg">{errors[errorsValue].message}</p>
        ) : (
          defaultErrorMsg
        )}
      </h4>
      {registerValue === "laptopPrice" && (
        <img src={money} className="laptopPrice" />
      )}
    </div>
  );
}

export default InputBox;
