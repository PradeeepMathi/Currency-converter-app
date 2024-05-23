import Data from "./Data";
import change from "../Assets/510WmeXkLXL.png";
import "../StylSheet/CurrencyConverter.css";

export default function CurrencyConverter() {
  return (
    <>
      <div className="currency-container">
        <div className="box">
          <img src={change} alt="img" />
        </div>
        <Data />
      </div>
    </>
  );
}
