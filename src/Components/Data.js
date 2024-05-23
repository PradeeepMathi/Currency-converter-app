import ForCurrency from "./ForCurrency"
import '../StylSheet/Data.css'

export default function Data(){
    return(
        <>
        <div className='data'>
            <h1>
                Currency Converter
            </h1>
            <div className='input-container'>
                <label htmlFor='amt'>Amount:</label>
                <input type='number' id='amt' value=''/>
            </div>
               <ForCurrency />
            

        </div>

        </>
    )
}