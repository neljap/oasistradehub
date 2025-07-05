import axios from 'axios';
import  { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../app/AuthContext';
import { toast } from 'react-toastify';

interface BuyMarketype {
    coin: any,
    butClass: string,
    butext: string,
    img: any
}

const BuyMarketCard = ({coin, butClass, butext, img}: BuyMarketype) => {

    const {obj} = useParams();

    const {data} = useContext(AuthContext);

    const [mktInput, setMktInput] = useState<any>(null);
    // const [mktLotSize, setMktLotSize] = useState(null)
    const [mktEntryP, setMktEntryP] = useState(Number(obj))
    const [lotsize, setLotsize] = useState(0)
    const [duration, setDuration] = useState("")
    const [marketLoad, setMarketLoad] = useState(false);
    // const [amountUSD, setAmountUSD] = useState("");
    // const [amountCoin] = useState(Math.round((mktInput / Number(obj)) * 100) / 100 );

    const duraOptions = [0.5, 1, 2, 3]


    const handleSubmit = async(e: any) => {
      setMarketLoad(true);
      e.preventDefault();


      try {

        let tAmount = data?.tAmount

        if(tAmount < mktInput){
          toast.info("Insufficient balance", {position: "bottom-left"})
          return;
        }

        let amountCoin = Math.round((mktInput / Number(obj)) * 100) / 100;

        // console.log({"asset": coin, "amountCoin": amountCoin, "amountUSD": mktInput, "Buy/Sell": butext, "Duration": duration, "EntryPrice": mktEntryP})
  
        let res = await axios.post("https://oaserver.onrender.com/api/user/market", {userid: data._id, market: { asset: coin, amountCoin, amountUSD: mktInput, buysell: butext, duration, entryPrice: mktEntryP, status: "Pending", fullname: data?.fullname, email: data?.email, id: data?._id, img: img } });
        if(res){
        tAmount = tAmount - mktInput
          await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        tAmount,
      })
        toast.success("Trade Placed", {position: "bottom-left"})
        }
      } catch (error: any) {
        toast.error(`Error: ${error}`, {position: "bottom-left"})
        console.log("error", error)
      }finally{
        setMktInput("");
        setLotsize(0);
        setDuration("");
        setMarketLoad(false);
      }

    }



  return (
                <form className="py-4 w-full" onSubmit={handleSubmit}>
                  <p className="font-[500] font-[Jost]">Current Price</p>
                  <div className="bg-neutral-200 p-2 rounded ">
                    <p>1 {coin} ~ ${mktEntryP}</p>
                  </div>
                  <div className="py-2 flex flex-col gap-1">
                    <p className='font-[500] font-[Jost]'>Trade Amount (USD)</p>
                    <div className="bg-neutral-100 p-2 rounded w-full flex flex-row justify-between items-center">
                      <input type="number" required value={mktInput} onChange={(e: any) => setMktInput(e.target.value)} className="bg-neutral-100 outline-none" placeholder="Amount (USD)" />
                      <p>{ Math.round((mktInput / Number(obj)) * 100) / 100 } {coin}</p>
                    </div>
                  </div>
                  <div className="py-2 flex flex-col gap-1">
                    <p className='font-[500] font-[Jost]'>Lotsize</p>
                    <input type="number" value={lotsize} onChange={(e: any) => setLotsize(e.target.value)} required className="bg-neutral-100 outline-none p-2 rounded" placeholder="Lot size" />
                  </div>
                  <div className="py-2 flex flex-col gap-1">
                  <p className='font-[500] font-[Jost]'>Entry Price</p>
                  <div className="">
                    <input type="number" value={mktEntryP} onChange={(e: any) => setMktEntryP(e.target.value)} name="" id="" className='p-2 bg-neutral-100 rounded w-full' />
                  </div>
                  </div>
                  <div className="w-full relative py-2 flex flex-col gap-1">
                    <p className='font-[500] font-[Jost]'>Duration</p>
                    {/* <div className="flex flex-row justify-between p-2 bg-neutral-100 rounded cursor-pointer" onClick={() => setDuratlean(!duratlean)}>
                      <p>Select a duration</p>
                      <FaAngleDown />
                    </div> */}
                    <select name="" required id="" value={duration} onChange={(e:any) => setDuration(e.target.value)} className='rounded cursor-pointer outline-none border border-gray-400 w-full pe-4 py-1 shadow'>
                      <option value="">Select Duration</option>
                      {duraOptions.map((item, index) => (
                       <option value={item} key={index}>{item == 0.5 ? 30 : item} {item == 0.5 ? "minutes" : item == 1 ? "hour" : "hours"}</option> 
                      ))}
                    </select>
                    <div>
                    </div>
                    
                  </div>
                  <div>
                   
                    <button className={`${butClass} w-full rounded py-2 text-white font-[500]`}>{marketLoad ? (
                      <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                      viewBox="0 0 24 24"
                    ></svg>
                    {butext == "Buy" ? "Buying" : "Selling"} {coin}
                  </div>
                    ):(
                    <div>
                   {butext} {coin}
                  </div>
                    )}{" "}
                    </button>
                  
                  
                  </div>
                </form>

  )
}

export default BuyMarketCard