
import React, { useState } from "react";
import './App.css';

const SimpleCalc = () => {
  const [sales, setSales] = useState("");

  const calculateCommission = (amount) => {
    if (amount <= 100000) {
      return amount * 0.03;
    } else {
      return amount * 0.05;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setSales(value);
    }
  };

  const numSales = Number(sales) || 0;
  const commission = numSales > 0 ? calculateCommission(numSales) : 0;

  return (
    <div class="container">
      <h1 class="title">My Comm-s Calc</h1>
      <label class="label">
        Enter Sales Amount:
        <input type="text"
          value={sales}
          onChange={handleChange}
          placeholder="Enter sales amount"
          class="input"
        />
      </label>
      <div class="result">
        <strong>Commission: </strong> ksh{commission.toFixed(2)}
      </div>
    </div>
  );
};

export default SimpleCalc;