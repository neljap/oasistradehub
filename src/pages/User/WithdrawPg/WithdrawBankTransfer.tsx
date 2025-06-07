import axios from "axios";
import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { AuthContext } from "../../../app/AuthContext";


const WithdrawBankTransfer = () => {
  const [accnumber, setAccnumber] = useState("");
  const [bankname, setBankname] = useState("");
  const [amount, setAmount] = useState<any | null>(null);
  const [otp, setOtp] = useState<any | String>("");
  
  const [other, setOther] = useState("");

  const {data} = useContext(AuthContext);
  // const [loading, setLoading] = useState(false);



  const handleSubmit = async(e: any) => {
    e.preventDefault()
    try {
      if(amount  < 500){
        toast.info("Amount is too Low", {position: "bottom-left"})
        return;
      }else if(otp == 333333 || 555555){

      let address = ''
        // console.log({userid: data._id, accnumber, bankname, amount, otp, other})
      await axios.post("https://oaserver.onrender.com/api/user/withdraw", {userid: data._id,  accnumber, address, bankname, amount, other});
      }else{
        toast.info("Wrong OTP")
        return;
      }
    } catch (error) {
      toast.error(`Error: ${error}`)
    }
  } 

  return (
    <div>
        <div className="container">
            <div className="max-w-md mx-auto my-8 font-[Jost] bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="text-xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Withdraw Through Bank Transfer
    </div>
    <form className="py-4 px-6" onSubmit={handleSubmit}>
      <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" >
                      Enter Amount to Withdraw ($)
                  </label>
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name" type="number" required placeholder="Enter Amount" value={amount} onChange={(e: any) => setAmount(e.target.value)}/>
              </div>
              <div className="mb-4">
                  <div className="flex gap-4 items-center py-1">
                  <label className="block text-gray-700 font-bold mb-2" >
                      Enter OTP
                  </label>    
                  <div>
                      <button type="button" className="rounded py-1 font-[Jost] px-3 bg-gray-700 text-gray-50" onClick={() => toast.info("Contact Support for OTP", {position: "bottom-left"})}>Request OTP</button>
                  </div>
                  </div>
                  
                  <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="text" type="text" required placeholder="Enter OTP" value={otp} onChange={(e:any) => setOtp(e.target.value)}/>
              </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
              Bank Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text"  required placeholder="Enter your Bank Name" value={bankname} onChange={(e:any) => setBankname(e.target.value)} />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
                Account Number
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text" type="text" placeholder="Enter your Account Number" required value={accnumber} onChange={(e:any) => setAccnumber(e.target.value)}/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"  >
              Bank Account Information
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" value={other} onChange={(e:any) => setOther(e.target.value)}  rows={4} placeholder="Enter any additional information"></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Submit Withdraw Request
            </button>
        </div>

    </form>
</div>
        </div>
    </div>
  )
}

export default WithdrawBankTransfer