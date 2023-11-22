import React from 'react'
import Chart from '../Chart/Chart'

function Dashboard() {
  return (
    <div className="dashboard">
        <h1>All Transactions</h1>
        <div className="dashboard-Container">
            <div className="dashboard-container-chart">
                <Chart />
            </div>
        </div>
    </div>
  )
}

export default Dashboard