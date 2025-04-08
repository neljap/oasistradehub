// import {  useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LiveMarketContext } from "../../../../app/LiveMarketContext";





const CryproCompon = () => {

  const {inputMktQuery, handleMktCrypto, filteredMktCrypto} = useContext(LiveMarketContext)


  return (
    <div>
      <div className="my-4">
        <input type="text" value={inputMktQuery} onChange={handleMktCrypto} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
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
        {filteredMktCrypto.map((item: any) => (
      <div className="grid grid-cols-6 justify-start items-center gap-2 " key={item.id}>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.coin}</div>
      <div>0.00 {item.name}</div>
      <div>${item.price}</div>
      <div>
        {/* <input type="text" value={topLink} onChange={(e) => setTopLink(e.target.value)} />
        <input type="text" value={btmLink} onChange={(e) => setBtmLink(e.target.value)} /> */}
        <Link to={`/user/markets/trade/crypto/${item.name}/${item.obj}`}>
        <button className="bg-green-100 hover:bg-green-700 text-green-700 hover:text-green-100 px-3 md:px-4 py-2 rounded-xl transition-all ease-in-out duration-[1s]">Trade</button>
        </Link>
        </div>
      </div>      
        ))}
      
      </div>
      
    </div>
  )
}

export default CryproCompon