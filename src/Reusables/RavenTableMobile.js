import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import TableContext, { TableContextProvider } from "../context/TableContext";

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
  defaultOptionTwo,
  defaultOptionOne,
  list,
  filterOption,
}) => {
    
  const tableCtx = useContext(TableContext);
  const [selectValue, setSelectValue] = useState();
  const formatHeaderListOption = (listVal) => {
    const newList = listVal?.filter(
      (chi) =>
        chi?.value !== selectValue?.value 
    );
    return newList;
  };

 
  useEffect(() => {
    tableCtx?.setSmallTableSelectedVal(defaultOptionTwo);
    // console.log(defaultOptionOne);
    // console.log("yes");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultOptionTwo]);

  return (
      <div className="mobile-table-wrap">
        {/* header wrap start */}
        <div className="header-wrap">
          <div className="title">{defaultOptionOne?.label}</div>
          <div className="title">
            <Select
              styles={reactSelectStyleTable}
              className="select-title"
              value={selectValue || defaultOptionTwo}
              options={formatHeaderListOption(filterOption)}
              onChange={(e) => {
                // console.log(e);
                // tableCtx?.setShowDropActiveMobile()
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
                    <p className="value-one">
                      {chi[`${defaultOptionOne?.value}`]}
                    </p>
                    {/* <p className="value-two">{bank}</p> */}
                  </div>
                </div>
                <div className="value">
                  <div className="text-box">
                    {" "}
                    <p className="value-one ">
                      {
                        chi[
                          `${
                            selectValue?.value ||
                            defaultOptionTwo?.value
                          }`
                        ]
                      }
                    </p>
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
