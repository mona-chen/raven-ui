/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext } from 'react'

const TableContext = createContext({
  dropDownActive: '',
  setShowDropActive: (_param: any) => {},
  smallTableSelectedVal: '',
  setSmallTableSelectedVal: (_param: any) => {},
  dropDownActiveMobile: '',
  setShowDropActiveMobile: (_param: any) => {},
})

export function TableContextProvider(props: any) {
  const [dropVal, setDropVal] = useState('')
  const [dropValMobile, setDropValMobile] = useState('')
  const [selectValMobile, setSelectValMobile] = useState('')

  function setShowDropActiveFunc(param: any) {
    setDropVal(param)
    // console.log(param);
  }

  function setShowDropActiveMobileFunc(param: any) {
    setDropValMobile(param)
    // console.log("iii");
  }

  function setSmallTableSelectedValFunc(param: any) {
    // console.log('iii')
    setSelectValMobile(param)
    // console.log(param);
  }

  const context = {
    dropDownActive: dropVal,
    setShowDropActive: setShowDropActiveFunc,
    smallTableSelectedVal: selectValMobile,
    setSmallTableSelectedVal: setSmallTableSelectedValFunc,
    dropDownActiveMobile: dropValMobile,
    setShowDropActiveMobile: setShowDropActiveMobileFunc,
  }

  return <TableContext.Provider value={context}>{props.children}</TableContext.Provider>
}

export default TableContext
