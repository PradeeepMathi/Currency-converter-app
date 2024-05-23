import Result from "./Result";

export default function ToCurrency({
  amount,
  fromCurrency,
  toCurrency,
  setToCurrency,
  convertedAmount
}) {
  return (
    <>
      <div className="input-container">
        <label htmlFor="toCurrency">To Currency</label>
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          id="toCurrency"
          value={toCurrency}
        >
          <option value="USD">USD - United States Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound Sterling</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CNY">CNY - Chinese Yuan</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="BRL">BRL - Brazilian Real</option>
          <option value="ZAR">ZAR - South African Rand</option>
        </select>
      </div>
      <Result
        amount={amount}
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        convertedAmount={convertedAmount}
      />
    </>
  );
}
