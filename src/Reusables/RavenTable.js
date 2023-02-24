import React, { useState } from "react";

const RavenTable = ({
  headerList,
  tableStrip,
  className,
  action,
  children,
}) => {
  // const [actionToShow, setActionToShow] = useState("")
  //   const getTableBodyList = (list) => {
  //     const headValues = headerList.map((chi) => chi?.value);
  //     console.log(headValues);
  //   };

  return (
    <table className={`table ${tableStrip && "table_strip"} ${className} `}>
      {/* table head start */}
      <thead className="table-head">
        <tr>
          {headerList &&
            headerList.map((chi, idx) => {
              const { label } = chi;
              return <th key={idx}>{label || chi}</th>;
            })}
          {action && <th>ACTION(S)</th>}
        </tr>
      </thead>
      {/* table head end */}
      {/* table body start */}
      <tbody className="table-body">{children}</tbody>
      {/* table body end */}
    </table>
  );
};

export default RavenTable;
