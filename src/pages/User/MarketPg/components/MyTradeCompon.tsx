import { useContext } from "react"
import { AuthContext } from "../../../../app/AuthContext"


const MyTradeCompon = () => {
  const {data} = useContext(AuthContext);

  console.log(data?.market, "market")
  
  return (
    <div className="pt-6">
        <div className="shadow py-1 md:py-2 rounded w-full">
        <div className="grid grid-cols-5 md:grid-cols-6 font-[600] text-sm text-center font-[Jost] justify-center items-center border-b-2 border-primary py-2 px-3 ">
        <div>ASSET</div>
        <div>AMOUNT</div>
        <div>TOKEN QUANTITY</div>
        <div>DURATION (MINS)</div>
        <div>ENTRY PRICE</div>
        <div className="hidden md:block">BUY/SELL</div>
        </div>
        {data?.market.map((item: any, index: any) => (
<div className={`${data?.market.buysell == "Buy" ? "bg-red-50" : "bg-green-50"} grid grid-cols-5 md:grid-cols-6 font-[Jost] justify-center text-center items-center border-b-1 border-primary py-2 px-3 `} key={index}>
        <div><span>{item.asset}</span> <span className={`${data?.market.buysell == "Buy" ? "bg-red-500" : "bg-green-500"} rounded-full size-fit text-center p-1 font-[600]`}>{item.buysell}</span></div>
        <div>${item.amountUSD}</div>
        <div>{item.amountCoin}</div>
        <div>{item.duration}</div>
        <div>{item.entryPrice}</div>
        <div className={`${data?.market.buysell == "Buy" ? "bg-red-500" : "bg-green-500"} rounded-full hidden md:block text-sm size-fit text-center p-1 font-[600]`}>{item.buysell}</div>
        </div>
        ))}
        
        </div>

    </div>
  )
}

export default MyTradeCompon