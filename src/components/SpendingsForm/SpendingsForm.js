import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import '../Form/Form.css';
// import Button from '../Button/Button';


function SpendingsForm() {
    const {addSpendings, getSpendings, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addSpendings(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-controls">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Where did you spend?"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-controls">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'How much?'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="Bills">Bill</option>
                    <option value="Rent">Rent</option>
                    <option value="Restaurant">Fast-Food</option>
                    <option value="Gas">Gas</option>
                    <option value="Donation">Charity</option>
                    <option value="Subscriptions">subscriptions</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Note' id="description" cols="30" rows="3" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button className='submit-btn-add'>{'Add Spendings'}</button>
            </div>
    </form>
  );
}
export default SpendingsForm;
