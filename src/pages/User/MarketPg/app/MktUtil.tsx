import { useParams } from "react-router-dom";


const MktUtilTop = () => {
  const {} = useParams()
  return (
    <div>
        <iframe src="https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=KRAKEN%3ADOGEUSD#%7B%22symbol%22%3A%22KRAKEN%3ADOGEUSD%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fcrypto%2FDOGE%2FKRAKEN%2F0.129341%22%7D" className="w-full h-60" ></iframe>
    </div>
  )
}

export default MktUtilTop;