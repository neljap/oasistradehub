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
        <p>2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p>Live</p>
        <p>0</p>
        <p>2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p>Live</p>
        <p>0</p>
        <p>2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p>Live</p>
        <p>0</p>
        <p>2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p>Live</p>
        <p>0</p>
        <p>2.4% from last second</p>
      </div>
      <div className="border border-neutral-200 rounded-xl bg-white p-4">
        <p>Live</p>
        <p>0</p>
        <p>2.4% from last second</p>
      </div>
    </div>
  );
};

export default LiveReading;
