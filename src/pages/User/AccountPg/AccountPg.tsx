import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../app/AuthContext"
import { profilebar } from "../../../assets"
import axios from "axios";
import toast from "react-hot-toast";
import { ChangeCity, ChangeCountry, ChangeDob, ChangeEmail, ChangeFullName, ChangePhone, ChangeState } from "./components";


const AccountPg = () => {
    const {data} = useContext(AuthContext);
    const [resetLoading, setResetLoading] = useState(false);
    const [showFNModal, setShowFNModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showDOBModal, setShowDOBModal] = useState(false);
    const [showPhoneModal, setShowPhoneModal] = useState(false);
    const [showCountryModal, setShowCountryModal] = useState(false);
    const [showStateModal, setShowStateModal] = useState(false);
    const [showCityModal, setShowCityModal] = useState(false);


    useEffect(() => {
        document.title = "Oasis Trade Home | Account"
    }, [])
    const sendResetLink = async() => {
        // Logic to send password reset link
        setResetLoading(true)
        try {
            const response = await axios.post("https://oaserver.onrender.com/forgot-password", {email: data?.email})
            if(response){
                toast.success("Reset Password Link Sent", {position: "bottom-left", className: "font-[Jost]"})
            }
        } catch (error) {
            toast.error("An Error Occured", {position: "bottom-left", className: "font-[Jost]"})
        }finally{
            setResetLoading(false)
        }
    }
  return (
    <div>

     <div className="container">
        <div className="rounded-xl flex flex-col gap-3 items-start border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#2a2f42] px-4 py-6 my-4 md:mt-2 md:mb-4 mb-2">
            <h3>Account Information</h3>
            <div className="flex items-center justify-center gap-4">
                <img src={profilebar} alt="" className="size-20" />
                <div className="flex items-center gap-3">
                    <button className="py-1 px-3 border shadow border-neutral-700 dark:border-neutral-100 text-neutral-700 dark:text-neutral-100 font-[500] font-[Jost] rounded">Change Picture</button>
                    <button className="py-1 px-3 border shadow border-red-500 text-red-800 font-[500] font-[Jost] rounded">Remove Picture</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Full Name</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.dob ? new Date(data?.dob).toLocaleDateString() : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowFNModal(true)}>Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Email Address</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.dob ? new Date(data?.dob).toLocaleDateString() : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowEmailModal(true)}>Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Password</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">******</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={sendResetLink}>
                        {resetLoading ? (
                            <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                      viewBox="0 0 24 24"
                    ></svg>
                    Sending Reset Link...
                  </div>
                        ): "Send Password Reset Link"}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Date of Birth</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.dob ? new Date(data?.dob).toLocaleDateString() : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowDOBModal(true)}>Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Phone Number</h3>   
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.phone ? data?.phone : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowPhoneModal(true)}>Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>Country</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data ? data?.country : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowCountryModal(true)}>Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full border-b border-neutral-200 dark:border-neutral-700 pb-3">
                <div>
                    <h3>State/Province/Area</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.address ? data?.address : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowStateModal(true)}>Edit</button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full pb-3">
                <div>
                    <h3>City</h3>
                    <p className="text-neutral-700 dark:text-neutral-100">{data?.address ? data?.address : "Not set"}</p>
                </div>
                <div>
                    <button className="font-[Jost] font-[500] border border-neutral-700 dark:border-neutral-100 rounded px-4 py-1" onClick={() => setShowCityModal(true)}>Edit</button>
                </div>
            </div>          
        </div>
    </div>  
    {showFNModal && <ChangeFullName setShowFNModal={setShowFNModal}/>} 
    {showEmailModal && <ChangeEmail setShowEmailModal={setShowEmailModal}/>}
    {showDOBModal && <ChangeDob setShowDOBModal={setShowDOBModal}/>}
    {showPhoneModal && <ChangePhone setShowPhoneModal={setShowPhoneModal}/>}
    {showCountryModal && <ChangeCountry setShowCountryModal={setShowCountryModal}/>}
    {showStateModal && <ChangeState setShowStateModal={setShowStateModal}/>}
    {showCityModal && <ChangeCity setShowCityModal={setShowCityModal}/>}

    </div>
    
  )
}

export default AccountPg