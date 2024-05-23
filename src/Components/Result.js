export default function Result({ amount, toCurrency, fromCurrency, convertedAmount }) {
    return (
      <div className="result">
        <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
      </div>
    );
  }
  