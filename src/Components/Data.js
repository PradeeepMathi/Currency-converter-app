import { useEffect, useState } from "react";
import ForCurrency from "./ForCurrency";
import "../StylSheet/Data.css";
import axios from "axios";

export default function Data() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  function handleAmount(e) {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  }

  useEffect(() => {
    async function getExchangeRate() {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const res = await axios.get(url);
        setExchangeRate(res.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange Rate:", error);
      }
    }
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  return (
    <div className="data">
      <h1>Currency Converter</h1>
      <div className="input-container">
        <label htmlFor="amt">Amount:</label>
        <input
          onChange={handleAmount}
          type="number"
          id="amt"
          value={amount}
        />
      </div>
      <ForCurrency
        amount={amount}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        convertedAmount={convertedAmount}
      />
    </div>
  );
}
