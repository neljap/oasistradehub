import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom"
import BuyMarketCard from "./BuyMarketCard";

// interface TradeLink {
//   topLink: string,
//   btmLink: string
// }

const TradeChartPg = () => {
  const {coin, obj} = useParams();
  // const [duratlean, setDuratlean] = useState(false)

  // https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3AAPEUSD#%7B%22symbol%22%3A%22KRAKEN%3AAPEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FAPE%2FKRAKEN%2F0.82177%22%7D      0.82177
  // https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3ADOGEUSD#%7B%22symbol%22%3A%22KRAKEN%3ADOGEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FDOGE%2FKRAKEN%2F0.129341%22%7D  0.129341
  // https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3AAAVEUSD#%7B%22symbol%22%3A%22KRAKEN%3AAAVEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FAAVE%2FKRAKEN%2F167.63%22%7D    167.63



  return (
    <div>
        <div className="container">
          <Link to="/user/markets">
            <button className="shadow py-1 px-3 rounded-lg text-primary font-[500] flex flex-row items-center gap-1">
              <FaArrowLeftLong />
              Back</button>
          </Link>
          <div className="py-6">
         <iframe src={`https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3A${coin}USD#%7B%22symbol%22%3A%22KRAKEN%3A${coin}USD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2F${coin}%2FKRAKEN%2F${obj}%22%7D`} className="w-full"></iframe>   
          </div>
        <div className="pb-4">
        <iframe src={`https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22KRAKEN%3A${coin}USD%22%2C%22frameElementId%22%3A%22tradingview_deed8%22%2C%22interval%22%3A%22D%22%2C%22range%22%3A%221M%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22studies%22%3A%22STD%3BKlinger%251Oscillator%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22KRAKEN%3A${coin}USD%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2F${coin}%2FKRAKEN%2F0.129341%22%7D`} className="w-full h-[600px]"></iframe>
        </div>
        {/* Trade Entry */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <div className="py-4">
              <p className="font-[500]">Current Price</p>
              <div className="bg-neutral-200 p-2 rounded ">
                <p>1 DOGE ~ $0.174193</p>
              </div>
              <div className="py-2 flex flex-col gap-1">
                <p>Trade Amount (USD)</p>
                <div className="bg-neutral-100 p-2 rounded w-full flex flex-row justify-between items-center">
                  <input type="number" className="bg-neutral-100 outline-none" placeholder="Amount (USD)" />
                  <p>0.00 {coin}</p>
                </div>
              </div>
              <div className="py-2 flex flex-col gap-1">
                <p>Lotsize</p>
                <input type="number" className="bg-neutral-100 outline-none p-2 rounded" placeholder="Lot size" />
              </div>
              <div className="py-2 flex flex-col gap-1">
              <p>Entry Price</p>
              <div className="p-2 bg-neutral-100 rounded">
                <p>0.174193</p>
              </div>
              </div>
              <div className="w-full relative py-2 flex flex-col gap-1">
                <p>Duration</p>
                <div className="flex flex-row justify-between p-2 bg-neutral-100 rounded cursor-pointer" onClick={() => setDuratlean(!duratlean)}>
                  <p>Select a duration</p>
                  <FaAngleDown />
                </div>
                <div>
                {duratlean && (
                <div className="absolute scroll-smooth -top-40 bg-white h-36 z-10 shadow-md rounded w-full p-1">
                    <div className="hover:bg-primary rounded py-2 w-full"><p>5 mins</p></div>
                    <div className="hover:bg-primary rounded py-2 w-full"><p>5 mins</p></div>
                    <div className="hover:bg-primary rounded py-2 w-full"><p>5 mins</p></div>

                </div>  
                )}
                
                </div>
                
              </div>
              <div>
                <button className="bg-green-800 w-full rounded py-2 text-white">Buy {coin}</button>
              </div>
            </div> */}
            <BuyMarketCard coin={coin} butClass="bg-green-700" butext="Buy"/>
            <BuyMarketCard coin={coin} butClass="bg-red-700" butext="Sell"/>
          </div>
        </div>
        </div>
    </div>
  )
}


export default TradeChartPg;