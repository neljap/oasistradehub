import { VscVerifiedFilled } from "react-icons/vsc"
import { premiummimg } from "../../../assets"
import { Link } from "react-router-dom"

interface PricingType {
    title: string
    days: string
    amount: number
}


const PricingCard = ({title, days, amount}:PricingType) => {
  return (
    <div className="rounded-lg shadow flex flex-col justify-center items-center py-4 border-[#7f57f3] border-t-2 w-full bg-white dark:bg-gray-800">
              <div className="flex flex-row items-center gap-1">
               <img src={premiummimg} className="w-8" alt="" />
               <p className="font-[500] text-lg md:text-xl">{title} Plan</p> 

              </div>
              <div className="mx-auto text-center flex flex-row items-center py-4">
                <span className="font-[600] text-2xl">${amount}</span>
                <span>/{days}days</span>
              </div>
              <hr />
               <div className="flex flex-col gap-3 justify-start items-start py-4">

              <div className="flex flex-row items-start gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>

                          </div>
                          <div className="flex flex-row justify-center items-center">
                            <Link to="/user/dashboard">
              <button className="bg-[#7f57f3] transition-all ease-in-out duration-[1s] hover:bg-white border hover:border-primary hover:text-[#7f57f3] px-4 py-2 rounded-full mx-auto text-white font-[600]">Get Started</button>
                            
                            </Link>
            </div>
            </div>
  )
}

export default PricingCard