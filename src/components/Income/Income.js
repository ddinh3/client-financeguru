import React, { useEffect } from "react";
import "./Income.css";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form";
import IncomeInfo from "../IncomeInfo/IncomeInfo";

function Income() {
  const { addIncome, incomes, getIncomes, deleteIncomes, totalIncome } =
    useGlobalContext();

  return (
    <div className="income-container">
      <h1>Income</h1>
      <h2 className="income-added-up">Total Income: <span className="income-added-up-green">${totalIncome()}</span></h2>
      <div className="income-form">
        <Form />{" "}
        {incomes.map((income) => {
          const { _id, title, amount, date, category, description, type } =
            income;
          return (
            <IncomeInfo
              key={_id}
              id={_id}
              title={title}    
              amount={amount}        
              date={date}
              category={category}
              description={description}
              type={type}
              deleteItem={deleteIncomes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Income;
