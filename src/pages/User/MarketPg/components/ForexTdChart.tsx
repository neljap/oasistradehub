import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import BuyMarketCard from "./BuyMarketCard";

const ForexTdChart = () => {
  const { currency, obj } = useParams();

  // https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22AUDCAD%22%2C%22frameElementId%22%3A%22tradingview_5a528%22%2C%22interval%22%3A%22D%22%2C%22range%22%3A%221M%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22studies%22%3A%22STD%3BKlinger%251Oscillator%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22AUDCAD%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fforex%2FAUDCAD%2Factive%2Fundefined%22%7D
  // https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22AUDNZD%22%2C%22frameElementId%22%3A%22tradingview_43d6d%22%2C%22interval%22%3A%22D%22%2C%22range%22%3A%221M%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22studies%22%3A%22STD%3BKlinger%251Oscillator%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22AUDNZD%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fforex%2FAUDNZD%2Factive%2Fundefined%22%7D
  return (
    <div>
      <div className="container">
        <Link to="/user/markets">
          <button className="shadow py-1 px-3 rounded-lg text-primary font-[500] flex flex-row items-center gap-1">
            <FaArrowLeftLong />
            Back
          </button>
        </Link>
        <div className="py-8">
          <iframe
            src={`https://www.tradingview-widget.com/embed-widget/symbol-info/?locale=en&symbol=${currency}#%7B%22symbol%22%3A%22${currency}%22%2C%22width%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A203%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-info%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fforex%2F${currency}%2Factive%2Fundefined%22%7D`}
            className="w-full"
          ></iframe>
        </div>
        <div className="pb-4">
          <iframe
            src={`https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22${currency}%22%2C%22frameElementId%22%3A%22tradingview_${obj}%22%2C%22interval%22%3A%22D%22%2C%22range%22%3A%221M%22%2C%22hide_side_toolbar%22%3A%221%22%2C%22allow_symbol_change%22%3A%220%22%2C%22save_image%22%3A%221%22%2C%22backgroundColor%22%3A%22%23ffffff%22%2C%22studies%22%3A%22STD%3BKlinger%251Oscillator%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22${currency}%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%2Ftrade%2Fen%2Fforex%2F${currency}%2Factive%2Fundefined%22%7D`}
            className="w-full h-[600px]"
          ></iframe>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BuyMarketCard
              coin={currency}
              butClass="bg-green-700"
              butext="Buy"
            />
            <BuyMarketCard
              coin={currency}
              butClass="bg-red-700"
              butext="Sell"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexTdChart;
