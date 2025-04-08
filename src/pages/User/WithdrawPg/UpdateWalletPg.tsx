import { useState } from "react";
import { BiArrowFromLeft, BiEditAlt } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { FaMarker } from "react-icons/fa6";
import { ADACoin, BTCoin, ETHCoin, USDTCoin } from "../../../assets";
import { Link } from "react-router-dom";

const UpdateWalletPg = () => {
  const [BTCEdit, setBTCEdit] = useState(false);
  const [ETHEdit, setETHEdit] = useState(false);
  const [USDTEdit, setUSDTEdit] = useState(false);
  const [LTCEdit, setLTCEdit] = useState(false);


  return (
    <div>
      <div className="container">
        <p className="font-[500] py-4">UPDATE WITHDRAWAL WALLET</p>
        <div className="rounded-lg shadow-lg">
          <div className=" grid grid-cols-1 md:grid-cols-2 justify-start items-start py-4 px-8 gap-2 md:gap-4">
            <div className="flex flex-row gap-4 justify-start items-center">
            <Link to="/user/withdraw">
            <button className="py-1 md:py-2 px-2 md:px-4 transition-all duration-[1s] ease-in-out hover:bg-opacity-20 border hover:border-red-500 hover:text-red-500 text-sm md:text-md font-[600] rounded-lg text-white bg-red-500 shadow flex flex-row gap-1 items-center">
              <BiArrowFromLeft color="white" /> Back
            </button>
            </Link>
            <div>
           <button className="py-1 md:py-2 px-2 md:px-4 text-sm md:text-md rounded-lg text-white bg-primary shadow flex flex-row gap-1 items-center">
              <BiArrowFromLeft color="white" /> Withdraw to Bank
            </button>    
            </div>
             
            </div>
            
            <button className="py-2 px-4 rounded-lg text-white bg-primary shadow flex flex-row gap-1 items-center">
              <BiArrowFromLeft color="white" /> Connect wallet for instant
              Withdrawal
            </button>
          </div>
          <div className="flex flex-col gap-2 px-4">
           <p className="font-[500] text-lg">Update Withdrawal information</p>
          <p className="text-sm">
            We won't be held accountable for any losses incurred as a result
            wrong input of wallet address.
          </p> 
          </div>
          
          <div>
            {/* Heading */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 py-4 px-8">
              <div className="grid grid-cols-2 justify-start items-center">
                <div>
                  <p className="font-[500]">Coin Type</p>
                </div>
                <div className="">
                  <p className="text-center font-[500]">Wallet Address</p>
                </div>
              </div>

              <div className="mx-auto">
                <p className="font-[500]">Actions</p>
              </div>
            </div>
            {/* Bitcoin (BTC) */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 py-4 px-8">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src={BTCoin} alt="" />
                  <p className="font-[500]">Bitcoin(BTC)</p>
                </div>
                {BTCEdit ? (
                <div>
                  <input type="text" placeholder="Enter your bitcoin wallet address" className="w-full border border-neutral-200 rounded-lg p-1" />
                </div> 
                  
                ): (
                 <div>
                  <p className="font-[500]">xxxxxxxxxxxxxxx</p>
                </div>
                )}
                
                
              </div>
              <div className="mx-auto">
                {BTCEdit ? (
              <div className="mx-auto flex flex-row gap-1 items-center">
                <button className="px-2 py-1 rounded-lg bg-red-500" onClick={() => setBTCEdit(!BTCEdit)}><FaMarker color="white"/></button>
                <button className="px-2 py-1 rounded-lg bg-green-500"><FaTimes color="white" /></button>
              </div>  
                ): (
              <div className="mx-auto cursor-pointer flex flex-row gap-1 items-center" onClick={() => setBTCEdit(!BTCEdit)}>
                <BiEditAlt color="#0052FF"/>
                <p className="text-primary font-[500]">Edit</p>
              </div>    
                )}                
              </div>

              
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 py-4 px-8">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src={ETHCoin} alt="" />
                  <p className="font-[500]">Ethereum(ETH)</p>
                </div>
                {ETHEdit ? (
                <div>
                  <input type="text" placeholder="Enter your bitcoin wallet address" className="w-full border border-neutral-200 rounded-lg p-1" />
                </div> 
                  
                ): (
                 <div>
                  <p className="font-[500]">xxxxxxxxxxxxxxx</p>
                </div>
                )}
                
                
              </div>
              <div className="mx-auto">
                {ETHEdit ? (
              <div className="mx-auto flex flex-row gap-1 items-center">
                <button className="px-2 py-1 rounded-lg bg-red-500" onClick={() => setETHEdit(!ETHEdit)}><FaMarker color="white"/></button>
                <button className="px-2 py-1 rounded-lg bg-green-500"><FaTimes color="white" /></button>
              </div>  
                ): (
              <div className="mx-auto cursor-pointer flex flex-row gap-1 items-center" onClick={() => setETHEdit(!ETHEdit)}>
                <BiEditAlt color="#0052FF"/>
                <p className="text-primary font-[500]">Edit</p>
              </div>    
                )}                
              </div>

              
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 py-4 px-8">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src={USDTCoin} alt="" />
                  <p className="font-[500]">Tether(USDT)</p>
                </div>
                {USDTEdit ? (
                <div>
                  <input type="text" placeholder="Enter your bitcoin wallet address" className="w-full border border-neutral-200 rounded-lg p-1" />
                </div> 
                  
                ): (
                 <div>
                  <p className="font-[500]">xxxxxxxxxxxxxxx</p>
                </div>
                )}
                
                
              </div>
              <div className="mx-auto">
                {USDTEdit ? (
              <div className="mx-auto flex flex-row gap-1 items-center">
                <button className="px-2 py-1 rounded-lg bg-red-500" onClick={() => setUSDTEdit(!USDTEdit)}><FaMarker color="white"/></button>
                <button className="px-2 py-1 rounded-lg bg-green-500"><FaTimes color="white" /></button>
              </div>  
                ): (
              <div className="mx-auto cursor-pointer flex flex-row gap-1 items-center" onClick={() => setBTCEdit(!BTCEdit)}>
                <BiEditAlt color="#0052FF"/>
                <p className="text-primary font-[500]">Edit</p>
              </div>    
                )}                
              </div>

              
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4 py-4 px-8">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <img src={ADACoin} alt="" />
                  <p className="font-[500]">LiteCoin(LTC)</p>
                </div>
                {LTCEdit ? (
                <div>
                  <input type="text" placeholder="Enter your bitcoin wallet address" className="w-full border border-neutral-200 rounded-lg p-1" />
                </div> 
                  
                ): (
                 <div>
                  <p className="font-[500]">xxxxxxxxxxxxxxx</p>
                </div>
                )}
                
                
              </div>
              <div className="mx-auto">
                {LTCEdit ? (
              <div className="mx-auto flex flex-row gap-1 items-center">
                <button className="px-2 py-1 rounded-lg bg-red-500" onClick={() => setLTCEdit(!LTCEdit)}><FaMarker color="white"/></button>
                <button className="px-2 py-1 rounded-lg bg-green-500"><FaTimes color="white" /></button>
              </div>  
                ): (
              <div className="mx-auto cursor-pointer flex flex-row gap-1 items-center" onClick={() => setBTCEdit(!BTCEdit)}>
                <BiEditAlt color="#0052FF"/>
                <p className="text-primary font-[500]">Edit</p>
              </div>    
                )}                
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateWalletPg;
