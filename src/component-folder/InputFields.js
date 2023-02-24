import React, { useState } from "react";
import Select from "react-select";
import Flatpicker from "react-flatpickr";
import moment from "moment";
import calendarIcon from "../img/calendarcalendar-icon.svg";
import searchIcon from "../img/search.svg";
import flagIcon from "../img/NGflag-select.svg";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import RavenInputField from "../Reusables/RavenInputField";

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
      backgroundColor: state.isSelected ? "#0b8376" : "white",
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
        alignItems: "flex-start",
      }}
    >
      <RavenInputField type={`text`} label={"text"} color={`black-light`} />
      <RavenInputField type={`email`} label={"email"} color={`black-light`} />
      <RavenInputField
        type={`password`}
        label={"password"}
        color={`green-light`}
      />
      <RavenInputField type={`number`} label={"number"} color={`green-light`} />
      <RavenInputField type={`phone`} label={"phone"} color={`green-light`} />
      <RavenInputField type={`search`} label={"search"} color={`green-light`} />
      <RavenInputField type={`date`} label={"date"} color={`green-light`} />
      <RavenInputField type={`select`} label={"select"} color={`green-light`} />
      <RavenInputField
        type={`textarea`}
        label={"textare"}
        color={`green-light`}
      />
    </div>
  );
};

export default InputFields;
