import React, { useState } from "react";
import Select from "react-select";
import Flatpicker from "react-flatpickr";
import moment from "moment";
import calendarIcon from "../img/calendarcalendar-icon.svg";
import searchIcon from "../img/search.svg"

const InputFields = () => {
  const [showPasword, setShowPassword] = useState(false);
  const [selectVal, setSelectVal] = useState("");
  const [toDate, settoDate] = useState("");
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
      backgroundColor: state.isSelected ? "#222632" : "white",
    }),
  };

  const selectOption = [
    { label: "Option one", value: "1" },
    { label: "Option two", value: "2" },
    { label: "Option three", value: "3" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "2rem",
      }}
    >
      {/* form group start text */}
      <div className="form-group form-group__green">
        <label htmlFor="" className="form-label">
          Header text *{" "}
        </label>
        {/* <div className="input-group"> */}
        <input
          type="email"
          placeholder="Placeholder Here"
          className="form-input"
        />
        {/* </div> */}
        <p className="error-text">
          There is an error with the values you provided
        </p>
      </div>
      {/* form group end */}
      {/* form group start text */}
      <div className="form-group form-group__green">
        <label htmlFor="" className="form-label">
          Number
        </label>
        {/* <div className="input-group"> */}
        <input
          type="number"
          placeholder="Placeholder Here"
          className="form-input"
        />
        {/* </div> */}
        <p className="error-text">
          There is an error with the values you provided
        </p>
      </div>
      {/* form group end */}
      {/* form group start password */}
      <div className="form-group form-group__green form-group_password">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <div className="input-group input-group__green">
          <input
            type={showPasword ? "text" : "password"}
            placeholder="Placeholder Here"
            className="form-input"
          />
          <p
            onClick={() => setShowPassword(!showPasword)}
            className="show-hide"
          >
            {showPasword ? "Hide" : "Show"}
          </p>
        </div>
      </div>
      {/* form group end */}
      {/* form group start text */}
      <div className="form-group form-group__green">
        <label htmlFor="" className="form-label">
          Select
        </label>
        <Select
          styles={reactSelectStyleTable}
          noOptionsMessage="No Available Option"
          options={selectOption}
          value={selectVal}
          onChange={(e) => setSelectVal(e)}
          className={`react-select-class ${
            selectVal && "react-select-class-selected"
          }`}
        />
      </div>
      {/* form group end */}
      {/* form group start text */}
      <div className="form-group form-group__green">
        <label htmlFor="" className="form-label">
          Date
        </label>
        <div className="wrap">
          <Flatpicker
            id="calendar-input"
            value={toDate}
            onChange={(date) => {
              settoDate(moment(date[0]).format("YYYY-MM-DD"));
            }}
            name="to"
            className="form-input input-calender"
            autoComplete="off"
            placeholder="DD / MM / YYYY"
          />
          <label className="label-calendar" htmlFor="calendar-input">
            <figure className="img-box">
              <img src={calendarIcon} alt="" className="img" />
            </figure>
          </label>
        </div>
      </div>
      {/* form group end */}
      {/* form group start text */}
      <div className="form-group form-group__green">
        <label htmlFor="" className="form-label">&nbsp;</label>
        <div className="input-group input-group__green">
            <div className="seach-box">   <figure className="img-box ">
            <img src={searchIcon} alt="" className="img" />
          </figure></div>
       
          <input
            type="text"
            placeholder="Search"
            className="form-input"
          />
        </div>
      </div>
      {/* form group end */}
      {/* form group start text */}
      <div className="form-group form-group__green">
        <label htmlFor="" className="form-label">
          Textarea
        </label>
        {/* <div className="input-group"> */}
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          style={{ resize: "unset" }}
          placeholder="Placeholder Here"
          className="form-input"
        ></textarea>
        {/* </div> */}
        <p className="error-text">
          There is an error with the values you provided
        </p>
      </div>
      {/* form group end */}
    </div>
  );
};

export default InputFields;
