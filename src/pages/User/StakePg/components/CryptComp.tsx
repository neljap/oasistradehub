import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { StakeContext } from "../../../../app/StakeContext";
import { StakingData } from "../../../../utils/AppData";
// import { useAppDispatch } from "../../../../app/hook";
import axios from "axios";
// import axios from "axios";
import { AuthContext } from "../../../../app/AuthContext";
import { toast } from "react-hot-toast";
import {format, addDays} from "date-fns";

const CryptComp = () => {
  const [stakeOpen, setStakeOpen] = useState(false);
  const [stakeNum, setStakeNum] = useState(0);
  const [stakingdrop, setStakingdrop] = useState(false);
  const [stakingSetNum, setStakingSetNum] = useState(0);
  // const [sCardModal, setSCardModal] = useState(null);
  const [inputModal, setInputModal] = useState<any>(null);
  const [stakeNuLoad, setStakeNuLoad] = useState(false);

  const { inputStkCrypto, handleStkCrypto, filteredStkCrypto } =
    useContext(StakeContext);
  const { data } = useContext(AuthContext);
  // const {allStakings, setAllStakings} = useContext(StakeContext);
  // const dispatch = useAppDispatch()
  // console.log("staking", stakingSetNum);

  const singleStake = StakingData.find((item) => item.id == stakingSetNum);

  const handleStake = async (e: any) => {
    setStakeNuLoad(true);
    e.preventDefault();
    let sAmount = inputModal;
    let sImg = singleStake?.icon
    let sSign = singleStake?.sign;
    // let sCoin = singleStake?.coin;
    let sDuration = stakeNum;

    let sRPC =
      stakeNum == 1
        ? Number(inputModal) * 1.2
        : stakeNum == 2
        ? Math.floor(((Number(inputModal) * 1.25) / 2) * 100) / 100
        : stakeNum == 3
        ? Math.floor(((Number(inputModal) * 1.3) / 3) * 100) / 100
        : stakeNum == 6
        ? Math.floor(((Number(inputModal) * 1.4) / 6) * 100) / 100
        : stakeNum == 12
        ? Math.floor(((Number(inputModal) * 1.6) / 12) * 100) / 100
        : 0;
    let sROI =
      stakeNum == 1
        ? Number(inputModal) * 1.2
        : stakeNum == 2
        ? Math.floor(Number(inputModal) * 1.25 * 100) / 100
        : stakeNum == 3
        ? Math.floor(Number(inputModal) * 1.3 * 100) / 100
        : stakeNum == 6
        ? Math.floor(Number(inputModal) * 1.4 * 100) / 100
        : stakeNum == 12
        ? Math.floor(Number(inputModal) * 1.6 * 100) / 100
        : 0;

    // let staked = { sAmount, sSign, sCoin, sDuration, sROI, sRPC };
    

    try {
      let img = sImg
      let asset = sSign;
      let amount = sAmount
      let duration = sDuration
      let returns = sRPC
      let totalreturn = sROI
      let status = 'locked'
      // console.log("staking", staked)
      let tAmount = data?.tAmount
      let startdate = format (new Date(), "dd/MM/yyyy")
      let enddate = format(addDays(new Date(), 30 * sDuration), "dd/MM/yyyy")
      if(tAmount < inputModal){
        toast.error("Insufficient balance", {position: "bottom-left", className: "font-[Jost]"})
        return;
      }
      let res =  await axios.post("https://oaserver.onrender.com/api/user/staked", {userid: data?._id, stakes: {img, asset, amount, duration, returns, totalreturn, status, startdate, enddate}})
      if(res){
        tAmount = tAmount - inputModal
        await axios.patch(`https://oaserver.onrender.com/api/user/update/${data?._id}`, {
        tAmount,
      })
      toast.success("Staked", {position: "bottom-left", className: "font-[Jost]"})
      }
        

      // dispatch(stakeAdded(asset,  amount, duration, returns, totalreturn, status ))
    } catch (error) {
      toast.error(`staked error: ${error}`, {position: "bottom-left", className: "font-[Jost]"})
      console.log("error", error);
    } finally {
      setStakeOpen(false);
      setStakeNuLoad(false);
    }
  };

  return (
    <div className="pb-6 md:pb-12">
      <div className="my-4">
        <input
          type="text"
          value={inputStkCrypto}
          onChange={handleStkCrypto}
          placeholder="Search Cryptos eg. 'BTC'"
          className="w-full border border-neutral-200 dark:border-neutral-500 rounded-xl p-2"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
        {filteredStkCrypto.map((item: any) => (
          <div className="" key={item.id}>
            <div className="border border-neutral-100 dark:border-neutral-600 rounded-xl bg-neutral-100 dark:bg-[#2a3042] p-4 flex flex-col gap-3 shadow">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <img src={item.icon} alt="" className="w-12" />
                  <div>
                    <p className="font-[500]">{item.coin}</p>
                    <p className="font-[400] text-sm text-neutral-700 dark:text-neutral-100">{item.sign}</p>
                  </div>
                </div>
                <div className="bg-neutral-200 dark:bg-[#20232d] py-1 px-2 rounded-lg">
                  <p className="font-[500]">{item.price}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
                <div className="bg-neutral-200 dark:bg-[#20232d] rounded-lg px-2 py-1">
                  <p>Minium</p>
                  <p>$100</p>
                </div>
                <div className="bg-neutral-200 dark:bg-[#20232d] rounded-lg px-2 py-1">
                  <p>ROI</p>
                  <p>20% - 60%</p>
                </div>
                <div className="bg-neutral-200 dark:bg-[#20232d] rounded-lg px-2 py-1">
                  <p>Cycle</p>
                  <p>Monthly</p>
                </div>
              </div>

              <button
                className="bg-primary bg-opacity-75 transition-all ease-in-out duration-[1s] hover:bg-opacity-10 hover:text-primary hover:border-primary border font-[600] w-full text-neutral-100 dark:text-neutral-700 py-3 rounded-xl"
                onClick={() => {
                  setStakeOpen(true);
                  setStakingSetNum(item.id);
                }}
              >
                Stake {item.coin}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {stakeOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[500px] p-8 rounded-xl h-fit bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-4 mt-20 relative">
              <div
                className="absolute top-4 right-8 cursor-pointer"
                onClick={() => setStakeOpen(false)}
              >
                <FaTimes />
              </div>

              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row gap-2">
                  <div>
                    <img src={singleStake?.icon} alt="" className="w-12" />
                  </div>
                  <div>
                    <h4 className="font-[500]">{singleStake?.coin}</h4>
                    <p>{singleStake?.sign}</p>
                  </div>
                </div>
                <div>
                  <p className="font-[500]">1{singleStake?.sign} ~ ${Number(singleStake?.priceNum).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start w-full">
                <label className="font-[600] font-[Jost]">Staking Amount (USD)</label>
                <input
                  type="number"
                  value={inputModal}
                  onChange={(e) => setInputModal(e.target.value)}
                  name=""
                  id=""
                  placeholder="Enter amount to stake"
                  className="w-full p-2 rounded-lg"
                />
                <div className="flex flex-row items-center py-1 gap-2">
                  <p className="text-sm font-[500]">
                    Balance:{" "}
                    {Math.round(
                      (inputModal / Number(singleStake?.priceNum)) * 1000
                    ) / 1000}
                    {singleStake?.sign}
                  </p>
                  <Link
                    to="/user/deposit"
                    className="text-sm font-[500] py-1 px-2 rounded-lg bg-neutral-200"
                  >
                    Deposit
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-start items-start gap-3 w-full">
                <div className="relative">
                  <label className="text-sm font-[500]">Staking Duration</label>
                  <div
                    className="flex flex-row gap-3 justify-between items-center p-2 rounded-lg border border-neutral-800 cursor-pointer"
                    onClick={() => setStakingdrop(!stakingdrop)}
                  >
                    <p>
                      {stakeNum == 0
                        ? "Select a Duration"
                        : `${stakeNum} months`}
                    </p>
                    <FaAngleDown />
                  </div>
                  {stakingdrop && (
                    <div className="flex flex-col gap-1 absolute w-full border border-neutral-800 rounded-lg bg-[#f1f1f1] dark:bg-[#1f2937] top-16 shadow-lg p-1">
                      <button
                        className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm"
                        onClick={() => {
                          setStakeNum(1), setStakingdrop(false);
                        }}
                      >
                        1 months
                      </button>
                      <button
                        className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm"
                        onClick={() => {
                          setStakeNum(2), setStakingdrop(false);
                        }}
                      >
                        2 months
                      </button>
                      <button
                        className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm"
                        onClick={() => {
                          setStakeNum(3), setStakingdrop(false);
                        }}
                      >
                        3 months
                      </button>
                      <button
                        className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm"
                        onClick={() => {
                          setStakeNum(6), setStakingdrop(false);
                        }}
                      >
                        6 months
                      </button>
                      <button
                        className="w-full hover:bg-neutral-300 rounded-lg p-1 text-sm"
                        onClick={() => {
                          setStakeNum(12), setStakingdrop(false);
                        }}
                      >
                        12 months
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-[500]">Return per cycle</label>
                  <div className="w-full p-2 rounded-lg border border-neutral-600 cursor-pointer">
                    {" "}
                    {stakeNum == 1
                      ? Number(inputModal) * 1.2
                      : stakeNum == 2
                      ? Math.floor(((Number(inputModal) * 1.25  ) / 2) * 100) /
                        100
                      : stakeNum == 3
                      ? Math.floor(((Number(inputModal) * 1.3) / 3) * 100) /
                        100
                      : stakeNum == 6
                      ? Math.floor(((Number(inputModal) * 1.4) / 6) * 100) /
                        100
                      : stakeNum == 12
                      ? Math.floor(((Number(inputModal) * 1.6) / 12) * 100) /
                        100
                      : 0}{" "}
                    per months
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-start items-start gap-3 w-full">
                <div className="w-full">
                  <label className="text-sm font-[500]">ROI (USD)</label>
                  <div className="w-full p-2 rounded-lg border border-neutral-600 cursor-pointer">
                    {stakeNum == 1
                      ? Number(inputModal) * 1.2
                      : stakeNum == 2
                      ? Math.floor(Number(inputModal) * 1.25 * 100) / 100
                      : stakeNum == 3
                      ? Math.floor(Number(inputModal) * 1.3 * 100) / 100
                      : stakeNum == 6
                      ? Math.floor(Number(inputModal) * 1.4 * 100) / 100
                      : stakeNum == 12
                      ? Math.floor(Number(inputModal) * 1.6 * 100) / 100
                      : 0}
                  </div>
                </div>
                <div className="w-full">
                  <label className="text-sm font-[500]">
                    Staking Equivalent
                  </label>
                  <div className="w-full p-2 rounded-lg border border-neutral-600 cursor-pointer">
                    {Math.round(
                      (inputModal / Number(singleStake?.priceNum)) * 1000
                    ) / 1000}{" "}
                    {singleStake?.sign}
                  </div>
                </div>
              </div>
              <div className="border border-neutral-800 p-2 rounded-lg">
                <p className="text-sm">
                  Staking results in an estimated{" "}
                  <span className="font-[500]">
                    {stakeNum == 1
                      ? 20
                      : stakeNum == 2
                      ? 25
                      : stakeNum == 3
                      ? 30
                      : stakeNum == 6
                      ? 40
                      : stakeNum == 12
                      ? 60
                      : 0}
                    % RPC (Return Per Cycle)
                  </span>{" "}
                  for {singleStake?.sign}
                </p>
              </div>
              <div className="border border-neutral-800 p-2 rounded-lg">
                <p className="text-sm">
                  Your staking period will end in{" "}
                  <span className="font-[500]">
                    {stakeNum == 1
                      ? 1
                      : stakeNum == 2
                      ? 2
                      : stakeNum == 3
                      ? 3
                      : stakeNum == 6
                      ? 6
                      : stakeNum == 12
                      ? 12
                      : 0}{" "}
                    month(s).
                  </span>{" "}
                  Your earning will be sent to your live {singleStake?.sign}{" "}
                  account
                </p>
              </div>

              <button
                className="w-full rounded-lg bg-neutral-800 py-3 text-white font-[500]"
                onClick={handleStake}
              >
                {stakeNuLoad ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                      viewBox="0 0 24 24"
                    ></svg>
                    Staking...
                  </div>
                ) : (
                  <div>
                    Stake{" "}
                    {Math.round(
                      (inputModal / Number(singleStake?.priceNum)) * 1000
                    ) / 1000}{" "}
                    {singleStake?.sign}
                  </div>
                )}{" "}
               
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptComp;
