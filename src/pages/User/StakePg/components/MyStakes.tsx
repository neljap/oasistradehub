import { useContext } from "react"
import { TbLockDollar } from "react-icons/tb";
import { AuthContext } from "../../../../app/AuthContext"


const MyStakes = () => {
   // Select the `state.posts` value from the store into the component
  //  const stakes = useAppSelector(state => state.stake)
  //  const dispatch = useAppDispatch()
  const {data} = useContext(AuthContext);

  let stakes = data?.staked
   const renderedStakes = stakes?.map((take :any) => (
    <div className="grid grid-cols-4 md:grid-cols-8 justify-start items-center gap-4 rounded-lg shadow w-full py-2 px-2" key={take.id}>
    <div className="flex items-center gap-2">
      <div><img src={take.img} alt="" className="w-8 h-8" /></div>
      <p className="font-[500]">{take.asset}</p>
    </div>
    <div>
    <p className="font-[500]">{take.amount}</p>
    </div>
    <div>
    <p className="font-[500]">{take.duration} months</p>
    </div>
    <div>
    <p className="font-[500]">{take.returns}</p>
    </div>
    <div>
    <p className="font-[500]">{take.totalreturn}</p>
    </div>
    <div>
    <p className="font-[500] flex gap-1 items-center"><p>{take.status}</p> <TbLockDollar className="" /></p>
    </div>
    <div>
    <p className="font-[500]">{take.startdate}</p>
    </div>
    <div>
    <p className="font-[500]">{take.enddate}</p>
    </div>
  </div>
   ))
  return (
    <div className="py-4">
        <div className="grid grid-cols-4 md:grid-cols-8 justify-start items-center gap-4 bg-neutral-200 rounded-lg shadow w-full py-2 px-2">
          <div>
            <p className="font-[500]">Staked Asset</p>
          </div>
          <div>
          <p className="font-[500]">Staked Amount</p>
          </div>
          <div>
          <p className="font-[500]">Staked Duration</p>
          </div>
          <div>
          <p className="font-[500]">Monthly Returns</p>
          </div>
          <div>
          <p className="font-[500]">Total Returns</p>
          </div>
          <div>
          <p className="font-[500]">Status</p>
          </div>
          <div>
          <p className="font-[500]">Start Date</p>
          </div>
          <div>
          <p className="font-[500]">End Date</p>
          </div>
        </div>
        {renderedStakes}
      </div>
  )
}

export default MyStakes