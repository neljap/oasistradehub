import { FaMapLocationDot, FaMarker } from "react-icons/fa6"
import { cryptoxavantimg, daytradequeenimg, elonmuskimg, forexempressimg, forexqueenximg, jbravoimg, lucha$traderimg, optionsproimg, optionswizardimg, protraderximg, pyramidmysticimg, rosscameron, sambatraderimg, swingkingimg, swingmasterimg } from "../../../assets";
import { useState } from "react";


const TradExpertPg = () => {
  const [inputTradEx, setInputTradEx] = useState("");

  const TradingEx = [
    {
      id: 1,
      name: "J Bravo",
      title: "Bakerfield",
      subdash: ["1.2k", "8.2", "AAPL"],
      tradValue: [300, 12, 20.5, 82],
      img: jbravoimg
    },
    {
      id: 2,
      name: "Elon Musk",
      title: "Hidden",
      subdash: ["1.2k", "8.2", "TSLA"],
      tradValue: [713, 12, 20.5, 95],
      img: elonmuskimg
    },
    {
      id: 3,
      name: "Ross Cameron",
      title: "Armada",
      subdash: ["1.2k", "8.2", "AAPL"],
      tradValue: [300, 17, 20.5, 91],
      img: rosscameron
    },
    {
      id: 4,
      name: "ProTraderX",
      title: "New York",
      subdash: ["1.2k", "8.2", "AAPL"],
      tradValue: [300, 12, 20.5, 75],
      img: protraderximg
    },
    {
      id: 5,
      name: "SwingMaster",
      title: "Los Angeles",
      subdash: ["0.8k", "6.5", "GOOGL"],
      tradValue: [450, 8, 15.2, 62],
      img: swingmasterimg
    },
    {
      id: 6,
      name: "OptionsPro",
      title: "London",
      subdash: ["1.5k", "7.1", "TSLA"],
      tradValue: [250, 18, 23.7, 81],
      img: optionsproimg
    },
    {
      id: 7,
      name: "OptionsWizard",
      title: "Seattle",
      subdash: ["0.8k", "8", "AMZN"],
      tradValue: [270, 14, 17.6, 70],
      img: optionswizardimg
    },
    {
      id: 8,
      name: "DayTradeQueen",
      title: "Singapore",
      subdash: ["1.3k", "7.3", "NFLX"],
      tradValue: [290, 11, 22, 76],
      img: daytradequeenimg
    },
    {
      id: 9,
      name: "SwingKing", 
      title: "Philadelphia",
      subdash: ["0.9k", "6.6", "AAPL"],
      tradValue: [360, 13, 16.4, 64],
      img: swingkingimg
    },
    {
      id: 10,
      name: "ForexqueenX",
      title: "Berlin",
      subdash: ["1.4k", "7.7", "EURUSD"],
      tradValue: [330, 17, 20.2, 72],
      img: forexqueenximg
    },
    {
      id: 11,
      name: "Forex Empress",
      title: "Tokyo",
      subdash: ["1.1k", "7.8", "JPY"],
      tradValue: [280, 9, 21.5, 78],
      img: forexempressimg
    },
    {
      id: 12,
      name: "Cryptoxavant",
      title: "Mumbai",
      subdash: ["0.9k", "6.4", "INR"],
      tradValue: [320, 16, 18.7, 65],
      img: cryptoxavantimg
    },
    {
      id: 13,
      name: "Samba_trader",
      title: "Sao Paulo",
      subdash: ["1.0k", "7.1", "BRL"],
      tradValue: [340, 12, 20.1, 73],
      img: sambatraderimg
    },
    {
      id: 14,
      name: "Pyramidmystic",
      title: "Cairo",
      subdash: ["1.2k", "7.6", "BTC"],
      tradValue: [270, 10, 22.3, 80],
      img: pyramidmysticimg
    },
    {
      id: 15, 
      name: "Lucha$Trader",
      title: "Mexico City",
      subdash: ["1.1k", "7", "MXN"],
      tradValue: [310, 14, 17.9, 67],
      img: lucha$traderimg
    }
  ]

  const filterTradPert = TradingEx.filter((filTrad) => filTrad.name.toLocaleUpperCase().indexOf(inputTradEx.toLocaleLowerCase()) !== -1)

  return (
    <div>
        <div className="container">
            <div className="flex flex-col gap-2">
          <h3 className="font-[500] text-2xl">Copy Expert Traders</h3>
        <p>Copy expert traders from all over the world and enhance your investment portfolio.</p>
        <div className="py-6">
         <input type="text" value={inputTradEx} onChange={(e: any) => setInputTradEx(e.target.value)} className="w-full rounded-xl p-2 border border-neutral-200"  placeholder="Search expert traders"/>   
        </div>         
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
              {filterTradPert.map((item: any) => (
              <div className="rounded-xl border border-neutral-200 px-2 py-4 mx-auto w-full" key={item.id}>
                  <div className="flex flex-row justify-center items-center py-2">
                    <img src={item.img} alt="" className="rounded-full w-24 h-24" />
                  </div>
                    
                    <div className="flex flex-row gap-2 items-center justify-center py-1">
                        <p className="font-[500] text-xl">{item.name}</p>
                        <FaMarker />
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center py-1">
                        <FaMapLocationDot />
                        <p>{item.title}</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center pt-2">
                      <div className="bg-neutral-100 rounded-lg px-2">
                        <p>1.2k</p>
                      </div>
                      <div className="bg-neutral-100 rounded-lg px-2">
                        <p>8.2</p>
                      </div>
                      <div className="bg-neutral-100 rounded-lg px-2">
                        <p>AAPL</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-4 px-2">
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p>Total trades</p>
                        <p>{item.tradValue[0]}</p>
                      </div>
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p>Total trades</p>
                        <p>300</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-4 px-2">
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p>Total trades</p>
                        <p>300</p>
                      </div>
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p>Total trades</p>
                        <p>300</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4">
                      <button className="bg-primary text-white rounded-lg shadow py-2 px-3 hover:text-primary hover:bg-opacity-20 border hover:border-primary font-[500] transition-all ease-in-out duration-[1s]">Copy Trader Strategy</button>
                    </div>
                </div>  
              ))}
                
            </div>
         
        </div>

        
        
    </div>
  )
}

export default TradExpertPg