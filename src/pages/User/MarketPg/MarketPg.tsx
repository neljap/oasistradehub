import { CryptoCompon, ForexCompon, MyTradeCompon, StockCompon } from "./components"
import { useContext, useEffect} from "react"
import { LiveReading } from "../ui";
import { LiveMarketContext } from "../../../app/LiveMarketContext";

const MarketPg = () => {

  const {section, setSection} = useContext(LiveMarketContext);

  useEffect(() => {
          document.title = "Oasis Trade Home | Live Market"
        }, [])
  

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
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 0? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setSection(0)}>Crypto</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 1? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setSection(1)}>Stock</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 2? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setSection(2)}>Forex</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${section == 3? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setSection(3)}>My Trades</div>
      </div>
      {/*  */}
      <LiveReading />
      <div>
        {display[section]}
      </div>
      </div>
    </div>
  )
}

export default MarketPg