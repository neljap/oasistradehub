import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StakeContext } from "../../../../app/StakeContext";
import { FaAngleDown } from "react-icons/fa6";
import { CurrencyStakePg } from "../../../../utils/AppData";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../../../app/AuthContext";


const CurrencyComp = () => {
  const [stakeOpen, setStakeOpen] = useState(false);
    const [stakeNum, setStakeNum] = useState(0);
    const [stakingdrop, setStakingdrop] = useState(false);
    const [stakingSetNum] = useState(0);
    // const [sCardModal, setSCardModal] = useState(null);
    const [inputModal, 
      
      // setInputModal
    ] = useState<any>(null);

    const {inputStkCurrency, handleStkCurrency, filteredStkCurrency} = useContext(StakeContext);

    console.log("staking", stakingSetNum);
    const { data } = useContext(AuthContext);
    
    const singleStake =  CurrencyStakePg.find((item) => item.id == stakingSetNum);

    // const handleStake = 
    
    async (e: any) => {
    e.preventDefault();
    let sAmount = inputModal;
    let sImg = singleStake?.icon
    let sSign = singleStake?.sign;
    let sCoin = singleStake?.name;
    let sDuration = stakeNum;

    let sRPC =
      stakeNum == 1
        ? Number(inputModal) * 1.05
        : stakeNum == 3
        ? Math.floor(((Number(inputModal) * 1.189) / 3) * 100) / 100
        : stakeNum == 4
        ? Math.floor(((Number(inputModal) * 1.296) / 4) * 100) / 100
        : stakeNum == 6
        ? Math.floor(((Number(inputModal) * 1.5282) / 6) * 100) / 100
        : stakeNum == 8
        ? Math.floor(((Number(inputModal) * 1.832) / 8) * 100) / 100
        : stakeNum == 12
        ? Math.floor(((Number(inputModal) * 2.4396) / 12) * 100) / 100
        : 0;
    let sROI =
      stakeNum == 1
        ? Number(inputModal) * 1.05
        : stakeNum == 3
        ? Math.floor(Number(inputModal) * 1.189 * 100) / 100
        : stakeNum == 4
        ? Math.floor(Number(inputModal) * 1.296 * 100) / 100
        : stakeNum == 6
        ? Math.floor(Number(inputModal) * 1.5282 * 100) / 100
        : stakeNum == 8
        ? Math.floor(Number(inputModal) * 1.832 * 100) / 100
        : stakeNum == 12
        ? Math.floor(Number(inputModal) * 2.4396 * 100) / 100
        : 0;

    let staked = { sAmount, sSign, sCoin, sDuration, sROI, sRPC };
    

    try {
      // const res = await axios.post(
      //   "https://oaserver.onrender.com/api/user/staked",
      //   { userid: data._id, staked }
      // );
      // console.log("res", res);
      // if(allStakings.length > 0){
      //  setAllStakings(allStakings.push(staked)) 
      // }else{
      //   setAllStakings([...allStakings, allStakings.push(staked)])
      // }
      let img = sImg
      let asset = sSign;
      let amount = sAmount
      let duration = sDuration
      let returns = sRPC
      let totalreturn = sROI
      let status = 'locked'
      console.log("staking", staked)
      let tAmount = data?.tAmount
      if(tAmount < inputModal){
        toast.info("Insufficient balance", {position: "bottom-left"})
        return;
      }
      let res =  await axios.post("https://oaserver.onrender.com/api/user/staked", {userid: data?._id, stakes: {img, asset, amount, duration, returns, totalreturn, status}})
      if(res){
        tAmount = tAmount - inputModal
        await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        tAmount,
      })
      toast.info("Staked", {position: "bottom-left"})
      }
        

      // dispatch(stakeAdded(asset,  amount, duration, returns, totalreturn, status ))
    } catch (error) {
      toast.error(`staked error: ${error}`, {position: "bottom-left"})
      console.log("error", error);
    } finally {
      setStakeOpen(false);
    }
  };
  return (
    <div>
      <div className="my-4">
        <input type="text" value={inputStkCurrency} onChange={handleStkCurrency} placeholder="Search Cryptos eg. 'BTC'" className="w-full border border-neutral-200 rounded-xl p-2"/>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
    {filteredStkCurrency.map((item: any) => (
        <div className="" key={item.id}>
        <div className="border border-neutral-400 rounded-xl bg-neutral-50 p-4 flex flex-col gap-3 shadow">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2">
            <img src={item.icon} alt="" className="w-12" />
            <div>
              <p className="font-[500]">{item.name}</p>
              <p className="font-[400] text-sm text-neutral-700">{item.sign}</p>
            </div>
          </div>
          <div className="bg-neutral-200 py-1 px-2 rounded-lg">
            <p className="font-[500]">$</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
        <div className="bg-neutral-200 rounded-lg px-2 py-1">
          <p>Minium</p>
          <p>$100</p>
        </div>
        <div className="bg-neutral-200 rounded-lg px-2 py-1">
          <p>ROI</p>
          <p>5% - 12%</p>
        </div>
        <div className="bg-neutral-200 rounded-lg px-2 py-1">
          <p>Cycle</p>
          <p>Monthly</p>
        </div>
        </div>
  
          <button className="bg-primary w-full text-white py-3 rounded-xl" onClick={() => setStakeOpen(true)}>Stake {item.name}</button>
        </div>
          
        </div>
    ))}

    
  </div>
  <div>
          {stakeOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
              <div className='w-[500px] p-8 rounded-xl h-fit bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-4 mt-20 relative'>
                <div className="absolute top-4 right-8 cursor-pointer" onClick={() => setStakeOpen(false)}>
                <FaTimes />  
                </div>
                
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-row gap-2">
                    <div>
                      <img src={singleStake?.icon} alt="" className="w-12" />
                    </div>
                    <div>
                      <h4 className="font-[500]">{singleStake?.name}</h4>
                      <p>{singleStake?.sign}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-[500]">1BTC ~ 83009</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start w-full">
                  <label>Staking Amount (USD)</label>
                  <input type="number" name="" id="" placeholder="Enter amount to stake" className="w-full p-2 rounded-lg" />
                  <div className="flex flex-row items-center py-1 gap-2">
                    <p className="text-sm font-[500]">Balance: 0.000BTC</p>
                    <Link to="/" className="text-sm font-[500] py-1 px-2 rounded-lg bg-neutral-200">Deposit</Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-start items-start gap-3">
                  <div className="relative">
                    <label className="text-sm font-[500]">Staking Duration</label>
                    <div className="flex flex-row gap-3 justify-between items-center p-2 rounded-lg border border-neutral-800 cursor-pointer" onClick={() => setStakingdrop(!stakingdrop)}>
                      <p>{ stakeNum == 0 ? "Select a Duration" : `${stakeNum} months`}</p>
                      <FaAngleDown />
                    </div>
                    {stakingdrop && (
                     <div className="flex flex-col gap-1 absolute w-full border border-neutral-800 rounded-lg bg-[#f1f1f1] dark:bg-[#1f2937] top-16 shadow-lg p-1">
                      <button className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm" value={1} onClick={() => setStakeNum(1)}>1 months</button>
                      <button className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm" value={3} onClick={() => setStakeNum(3)}>3 months</button>
                      <button className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm">4 months</button>
                      <button className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm">6 months</button>
                      <button className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm">8 months</button>
                      <button className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm">12 months</button>
                    </div> 
                    )}
                    
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-[500]">Return per cycle</label>
                    <input type="text" placeholder="0 per months" className="w-full p-2 rounded-lg border border-neutral-600" />
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-start items-start gap-3">
                    <div>
                      <label className="text-sm font-[500]">ROI (USD)</label>
                      <input type="text" placeholder="0 per months" className="w-full p-2 rounded-lg border border-neutral-600" />
                    </div>
                    <div>
                      <label className="text-sm font-[500]">ROI (USD)</label>
                      <input type="text" placeholder="0 per months" className="w-full p-2 rounded-lg border border-neutral-600" />
                    </div>
                </div>
                <div className="border border-neutral-800 p-2 rounded-lg">
                  <p className="text-sm">Staking results in an estimated 0% RPC (Return Per Cycle) for BTC</p>
                </div>
                <div className="border border-neutral-800 p-2 rounded-lg">
                  <p className="text-sm">Your staking period will end in 0 month(s). Your earning will be sent to your live BTC account</p>
                </div>
  
                  <button className="w-full rounded-lg bg-neutral-800 py-3 text-white font-[500]">Stake BTC</button>
  
                  {/* <p>Are you sure you want to Log Out?</p>
                  <div className='flex justify-between items-center px-8 gap-4'>
                      <button className='bg-primary px-4 py-2 rounded-xl' onClick={() => setStakeOpen(false)}>Yes</button>
                      <button className='bg-red-500 px-4 py-2 rounded-xl' onClick={() => setStakeOpen(false)}>No</button>
                  </div> */}
              </div>
          </div>)}
          </div>
        </div>
  )
}

export default CurrencyComp