import { useNavigate } from "react-router-dom";
import { bankwithdrawalImg } from "../../../assets"
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../app/AuthContext";

interface Wdctypes {
minWd: String,
maxWd: String,
wMode: String,
chgWd: String,
duraWd: String,
msign: any
// handleWithdraw: any
}

const WithdrawCard = ({minWd, maxWd, wMode, chgWd, duraWd, msign}: Wdctypes) => {

  const {data} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleWithdrawal = async() => {
    if(data?.verified == false){
      toast.error("ID Verification Required", {position: "bottom-left"})
      return;
      
    }else if (msign == "cypt"){
      navigate("/user/withdraw-crypto")
      // toast.info("crypto", {position: "bottom-left"})
    }else if(msign == "bank"){
      navigate("/user/withdraw-banktf")
      // toast.info("bank", {position: "bottom-left"})
    }

  }


  return (
    <div className="w-full shadow-xl px-4 pb-6 rounded-lg border border-neutral-200 font-[Jost]">
        <div className="bg-neutral-50 rounded-bl-lg rounded-br-lg">
         <div className="bg-primary px-16 py-1 text-white rounded-bl-lg rounded-br-lg w-fit mx-auto"><p className="font-[500] font-[Jost] text-xl md:text-3xl">{wMode}</p></div>
        <img src={bankwithdrawalImg} alt="" className="size-32 md:size-52 py-4 mx-auto" />   
        </div>
        
        <div className="flex gap-2 flex-col pt-2">
        <p >Minimum Withdrawable: <span className="font-[500]">${minWd}.00</span> </p>
        <p>Maximum Withdrawable: <span className="font-[500]">${maxWd}.00</span> </p>
        <p>Charges Amount: <span className="font-[500]">{chgWd}%</span> </p>
        <p>Duration: <span className="font-[500]">{duraWd} Minute</span> </p>
        <div className="w-full pt-2">
            <button className="py-2 w-full bg-primary hover:text-primary hover:bg-opacity-20 border hover:border-primary font-[500] transition-all ease-in-out duration-[1s] text-white rounded-lg shadow" onClick={handleWithdrawal}>+ Request Withdrawal</button>
        </div>
        </div>
    </div>
  )
}

export default WithdrawCard