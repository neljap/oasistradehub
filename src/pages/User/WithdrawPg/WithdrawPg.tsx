import { useEffect } from "react"
import { WithdrawCard } from "../ui"


const WithdrawPg = () => {

   useEffect(() => {
      document.title = "Oasis Trade Hub | Withdraw"
    }, [])
  

  return (
    <div>
      <div className="container">
        <p className="font-[500] py-4 font-[Jost] text-lg md:text-2xl">WITHDRAWAL</p>
        <div className="rounded-lg shadow ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center p-8 w-full">
        {withdrawProcess.map((item: any) => (
          <WithdrawCard key={item.id} wMode={item.mode} minWd={item.minwithdraw} maxWd={item.maxwithdraw} chgWd={item.charges} duraWd={item.duration} msign={item.msign}/>
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawPg

const withdrawProcess = [
  {
    id: 1,
    mode: "Bank Withdrawal",
    minwithdraw: 50000,
    maxwithdraw: 1000000,
    charges: 5,
    duration: "1",
    msign: "bank"
  },
  {
    id: 2,
    mode: "Cryptocurrency (USDT/USDC)",
    minwithdraw: 20000,
    maxwithdraw: 500000,
    charges: 3,
    duration: "1",
    msign: "cypt"
  }
]