import React, { useState, useEffect } from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import { projectTitle } from "./constant";
import TransactionsList from "./TransactionsList";
import Revenue from "./Revenue";
import { Link } from "@reach/router";

export default function ExpenseTracker(props) {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    let balance = 0;
    props.transactions.map((transaction) =>
      transaction.amount > 0
        ? (income = income + Number(transaction.amount))
        : (expense = expense + Number(transaction.amount))
    );
    balance = income - Math.abs(expense);
    localStorage.setItem(
      "transactions_8750812",
      JSON.stringify(props.transactions)
    );
    setIncome(Math.abs(income));
    setExpense(Math.abs(expense));
    setBalance(balance);
  }, [props.transactions]);

  // const addTransaction = (reason, amount,date) => {
  //   const transactionItem = {
  //     date : date,
  //     reason: reason,
  //     amount: Number(amount)
  //   };
  //   setTransactions([...transactions, transactionItem]);
  //   document.getElementById("text").value = null;
  //   document.getElementById("amount").value = null;
  // };

  // const deleteTransaction = (index) => {
  //   const newTransactions = [...transactions];
  //   newTransactions.splice(index, 1);
  //   setTransactions(newTransactions);
  // };

  return (
    <>
      <h2>{projectTitle}</h2>
      <div className="container">
        <Balance balance={balance.toFixed(2)} />

        <div className="inc-exp-container">
          <Revenue
            title={"Income"}
            p_id={"money-plus"}
            p_className={"money plus"}
            amount={`+₹${income.toFixed(2)}`}
          />
          <Revenue
            title={"Expense"}
            p_id={"money-minus"}
            p_className={"money minus"}
            amount={`-₹${expense.toFixed(2)}`}
          />
        </div>

        <TransactionsList
          transactions={props.transactions}
          deleteTransaction={props.deleteTransaction}
        />

        <AddTransaction addTransaction={props.addTransaction} />
        {props.transactions && <Link to="/chart">Financial Graphs</Link>}
      </div>
    </>
  );
}
