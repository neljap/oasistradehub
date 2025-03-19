import { Link } from "react-router-dom"
import { CryptoCompon, ForexCompon, MyTradeCompon, StockCompon } from "./components"
import { useState } from "react"
import { LiveReading } from "../ui";

const MarketPg = () => {

  const [section, setSection] = useState<any>(0);

  const display = {
    0: <CryptoCompon />,
    1: <StockCompon />,
    2: <ForexCompon />,
    3: <MyTradeCompon />
  } as any

  return (
    <div className="w-full">
      <div className="container">
      <h2 className="text-neutral-600 font-[500] text-2xl">Market</h2>
      <div className="flex flex-row items-center gap-4 mt-4">
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 0? 'bg-neutral-100' : 'bg-red-500'} text-neutral-700`} onClick={() => setSection(0)}>Crypto</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 1? 'bg-neutral-100' : 'bg-red-500'} text-neutral-700`} onClick={() => setSection(1)}>Stock</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 2? 'bg-neutral-100' : 'bg-red-500'} text-neutral-700`} onClick={() => setSection(2)}>Forex</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 3? 'bg-neutral-100' : 'bg-red-500'} text-neutral-700`} onClick={() => setSection(3)}>My Trades</div>
      </div>
      {/*  */}
      <LiveReading />
      <div className="my-4">
        <input type="text" placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
      </div>
      <div className="grid grid-cols-6 justify-start items-center gap-2 ">
      <div>ID</div>
      <div>Asset</div>
      <div>Name</div>
      <div>Value</div>
      <div>Current Price</div>
      <div></div>
      </div>
      <div className="grid grid-cols-6 justify-start items-center gap-2 ">
      <div>1</div>
      <div>DOGE</div>
      <div>DOGECOIN</div>
      <div>0.00 DOGE</div>
      <div>$0.311828</div>
      <div>
        <Link to="/user/markets/trade/crypto/coin">
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">Trade</button>
        </Link>
        </div>
      </div>
      <div>
        {display[section]}
      </div>
      </div>
    </div>
  )
}

export default MarketPg