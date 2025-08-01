
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Hourglass } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
const WithdrawProcessing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container">
        <div className="flex justify-center items-center pt-6">
          <div className="relative w-full overflow-hidden transition-all duration-200 rounded-2xl aspect-lottie-thumbnail border border-border hover:ring-2 hover:ring-primary/80">
          <div className="flex flex-col justify-center items-center gap-4 py-8">
            <Hourglass 
            height={180}
  width={180}
  ariaLabel="hourglass-loading"
            colors={['#86b144', '#ddf1c1']} />
          </div>
          <p className="font-[Jost] text-lg md:text2xl font-[600] text-center">Please wait while we securely process your payment</p>
      <div className="py-4 font-[Jost] flex items-center justify-center gap-2" onClick={() => navigate("/user/dashboard")}>
        <FaLongArrowAltLeft />
        <p>Back to Dashboard</p>
      </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawProcessing