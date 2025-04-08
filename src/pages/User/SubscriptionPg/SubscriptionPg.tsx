import { VscVerifiedFilled } from "react-icons/vsc"
import { premiummimg } from "../../../assets"
import { CurrentPlanCard } from "../ui"
import { SubscribeData } from "./components/Data"


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
            <div className="flex flex-row gap-1 items-center justify-center"><img src={premiummimg} className="w-12" alt="" />
            <p className="text-xl font-[500]">{item.name} Plan</p>
            </div>
            <div className="px-3 py-2 rounded bg-[#7f57f3] w-fit mx-auto">
              <p>${item.amount}/6mo</p>
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