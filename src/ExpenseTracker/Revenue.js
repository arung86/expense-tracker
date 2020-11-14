import React from "react";

export default function Revenue(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p id={props.p_id} className={props.p_className}>
        {props.amount}
      </p>
    </div>
  );
}
