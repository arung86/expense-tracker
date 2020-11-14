import React from "react";
import { Line } from "@ant-design/charts";

export default function Charts(props) {
  const data = props.transactions;

  const config = {
    data,
    height: 300,
    xField: "date",
    yField: "amount",
    point: {
      size: 5,
      shape: "diamond"
    },
    tooltip: {
      customContent: (title, items) => {
        return (
          <div style={{ padding: "16px 8px" }}>
            <p>{items[0] && items[0].data.reason}</p>
            <p style={props.balance >= 0 ? {} : { color: "#c0392b" }}>
              {items[0] && items[0].data.amount >= 0 ? "" : "-"}₹
              {items[0] && Math.abs(items[0].data.amount)}
            </p>
          </div>
        );
      }
    },
    label: {
      style: {
        fill: "#aaa"
      }
    }
  };
  return <Line style={{ width: "80vw", marginTop: "30px" }} {...config} />;
}
