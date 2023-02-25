import { useState, createContext } from "react";

const TableContext = createContext({
  dropDownActive: "",
  setShowDropActive: (param) => {},
  smallTableSelectedVal: "",
  setSmallTableSelectedVal: (param) => {},
  dropDownActiveMobile: "",
  setShowDropActiveMobile: (param) => {},
});

export function TableContextProvider(props) {
  const [dropVal, setDropVal] = useState("");
  const [dropValMobile, setDropValMobile] = useState("");
  const [selectValMobile, setSelectValMobile] = useState("");

  function setShowDropActiveFunc(param) {
    setDropVal(param);
    // console.log(param);
  }

  function setShowDropActiveMobileFunc(param) {
    setDropValMobile(param);
    // console.log("iii");
  }

  function setSmallTableSelectedValFunc(param) {
    console.log("iii");
    setSelectValMobile(param);
    // console.log(param);
  }

  const context = {
    dropDownActive: dropVal,
    setShowDropActive: setShowDropActiveFunc,
    smallTableSelectedVal: selectValMobile,
    setSmallTableSelectedVal: setSmallTableSelectedValFunc,
    dropDownActiveMobile: dropValMobile,
    setShowDropActiveMobile: setShowDropActiveMobileFunc,
  };

  return (
    <TableContext.Provider value={context}>
      {props.children}
    </TableContext.Provider>
  );
}

export default TableContext;
