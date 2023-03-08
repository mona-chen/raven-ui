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
        showPasswordStrength
        color={`black-light`}
        showColor="purple-light"
      />
      <RavenInputField
        type={`number`}
        label={"number"}
        color={`orange-light`}
        numberPrefix="$ "
        thousandFormat={true}
        // onChange={(e) => {
        //   console.log(e.target.value);
        // }}
      />
      <RavenInputField
        type={`submit`}
        value={"submit"}
        label="Submit type"
        onSubmit={() => {
          console.log("yes");
        }}
        // disabled
        // loading
        color={`black-light`}
      />
      <RavenInputField type={`phone`} label={"phone"} color={`purple-light`} />
      <RavenInputField type={`search`} label={"search"} color={`green-light`} />
      <RavenInputField
        enableTime
        type={`date`}
        label={"date"}
        color={`purple-light`}
      />
      <RavenInputField
        selectOption={[{ label: "text", value: "noo" }]}
        type={`select`}
        label={"select"}
        color={`green-light`}
        // selectMenuOpen={true}
        // menuPlacement={`top`}
      />
      <RavenInputField
        type={`textarea`}
        label={"textare"}
        color={`green-light`}
        // textareaColumn="30"
        // textareaRow="10"
      />{" "}
      <RavenInputField
        type={`pin`}
        key={"resta"}
        showCountDown
        countDownTime={5000}
        label={<>&nbsp;</>}
        color={"black-light"}
      />
      <RavenInputField
        type={`upload`}
        label={`Upload an image of your address`}
        color={`black-light`}
        // labelColor={`orange-light`}
      />
       <RavenInputField
        type={`range`}
        min="0"
        max="100"
        label={`Price range`}
        color={`black-light`}
        // labelColor={`orange-light`}
      />
    </div>
  );
};

export default InputFields;
