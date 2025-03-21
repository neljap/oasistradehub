import  { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

interface BuyMarketype {
    coin: any,
    butClass: string,
    butext: string
}

const BuyMarketCard = ({coin, butClass, butext}: BuyMarketype) => {

    const {obj} = useParams();

    const [duratlean, setDuratlean] = useState(false);
    const [mktInput, setMktInput] = useState<any>(null);
    // const [mktLotSize, setMktLotSize] = useState(null)
    const [mktEntryP, setMktEntryP] = useState(Number(obj))

    



  return (
                <div className="py-4 w-full">
                  <p className="font-[500]">Current Price</p>
                  <div className="bg-neutral-200 p-2 rounded ">
                    <p>1 {coin} ~ $0.174193</p>
                  </div>
                  <div className="py-2 flex flex-col gap-1">
                    <p>Trade Amount (USD)</p>
                    <div className="bg-neutral-100 p-2 rounded w-full flex flex-row justify-between items-center">
                      <input type="number" value={mktInput} onChange={(e: any) => setMktInput(e.target.value)} className="bg-neutral-100 outline-none" placeholder="Amount (USD)" />
                      <p>{ Math.round((mktInput / Number(obj)) * 100) / 100 } {coin}</p>
                    </div>
                  </div>
                  <div className="py-2 flex flex-col gap-1">
                    <p>Lotsize</p>
                    <input type="number" className="bg-neutral-100 outline-none p-2 rounded" placeholder="Lot size" />
                  </div>
                  <div className="py-2 flex flex-col gap-1">
                  <p>Entry Price</p>
                  <div className="">
                    <input type="number" value={mktEntryP} onChange={(e: any) => setMktEntryP(e.target.value)} name="" id="" className='p-2 bg-neutral-100 rounded w-full' />
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
                    <button className={`${butClass} w-full rounded py-2 text-white font-[500]`}>{butext} {coin}</button>
                  </div>
                </div>

  )
}

export default BuyMarketCard