import { FaUserAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa6"


const AccountPg = () => {
  return (
    <div className="container">
        <div className="rounded-xl flex flex-col gap-3 items-start border border-neutral-200 bg-primary bg-opacity-5 px-4 py-6">
            <h3>Account Information</h3>
            <div className="flex flex-row items-center gap-2">
                <FaUserAlt />
                <p>Jackson Paul</p>
            </div>
            <div>
                <FaEnvelope />
                <p>Email: Jacksonpaul@gmail.com</p>
            </div>
            <div>
                <FaUserAlt />
                <p>Balance: $0</p>
            </div>
            <div>
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