import { Link} from "react-router-dom"

import { aboutusOne } from "../../../../assets"
import { useContext } from "react"
import { LiveMarketContext } from "../../../../app/LiveMarketContext"


const ForexCompon = () => {

  const {inputMktForex, handleMktForex, filteredMktForex} = useContext(LiveMarketContext);

  return (
       <div>
             <div className="my-4">
               <input type="text" value={inputMktForex} onChange={handleMktForex} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
             </div>
             <div className="grid grid-cols-5 justify-start items-center gap-2 ">
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
             <div><img src={aboutusOne} className="w-12 h-12 rounded" alt="" /></div>
             <div>{item.unit}</div>
             <div>0.00</div>
             <div>
               <Link to={`/user/markets/trade/forex/${item.currency}/${item.obj}`}>
               <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">Trade</button>
               </Link>
               </div>
             </div>      
               ))}
             
             </div>
             
           </div>
  )
}

export default ForexCompon