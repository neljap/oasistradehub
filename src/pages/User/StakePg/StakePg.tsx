import { useContext, useEffect} from "react"
import { CryptComp, CurrencyComp, MyStakes, StockComp } from "./components";
import { StakeContext } from "../../../app/StakeContext";


const StakePg = () => {


  const {stakeSection, setStakeSection} = useContext(StakeContext);

  useEffect(() => {
            document.title = "Oasis Trade Home | Staking"
          }, [])
    

  const display = {
    0: <CryptComp/>,
    1: <StockComp />,
    2: <CurrencyComp />,
    3: <MyStakes />
  } as any

  return (
    <div className="container">
    <p className="font-[500] text-xl">Staking</p>
    <p>Lock up asset for a given period for a certain percentage to earn more</p>
    <div className="flex flex-row items-center gap-4 mt-4">
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${stakeSection == 0? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setStakeSection(0)}>Crypto</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${stakeSection == 1? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setStakeSection(1)}>Stock</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${stakeSection == 2? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setStakeSection(2)}>Currencies</div>
      <div className={`px-3 py-1 shadow font-[500] rounded-lg cursor-pointer ${stakeSection == 3? 'bg-neutral-200' : ''} text-neutral-700`} onClick={() => setStakeSection(3)}>My Trades</div>
    </div>
    <div>
      {display[stakeSection]}
    </div>
    </div>
  )
}

export default StakePg