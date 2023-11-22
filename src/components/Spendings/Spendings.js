import React, { useEffect } from "react";
import "./Spendings.css";
import { useGlobalContext } from "../../context/globalContext";
import SpendingsForm from "../SpendingsForm/SpendingsForm";
import SpendingsInfo from "../SpendingsInfo/SpendingsInfo";

function Spendings() {
  const { addSpendings, spendings, getSpendings, deleteSpendings, totalSpendings } =
    useGlobalContext();

  return (
    <div className="spendings-container">
      <h1>Spendings</h1>
      <h2 className="spendings-added-up">Total Expense: <span className="spendings-added-up-red">${totalSpendings()}</span></h2>
      <div className="spendings-form">
        <SpendingsForm />{" "}
        {spendings.map((income) => {
          const { _id, title, amount, date, category, description, type } =
            income;
          return (
            <SpendingsInfo
              key={_id}
              id={_id}
              title={title}    
              amount={amount}        
              date={date}
              category={category}
              description={description}
              type={type}
              deleteItem={deleteSpendings}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Spendings;
