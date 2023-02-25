import React, { useState } from "react";
import Select from "react-select";
import Flatpicker from "react-flatpickr";
// import moment from "moment";
import calendarIcon from "../img/calendarcalendar-icon.svg";
import searchIcon from "../img/search.svg";
import flagIcon from "../img/NGflag-select.svg";
import { NumericFormat, PatternFormat } from "react-number-format";

const reactSelectStyleTable = {
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? "0.1rem solid #6F6F6F" : "0.1rem solid #6F6F6F",
    // backgroundColor: state.isSelected ? "#6F6F6F" : "white",
    boxShadow: state.isFocused ? "0.1rem solid #6F6F6F" : 0,
    "&:hover": {
      // border: state.isFocused ? 0 : 0
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0b8376" : "white",
  }),
};

const RavenInputField = ({
  color,
  value,
  name,
  id,
  className,
  style,
  label,
  type,
  onChange,
  placeholder,
  errorText,
  showError,
  selectOption,
  selectStyles,
  selectValue,
  disabled,
  loading,
  searchable,
  multi,
  selectClassName,
  textareaColumn,
  textareaRow,
  numberPrefix,
}) => {
  const [showPasword, setShowPassword] = useState(false);

  if (type === "phone") {
    return (
      <div className="form-group form-group__green-light">
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        <div className={`input-group input-group__${color} input-group__phone`}>
          <div className={`phone-wrap ${showError && "border-error"}`}>
            <figure className="img-box ">
              <img src={flagIcon} alt="" className="img" />
            </figure>
            <span>+234</span>
            <svg
              className="down-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
            </svg>
          </div>
          <PatternFormat
            type="text"
            className="form-input form-input_search"
            id={id}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder || "Placeholder Here"}
            format="### ### ### ##"
          />
        </div>
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className={`form-group form-group__${color}`}>
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        {/* <div className="input-group"> */}
        <textarea
          cols={textareaColumn || "30"}
          rows={textareaRow || "5"}
          style={{ resize: "unset" }}
          id={id}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder || "Placeholder Here"}
          className={`form-input ${showError && "border-error"}`}
        ></textarea>
        {/* </div> */}
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className={`form-group form-group__${color}`}>
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        <div
          className={`input-group input-group__${color} input-group__search ${
            showError && "border-error"
          }`}
        >
          <div className="seach-box">
            {" "}
            <figure className="img-box ">
              <img src={searchIcon} alt="" className="img" />
            </figure>
          </div>

          <input
            type="text"
            className="form-input form-input_search"
            id={id}
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder || "Placeholder Here"}
          />
        </div>
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }
  if (type === "date") {
    return (
      <div className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        <div className={`wrap ${showError && "border-error"}`}>
          <Flatpicker
            id={id || `cal-${label}`}
            value={value}
            onChange={(date) => {
              onChange(date);
            }}
            name={name}
            className={`form-input input-calender `}
            autoComplete="off"
            placeholder={placeholder || "Placeholder Here"}
          />
          <label className="label-calendar" htmlFor={id || `cal-${label}`}>
            <figure className="img-box">
              <img src={calendarIcon} alt="" className="img" />
            </figure>
          </label>
        </div>
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }
  if (type === "select") {
    return (
      <div className={`form-group form-group__${color} ${className}`}>
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        <Select
          placeholder={placeholder || "Placeholder Here"}
          styles={selectStyles || reactSelectStyleTable}
          //   noOptionsMessage="No Available Option"
          options={selectOption && selectOption}
          value={selectValue}
          onChange={(e) => onChange && onChange(e)}
          className={`react-select-class ${
            selectValue && "react-select-class-selected"
          } ${selectClassName} ${showError && "border-error"}`}
          isDisabled={disabled}
          isLoading={loading}
          isSearchable={searchable}
          isMulti={multi}
        />
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }
  if (type === "number") {
    return (
      <div
        className={`form-group form-group__${color} ${className}`}
        style={style}
      >
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
        {/* <div className="input-group"> */}
        <NumericFormat
          className={`form-input ${showError && "border-error"}`}
          decimalScale={3}
          decimalSeparator="."
          disabled={disabled}
          type="text"
          thousandsGroupStyle="lakh"
          allowNegative
          prefix={numberPrefix}
          thousandSeparator=","
          placeholder={placeholder || "Placeholder Here"}
          id={id}
          onChange={onChange}
          value={value}
          name={name}
        />
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }
  if (type === "password") {
    return (
      <div className={`form-group form-group__${color} form-group_password`}>
        {label && (
          <label htmlFor="" className="form-label">
            {label}
          </label>
        )}
        <div
          className={`input-group input-group__${color} ${
            showError && "border-error"
          }`}
        >
          <input
            disabled={disabled}
            type={showPasword ? "text" : "password"}
            placeholder={placeholder || "Placeholder Here"}
            className={`form-input`}
            id={id}
            onChange={onChange}
            value={value}
            name={name}
          />
          <p
            type={type}
            className="show-hide"
            onClick={() => setShowPassword(!showPasword)}
          >
            {showPasword ? "Hide" : "Show"}
          </p>
        </div>
        {showError && <p className="error-text">{errorText}</p>}
      </div>
    );
  }
  return (
    <div
      className={`form-group form-group__${color} ${className}`}
      style={style}
    >
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      {/* <div className="input-group"> */}
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder || "Placeholder Here"}
        className={`form-input ${showError && "border-error"}`}
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
      {/* </div> */}
      {showError && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default RavenInputField;
