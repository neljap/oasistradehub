import axios from "axios";
import { useContext, useState } from "react"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../app/AuthContext";


const WithdrawCrypto = () => {
    const {data} = useContext(AuthContext);
    const [amount, setAmount] = useState<any | null>(null);
    const [address, setAddress] = useState("");
    const [otp, setOtp] = useState<any | String>("");
    const [withLoading, setWithLoading] = useState(false);

    const navigate = useNavigate();

// https://oaserver.onrender.com

     const handleSubmit = async(e: any) => {
    e.preventDefault()
    setWithLoading(true);
    try {
      if(amount  < 20000){
        toast.error("Amount is too Low", {position: "bottom-left", className: "font-[Jost]"})
        return;
      }else if(otp == 340845 || 230457 || 659265 || 973270 ){

      let address = ''
        // console.log({userid: data._id, accnumber, bankname, amount, otp, other})
      let response = await axios.post("https://oaserver.onrender.com/api/user/withdraw", {userid: data._id,  address, amount, otp});
      if(response) {
        toast.success("Withdraw Request Sent Successfully", {position: "bottom-left", className: "font-[Jost]"});
        navigate("/user/withdraw-processing")
      }
      }else{
        toast.error("Wrong OTP", {position: "bottom-left", className: "font-[Jost]"})
        return;
      }
    } catch (error) {
      toast.error(`Error: ${error}`, {position: "bottom-left", className: "font-[Jost]"})
    }finally{
      setWithLoading(false);

      setAmount(null);
      setOtp("");
    //   setOther("");
    }
  } 
  return (
    <div>
        <div className="container">
            <div className="max-w-md mx-auto mt-10 font-[Jost] bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="text-xl py-4 font-[Jost] px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Withdraw By Cryptocurrency (USDT/USDC)
    </div>
    <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
                Enter Amount to Withdraw ($)
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="number" placeholder="Enter Amount" value={amount} onChange={(e:any) => setAmount(e.target.value)} />
        </div>
        <div className="mb-4">
            <div className="flex gap-4 items-center py-1">
            <label className="block text-gray-700 font-bold mb-2" >
                Enter OTP
            </label>    
            <div>
                <button type="button" className="rounded py-1 font-[Jost] px-3 bg-neutral-700 dark:bg-neutral-100 text-gray-50" onClick={() => toast.success("Contact Support for OTP", {position: "bottom-left", className: "font-[Jost]"})}>Request OTP</button>
            </div>
            </div>
            
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number" type="text" value={otp} onChange={(e: any) => setOtp(e.target.value)} placeholder="Enter your OTP" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
                Enter USDT Address
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text" value={address} onChange={(e: any) => setAddress(e.target.value)} type="text" placeholder="Enter your USDT Address" />
        </div>

        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit" onClick={handleSubmit}>
                    {withLoading ? (
                        <div className="flex justify-center items-center">
                            <svg    
                            
                              className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                              viewBox="0 0 24 24"
                            ></svg> 
                            
                            Sending Withdraw Request...
                        </div>
                    ) : "Submit Withdraw Request"}
            </button>
        </div>

    </form>
</div>
        </div>
    </div>
  )
}

export default WithdrawCrypto