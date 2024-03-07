import React, { useState } from "react";

const ConsumptionForm = ({ addConsumption }) => {
  const [consumption, setConsumption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (consumption.trim() !== "") {
      addConsumption(parseFloat(consumption));
      setConsumption("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Consumption (kWh):
        <input
          type="number"
          step="0.01"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
        />
      </label>
      <button type="submit">Add Consumption</button>
    </form>
  );
};

export default ConsumptionForm;
