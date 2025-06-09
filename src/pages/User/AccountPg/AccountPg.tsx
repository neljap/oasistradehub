import { useContext } from "react"
import { FaEnvelope } from "react-icons/fa6"
import { AuthContext } from "../../../app/AuthContext"
import { profilebar } from "../../../assets"
import { MdAccountBalanceWallet } from "react-icons/md"


const AccountPg = () => {
    const {data} = useContext(AuthContext);
  return (
    <div className="container">
        <div className="rounded-xl flex flex-col gap-3 items-start border border-neutral-200 bg-primary bg-opacity-5 px-4 py-6">
            <h3 className="font-[500] text-xl md:text-2xl">Account Information</h3>
            <div className="flex flex-row items-center gap-2">
                <img src={profilebar} alt="" className="size-10" />
                <p className="capitalize text-lg">{data?.fullname}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <div className="text-primary bg-primary bg-opacity-5 rounded-full p-2">
                  <FaEnvelope size={24}/>  
                </div>
                
                <p> <span className="font-[500]">Email:</span> {data?.email}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <div className="text-primary bg-primary bg-opacity-5 rounded-full p-2">
                <MdAccountBalanceWallet size={24}/>
                </div>
                <p className="font-[600] font-[Jost]">Account Balance: ${data ? data?.tAmount : 0}</p>
            </div>
        </div>
        <div className="rounded-xl flex flex-col gap-3 items-start border border-neutral-200 bg-white px-4 py-6 mt-12">
            <h3>Settings</h3>
            <div className="w-full">
                <label>Current Password</label>
                <input type="text" placeholder="Current password" className="w-full rounded-xl border border-neutral-200 p-2 bg-primary bg-opacity-5" />
            </div>
            <div className="w-full">
                <label>New Password</label>
                <input type="text" placeholder="New password" className="w-full rounded-xl border border-neutral-200 p-2 bg-primary bg-opacity-5" />
            </div>
            <div className="w-full">
                <label>Confirm Password</label>
                <input type="text" placeholder="Confirm password" className="w-full rounded-xl border border-neutral-200 p-2 bg-primary bg-opacity-5" />
            </div>
            <button className="bg-primary text-white rounded-xl py-3 w-full">Save Changes</button>
        </div>
    </div>
  )
}

export default AccountPg