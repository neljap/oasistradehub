import { BiDollarCircle } from "react-icons/bi"
import { CiCloudRainbow } from "react-icons/ci"
import { FaBars, FaCloudMoonRain, FaTrademark } from "react-icons/fa6"
import { emptyboxdash } from "../../../assets"
import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../../app/AuthContext"


const DashbaordPg = () => {

    const {data} = useContext(AuthContext);

    const DashItems = [
        {
            id: 1,
            title: "Deposited",
            icon: FaCloudMoonRain,
            amount: data?.tDeposit,
        },
        {
            id: 2,
            title: "Withdrawn",
            icon: FaCloudMoonRain,
            amount: data?.twithd
        },
        {
            id: 3,
            title: "Total Stakes",
            icon: BiDollarCircle,
            amount: data?.tStake
        },
        {
            id:4,
            title: "Trade",
            icon: FaTrademark,
            amount: 0
        }
    ]
    useEffect(() => {
        document.title = "Oasis Trade Home | Dashboard"
      }, [])

    

  return (
    <div className="scroll-smooth dark:bg-[#222736]">
        <div className="container">
        <div className="flex flex-row gap-4 items-center text-neutral-700 font-[500]">
            <div className="py-2 px-4 rounded-lg bg-neutral-100">
                <p>Hey {data? data?.fullname : "Jackson"}</p>
            </div>
            <div className={`py-2 px-4 rounded-lg ${data?.verified ? "bg-green-100" : "bg-red-100"}  w-fit`}>
                <p>{data?.verified ? "Verified": "You're not verified"}</p>
            </div>
        </div>  
        <div className="border border-neutral-100 grid grid-cols-1 md:grid-cols-2 justify-between items-center px-6 py-4 rounded-xl mt-4 dark:bg-[#2a3042]">
            <div className="flex flex-row items-center gap-2">
                <div className="text-primary bg-primary bg-opacity-5 rounded-full p-2">
                    <FaBars />
                </div>
                <p>Account Balance ${data ? data?.tAmount : 0}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
                <Link to="/user/withdraw">
                <button className="text-primary rounded-lg py-2 px-4 bg-opacity-5 bg-primary flex flex-row gap-2 items-center font-[500]"> <FaBars /> Withdrawal</button>
                </Link>
                <Link to="/user/deposit">
                <button className="text-white rounded-lg py-2 px-4 bg-primary flex flex-row gap-2 items-center font-[500]"><FaBars /> Deposit</button>
                </Link>
            </div> 
        </div>
        <div className="border border-neutral-100 px-6 py-4 rounded-xl mt-4 flex flex-row items-center justify-center gap-4">
        <div className="text-primary bg-primary bg-opacity-5 rounded-full p-2 w-fit">
                    <FaBars />
                </div>
                <div className="w-full">
                    <p>Trading Progress</p>
                    <input type="range" name="" id="" className="text-primary w-full outline-none" />
                </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-8">
            {DashItems.map((item, index) => (
             <div className="border border-neutral-200 rounded-xl bg-primary bg-opacity-5 p-4 flex flex-row justify-between items-start" key={index}>
                <div>
                    <h3 className="text-neutral-700 font-[600]">{item.title}</h3>
                    <p>$0</p>
                    <p className="text-sm text-green-500 font-[500]">+0 from last month</p>
                </div>
                <div>
                    <CiCloudRainbow size={24} color="#0052FF" />
                </div>
            </div>   
            ))}
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-row justify-between items-center bg-neutral-50 border border-neutral-300 p-2 rounded-xl">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p>Current Plan</p>
                    <p>No Plan</p>
                </div>  
                </div>
                
                <div>
                    <button className="px-4 py-2 text-primary bg-primary bg-opacity-5 rounded-xl ">Purchase Plan</button>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-neutral-50 border border-neutral-300 p-2 rounded-xl">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p>Plan Bonus</p>
                    <p>$0</p>
                </div>  
                </div>
                
                <div>
                   
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
            <p>My Assets</p>
            <button className="bg-primary text-white px-4 py-2 rounded-xl">Deposits</button>
        </div>
        <div className="h-[600px]">
            <iframe src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A660%2C%22plotLineColorGrowing%22%3A%22rgba(25%2C%20118%2C%20210%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(25%2C%20118%2C%20210%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%201)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22symbolActiveColor%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22showFloatingTooltip%22%3Atrue%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Your%20Assets%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%5D%2C%22originalTitle%22%3A%22Futures%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%2C%22d%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%2C%22d%22%3A%22GBP%20to%20USD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%2C%22d%22%3A%22USD%20to%20JPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%2C%22d%22%3A%22USD%20to%20CHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%2C%22d%22%3A%22AUD%20to%20USD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%2C%22d%22%3A%22USD%20to%20CAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%2C%7B%22title%22%3A%22Futures%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22BINANCE%3ABTCUSDT%22%7D%2C%7B%22s%22%3A%22BINANCE%3AMATICUSDT%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAAPL%22%7D%5D%7D%5D%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%22%7D" className="w-full h-full"></iframe>r
        </div>
        <div className="h-[600px]">
            <iframe src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22Apple%22%2C%22AAPL%7C1M%22%5D%2C%5B%22Google%22%2C%22GOOGL%7C1D%22%5D%2C%5B%22Microsoft%22%2C%22MSFT%7C1D%22%5D%2C%5B%22BINANCE%3ARNDRUSDT%7C1D%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22500px%22%2C%22colorTheme%22%3A%22light%22%2C%22gridLineColor%22%3A%22%232A2E39%22%2C%22fontColor%22%3A%22%23787B86%22%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22%231976D2%22%2C%22topColor%22%3A%22rgba(55%2C%20166%2C%20239%2C%200.15)%22%2C%22fontFamily%22%3A%22-apple-system%2C%20BlinkMacSystemFont%2C%20Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22lineWidth%22%3A2%2C%22isTransparent%22%3Atrue%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D" className="w-full h-full"></iframe>r
        </div>
        <div className="h-[600px]">
            <iframe src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A490%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%22%7D" className="w-full h-full"></iframe>r
        </div>
        </div>
        
    </div>
  )
}

export default DashbaordPg