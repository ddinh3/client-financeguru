import React from 'react';
import './IncomeInfo.css';
import { dateFormat } from '../../utils/dateFormat';

function IncomeInfo({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type
}) {
  const handleDeleteClick = () => {
    // Call the deleteItem function with the id when the button is clicked
    deleteItem(id);
  };

  return (
    <div className='income-Info'>
      <h5>{title}</h5>
      <p>{amount}</p>
      <p>{dateFormat(date)}</p>
      <p>{category}</p>
      <p>{type}</p>
      <p>{description}</p>
      <div className="submit-btn">
        <button className='submit-btn-add' onClick={handleDeleteClick}>
          {'Delete Income'}
        </button>
      </div>
    </div>
  );
}

export default IncomeInfo;

