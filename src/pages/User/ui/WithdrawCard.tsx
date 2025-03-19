import { bankwithdrawalImg } from "../../../assets"

const WithdrawCard = () => {
  return (
    <div className="max-w-fit shadow-xl px-4 pb-6 rounded-lg border border-neutral-200">
        <div className="bg-neutral-50 rounded-bl-lg rounded-br-lg">
         <div className="bg-primary px-4 py-2 text-white rounded-bl-lg rounded-br-lg w-fit mx-auto"><p>Bank Withdrawal</p></div>
        <img src={bankwithdrawalImg} alt="" className="w-24 py-4 mx-auto" />   
        </div>
        
        <div className="">
        <p>Min. Withdrawable: <span className="font-[500]">$1.00</span> </p>
        <p>Max. Withdrawable: <span className="font-[500]">$1,000,000.00</span> </p>
        <p>Min. Withdrawable: <span className="font-[500]">13%</span> </p>
        <p>Min. Withdrawable: <span className="font-[500]">1 Minute</span> </p>
        <div className="w-full pt-2">
            <button className="py-2 w-full bg-primary text-white rounded-lg shadow">+ Request Withdrawal</button>
        </div>
        </div>
    </div>
  )
}

export default WithdrawCard