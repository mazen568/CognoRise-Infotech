const ConvertButton = ({ setConvertedAmount, toCurrency, fromCurrency, amount, setConversionDetails }) => {
    const apiKey = "fd08ee40109c499cd48a091d"; 
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
  
    const fetchConversionRate = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        if (data.result === "success") {
          const conversionResult = `${amount} ${fromCurrency} = ${data.conversion_result} ${toCurrency}`;
          setConvertedAmount(data.conversion_result);
          setConversionDetails(conversionResult); // Pass the conversion details
        } else {
          console.error("Error fetching conversion rate:", data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const handleConvert = () => {
      fetchConversionRate();
    };
  
    return (
      <>
        <button onClick={handleConvert} className="convert">Convert</button>
      </>
    );
  };
  export default ConvertButton;
  