import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useEffect } from "react";
import currencyToCountryCode from "../assets/data"


const CurrencySelector = ( {fromCurrency,toCurrency,setToCurrency,setFromCurrency}) => {
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);

  const [toCurrencySelected, setToCurrencySelected] = useState(false);
  const [fromCurrencySelected, setFromCurrencySelected] = useState(false);


  const [flags, setFlags] = useState([]);


  useEffect(() => {
    const fetchCurrencies = async () => {
      const apiKey = "fd08ee40109c499cd48a091d"; // Replace with your API key
      const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.result === "success") {
          const currencyCodes = Object.keys(data.conversion_rates);
          
          // Create the flags array dynamically
          const generatedFlags = currencyCodes.map((code) => {
            const countryCode = currencyToCountryCode[code] || code.toLowerCase();
            return {
              city: code,
              flag: <span className={`fi fi-${countryCode}`} key={code}></span>,
            };
          });

          setFlags(generatedFlags);
        } else {
          console.error("Error fetching currencies:", data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCurrencies();
  }, []);
  

  return (
    <div className="relative flex flex-col items-center w-[350px] rounded-lg ">
      <div className="w-full mb-2">
        <label htmlFor="from" >
          From
        </label>
        <div
           onClick={() => setIsFromOpen((prev) => !prev)}
          className="currency-convertor-button"
        >
          {fromCurrencySelected ? fromCurrencySelected : "select currency"}
          {!isFromOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </div>
        {isFromOpen && (
         <div className={`relative bg-slate-50 top-2 items-start rounded-lg p-2 w-full max-h-40 overflow-y-auto border border-gray-300 transition-all duration-300 ${isFromOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
         {flags.map((item, i) => (
           <button
             key={i}
             className="flex w-full justify-between hover:bg-slate-300 rounded-lg border-l-transparent border-l-4 p-2 transition-colors duration-300"
             onClick={() => {
               setFromCurrencySelected(
                 <div className="flex w-full justify-between  rounded-r-lg border-l-transparent border-l-4 p-2">
                   <span>{item.city}</span>
                   <span>{item.flag}</span>
                 </div>
               );
               setIsFromOpen(false);
               setFromCurrency(item.city);
               console.log(item.city); // this will print the selected currency code to the console
             }}
           >
             <span>{item.city}</span>
             <span>{item.flag}</span>
           </button>
         ))}
       </div>
       
        )}
      </div>


<div>

<button onClick={()=>{
setFromCurrencySelected(toCurrencySelected);
setToCurrencySelected(fromCurrencySelected);
setFromCurrency(toCurrency);
setToCurrency(fromCurrency);
}} className="swap-button mt-8"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7m14 6l-7 7-7-7" /></svg></button>

</div>


      <div className="w-full">
        <label htmlFor="to">
          To
        </label>
        <div
          onClick={() => setIsToOpen((prev) => !prev)}
          className="currency-convertor-button"
        >
          {toCurrencySelected? toCurrencySelected : "select currency"}
          {!isToOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
        </div>
        {isToOpen && (
          <div className={`relative bg-slate-50 top-2 items-start rounded-lg p-2 w-full max-h-40 overflow-y-auto border border-gray-300 transition-all duration-300 ${isToOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          {flags.map((item, i) => (
            <button
              key={i}
              className="flex w-full justify-between hover:bg-slate-300 rounded-lg border-l-transparent border-l-4 p-2 transition-colors duration-300"
              onClick={() => {
                setToCurrencySelected(
                  <div className="flex w-full justify-between rounded-r-lg border-l-transparent  border-l-4 p-2">
                    <span>{item.city}</span>
                    <span>{item.flag}</span>
                  </div>
                );
                setIsToOpen(false);
                setToCurrency(item.city);
                console.log(item.city); // this will print the selected currency code to the console
              }}
            >
              <span>{item.city}</span>
              <span>{item.flag}</span>
            </button>
          ))}
        </div>
        
        )}
      </div>
    </div>
  );
};

export default CurrencySelector;
