import { useContext} from "react";
import { AuthContext } from "../../../app/AuthContext";

const LiveReading = () => {


  const {data} = useContext(AuthContext);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="border border-neutral-100 rounded-xl bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-[#2a3042]">
      <div className="flex flex-col justify-start items-start gap-1">
        <p className=" font-[500]">Live Market</p>
        <span className="relative flex size-4">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
  <span className="relative inline-flex size-4 rounded-full bg-green-500"></span>
</span>
        </div>  
        {/* <p>0</p> */}
      </div>
      <div className="border border-neutral-100 dark:border-neutral-700 dark:bg-[#2a3042] rounded-xl bg-neutral-100 p-4 ">
        <p className="font-[500]">Total Amount</p>
        <p className="font-[600] text-xl py-2">${data ? Number(data?.tAmount).toLocaleString() : 0}</p>
      
      </div>
      <div className="border border-neutral-100 dark:border-neutral-700 dark:bg-[#2a3042] rounded-xl bg-neutral-100 p-4">
        <p className="font-[500]">Current Plan</p>
        <p className="font-[600] text-xl py-2">0</p>
      
      </div>
      <div className="border border-neutral-100 dark:border-neutral-700 dark:bg-[#2a3042] rounded-xl bg-neutral-100 p-4">
        <p className="font-[Jost] font-[600]">Total Trades</p>
        <p className="font-[600] text-xl py-2">{data?.market.length}</p>
      
      </div>
      <div className="border border-neutral-100 dark:border-neutral-700 dark:bg-[#2a3042] rounded-xl bg-neutral-100 p-4">
        <p className="font-[Jost] font-[600]">Total Stakes</p>
        <p className="font-[600] text-xl py-2">{data?.staked.length}</p>
      
      </div>
      <div className="border border-neutral-100 dark:border-neutral-700 dark:bg-[#2a3042] rounded-xl bg-neutral-100 p-4">
        <p className="font-[Jost] font-[600]">Bonus</p>
        <p className="font-[600] text-xl py-2">${Number(data?.tBonus).toLocaleString()}</p>
      
      </div>
    </div>
  );
};

export default LiveReading;
