// import {  useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LiveMarketContext } from "../../../../app/LiveMarketContext";
import { LiveReading } from "../../ui";
import MarketNav from "./MarketNav";





const CryproCompon = () => {

  const {inputMktQuery, handleMktCrypto, filteredMktCrypto} = useContext(LiveMarketContext)


  return (
    <div className="w-full">
      <div className="container">
    <div className="">
      <MarketNav />
              <h2 className="text-neutral-600 font-[500] text-2xl">Crypto Market</h2>
              <p className="text-neutral-500">Trade crypto with ease and confidence.</p>
      <LiveReading />
      <div className="my-4">
        <input type="text" value={inputMktQuery} onChange={handleMktCrypto} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 justify-start items-start gap-2 py-2 cursor-pointer rounded-xl px-2">
      <div > <p className="font-[500]">ID</p></div>
      <div><p className="font-[500]">Asset</p></div>
      <div className="hidden md:block font-[500]">Name</div>
      <div className="hidden md:block font-[500]">Value</div>
      <div></div>
      </div>
      <div className="flex flex-col gap-2">
        {filteredMktCrypto.map((item: any) => (
      <div className="grid grid-cols-4 md:grid-cols-5 justify-start items-center gap-2 w-full transition ease-in-out duration-[1s] hover:bg-neutral-100 rounded-xl px-2" key={item.id}>
      <div >{item.id}</div>
      <div className="flex items-center gap-2">
        <img src={item.img} alt={item.name} className="size-4 md:size-6 rounded-full" />

        {item.name}</div>
      <div className="hidden md:block">{item.coin}</div>
      <div className="hidden md:block">0.00 {item.name}</div>
      <div>
        {/* @ts-ignore */}
        <Link to={`/user/markets/trade/crypto/${item.name}/${item.obj}`} onClick={() => window.scrollY(0, 0)}>
        <button className="bg-green-100 hover:bg-green-700 text-green-700 hover:text-green-100 px-3 md:px-4 py-2 rounded-xl transition-all ease-in-out duration-[1s]">Trade</button>
        </Link>
        </div>
      </div>      
        ))}
      
      </div>
      
    </div>
      </div>
    </div>
    
  )
}

export default CryproCompon