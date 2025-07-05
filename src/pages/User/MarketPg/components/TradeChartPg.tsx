import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom"
import BuyMarketCard from "./BuyMarketCard";
import { TestScroll } from "../../ui";
import { MktCryptoData } from "../../../../utils/AppData";


const TradeChartPg = () => {
  const {coin, obj} = useParams();
  // let [number, setNumber] = useState(0)
  // const [duratlean, setDuratlean] = useState(false)

  // https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3AAPEUSD#%7B%22symbol%22%3A%22KRAKEN%3AAPEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FAPE%2FKRAKEN%2F0.82177%22%7D      0.82177
  // https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3ADOGEUSD#%7B%22symbol%22%3A%22KRAKEN%3ADOGEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FDOGE%2FKRAKEN%2F0.129341%22%7D  0.129341
  // https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3AAAVEUSD#%7B%22symbol%22%3A%22KRAKEN%3AAAVEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FAAVE%2FKRAKEN%2F167.63%22%7D    167.63


let singlecoin = MktCryptoData.find((item) => item.coin === coin);
  

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
          <TestScroll />
        {/* Trade Entry */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BuyMarketCard coin={coin} butClass="bg-green-700" butext="Buy" img={singlecoin?.img}/>
            <BuyMarketCard coin={coin} butClass="bg-red-700" butext="Sell" img={singlecoin?.img}/>
          </div>
        </div>  
        <div className="pb-4">
        <iframe src={`https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22KRAKEN%3A${coin}USD%22%2C%22frameElementId%22%3A%22tradingview_deed8%22%2C%22interval%22%3A%22D%22%2C%22range%22%3A%221M%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22studies%22%3A%22STD%3BKlinger%251Oscillator%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22KRAKEN%3A${coin}USD%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2F${coin}%2FKRAKEN%2F0.129341%22%7D`} className="w-full h-[600px]"></iframe>
        </div>
        
        </div>
    </div>
  )
}


export default TradeChartPg;