// import {  useNavigate } from "react-router-dom"
import { MktCryptoData } from "../app/MktData"
import { 
  // createContext,
   useState } from "react"
// import TradeChartPg from "./TradeChartPg";




const CryproCompon = () => {

  const [topLink, setTopLink] = useState("");
  const [btmLink, setBtmLink] = useState("");

  // const navigate = useNavigate();

  // const TradeChartContext = createContext(null)

  // const handleCheck = () => {
  //   <TradeChartPg topLink={topLink} btmLink={btmLink}/>
  //   navigate("/")
  // }

  return (
    <div>
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
      <div className="flex flex-col gap-2">
        {MktCryptoData.map((item) => (
      <div className="grid grid-cols-6 justify-start items-center gap-2 " key={item.id}>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.coin}</div>
      <div>0.00 {item.name}</div>
      <div>${item.price}</div>
      <div>
        <input type="text" value={topLink} onChange={(e) => setTopLink(e.target.value)} />
        <input type="text" value={btmLink} onChange={(e) => setBtmLink(e.target.value)} />
        {/* <Link to={`/user/markets/trade/crypto/${item.name}`}> */}
        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">Trade</button>
        {/* </Link> */}
        </div>
      </div>      
        ))}
      
      </div>
      
    </div>
  )
}

export default CryproCompon