import React from 'react';
import './SpendingsInfo.css';
import { dateFormat } from '../../utils/dateFormat';

function SpendingsInfo({
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
    <div className='spendings-Info'>
      <h5>{title}</h5>
      <p>{amount}</p>
      <p>{dateFormat(date)}</p>
      <p>{category}</p>
      <p>{type}</p>
      <p>{description}</p>
      <div className="submit-btn">
        <button className='submit-btn-add' onClick={handleDeleteClick}>
          {'Delete Spendings'}
        </button>
      </div>
    </div>
  );
}

export default SpendingsInfo;