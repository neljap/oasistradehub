import { VscVerifiedFilled } from "react-icons/vsc"
import { premiummimg } from "../../../assets"
import { CurrentPlanCard } from "../ui"
import { SubscribeData } from "../../../utils/SubscriptData"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../app/AuthContext"
// import { toast } from "react-toastify"
import { Link } from "react-router-dom"


const SubscriptionPg = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  // const [isChoice, setIsChoice] = useState<any>(null)
  // const [range, setRange] = useState<any>(isChoice?.amount)
  // const [subNum, setSubNum] = useState(0);
  const [insufficient, 
    
    // setInsufficient
  
  ] = useState(false);


  // const {data} = 
  useContext(AuthContext)


// let tAmount = data?.tAmount

// console.log(isOpen, "isOpen")
// const handleSubscription = async(item:any) => {
//   console.log("it", item)
//   // @ts-ignore
//     if(JSON.stringify(isChoice).amount  > tAmount){
//       setInsufficient(true)
//       return;
//     }
//     setIsOpen(true)
//     try {
//       if(range > tAmount){
//         toast.info("Ins", {position: "bottom-left"})
//       }
//     } catch (error: any) {
//       toast.error(error, {position: "bottom-left"})
//     }finally{
//       setRange("")
//       setIsOpen(false)
//     }
//   }
//   // handleSubscription()
// useEffect(() => {
 
// }, [isChoice])

useEffect(() => {
  document.title = "Oasis Trade Home | Subscription"
}, [])
  

  

  return (
    <div>
      <div className="container">
        <h2 className="text-xl font-[500] font-[Jost]">INVESTMENT</h2>
        <CurrentPlanCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          {SubscribeData.map((item: any) => (
          <div className={`w-full rounded-lg border ${item.id == 1 ? "border-purple-400" : item.id == 2 ? "border-primary" : item.id == 3 ? "border-red-400" : "border-yellow-400"} p-8 flex flex-col justify-between`} key={item.id}>
            <div className="flex flex-row gap-1 items-center justify-center"><img src={premiummimg} className="w-8 md:w-12" alt="" />
            <p className="text-lg md:text-2xl font-[500] font-[Jost]">{item.name} Plan</p>
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
            
            {insufficient &&  <p className="font-[Jost] text-red-500 font-[600]">Insufficient Balance, <Link to="/user/deposit">Deposit Now</Link></p> }
          </div>  
          
          ))}
          
        </div>
    </div>
    {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className=" rounded-xl bg-[#f1f1f1] dark:bg-[#1f2937] px-12 py-4 w-3/4 md:w-1/2 flex flex-col justify-center items-center gap-2">


            
            <div className="flex justify-between items-center px-8 gap-4">
              <button
                className="bg-red-500 px-4 py-2 rounded-xl"
               onClick={() => setIsOpen(!isOpen)}
              >
                Exit
              </button>
              <button
                className="bg-green-500 font-[Jost] font-[600] px-4 py-2 rounded-xl"
                // onClick={handleSubscription}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
 
export default SubscriptionPg