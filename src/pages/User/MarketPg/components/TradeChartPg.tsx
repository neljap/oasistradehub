import { useParams } from "react-router-dom"

// interface TradeLink {
//   topLink: string,
//   btmLink: string
// }

const TradeChartPg = () => {
  const {coin} = useParams()

  return (
    <div>
        <div className="container">
          <div className="py-8">
         <iframe src={`https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3ADOGEUSD#%7B%22symbol%22%3A%22KRAKEN%3A${coin}USD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2F${coin}%2FKRAKEN%2F0.129341%22%7D`} className="w-full"></iframe>   
          </div>
        <div className="pb-4">
        <iframe src={`https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22KRAKEN%3ADOGEUSD%22%2C%22frameElementId%22%3A%22tradingview_deed8%22%2C%22interval%22%3A%22D%22%2C%22range%22%3A%221M%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22studies%22%3A%22STD%3BKlinger%251Oscillator%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22KRAKEN%3A${coin}USD%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2F${coin}%2FKRAKEN%2F0.129341%22%7D`} className="w-full h-[600px]"></iframe>
        </div>
        </div>
        {/* <div className="container">
        <iframe src={topLink} className="w-full"></iframe>
<iframe src={btmLink} className="w-full h-[600px]"></iframe>
        </div> */}
    </div>
  )
}

export default TradeChartPg