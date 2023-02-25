import React, { useState } from "react";
// import Select from "react-select";
// import Flatpicker from "react-flatpickr";
// import moment from "moment";
// import calendarIcon from "../img/calendarcalendar-icon.svg";
// import searchIcon from "../img/search.svg";
// import flagIcon from "../img/NGflag-select.svg";
// import ReactPhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import RavenInputField from "../Reusables/RavenInputField";

const InputFields = () => {
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
        color={`black-light`}
      />
      <RavenInputField
        type={`number`}
        label={"number"}
        color={`orange-light`}
        numberPrefix="$ "
        // onChange={(e) => {
        //   console.log(e.target.value);
        // }}
      />
      <RavenInputField type={`phone`} label={"phone"} color={`purple-light`} />
      <RavenInputField type={`search`} label={"search"} color={`green-light`} />
      <RavenInputField type={`date`} label={"date"} color={`green-light`} />
      <RavenInputField type={`select`} label={"select"} color={`green-light`} />
      <RavenInputField
        type={`textarea`}
        label={"textare"}
        color={`green-light`}
        // textareaColumn="30"
        // textareaRow="10"
      />
    </div>
  );
};

export default InputFields;
