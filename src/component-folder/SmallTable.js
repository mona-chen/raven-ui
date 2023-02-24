import React, { useState } from "react";
import Select from "react-select";
import arrowRightImg from "../img/table-icon.svg";
import RavenTableMobile from "../Reusables/RavenTableMobile";

const SmallTable = () => {
  const [selectValue, setSelectValue] = useState({
    label: "amount",
    value: "amount",
  });
  const reactSelectStyleTable = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // backgroundColor: state.isSelected ? "#6F6F6F" : "white",
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        // border: state.isFocused ? 0 : 0
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0b8376" : "white",
    }),
  };

  const optionTable = [
    { label: "Date", value: "date" },
    { label: "Type", value: "type" },
    { label: "Value", value: "value" },
    { label: "Direction", value: "Direction" },
    {
      label: "Amount",
      value: "amount",
    },
  ];

  const testList = [
    {
      narration: "timi test",
      bank: "gtb",
      amount: "#120,920",
      date: "12/03/1995",
      type: "debit",
      value: "keke",
    },
    {
      narration: "tayo test",
      bank: "zenith",
      amount: "#92,830",
      date: "12/03/1995",
      type: "debit",
      value: "keke",
    },
    {
      narration: "nonso test",
      bank: "raven",
      amount: "#5,180",
      date: "12/03/1995",
      type: "debit",
      value: "keke",
    },
    {
      narration: "bolu test",
      bank: "uba",
      amount: "#67,140",
      date: "12/03/1995",
      type: "debit",
      value: "keke",
    },
  ];

  const formatHeaderListOption = (list) => {
    const newList = list.filter((chi) => chi?.value !== selectValue?.value);
    return newList;
  };

  return (
    <>

      <RavenTableMobile
        oneObj={{ label: "NARRATION", value: "narration" }}
        optionTable={optionTable}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        list={testList}
      />
    </>
  );
};

export default SmallTable;
