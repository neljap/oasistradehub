import {  czechflag, elonmuskimg, franceflag, germanyflag, jbravoimg, 
  optionsproimg, protraderximg, 
  rosscameron, singaporeflag, swingmasterimg, 
  tradereight, 
  traderfive, 
  traderfour, 
  tradernine, 
  traderone, 
  traderseven, 
  tradersix, 
  traderthree, 
  tradertwo, 
  UAEFlag,
  UsaFlag} from "../../../assets";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../app/AuthContext";


const TradExpertPg = () => {
  const [inputTradEx, setInputTradEx] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const [eachTrader, setEachTrader] = useState<any>(null)
  const [traderLoad, setTraderLoad] = useState(false)

  const { data } = useContext(AuthContext);

  const TradingEx = [
    {
      id: 1,
      name: "Julian Hosp",
      names: "JBravo",
      title: "Singapore",
      sym: singaporeflag,
      img: rosscameron,
      pshare: "20%",
      winrate: "85%",
      totaltrade: 291
    },
    {
      id: 2,
      name: "Sequoia",
      names: "ElonMusk",
      title: "France",
      sym: franceflag,
      img: swingmasterimg,
      pshare: "20%",
      winrate: "87%",
      totaltrade: 330
    },
    {
      id: 3,
      name: "Jiri Pribyl",
      names: "rosscameron",
      title: "Czech",
      sym: czechflag,
      subdash: ["1.2k", "8.2", "AAPL"],
      tradValue: [300, 17, 20.5, 91],
      // img: rosscameron,
      img: optionsproimg,
      // img: jbravoimg,
      pshare: "20%",
      winrate: "91%",
      totaltrade: 415
    },
    {
      id: 4,
      name: "Christian Haag",
      names: "protraderX",
      title: "Germany",
      sym: germanyflag,
      subdash: ["1.2k", "8.2", "AAPL"],
      tradValue: [300, 12, 20.5, 75],
      img: protraderximg,
      pshare: "20%",
      winrate: "88%",
      totaltrade: 390
    },
    {
      id: 5,
      name: "Power Hasheur",
      names: "swingmaster",
      title: "France",
      sym: franceflag,
      subdash: ["0.8k", "6.5", "GOOGL"],
      tradValue: [450, 8, 15.2, 62],
      img: jbravoimg,
      pshare: "20%",
      winrate: "92%",
      totaltrade: 291
    },
    {
      id: 6,
      name: "Ondrej Kobersky",
      names: "optionspro",
      title: "Czech",
      sym: czechflag,
      subdash: ["1.5k", "7.1", "TSLA"],
      tradValue: [250, 18, 23.7, 81],
      // img: optionsproimg,
      img: elonmuskimg,
      pshare: "20%",
      winrate: "87%",
      totaltrade: 350
    },
    {
      id: 7,
      name: "Adrian Mudronja",
      names: "optionswizard",
      sym: UAEFlag,
      title: "United Arab Emirates",
      subdash: ["0.8k", "8", "AMZN"],
      tradValue: [270, 14, 17.6, 70],
      img: traderone,
      pshare: "20%",
      winrate: "88%",
      totaltrade: 413
    },
    {
      id: 8,
      name: "Higina Investora",
      names: "",
      sym: UAEFlag,
      title: "Russian",
      img: tradersix,
      pshare: "20%",
      winrate: "90%",
      totaltrade: 413
    },
    {
      id: 9,
      name: "Petr Plechac",
      names: "",
      title: "Czech Republic",
      sym: czechflag,
      img: tradertwo,
      pshare: "20%",
      winrate: "87%",
      totaltrade: 413
    },
    {
      id: 10,
      name: "Hakan Atesler",
      names: "",
      title: "Turkey",
      sym: UAEFlag,
      img: traderfour,
      pshare: "20%",
      winrate: "90%",
      totaltrade: 413
    },
    {
      id: 11,
      name: "Para Port",
      names: "",
      title: "Turkey",
      sym: UAEFlag,
      img: traderfive,
      pshare: "20%",
      winrate: "90%",
      totaltrade: 413
    },
    {
      id: 12,
      name: "Harry Tackleberry",
      names: "",
      title: "Germany",
      sym: germanyflag,
      img: traderthree,
      pshare: "20%",
      winrate: "90%",
      totaltrade: 413
    },
    {
      id: 13,
      name: "Kim Paula",
      names: "",
      title: "New Jersey, USA",
      sym: UsaFlag,
      img: traderseven,
      pshare: "20%",
      winrate: "92%",
      totaltrade: 413
    },
    {
      id: 14,
      name: "Camilla",
      names: "",
      title: "Germany",
      sym: germanyflag,
      img: tradereight,
      pshare: "20%",
      winrate: "91%",
      totaltrade: 430
    },
    {
      id: 15,
      name: "Elon Musk",
      names: "",
      title: "United States",
      sym: UsaFlag,
      img: tradernine,
      pshare: "20%",
      winrate: "89%",
      totaltrade: 313
    }
  ]

  const singleTrader = TradingEx.find((item) => item.id === eachTrader)

  useEffect(() => {
            document.title = "Oasis Trade Home | Trading Expert"
          }, [])
    // Are you sure you want to subscribe to Julian Hosp copy trading strategy?

  const filterTradPert = TradingEx.filter((filTrad) => filTrad.names.toLocaleUpperCase().indexOf(inputTradEx.toLocaleLowerCase()) !== -1)

  const handleTradingEx = async() => {
    setTraderLoad(true)
    // setIsOpen(f); 
try {

  console.log(singleTrader, "id")
  let res =  await axios.post("https://oaserver.onrender.com/api/user/copytrader", {userid: data?._id, copyTrader: singleTrader})
  if(res) {
  toast.success("Trader copied successfully", {position: "bottom-left"})
  } 
  
} catch (error) {
  toast.error("An Error Occurred", {position: "bottom-left"})
}finally{
  setIsOpen(false);
  setTraderLoad(false);
  
  // window.location.reload();
}

  }
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center pt-4 pb-8">
              {filterTradPert.map((item: any) => (
              <div className="rounded-xl border font-[Jost] border-neutral-200 px-2 py-4 mx-auto w-full" key={item.id}>
                  <div className="flex flex-row justify-center items-center py-2">
                    <img src={item.img} alt="" className="rounded-full w-24 h-24" />
                  </div>
                    
                    <div className="flex flex-row gap-2 items-center justify-center py-1">
                        <p className="font-[500] text-xl">{item.name}</p>
                        
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center py-1">
                        <p className="font-[600]">{item.title}</p>
                        <img src={item.sym} alt="" className="w-8" />
                    </div>
                    {/* <div className="flex flex-row gap-2 items-center justify-center pt-2">
                      <div className="bg-neutral-100 rounded-lg px-2">
                        <p>1.2k</p>
                      </div>
                      <div className="bg-neutral-100 rounded-lg px-2">
                        <p>8.2</p>
                      </div>
                      <div className="bg-neutral-100 rounded-lg px-2">
                        <p>AAPL</p>
                      </div>
                    </div> */}
                    <div className="grid grid-cols-2 gap-2 pt-4 px-2 ">
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p className="font-[600]">Profit share</p>
                        <p>{item.pshare}</p>
                      </div>
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p className="font-[600]">Win rate</p>
                        <p>{item.winrate}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-4 px-2">
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p className="font-[600]">Amount</p>
                        <p>$1,500</p>
                      </div>
                      <div className="bg-neutral-100 rounded-md py-1 px-2 flex flex-row justify-between items-center">
                        <p className="font-[600]">Total trades</p>
                        <p>{item.totaltrade}</p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-4">
                      <button className="bg-primary text-white rounded-lg shadow py-2 px-3 hover:text-primary hover:bg-opacity-20 border hover:border-primary font-[500] transition-all ease-in-out duration-[1s]" onClick={() => {setIsOpen(true), setEachTrader(item.id)}}>Copy Trader Strategy</button>
                    </div>
                </div>  
              ))}
                
            </div>
         
        </div>

        {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className=" rounded-xl bg-[#f1f1f1] dark:bg-[#1f2937] px-12 py-4 w-3/4 md:w-1/2 flex flex-col justify-center items-center gap-2">
            <div>
              <img src={singleTrader?.img} alt="" className="w-20 rounded-full" />
              <p className="font-[Jost]">{singleTrader?.name}</p>
            </div>
            <p>Are you sure you want to subscribe to {singleTrader?.name} copy trading strategy?</p>
            

            
            <div className="flex justify-between items-center px-8 gap-4">
              <button
                className="bg-red-500 px-4 py-2 rounded-xl"
               onClick={() => setIsOpen(!isOpen)}
              >
                Exit
              </button>
              <button
                className="bg-green-500 font-[Jost] font-[600] px-4 py-2 rounded-xl"
                onClick={handleTradingEx}
              >
                {traderLoad ? "Loading..." : "Accept"}
              </button>
            </div>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default TradExpertPg