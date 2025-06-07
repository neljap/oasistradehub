import axios from "axios";
import {  useContext, useEffect, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../../app/AuthContext";
import { BiSolidCloudUpload } from "react-icons/bi";

const VerificationPg = () => {
  const [idOptions, setIdOptions] = useState(false);
  const [idValue, setIdValue] = useState(0);
  const [kycFile, setKycFile] = useState("");
  const [loading, setLoading] = useState(false);

  const {data} = useContext(AuthContext);

  console.log("idValue", idValue);

    // const [frontFile, setFrontFile] = useState<any>("");

   let inputRef = useRef<any | null>(null) 

    useEffect(() => {
    document.title = "OASIS TRADE HUB | KYC Verify"
  }, [])

  const uploadRef = () => {
    inputRef.current.click()
  }

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
      toast.error(error.code, { position: "bottom-left" });
    }
  };

  const uploadFile = async(e : any) => {
    e.preventDefault();
    if (!kycFile) {
      toast.error("Please Upload a file", {
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true)
      const kycinfo = await preFile('image');
      console.log(kycinfo, "kycinfo")
      await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        kycinfo,
      });

      toast.success("Kyc Data Uploaded Successfully", {position: "bottom-left"})
      // window.location.reload()

    } catch (error : any) {
      toast.error(error.code, { position: "bottom-left" });
    } finally{
      setLoading(false)
      setKycFile("")
    }
  };

  return (
    <div>
      <div className="container">
        <div className="shadow-md rounded-lg border border-neutral-200 py-10 px-4">
          <div className="flex flex-col gap-4 pb-4">
          <h2 className="font-[600] text-xl">ID Verification</h2>
          <p className="font-[500]">
            Your Personal info/ID for verification will be processed and
            verified
          </p>  
          </div>
          
          <div className="relative">
          <div className="w-full border border-neutral-600 bg-neutral-200 hover:border-primary cursor-pointer px-2 py-2 rounded-lg"
            onClick={() => setIdOptions(!idOptions)}>
            <p>
              {idValue == 1 ? (
                <p className="font-[500]">Driver's License</p>
              ) : idValue == 2 ? (
                <p className="font-[500]">Passport</p>
              ) : idValue == 3 ? (
                <p className="font-[500]">Social Security Card</p>
              ) : idValue == 4 ? (
                <p className="font-[500]">State ID</p>
              ) : idValue == 5 ? (
                <p className="font-[500]">Military ID</p>
              ) : idValue == 6 ? (
                <p className="font-[500]">Green Card</p>
              ) : (
                "Select a Deposit Asset"
              )}
            </p>
          </div>
          <div>
            {idOptions && (
              <div
                className="absolute w-full top-14 left-0 bg-white rounded-lg shadow-lg flex flex-col items-start justify-start p-2"
                onClick={() => setIdOptions(!idOptions)}
              >
                <div className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                  onClick={() => setIdValue(1)}>
                  <p className="font-[500]">Driver's License</p>
                </div>
                <div
                  className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                  onClick={() => setIdValue(2)}
                >
                  <p className="font-[500]">Passport</p>
                </div>
                <div
                  className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                  onClick={() => setIdValue(3)}
                >
                  <p className="font-[500]">Social Security Card</p>
                </div>
                <div
                  className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                  onClick={() => setIdValue(4)}
                >
                  <p className="font-[500]">State ID</p>
                </div>
                <div
                  className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                  onClick={() => setIdValue(5)}
                >
                  <p className="font-[500]">Military ID</p>
                </div>
                <div
                  className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                  onClick={() => setIdValue(6)}
                >
                  <p className="font-[500]">Green Card</p>
                </div>
              </div>
            )}
          </div>  
          </div>
          <div>
            {idValue == 0 && <p className="text-center pt-4 font-[500] text-xl">Please Select a Document to Upload</p>}
          </div>
          {/* ID-Verify Form */}
          <div>
            {idValue > 0 && (
            
            <div >
              {/* @ts-ignore */}
              <div onClick={uploadRef} style={{backgroundImage: kycFile ? `url(${URL.createObjectURL(kycFile)})` : "", backgroundSize: "cover",  backgroundPosition: "center"}} className="shadow w-full md:w-1/2 mx-auto h-56 rounded-xl flex items-center justify-center mt-8">
              {!kycFile && (
              <div className="mx-auto flex flex-col items-center">
                <FaCloudUploadAlt size={80}/>
                <p className="font-[600] font-[Jost] text-xl">Upload Your Document Here</p>
              </div>   
              )}
               
              <input
                  type="file"
                  style={{ display: "none" }}
                  accept="/image/*"
                  onChange={(e:any) => setKycFile(e.target.files[0])}
                  ref={inputRef}
                  // onChange={(e: any) => setFrontFile(e.target.files[0])}
                  // ref={frontIdRef}
                />
              </div>
              <div className="flex justify-center items-center pt-4">
              {kycFile && (<div><button onClick={uploadFile} className="capitalize font-[Jost] font-[500] border-2 border-primary px-4 py-2 rounded-lg text-primary flex items-center gap-2 hover:bg-primary hover:text-white">{loading ? "Uploading.." :(<div className="flex flex-items gap-2 items-center"><BiSolidCloudUpload size={20}/> Click here to upload </div>)}</button></div>)}
              </div>
            </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VerificationPg;
