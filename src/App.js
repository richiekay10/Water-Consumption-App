import React, { useState, useEffect } from "react";
import "./WaterConsumptionApp.css";

const WaterConsumptionApp = () => {
  const [customerName, setCustomerName] = useState("");
  const [waterConsumed, setWaterConsumed] = useState("");
  const [category, setCategory] = useState("");
  const [amountPerGallon, setAmountPerGallon] = useState(0);
  const [amountConsumed, setAmountConsumed] = useState(0);
  const [amountForProject, setAmountForProject] = useState(0);
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    const savedHistory = JSON.parse(
      localStorage.getItem("waterConsumptionHistory")
    );
    if (savedHistory) {
      setHistory(savedHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("waterConsumptionHistory", JSON.stringify(history));
  }, [history]);

  const calculateAmount = () => {
    const gallons = parseFloat(waterConsumed);

    if (isNaN(gallons) || gallons <= 0) {
      setError("Please enter a valid amount of water consumed.");
      return;
    }

    setError("");

    if (gallons <= 500) {
      setCategory("Domestic");
      setAmountPerGallon(0.15);
    } else if (gallons <= 1000) {
      setCategory("Commercial");
      setAmountPerGallon(0.25);
    } else {
      setCategory("Industrial");
      setAmountPerGallon(0.3);
    }

    const amount = gallons * amountPerGallon;
    const projectAmount = 0.02 * amount;
    const totalAmount = amount + projectAmount;

    setAmountConsumed(amount.toFixed(2));
    setAmountForProject(projectAmount.toFixed(2));
    setTotalAmountPayable(totalAmount.toFixed(2));
    setShowResult(true);
    addToHistory(customerName, waterConsumed, totalAmount);
  };

  const addToHistory = (name, gallons, amount) => {
    const newEntry = {
      customerName: name,
      waterConsumed: gallons,
      totalAmount: amount,
      timestamp: new Date().toISOString(),
    };
    setHistory([newEntry, ...history]);
  };

  const resetForm = () => {
    setCustomerName("");
    setWaterConsumed("");
    setCategory("");
    setAmountPerGallon(0);
    setAmountConsumed(0);
    setAmountForProject(0);
    setTotalAmountPayable(0);
    setShowResult(false);
    setError("");
    setShowConfirmationModal(false);
  };

  const handleConfirmation = () => {
    resetForm();
  };

  return (
    <div className="water-consumption-container">
      <h1>Water Consumption Calculator</h1>
      <form
        className="input-form"
        onSubmit={(e) => {
          e.preventDefault();
          calculateAmount();
        }}
      >
        <label>
          Customer's Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Gallons of Water Consumed:
          <input
            type="number"
            step="0.01"
            value={waterConsumed}
            onChange={(e) => setWaterConsumed(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {showResult && (
        <div className={`result-container ${category.toLowerCase()}`}>
          <h2>Results:</h2>
          <p>Customer's Name: {customerName}</p>
          <p>Gallons of Water Consumed: {waterConsumed} gallons</p>
          <p>Category: {category}</p>
          <p>Amount of Water Consumed: GHC {amountConsumed}</p>
          <p>2% for Rural Water Project: GHC {amountForProject}</p>
          <p>Total Amount Payable: GHC {totalAmountPayable}</p>
        </div>
      )}
      {showResult && (
        <button
          className="reset-button"
          onClick={() => setShowConfirmationModal(true)}
        >
          Reset
        </button>
      )}
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <p>Are you sure you want to reset the form?</p>
          <button onClick={handleConfirmation}>Yes</button>
          <button onClick={() => setShowConfirmationModal(false)}>No</button>
        </div>
      )}
      <div className="history-container">
        <h2>History:</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <p>Customer: {entry.customerName}</p>
              <p>Gallons: {entry.waterConsumed}</p>
              <p>Total Amount: GHC {entry.totalAmount}</p>
              <p>Timestamp: {new Date(entry.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WaterConsumptionApp;
