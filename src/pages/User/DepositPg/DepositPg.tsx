import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import {
  ADACoin,
  BTCoin,
  cashappImg,
  // curplanImg,
  ETHCoin,
  paypalImg,
  planbonusImg,
  USDTCoin,
  venmoImg,
  zelleImg,
} from "../../../assets";
import { LiveReading } from "../ui";
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const DepositPg = () => {
  const [bwValue, setBwValue] = useState<any>(null);
  const [bwModal, setBwModal] = useState(false);
  // Crypto Option
  const [crypOption, setCrypOption] = useState(false);
  const [cryptValue, setCryptValue] = useState(0);
  const [cyptInput, setCyptInput] = useState<any>(null);
  const [cryptModal, setCryptModal] = useState(false);
  const [cyptCDeposit, setCyptCDeposit] = useState(false);

  // Mobile Money Option
  const [mmValue, setMmValue] = useState(0);
  const [mmInput, setMmInput] = useState<any>(null);
  const [mmModal, setMmModal] = useState(false);
  const [mpOptions, setMpOptions] = useState(false);
  // const handleW

  

  return (
    <div>
      <div className="container">
        <div className="py-4">
          <LiveReading />
        </div>

        {/* Current Plan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-center">
          <div className="w-full flex flex-row justify-between items-center border border-neutral-200 shadow rounded-lg py-4 px-4">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-neutral-200 rounded-full p-2">
                <img src="https://res.cloudinary.com/dr6a80sph/image/upload/v1744201966/te8p7hiijaxoaiu1aven.png" alt="" className="w-8" />
              </div>
              <div>
                <p className="text-sm">Current Plan</p>{" "}
                <p className="font-[500]">No Plan</p>
              </div>
            </div>

            <div>
              <Link to="/user/subscriptions">
              <button className="py-2 px-4 rounded-xl hover:bg-primary hover:text-white transition-all ease-in-out duration-[1s] text-primary bg-primary bg-opacity-20">
                Purchase Plan
              </button>
              </Link>
              
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center border border-neutral-200 shadow rounded-lg py-4 px-4">
            <div className="flex flex-row gap-4 items-center">
              <div className="bg-neutral-200 rounded-full p-2">
                <img src={planbonusImg} alt="" className="w-8" />
              </div>
              <div>
                <p className="text-sm">Plan Bonus</p>{" "}
                <p className="font-[500]">$0</p>
              </div>
            </div>

            <div>
              {/* <button className="py-2 px-4 rounded-xl text-primary bg-primary bg-opacity-20">Purchase Plan</button> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8">
          {/* Crypto */}
          <>
            <div className="rounded-lg shadow-lg">
              <div className="flex flex-col gap-4 pb-16 text-center p-8">
                <div className="mx-auto">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <FaBars />
                    <p className="text-xl font-[500]">Crypto</p>
                  </div>
                  <p className="font-[400]">Deposits Using Crypto</p>
                </div>
                <div className="relative">
                  <div
                    className="w-full border border-neutral-600 hover:border-primary cursor-pointer px-2 py-2 rounded-lg"
                    onClick={() => setCrypOption(!crypOption)}
                  >
                    <div className="flex flex-row items-center w-full justify-between">
                      <p>
                        {cryptValue == 1 ? (
                          <div className="flex flex-row gap-1">
                            <img src={BTCoin} alt="" />{" "}
                            <p className="font-[500]">Bitcoin</p>{" "}
                          </div>
                        ) : cryptValue == 2 ? (
                          <div className="flex flex-row gap-1">
                            <img src={ETHCoin} alt="" />{" "}
                            <p className="font-[500]">Ethereum</p>{" "}
                          </div>
                        ) : cryptValue == 3 ? (
                          <div className="flex flex-row gap-1">
                            <img src={ADACoin} alt="" />{" "}
                            <p className="font-[500]">Tron</p>{" "}
                          </div>
                        ) : cryptValue == 4 ? (
                          <div className="flex flex-row gap-1">
                            <img src={USDTCoin} alt="" />{" "}
                            <p className="font-[500]">Tether USDT</p>{" "}
                          </div>
                        ) : (
                          "Select a Deposit Asset"
                        )}
                      </p>
                      <FaAngleDown />
                    </div>
                  </div>
                  {crypOption && (
                    <div
                      className="absolute w-full top-14 left-0 bg-white rounded-lg shadow-lg flex flex-col items-start justify-start p-2"
                      onClick={() => setCrypOption(!crypOption)}
                    >
                      <div className="pl-3 text-start">
                        <p className="font-[500]">Recommendation</p>
                      </div>
                      <div
                        className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(1)}
                      >
                        {" "}
                        <img src={BTCoin} alt="" />{" "}
                        <p className="font-[500]">Bitcoin</p>
                      </div>
                      <div
                        className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(2)}
                      >
                        {" "}
                        <img src={ETHCoin} alt="" />{" "}
                        <p className="font-[500]">Ethereum</p>
                      </div>
                      <div
                        className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(3)}
                      >
                        {" "}
                        <img src={ADACoin} alt="" />{" "}
                        <p className="font-[500]">Tron</p>
                      </div>
                      <div
                        className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setCryptValue(4)}
                      >
                        {" "}
                        <img src={USDTCoin} alt="" />{" "}
                        <p className="font-[500]">USDT</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {cryptValue > 0 && (
                    <div className="px-4 py-2 border border-neutral-200 hover:border-primary rounded-lg shadow-sm flex flex-row justify-between items-center">
                      <p>
                        {cryptValue == 1
                          ? "bc1qhjqmuht400vpcz0wrdnj76mrfetnms4n0r3s3m"
                          : cryptValue == 2
                          ? "0x31c29387a851b68A85F24a6A7d1df0DB4494FD91"
                          : cryptValue == 3
                          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                          : cryptValue == 4
                          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                          : ""}
                      </p>{" "}
                      <RxDropdownMenu />
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  value={cyptInput}
                  onChange={(e) => setCyptInput(e.target.value)}
                  className="w-full p-2 rounded-lg border border-neutral-600"
                  placeholder="Enter Amount in USD"
                />
                <div>
                  {cryptValue > 0 && cyptInput ? (
                    <div>
                      <button
                        className="w-full hover:bg-opacity-20 border hover:border-primary transition-all ease-in-out duration-[1s] hover:text-primary font-[600] rounded-lg py-3 text-white bg-primary"
                        onClick={() => setCryptModal(true)}
                      >
                        Confirm{" "}
                        {cryptValue == 1
                          ? "Bitcoin"
                          : cryptValue == 2
                          ? "Ethereum"
                          : cryptValue == 3
                          ? "Tron"
                          : "Tether"}{" "}
                        Deposit
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {cryptModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[500px] relative rounded-xl h-fit p-6 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
                  <div
                    className="absolute top-3 right-6 cursor-pointer"
                    onClick={() => setCryptModal(false)}
                  >
                    <FaTimes size={18} />
                  </div>
                  <p className="font-[500] text-lg">
                    Confirm $ {cyptInput} Deposit of {cryptValue == 1 ? "Bitcoin" : cryptValue == 2 ? "Ethereum" : cryptValue == 3 ? "Tron" : "Tether USDT"}
                  </p>
                  <div className="w-full">
                    <p className="font-[500] py-2">{cryptValue == 1 ? "Bitcoin" : cryptValue == 2 ? "Ethereum" : cryptValue == 3 ? "Tron" : "Tether USDT"} Deposit Address</p>
                    <div className="px-4 w-full py-2 border border-neutral-200 hover:border-primary rounded-lg shadow-sm flex flex-row justify-between items-center">
                      <p>
                        {cryptValue == 1
                          ? "bc1qhjqmuht400vpcz0wrdnj76mrfetnms4n0r3s3m"
                          : cryptValue == 2
                          ? "0x31c29387a851b68A85F24a6A7d1df0DB4494FD91"
                          : cryptValue == 3
                          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                          : cryptValue == 4
                          ? "TAWCzZ2aGToj6QWr1vXnnUV9wxQHLQK5qn"
                          : ""}
                      </p>{" "}
                      <div className="cursor-pointer">
                        {" "}
                        <RxDropdownMenu />
                      </div>
                    </div>
                  </div>
                  <div>
                    {cyptCDeposit ? (
                     <div>
                      <p>Upload Deposit Proof (Screenshot)</p>
                      <div className="px-4 w-full py-6 cursor-pointer border border-neutral-200 hover:border-primary rounded-lg shadow-sm flex flex-row justify-between items-center">
                        <FaTimes />
                        <p>Click Here To Upload Screenshot Of Transaction</p>
                      </div>
                      <p className="text-sm">
                        <span className="font-[500]">Note:</span> The above
                        address is a temporal trading address that becomes
                        invalid after 10 mins of visibility to avoid fraud and
                        phishing and to avoid server overloading, please be sure
                        you're in a secure area for quick and safe deposits.
                      </p>
                    </div> 
                    ): (
                      <div>
                       <div className="py-4">
                      <p className="text-sm">
                        <span className="font-[500]">Note:</span> The above
                        address is a temporal trading address that becomes
                        invalid after 10 mins of visibility to avoid fraud and
                        phishing and to avoid server overloading, please be sure
                        you're in a secure area for quick and safe deposits.
                      </p>
                    </div>
                    <button className="w-full transition-all ease-in-out duration-[1s] hover:bg-white hover:text-primary hover:border-primary border rounded-lg py-2 shadow bg-primary text-white" onClick={() => setCyptCDeposit(true)}>
                      Confirm Deposit
                    </button> 
                      </div>
                    )}
                    
                    
                  </div>
                  <div></div>
                </div>
              </div>
            )}
          </>

          {/* Mobile Transfer */}
          <>
            <div className="rounded-lg shadow-lg">
              <div className="flex flex-col gap-4 pb-16 text-center p-8">
                <div className="mx-auto">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <FaBars />
                    <p>MOBILE PAYMENTS</p>
                  </div>
                  <p>Deposits Using Mobile Payments</p>
                </div>
                <div className="relative">
                  <div
                    className="w-full border border-neutral-600 px-2 py-2 rounded-lg cursor-pointer"
                    onClick={() => setMpOptions(!mpOptions)}
                  >
                    <div className="flex flex-row items-center w-full justify-between">
                      <p>
                        {mmValue == 1 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={paypalImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Paypal</p>{" "}
                          </div>
                        ) : mmValue == 2 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={zelleImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Zelle</p>{" "}
                          </div>
                        ) : mmValue == 3 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={cashappImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Cashapp</p>{" "}
                          </div>
                        ) : mmValue == 4 ? (
                          <div className="flex flex-row gap-1">
                            <img
                              src={venmoImg}
                              alt=""
                              className="w-6 h-6 rounded-full"
                            />{" "}
                            <p className="font-[500]">Venmo</p>{" "}
                          </div>
                        ) : (
                          "Select a Deposit Asset"
                        )}
                      </p>
                      <FaAngleDown />
                    </div>
                  </div>
                  {mpOptions && (
                    <div
                      className="absolute w-full top-14 left-0 bg-white rounded-lg shadow-lg flex flex-col items-start justify-start p-2"
                      onClick={() => setMpOptions(!mpOptions)}
                    >
                      <div className="pl-3 text-start">
                        <p className="font-[500]">Recommendation</p>
                      </div>
                      <div
                        className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(1)}
                      >
                        {" "}
                        <img
                          src={paypalImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Paypal</p>
                      </div>
                      <div
                        className="py-2 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(2)}
                      >
                        {" "}
                        <img
                          src={zelleImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Zelle</p>
                      </div>
                      <div
                        className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(3)}
                      >
                        {" "}
                        <img
                          src={cashappImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Cashapp</p>
                      </div>
                      <div
                        className="py-1 pl-3 hover:bg-neutral-200 w-full text-start rounded-lg cursor-pointer flex flex-row gap-1"
                        onClick={() => setMmValue(4)}
                      >
                        {" "}
                        <img
                          src={venmoImg}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />{" "}
                        <p className="font-[500]">Venmo</p>
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="number"
                  value={mmInput}
                  onChange={(e) => setMmInput(e.target.value)}
                  className="w-full p-2 rounded-lg border border-neutral-600"
                  placeholder="Enter Amount in USD"
                />
                <div>
                  {mmValue > 0 && mmInput ? (
                    <div>
                      <button
                        className="w-full transition-all ease-in-out duration-[1s] hover:text-primary hover:bg-opacity-20 border font-[600] hover:border-primary rounded-lg py-3 text-white bg-primary"
                        onClick={() => setMmModal(true)}
                      >
                        Deposit with{" "}
                        {mmValue == 1
                          ? "Paypal"
                          : mmValue == 2
                          ? "Zelle"
                          : mmValue == 3
                          ? "Cashapp"
                          : "Venmo"}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {mmModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[500px] relative rounded-xl h-fit p-6 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
                  <div
                    className="absolute top-3 right-6 cursor-pointer"
                    onClick={() => setMmModal(false)}
                  >
                    <FaTimes size={18} />
                  </div>
                  <p className="font-[600] text-lg">Deposit Using Paypal</p>
                  <div>
                    <p className="font-[500]">
                      To deposit using (Paypal), please follow these detailed
                      steps:
                    </p>
                    <div className="flex flex-col gap-2 pl-4 pt-2">
                      <p className="text-sm">
                        1.{" "}
                        <span className="font-[500]">
                          Contact Live Support:
                        </span>{" "}
                        Reach out to our live support team to obtain the
                        specific details required for (Paypal). You can contact
                        them via the Live Chat help center. They will provide
                        you with the necessary information to proceed with the
                        payment.
                      </p>
                      <p className="text-sm">
                        2. <span className="font-[500]">Make the Payment:</span>{" "}
                        Using the details provided by our support team, complete
                        the Paypal payment. Ensure you follow all the
                        instructions carefully to avoid any errors.
                      </p>
                      <p className="text-sm">
                        3.{" "}
                        <span className="font-[500]">
                          Obtain Proof of Payment:
                        </span>{" "}
                        After making the payment, take a screenshot or obtain a
                        receipt as proof of the transaction. This proof should
                        clearly show the payment details, such as the amount,
                        date, and transaction ID.
                      </p>
                      <p className="text-sm">
                        4.{" "}
                        <span className="font-[500]">Send Payment Proof:</span>{" "}
                        Send the screenshot or receipt of your payment proof to
                        our support team for verification. You can send this via
                        the Live Chat help center. Our team will review and
                        verify your payment to complete the deposit process.
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-full transition-all ease-in-out duration-[1s] hover:bg-opacity-20 hover:text-primary rounded-lg py-2 shadow bg-primary text-white"
                    onClick={() => setMmModal(false)}
                  >
                    Got it!!
                  </button>
                </div>
              </div>
            )}
          </>

          {/* Bank Wire */}
          <>
            <div className="rounded-lg shadow-lg p-8 flex flex-col gap-3">
              <div className="">
                <div className="flex flex-row items-center justify-center gap-2">
                  <FaBars />
                  <p>Crypto</p>
                </div>
                <p className="text-center">Deposits Using Bank Wire</p>
              </div>
              <input
                type="number"
                value={bwValue}
                onChange={(e) => setBwValue(e.target.value)}
                className="border border-neutral-500 rounded-lg shadow w-full py-2 px-4 font-[500]"
                placeholder="Enter Amount in USD"
              />
              {bwValue && (
                <button
                  className="w-full transition-all ease-in-out duration-[1s] hover:bg-opacity-20 border hover:border-primary hover:text-primary font-[600] rounded-lg py-3 text-white bg-primary"
                  onClick={() => setBwModal(true)}
                >
                  Deposit with Bank Wire
                </button>
              )}
            </div>
            {bwModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="max-w-[500px] relative rounded-xl h-fit p-6 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
                  <div
                    className="absolute top-3 right-6 cursor-pointer"
                    onClick={() => setBwModal(false)}
                  >
                    <FaTimes size={18} />
                  </div>
                  <p className="font-[500] text-lg">Deposit Using Bank Wire</p>
                  <div className="flex flex-row justify-center items-center border border-primary py-2 px-4 rounded-lg gap-2">
                    <FaTimes />
                    <p>
                      Bank wire details are withheld due to security reasons,
                      please contact live support using the live chat system
                      below for more info
                    </p>
                  </div>
                  <button className="w-full hover:bg-opacity-20 hover:text-primary transition-all ease-in-out duration-[1s] font-[600] hover:border-primary border rounded-lg py-2 shadow bg-primary text-white">
                    Continue
                  </button>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default DepositPg;
