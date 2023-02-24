import React from "react";
import Select from "react-select";

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

const RavenTableMobile = ({
  selectValue,
  setSelectValue,
  oneObj,
  list,
  optionTable,
}) => {
  const formatHeaderListOption = (list) => {
    const newList = list.filter((chi) => chi?.value !== selectValue?.value);
    return newList;
  };

  // const formatValoneList = (list) => {

  // }

  return (
    <div className="mobile-table-wrap">
      {/* header wrap start */}
      <div className="header-wrap">
        <div className="title">{oneObj?.label}</div>
        <div className="title">
          <Select
            styles={reactSelectStyleTable}
            className="select-title"
            value={selectValue}
            options={formatHeaderListOption(optionTable)}
            onChange={(e) => {
              setSelectValue(e);
            }}
          />
        </div>
      </div>
      {/* header wrap end */}
      {/* mobile body start */}
      <div className="mobile-body">
        {list.map((chi, idx) => {
          //   const { name, amount, bank, date, type, value } = chi;
          return (
            <div key={idx} className="table-row">
              <div className="value">
                {/* <figure className="img-box">
                  <img src={arrowRightImg} alt="" className="img" />
                </figure> */}
                <div className="text-box">
                  {" "}
                  <p className="value-one">{chi[`${oneObj.value}`]}</p>
                  {/* <p className="value-two">{bank}</p> */}
                </div>
              </div>
              <div className="value">
                <div className="text-box">
                  {" "}
                  <p className="value-one ">{chi[`${selectValue.value}`]}</p>
                  <p className="value-two"></p>
                </div>
              </div>
            </div>
          );
        })}
        {/* row start */}

        {/* row-end */}
      </div>
      {/* mobile body end */}
    </div>
  );
};

export default RavenTableMobile;
