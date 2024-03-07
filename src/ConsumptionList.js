import React from "react";

const ConsumptionList = ({ consumptions }) => {
  return (
    <ul>
      {consumptions.map((consumption, index) => (
        <li key={index}>{consumption} kWh</li>
      ))}
    </ul>
  );
};

export default ConsumptionList;
