import React from "react";
import FlipMove from 'react-flip-move';

export default function TransactionsList({transactions,deleteTransaction}) {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <FlipMove duration={500}>
        {transactions.map((transaction,index)=>(
          <li key={index}  className={transaction.amount>0?"plus":"minus"}>
          {transaction.reason} <span>{transaction.amount>0?"+":"-"}₹{Math.abs(transaction.amount)}</span>
          <button value={index} onClick={(e)=>deleteTransaction(e.target.value)} className="delete-btn">x</button>
        </li>
        ))}
        </FlipMove>
      </ul>
    </>
  );
}
