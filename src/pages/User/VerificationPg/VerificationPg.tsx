import {  useState } from "react";

const VerificationPg = () => {
  const [idOptions, setIdOptions] = useState(false);
  const [idValue, setIdValue] = useState(0);

    // const [frontFile, setFrontFile] = useState<any>("");

  // const frontIdRef = useRef<any | null>(null);
  // const backIdRef = useRef<any | null>(null);

  // const uploadFrontRef = () => {
  //   frontIdRef.current.click();
  // }

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
            
           <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8">
            <div>
              <div className="shadow">
              <input
                  type="file"
                  style={{ display: "none" }}
                  accept="/image/*"
                  // onChange={(e: any) => setFrontFile(e.target.files[0])}
                  // ref={frontIdRef}
                />
              </div>
            </div>
            <div></div>
           </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VerificationPg;
