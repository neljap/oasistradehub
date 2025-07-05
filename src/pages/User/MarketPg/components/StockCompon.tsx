import { Link } from "react-router-dom"
import { useContext } from "react"
import { LiveMarketContext } from "../../../../app/LiveMarketContext"
import { LiveReading } from "../../ui";
import MarketNav from "./MarketNav";


const StockCompon = () => {
  const {inputMktStock, handleMktStock, filteredMktStock} = useContext(LiveMarketContext);
  return (
    <div className="w-full">
      <div className="container">
        <MarketNav />
        <h2 className="text-neutral-600 font-[500] text-2xl">Stock Market</h2>
        <p className="text-neutral-500">Trade stocks with ease and confidence.</p>
        <LiveReading />
              <div className="my-4">
        <input type="text" value={inputMktStock} onChange={handleMktStock} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
      </div>
      <div className="grid grid-cols-5 justify-center items-center gap-2 ">
      <div>ID</div>
      <div>Asset</div>
      <div>Name</div>
      <div>Value</div>
      <div></div>
      </div>
      <div className="flex flex-col gap-2">
        {filteredMktStock.map((item: any) => (
      <div className="grid grid-cols-5 justify-center items-center gap-2 " key={item.id}>
      <div>{item.id + 1}</div>
      <div className="flex items-center gap-2">
        <img src={item.img} alt={item.name} className="size-4 md:size-6 rounded-full" />

        {item.name}</div>
      <div>{item.stock}</div>
      <div>0.00 {item.name}</div>
      <div>
        {/* @ts-ignore */}
        <Link to={`/user/markets/trade/stock/${item.name}/${item.obj}`} onClick={() => window.scrollY(0, 0)}>
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">Trade</button>
        </Link>
        </div>
      </div>      
        ))}
      
      </div>
      </div>

      
    </div>
  )
}

export default StockCompon