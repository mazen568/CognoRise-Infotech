const AmountInput=({amount,setAmount})=>{


    return(
        <>
        
        
        <div className="amount-input flex flex-col">
            <label htmlFor="">Amount</label>
            <input onChange={(event)=>{
                setAmount(event.target.value)
               
            }} type="text" className="bg-slate-500"
            value={amount} />
        </div>
        
        { console.log(amount)}
        
        
        </>
    );



}
export default AmountInput;