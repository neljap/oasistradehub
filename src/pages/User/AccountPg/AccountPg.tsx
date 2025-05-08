import { useContext } from "react"
import { FaUserAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa6"
import { AuthContext } from "../../../app/AuthContext"


const AccountPg = () => {
    const {data} = useContext(AuthContext);
  return (
    <div className="container">
        <div className="rounded-xl flex flex-col gap-3 items-start border border-neutral-200 bg-primary bg-opacity-5 px-4 py-6">
            <h3 className="font-[500] text-xl md:text-2xl">Account Information</h3>
            <div className="flex flex-row items-center gap-2">
                <FaUserAlt size={24} />
                <p className="capitalize text-lg">{data.fullname}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <FaEnvelope />
                <p> <span className="font-[500]">Email:</span> {data.email}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <FaUserAlt />
                <p>Balance: $0</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <FaUserAlt />
                <p>Plan Bonu: $0</p>
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