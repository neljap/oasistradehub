import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../app/AuthContext";
import { FaTimes } from "react-icons/fa";


interface ChangeFNTypes {

    setShowFNModal: (show: boolean) => void;
}


export const ChangeFullName = ({ setShowFNModal}: ChangeFNTypes) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState(data?.fullname || "");

  const changeFNFunction = () => {
   // Logic to change full name
    setShowFNModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowFNModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowFNModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change Full Name</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">Full Name</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={fullname} onChange={(e: any) => setFullname(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}

export const ChangeEmail = ({ setShowEmailModal}: any) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(data?.email || "")
  const changeFNFunction = () => {
   // Logic to change full name
    setShowEmailModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Email Address changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowEmailModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowEmailModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change Email Address</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">Email Address</label>
              <input type="text" placeholder="Enter your Email Address" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={email} onChange={(e: any) => setEmail(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}

export const ChangeDob = ({ setShowDOBModal}: any) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState(data?.dob || "");

  const changeFNFunction = () => {
   // Logic to change full name
    setShowDOBModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowDOBModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowDOBModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change Date of Birth (D.O.B)</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">Date of Birth (D.O.B)</label>
              <input type="text" placeholder="Enter your Date of Birth (D.O.B)" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={dob} onChange={(e: any) => setDob(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}

export const ChangePhone = ({ setShowPhoneModal}: any) => {
  const {data} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(data?.number || "")

  const changeFNFunction = () => {
   // Logic to change full name
    setShowPhoneModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Phone Number changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowPhoneModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowPhoneModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change Phone Number</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">Phone Number</label>
              <input type="text" placeholder="Enter your Phone Number" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={number} onChange={(e: any) => setNumber(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}

export const ChangeCountry = ({ setShowCountryModal}: any) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState(data?.country || "");

  const changeFNFunction = () => {
   // Logic to change full name
    setShowCountryModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowCountryModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowCountryModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change Country</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">Country</label>
              <input type="text" placeholder="Enter your Country" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={country} onChange={(e: any) => setCountry(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}

export const ChangeState = ({ setShowStateModal}: any) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(data?.state || "");


  const changeFNFunction = () => {
   // Logic to change full name
    setShowStateModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("State || Province changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowStateModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowStateModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change State</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">State</label>
              <input type="text" placeholder="Enter your State" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={state} onChange={(e: any) => setState(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}

export const ChangeCity = ({ setShowCityModal}: any) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(data?.city || "");

  const changeFNFunction = () => {
   // Logic to change full name
    setShowCityModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
    } catch (error) {
      
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowCityModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowCityModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change City</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">City</label>
              <input type="text" placeholder="Enter your City" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={city} onChange={(e: any) => setCity(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
               onClick={changeFNFunction}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
    )
}