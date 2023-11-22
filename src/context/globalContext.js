import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [spendings, setSpendings] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes    

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-Income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-Income`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncomes = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-Income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addSpendings = async (income) => {
        const response = await axios.post(`${BASE_URL}add-Spendings`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getSpendings()
    }

    const getSpendings = async () => {
        const response = await axios.get(`${BASE_URL}get-Spendings`)
        setSpendings(response.data)
        console.log(response.data)
    }

    const deleteSpendings = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-Spendings/${id}`)
        getSpendings()
    }

    const totalSpendings = () => {
        let totalIncome = 0;
        spendings.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalSpendings()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...spendings]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncomes,
            spendings,
            totalIncome,
            addSpendings,
            getSpendings,
            deleteSpendings,
            totalSpendings,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}