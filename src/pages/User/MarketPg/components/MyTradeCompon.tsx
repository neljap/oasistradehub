import { useContext } from "react"
import { AuthContext } from "../../../../app/AuthContext"


const MyTradeCompon = () => {
  const {data} = useContext(AuthContext);

  console.log(data?.market, "market")
  
  return (
    <div className="py-6 md:py-10">
        <div className="shadow py-1 md:py-2 rounded w-full">
        <div className="grid grid-cols-5 md:grid-cols-7 font-[600] text-sm text-center font-[Jost] justify-center items-center border-b-2 border-primary py-2 px-3 ">
        <div>ASSET</div>
        <div>AMOUNT</div>
        <div>TOKEN QUANTITY</div>
        <div>DURATION (MINS)</div>
        <div>ENTRY PRICE</div>
        <div className="hidden md:block">BUY/SELL</div>
        <div>STATUS</div>
        </div>
        {data?.market.map((item: any, index: any) => (
<div className={`${item.buysell == "Buy" ? "bg-green-50" : "bg-red-50"} grid grid-cols-5 md:grid-cols-6 font-[Jost] justify-center border-b-2 border-gray-50 dark:border-gray-700 text-center items-center py-2 px-3 `} key={index}>
        <div className="flex flex-col justify-center items-center"><span>{item.asset}</span> <span className={`${item.buysell == "Buy" ? "bg-green-500" : "bg-red-500"} rounded-full size-fit text-center text-sm p-1 font-[600] block md:hidden`}>{item.buysell}</span></div>
        <div>${item.amountUSD}</div>
        <div>{item.amountCoin}</div>
        <div>{item.duration}</div>
        <div>{item.entryPrice}</div>
        <div className={`${item.buysell == "Buy" ? "bg-green-500" : "bg-red-500"} rounded-full hidden md:flex text-sm size-fit items-center justify-center text-center p-1 font-[600]`}>{item.buysell}</div>
        </div>
        ))}
        
        </div>

    </div>
  )
}

export default MyTradeCompon