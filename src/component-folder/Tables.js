import React, { useState } from "react";
import tableImg from "../img/table-icon.svg";
import editIcon from "../img/edit-icon.svg";
import actionIcon from "../img/action-icon.svg";
import RavenTable from "../Reusables/RavenTable";
import RavenTableRow from "../Reusables/RavenTableRow";

const Tables = () => {
  // const headList = [
  //   { label: "Narration", value: "narration" },
  //   { label: "Type", value: "type" },
  //   { label: "Amount", value: "amount" },
  //   { label: "Transaction Date", value: "transaction_date" },
  // ];

  const headListTwo = ["Narration", "Type", "Amount", "Transaction Date"];

  const bodyList = [
    {
      des: "Olakunle Olutayo — GTBank",
      img: tableImg,
      type: "Money Received",
      amount: "₦12,000,000.00",
      date: "5 Sept, 2022 - 5:48PM",
    },
    {
      des: "Kayode david — Uba",
      img: tableImg,
      type: "Money Sent",
      amount: "₦3,000,000.00",
      date: "5 Jan, 2022 - 5:48PM",
    },
    {
      des: "Messi Ronaldo — Access",
      img: tableImg,
      type: "Money Received",
      amount: "₦12,92,000.00",
      date: "5 Dec, 2022 - 5:48PM",
    },
  ];
  return (
    <>

      <RavenTable headerList={headListTwo} action>
        {bodyList?.map((chi, idx) => {
          const { amount, date, des, img, type } = chi;
          return (
            <RavenTableRow
              key={idx}
              rowNo={idx}
              loading={false}
              oneObj={{label: des, img: img}}
              // one={des}
              two={type}
              three={amount}
              four={date}
              action
              on
              deleteText={`Delete Payroll`}
              editText={`Edit`}
              downloadText={`download`}
              // onEdit={() => {}}
            />
          );
        })}
      </RavenTable>

      <div className="mb-20"></div>

      <h3 className="mb-20">Table Example — Striped Table</h3>

      <RavenTable headerList={headListTwo} tableStrip action>
        {bodyList?.map((chi, idx) => {
          const { amount, date, des, img, type } = chi;
          return (
            <RavenTableRow
              key={idx}
              rowNo={idx}
              loading={false}
              // oneObj={{label: des, img: img}}
              one={des}
              two={type}
              three={amount}
              four={date}
              action
              deleteText={`Delete`}
              editText={`Edit`}
              downloadText={`download`}
              // onEdit={() => {}}
            />
          );
        })}
      </RavenTable>
    </>
  );
};

export default Tables;
