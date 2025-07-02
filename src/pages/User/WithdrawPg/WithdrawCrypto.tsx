// import { useState } from "react"
import { toast } from "react-toastify";


const WithdrawCrypto = () => {
    // const [amount, setAmount] = useState(null);
    // const [address, setAddress] = useState("");

// https://oaserver.onrender.com

    const handleSubmit = async(e:any) => {
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div>
        <div className="container">
            <div className="max-w-md mx-auto mt-10 font-[Jost] bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="text-xl py-4 font-[Jost] px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Withdraw By Cryptocurrency (USDT)
    </div>
    <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
                Enter Amount to Withdraw ($)
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter Amount" />
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
                id="email" type="email" placeholder="Enter your OTP" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
                Enter USDT Address
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="test" type="text" placeholder="Enter your USDT Address" />
        </div>

        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit" onClick={handleSubmit}>
                Submit Withdraw Request
            </button>
        </div>

    </form>
</div>
        </div>
    </div>
  )
}

export default WithdrawCrypto