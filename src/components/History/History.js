import React from 'react'
import { useGlobalContext } from '../../context/globalContext'

function History() {

    const {transactionHistory} = useGlobalContext();
    const [...history] = transactionHistory ();

  return (
    <div className='History'>
        <h2 className="recentHistory"></h2>
        {history.map((item) =>{
            const {_id, title, amount, type} = item
            return (
                <div key ={_id} className="historyItem">
                     <p style={{
                            color: type === 'incomes' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'spendings' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'spendings' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
            )
        })}
        </div>
  )
}

export default History