import { bankwithdrawalImg } from "../../../assets"

interface Wdctypes {
minWd: String,
maxWd: String,
wMode: String,
chgWd: String,
duraWd: String
}

const WithdrawCard = ({minWd, maxWd, wMode, chgWd, duraWd}: Wdctypes) => {
  return (
    <div className="max-w-fit shadow-xl px-4 pb-6 rounded-lg border border-neutral-200">
        <div className="bg-neutral-50 rounded-bl-lg rounded-br-lg">
         <div className="bg-primary px-3 py-1 text-white rounded-bl-lg rounded-br-lg w-fit mx-auto"><p>{wMode}</p></div>
        <img src={bankwithdrawalImg} alt="" className="w-24 py-4 mx-auto" />   
        </div>
        
        <div className="">
        <p>Min. Withdrawable: <span className="font-[500]">${minWd}.00</span> </p>
        <p>Max. Withdrawable: <span className="font-[500]">${maxWd}.00</span> </p>
        <p>Charges Amount: <span className="font-[500]">{chgWd}%</span> </p>
        <p>Duration: <span className="font-[500]">{duraWd} Minute</span> </p>
        <div className="w-full pt-2">
            <button className="py-2 w-full bg-primary text-white rounded-lg shadow">+ Request Withdrawal</button>
        </div>
        </div>
    </div>
  )
}

export default WithdrawCard