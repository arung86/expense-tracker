import React from "react";

export default function Balance(props) {
  return (
    <div style={props.balance >= 0 ? {} : { color: "#c0392b" }}>
      <h4>
        {props.balance >= 0 ? "Your Balance is :" : "You have a Deficit of :"}
      </h4>
      <h1 id="balance">{props.balance>= 0?"":"-"}₹{Math.abs(props.balance).toFixed(2)}</h1>
    </div>
  );
}
