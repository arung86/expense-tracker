import React, { useState } from "react";

export default function AddTransaction(props) {
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <h3>Add new transaction</h3>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            reason: reason,
            amount: amount,
            date: date
          };
          props.addTransaction(data);
          document.getElementById("text").value = null;
          document.getElementById("amount").value = null;
          document.getElementById("date").value = null;
          setReason(null);
          setAmount(null);
          setDate(null)
        }}
      >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            required
            id="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            required
            value={amount}
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <input
            type="date"
            required
            value={date}
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
