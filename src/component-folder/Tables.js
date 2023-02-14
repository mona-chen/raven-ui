import React from "react";

const Tables = () => {
  return (
    <>
      {/* table start */}
      <table className="table">
        {/* table head start */}
        <thead className="table-head">
          <tr>
            <th>one</th>
            <th>one</th>
            <th>one</th>
            <th>one</th>
          </tr>
        </thead>
        {/* table head end */}
        {/* table body start */}
        <tbody className="table-body">
          <tr className="table-row">
            <td className="table-data">detail</td>
            <td className="table-data">detail</td>
            <td className="table-data">detail</td>
            <td className="table-data">detail</td>
          </tr>
        </tbody>
        {/* table body end */}
      </table>
      {/* table end */}
    </>
  );
};

export default Tables;
