import { useContext} from "react";
import { AuthContext } from "../../../app/AuthContext";

const LiveReading = () => {


  const {data} = useContext(AuthContext);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
      <div className="flex justify-between items-center">
        <p className="font-[Jost] font-[600]">Live</p>
        <span className="relative flex size-3">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
</span>
        </div>  
        <p>0</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Total Amount</p>
        <p className="font-[600] text-xl py-2">${data ? Number(data?.tAmount).toLocaleString() : 0}</p>
      
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Current Plan</p>
        <p className="font-[600] text-xl py-2">0</p>
      
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[Jost] font-[600]">Total Trades</p>
        <p className="font-[600] text-xl py-2">{data?.market.length}</p>
      
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[Jost] font-[600]">Total Stakes</p>
        <p className="font-[600] text-xl py-2">{data?.staked.length}</p>
      
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[Jost] font-[600]">Bonus</p>
        <p className="font-[600] text-xl py-2">0</p>
      
      </div>
    </div>
  );
};

export default LiveReading;
