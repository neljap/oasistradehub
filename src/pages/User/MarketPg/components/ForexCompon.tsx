import { Link} from "react-router-dom"
import { useContext } from "react"
import { LiveMarketContext } from "../../../../app/LiveMarketContext"
import { LiveReading } from "../../ui"
import MarketNav from "./MarketNav"


const ForexCompon = () => {

  const {inputMktForex, handleMktForex, filteredMktForex} = useContext(LiveMarketContext);

  return (
       <div className="w-full">
            <div className="container">
              <MarketNav />
              <h2 className="text-neutral-600 font-[500] text-2xl">Forex Market</h2>
              <p className="text-neutral-500">Trade forex with ease and confidence.</p>
              <LiveReading />
             <div className="my-4">
               <input type="text" value={inputMktForex} onChange={handleMktForex} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
             </div>
             <div className="grid grid-cols-6 justify-start items-center gap-2 ">
             <div>ID</div>
             <div>Asset</div>
             <div>Name</div>
             <div>Current Price</div>
             <div></div>
             </div>
             <div className="flex flex-col gap-2">
               {filteredMktForex.map((item: any) => (
             <div className="grid grid-cols-6 justify-start items-center gap-2 " key={item.id}>
             <div>{item.id}</div>
             <div><img src={item.img} className="w-12 h-12 rounded" alt="" /></div>
             <div>{item.unit}</div>
             <div>0.00</div>
             <div>
              {/* @ts-ignore */}
               <Link to={`/user/markets/trade/forex/${item.currency}/${item.obj}`} onClick={() => window.scrollY(0, 0)}>
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

export default ForexCompon