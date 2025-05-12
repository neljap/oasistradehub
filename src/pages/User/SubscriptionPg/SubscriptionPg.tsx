import { VscVerifiedFilled } from "react-icons/vsc"
import { premiummimg } from "../../../assets"
import { CurrentPlanCard } from "../ui"
import { SubscribeData } from "../../../utils/SubscriptData"


const SubscriptionPg = () => {
  
  // const SelectPack = ["Select Package", "Starter Package", "Growth Package", "Premium Package"]

  return (
    <div>
      <div className="container">
        <h2 className="text-xl font-[500]">INVESTMENT</h2>
        <CurrentPlanCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          {SubscribeData.map((item: any) => (
          <div className="w-full rounded-lg border border-neutral-200 p-8 flex flex-col justify-between" key={item.id}>
            <div className="flex flex-row gap-1 items-center justify-center"><img src={premiummimg} className="w-8 md:w-12" alt="" />
            <p className="text-lg md:text-2xl font-[500]">{item.name} Plan</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#7f57f3] bg-opacity-10 w-fit mx-auto">
              <p className="font-[500]">${item.amount}/{item.days}days</p>
            </div>
            <div className="py-4">
              <hr />
            </div>
            
              <div className="grid grid-cols-2 justify-between items-center w-full mx-auto">
                <p className="font-[500] text-start">Min Deposit:</p>
                <p className="text-center font-[600]">${item.amount}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center w-full mx-auto">
                <p className="font-[500] text-start">Max Deposit:</p>
                <p className="text-center font-[600]">${item.maxamount}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center w-full mx-auto">
                <p className="font-[500] text-start">Return of Interest</p>
                <p className="text-center font-[600]">40%</p>
              </div>


            <div className="flex flex-col gap-3 justify-start items-start py-4">
              {item.list.map((way: any, index: any) => (
<div className="flex flex-row items-center gap-2" key={index}>
                <VscVerifiedFilled />
                <p className="font-[500]">{way}</p>
              </div>
              ))}
              
            </div>
            <div className="flex flex-row justify-center items-center">
              <button className="bg-[#7f57f3] transition-all ease-in-out duration-[1s] hover:bg-opacity-20 border hover:border-primary hover:text-[#7f57f3] px-4 py-2 rounded-full mx-auto text-white font-[600]">Purchase Plan</button>
            </div>
          </div>  
          ))}
          
        </div>
    </div>
    </div>
  )
}
 
export default SubscriptionPg