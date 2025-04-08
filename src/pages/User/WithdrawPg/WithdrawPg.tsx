import { Link } from "react-router-dom"
import { WithdrawCard } from "../ui"

const WithdrawPg = () => {
  return (
    <div>
      <div className="container">
        <p>WITHDRAWAL</p>
        <div className="rounded-lg shadow ">
          <div className="py-8 pr-8">
            <Link to="/user/update-wallet">
          <button className="rounded-lg py-2 px-4 text-white shadow-md bg-primary float-end text-sm font-[500]">Update Withdraw Wallet Address</button>
            </Link>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-start items-center p-8 w-full">
        <WithdrawCard wMode="Bank Withdrawl" minWd='1.00' maxWd='1,000,000' chgWd='13%' duraWd='1'/>
        <WithdrawCard wMode="Bitcoin" minWd='1.00' maxWd='1,000,000' chgWd='13%' duraWd='1'/>
        <WithdrawCard wMode="Ethereum" minWd='1.00' maxWd='1,000,000' chgWd='13%' duraWd='1'/>
        <WithdrawCard wMode="USDT" minWd='1.00' maxWd='1,000,000' chgWd='13%' duraWd='1'/>
        <WithdrawCard wMode="Litecoin" minWd='1.00' maxWd='1,000,000' chgWd='13%' duraWd='1'/>
      </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawPg