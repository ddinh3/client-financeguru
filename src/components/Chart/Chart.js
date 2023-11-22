import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, spendings} = useGlobalContext()

    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),

        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
            },
            {
                label: 'Spendings',
                data: [
                    ...spendings.map((spendings) => {
                        const {amount} = spendings
                        return amount
                    })
                ],
                backgroundColor: 'red',
            }
        ]
    }





  return (
    <div className="chart-data">
      <Line data={data} />
    </div>
  )
}


export default Chart