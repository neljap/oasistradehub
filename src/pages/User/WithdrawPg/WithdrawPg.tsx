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
        <WithdrawCard />
        <WithdrawCard />
        <WithdrawCard />
        <WithdrawCard />
      </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawPg