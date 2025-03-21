import { useEffect, useState } from "react";

const LiveReading = () => {

  const [num, setNum] = useState(0)

  useEffect(() => {
    setNum(Math.floor(Math.random() * 10) +1)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p>Live</p>
        <p>0</p>
        <p>{num}</p>
        <p className="text-green-800 font-[500]">2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Last Profit</p>
        <p className="font-[600] text-xl py-2">$0</p>
        <p className="text-green-800 font-[500]">2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Balance</p>
        <p className="font-[600] text-xl py-2">0</p>
        <p className="text-green-800 font-[500]">2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Trade</p>
        <p className="font-[600] text-xl py-2">0</p>
        <p className="text-green-800 font-[500]">2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Total Won</p>
        <p className="font-[600] text-xl py-2">0</p>
        <p className="text-green-800 font-[500]">2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p className="font-[500]">Total Loss</p>
        <p className="font-[600] text-xl py-2">0</p>
        <p className="text-green-800 font-[500]">2.4% from last second</p>
      </div>
    </div>
  );
};

export default LiveReading;
