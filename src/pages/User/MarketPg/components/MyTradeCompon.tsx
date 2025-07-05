import { useContext } from "react"
import { AuthContext } from "../../../../app/AuthContext"
import MarketNav from "./MarketNav";
import { LiveReading } from "../../ui";


const MyTradeCompon = () => {
  const {data} = useContext(AuthContext);

  console.log(data?.market, "market")
  
  return (
    <div className="w-full">
            <div className="container">
              <MarketNav />
              <h2 className="text-neutral-600 font-[500] text-2xl">My Trades</h2>
              <p className="text-neutral-500"></p>
              <LiveReading />
    <div className="py-6 md:py-10">
        <div className="shadow py-1 md:py-2 rounded w-full">
        <div className="grid grid-cols-5 md:grid-cols-5 font-[600] text-sm text-center font-[Jost] justify-center items-center border-b-2 border-primary py-2 px-3 ">
        <div>ASSET</div>
        <div>AMOUNT</div>
        {/* <div>TOKEN QUANTITY</div> */}
        <div>DURATION</div>
        {/* <div>ENTRY PRICE</div> */}
        <div className="hidden md:block">BUY/SELL</div>
        <div>STATUS</div>
        </div>
        <div className="flex flex-col gap-1">
        {data?.market.map((item: any, index: any) => (
<div className={`${item.status == "Pending" ? "bg-yellow-50" : item.status == "Profit" ? "bg-green-50" : "bg-red-50"} grid grid-cols-5 md:grid-cols-5 font-[Jost] justify-center border-b-2 border-gray-50 dark:border-gray-700 text-center items-center py-2 px-3 shadow rounded-bl-lg rounded-br-lg`} key={index}>
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
        <img src={item.img} alt={item.asset} className="size-4 md:size-6 rounded-full" />

        {item.asset}</div>
          <span className={`${item.buysell == "Buy" ? "bg-green-500" : "bg-red-500"} rounded-full size-fit text-center text-sm p-1 font-[600] block md:hidden`}>{item.buysell}</span></div>
        <div>${item.amountUSD}</div>
        {/* <div>{item.amountCoin}</div> */}
        <div >{item.duration == 0.5 ? 30 : item.duration} {item.duration == 0.5 ? "minutes" : item.duration == 1 ? "hour" : "hours"}</div>
        {/* <div>{item.entryPrice}</div> */}
        <div className={`${item.buysell == "Buy" ? "bg-green-500" : "bg-red-500"} rounded-full hidden md:flex text-sm size-fit items-center justify-center text-center py-1 px-3 font-[600] font-[Jost]`}>{item.buysell}</div>
        <div className={`${item.status == "Profit" ? "bg-green-500" : item.status == "Loss" ? "bg-red-500" : "bg-yellow-500"} rounded-full text-sm size-fit items-center justify-center text-center py-1 font-[600] font-[Jost] px-3`}>{item.status}</div>
        {/* <div className={`${item.status == "Open" ? "bg-green-500" : item.status == "Closed" ? "bg-red-500" : "bg-yellow-500"} rounded-full text-sm size-fit items-center justify-center text-center p-1 font-[600]`}>{item.status}</div> */}
        </div>
        ))}  
        </div>
        
        
        </div>
        </div>
        </div>
    </div>
  )
}

export default MyTradeCompon