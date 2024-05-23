import ToCurrency from "./ToCurrency";

export default function ForCurrency(){
    return(
        <>
         <div className='input-container'>
                <label htmlFor='fromCurrency'>From Currency</label>
                <select id ='fromCurrency'>
                    <option value='USD'>USD - United States Dollar</option>
                    <option value='EUR'>EUR - Euro</option>
                    <option value='GBP'>GBP - British Pound Sterling</option>
                    <option value='JPY'>JPY - Japanese Yen</option>
                    <option value='AUD'>AUD - Australian Dollar</option>
                    <option value='CAD'>CAD - Canadian Dollar</option>
                    <option value='CNY'>CNY - Chinese Yuan</option>
                    <option value='INR'>INR - Indian Rupee</option>
                    <option value='BRL'>BRL - Brazilian Real</option>
                    <option value='ZAR'>ZAR - South African Rand</option>
                </select>
        </div>
        <ToCurrency />
        </>
    )
}