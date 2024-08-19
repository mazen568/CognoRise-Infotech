import ResultDisplay from "./components/ResultDisplay";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ConvertButton from "./components/ConvertButton";
import { useState } from "react";
function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [toCurrency,setToCurrency]=useState(false);
  const [fromCurrency,setFromCurrency]=useState(false); 
  const [conversionDetails,setConversionDetails] = useState(false);
  return (
    <div className="currency-convertor">
      <div className="currency-convertor-container">
        <h1 className="text-5xl font-bold mb-5">Currency Convertor</h1>
        <AmountInput amount={amount} setAmount={setAmount}/>
        <CurrencySelector fromCurrency={fromCurrency} toCurrency={toCurrency} setToCurrency={setToCurrency} setFromCurrency={setFromCurrency} />
        <ConvertButton setConversionDetails={setConversionDetails} fromCurrency={fromCurrency} toCurrency={toCurrency} amount={amount} convertedAmount={convertedAmount} setConvertedAmount={setConvertedAmount}/>
        <ResultDisplay conversionDetails={conversionDetails}  setConversionDetails={setConversionDetails} convertedAmount={convertedAmount} setConvertedAmount={setConvertedAmount}/>
      </div>
    </div>
  );
}
export default App;
