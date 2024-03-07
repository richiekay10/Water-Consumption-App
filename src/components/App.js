import React, { useState } from "react";
import Header from "./components/Header";
import ConsumptionForm from "./components/ConsumptionForm";
import ConsumptionList from "./components/ConsumptionList";

const App = () => {
  const [consumptions, setConsumptions] = useState([]);

  const addConsumption = (value) => {
    setConsumptions([...consumptions, value]);
  };

  return (
    <div>
      <Header />
      <ConsumptionForm addConsumption={addConsumption} />
      <ConsumptionList consumptions={consumptions} />
    </div>
  );
};

export default App;
