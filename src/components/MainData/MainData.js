import React, { useEffect } from "react";
import "./MainData.css";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/History";
// import Chart from "../Chart/Chart";



function MainData() {
  const { totalIncome, totalSpendings, getIncomes, getSpendings } = useGlobalContext();
  useEffect(() => {
    getIncomes()
    getSpendings()
}, [])

  return (
    <div className="maindata">
      <h1>All Transactions</h1>

      <div className="maindata-amount-containers">
        <div className="maindata-income"></div>
        <h2 className="maindata-income-h">Total Income</h2>
        <p className="maindata-income-hp">${totalIncome()}</p>
      </div>
      <div className="maindata-Spendings">
        <h2 className="maindata-Spendings-h">Total Spendings</h2>
        <p className="maindata-Spendings-hp">${totalSpendings()}</p>
      </div>
      <div className="maindata-balance">
        <h2 className="maindata-balance-h">Balance</h2>
        <p className="maindata-balance-hp">${totalIncome() - totalSpendings()}</p>
</div>
    </div>
  );
}

export default MainData;
