import { Link } from "react-router-dom"
import { useContext } from "react"
import { LiveMarketContext } from "../../../../app/LiveMarketContext"


const StockCompon = () => {
  const {inputMktStock, handleMktStock, filteredMktStock} = useContext(LiveMarketContext);
  return (
    <div>
      <div className="my-4">
        <input type="text" value={inputMktStock} onChange={handleMktStock} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
      </div>
      <div className="grid grid-cols-6 justify-start items-center gap-2 ">
      <div>ID</div>
      <div>Asset</div>
      <div>Name</div>
      <div>Value</div>
      <div>Current Price</div>
      <div></div>
      </div>
      <div className="flex flex-col gap-2">
        {filteredMktStock.map((item: any) => (
      <div className="grid grid-cols-6 justify-start items-center gap-2 " key={item.id}>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.stock}</div>
      <div>0.00 {item.name}</div>
      <div>${item.price}</div>
      <div>
        <Link to={`/user/markets/trade/stock/${item.name}/${item.obj}`}>
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">Trade</button>
        </Link>
        </div>
      </div>      
        ))}
      
      </div>
      
    </div>
  )
}

export default StockCompon