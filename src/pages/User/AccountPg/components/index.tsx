import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../app/AuthContext";
import { FaTimes } from "react-icons/fa";
import axios from "axios";


interface ChangeFNTypes {

    setShowFNModal: (show: boolean) => void;
}


export const ChangeFullName = ({ setShowFNModal}: ChangeFNTypes) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState(data?.fullname || "");

  const changeFNFunction = async() => {
   // Logic to change full name
    setShowFNModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
      let resp = await axios.post(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        fullname,
      });
      if(resp){
        setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
      }
    
    } catch (error) {
      toast.error(`An error occurred while changing the full name: ${error}`, {position: "bottom-left", className: "font-[Jost]"});
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
  const changeFNFunction = async() => {
   // Logic to change full name
    setShowEmailModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    let resp = await axios.post(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        email,
      });
      if(resp){
        setTimeout(() => {
      // setLoading(false);
      toast.success("Email Address changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
      }
    } catch (error) {
      toast.error("An error occurred while changing the email address", {position: "bottom-left", className: "font-[Jost]"});
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

  const changeFNFunction = async() => {
   // Logic to change full name
    setShowPhoneModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
      let resp = await axios.post(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        number,
      });
      if(resp){
        setTimeout(() => {
      // setLoading(false);
      toast.success("Phone Number changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
      }
    } catch (error) {
      toast.error("An error occurred while changing the phone number", {position: "bottom-left", className: "font-[Jost]"});
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

  const changeFNFunction = async() => {
   // Logic to change full name
    setShowCountryModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
      let resp = await axios.post(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {country})
      if(resp){
       setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000); 
      }
    
    } catch (error) {
      toast.error("An error occurred while changing the country", {position: "bottom-left", className: "font-[Jost]"});
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


  const changeFNFunction = async() => {
   // Logic to change full name
    setShowStateModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
      let resp = await axios.post(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {state});
      // Assuming the API returns a success response  
      if(resp){
        setTimeout(() => {
      // setLoading(false);
      toast.success("State || Province changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
      }
    } catch (error) {
      toast.error("An error occurred while changing the state || province", {position: "bottom-left", className: "font-[Jost]"});
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

  const changeFNFunction = async() => {
   // Logic to change full name
    setShowCityModal(true);
    setLoading(true); 
    try {
      // Simulate an API call
    let resp = await axios.post(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {city});
      if(resp){ 

    setTimeout(() => {
      // setLoading(false);
      toast.success("Full name changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
  }
    } catch (error) {
      toast.error("An error occurred while changing the city", {position: "bottom-left", className: "font-[Jost]"});  
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

export const RemoveProfilePicture = ({ setShowRemovePPModal }: any) => {
  // const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const removePPFunction = () => {
   // Logic to remove profile picture
    setShowRemovePPModal(true);
    setLoading(true);
    try {
      // Simulate an API call
    setTimeout(() => {  
      // setLoading(false);
      toast.success("Profile picture removed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }
    , 2000);
    }

    catch (error) {
      
    }
    finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowRemovePPModal(false);
    }


  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowRemovePPModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Remove Profile Picture</p>
            <div className="w-full flex flex-col gap-2 px-4 text-center">
              <label className="font-[500] font-[Jost] text-xl">Are you sure you want to remove your profile picture?</label>
              <p className="text-sm text-gray-600 dark:text-gray-400">This action cannot be undone.</p>
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <div className="flex gap-4">
               <button
                className="bg-red-800 text-neutral-100 px-4 py-2 rounded-xl"
                onClick={() => setShowRemovePPModal(false)}
              >
                No
              </button>
              <button
                className="bg-green-800 text-neutral-100 px-4 py-2 rounded-xl"
                onClick={removePPFunction}
              >
                {loading ? "Removing..." : "Yes"}
              </button> 
              </div>
              
            </div>
          </div>
        </div>
    )
}

export const ChangeProfilePicture = ({ setShowChangePPModal }: any) => {
  const {data} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [ setProfilePicture] = useState(data?.profilePicture || "");  
  const [kycFile, setKycFile] = useState("")

  // let inputRef = useRef<any | null>(null) 
  
  // const uploadRef = () => {
  //   inputRef.current.click()
  // }

  const preFile = async (type : any) => {
    const data = new FormData();
    data.append("file", kycFile);
    data.append("upload_preset", "kyc_preset");

    try {
      let cloudName = "dpqswhzt3";
      let resourceType = type === "image" ? "image" : "";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error :any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    }
  };

   async(e : any) => {
    e.preventDefault();
    if (!kycFile) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
        className: "font-[Jost]"
      });
      return;
    }

    try {
      setLoading(true)
      const profilePics = await preFile('image');

      await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        profilePics,
      });

      toast.success("Kyc Data Uploaded Successfully", {position: "bottom-left", className: "font-[Jost]"})
      // window.location.reload()

    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    } finally{
      setLoading(false)
      setKycFile("")
    }
  };

  const changePPFunction = () => {
   // Logic to change profile picture
    setShowChangePPModal(true);
    setLoading(true);
    try {
      // Simulate an API call
    setTimeout(() => {
      // setLoading(false);
      toast.success("Profile picture changed successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }
    , 2000);
    } catch (error) {
    }
    finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowChangePPModal(false);
    }
  }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[500px] relative rounded-xl h-52 px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-4"> 
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowChangePPModal(false)}><FaTimes /></div>
            <p className="pt-2 text-lg md:text-2xl font-[Jost]">Change Profile Picture</p>
            <div className="w-full flex flex-col gap-2 px-4">
              <label className="font-[500] font-[Jost] text-xl">Profile Picture</label>
              <input type="file" accept="image/*" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg border" onChange={(e: any) => setProfilePicture(URL.createObjectURL(e.target.files[0]))} />
            </div>
            <div className="flex justify-between items-center w-full px-4">
              <div></div>
              <button
                className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-xl"
                onClick={changePPFunction}
              >
                {loading ? "Changing..." : "Change"}
              </button>
            </div>
          </div>
        </div>
    )
}
