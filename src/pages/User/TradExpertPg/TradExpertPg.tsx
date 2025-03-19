import { FaMarker } from "react-icons/fa6"
import { jbravoimg } from "../../../assets"


const TradExpertPg = () => {
  return (
    <div>
        <div className="container">
            <div className="flex flex-col gap-2">
          <h3 className="font-[500] text-2xl">Copy Expert Traders</h3>
        <p>Copy expert traders from all over the world and enhance your investment portfolio.</p>
        <div className="py-2">
         <input type="text" className="w-full rounded-xl p-2 border border-neutral-200"  placeholder="Search expert traders"/>   
        </div>         
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
                <div className="rounded-xl border border-neutral-200 p-2 mx-auto">
                    <img src={jbravoimg} alt="" className="rounded-full w-12 h-12" />
                    <div className="flex flex-row gap-2 items-center">
                        <p>J Bravo</p>
                        <FaMarker />
                    </div>
                </div>
            </div>
         
        </div>

        
        
    </div>
  )
}

export default TradExpertPg