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
  const [email, setEmail] = useState(data?.email || "")
  const [dob, setDob] = useState(data?.dob || "");
  const [number, setNumber] = useState(data?.number || "")
  const [country, setCountry] = useState(data?.country || "");
  const [state, setState] = useState(data?.state || "");
  const [city, setCity] = useState(data?.city || "");


  const changeFNFunction = async() => {
   // Logic to change full name
    setShowFNModal(true);
    setLoading(true); 
    try {
      let newdetail = {
        fullname,
        email,
        dob, number, country, state, city
      }
      console.log("new", newdetail)

      // Simulate an API call
      let resp = await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, newdetail);
      if(resp){
        setTimeout(() => {
      // setLoading(false);
      toast.success("Account Updated successfully!", {position: "bottom-left", className: "font-[Jost]"});
    }, 2000);
      }
    
    } catch (error) {
      toast.error(`An error occurred: ${error}`, {position: "bottom-left", className: "font-[Jost]"});
    }finally {
      // Cleanup or final actions if needed
      setLoading(false);
      setShowFNModal(false);
    }
    
    
  }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="md:w-[500px] w-[300px] py-2 relative rounded-xl h-fit px-2 md:px-4 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-start items-center gap-1">
            <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={() => setShowFNModal(false)}><FaTimes /></div>
            <p className="pt-1 text-lg md:text-2xl font-[Jost]">Change Account</p>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-2 md:px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">Full Name</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={fullname} onChange={(e: any) => setFullname(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">Email Address</label>
              <input type="text" placeholder="Enter your Email Address" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={email} onChange={(e: any) => setEmail(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">Phone Number</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={number} onChange={(e: any) => setNumber(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">Date of Birth (D.O.B)</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={dob} onChange={(e: any) => setDob(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">City</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={city} onChange={(e: any) => setCity(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">State</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={state} onChange={(e: any) => setState(e.target.value)} />
            </div>
            <div className="w-full flex flex-col gap-0 md:gap-1 px-4">
              <label className="font-[500] font-[Jost] text-lg md:text-xl">Country</label>
              <input type="text" placeholder="Enter your Full Name" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={country} onChange={(e: any) => setCountry(e.target.value)} />
            </div>
            <div className="flex justify-between items-center w-full px-4 py-1">
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
  const [profilePics, setProfilePicture] = useState("");  
  // const [kycFile, setKycFile] = useState("")

  // let inputRef = useRef<any | null>(null) 
  
  // const uploadRef = () => {
  //   inputRef.current.click()
  // }

  const preFile = async (type : any) => {
    const data = new FormData();
    data.append("file", profilePics);
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
    if (!profilePics) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
        className: "font-[Jost]"
      });
      return;
    }

    try {
      setLoading(true)
      const profilePic = await preFile('image');

      console.log("ppics", profilePics);

      await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        profilePics: profilePic,
      });

      toast.success("Kyc Data Uploaded Successfully", {position: "bottom-left", className: "font-[Jost]"})
      // window.location.reload()

    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left", className: "font-[Jost]" });
    } finally{
      setLoading(false)
      setProfilePicture("")
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
              <input type="file" accept="image/*" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg border" onChange={(e: any) => setProfilePicture(e.target.files[0])} />
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
