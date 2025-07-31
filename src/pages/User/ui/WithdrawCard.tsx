import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../app/AuthContext";
import { GrMoney } from "react-icons/gr";

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
      toast.error("ID Verification Required", {position: "bottom-left", className: "font-[Jost]"})
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
         <div className="bg-[#86b144] px-16 py-1 text-white rounded-bl-lg rounded-br-lg w-fit mx-auto"><p className="font-[500] font-[Jost] text-xl md:text-3xl">{wMode}</p></div>
         <div className="flex justify-center py-8 items-center">
          <GrMoney size={80}  color="#86b144"/>
         </div>
         
        {/* <img src={bankwithdrawalImg} alt="" className="size-32 md:size-52 py-4 mx-auto" />    */}
        </div>
        
        <div className="flex gap-2 flex-col pt-2">
        <p >Minimum Withdrawable: <span className="font-[500]">${Number(minWd).toLocaleString()}.00</span> </p>
        <p>Maximum Withdrawable: <span className="font-[500]">${Number(maxWd).toLocaleString()}.00</span> </p>
        <p>Charges Amount: <span className="font-[500]">{chgWd}%</span> </p>
        <p>Duration: <span className="font-[500]">{duraWd} Minute</span> </p>
        <div className="w-full pt-2">
            <button className="py-2 w-full bg-[#86b144] hover:text-[#86b144] hover:bg-opacity-20 border hover:border-primary font-[500] transition-all ease-in-out duration-[1s] text-white rounded-lg shadow" onClick={handleWithdrawal}>+ Request Withdrawal</button>
        </div>
        </div>
    </div>
  )
}

export default WithdrawCard