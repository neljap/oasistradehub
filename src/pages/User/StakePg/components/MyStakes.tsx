import { useAppSelector } from "../../../../app/hook"


const MyStakes = () => {
   // Select the `state.posts` value from the store into the component
   const stakes = useAppSelector(state => state.stake)
  //  const dispatch = useAppDispatch()
 
   const renderedStakes = stakes.map((take :any) => (
    <div className="grid grid-cols-4 md:grid-cols-6 justify-start items-center gap-4 rounded-lg shadow w-full py-2 px-2" key={take.id}>
    <div>
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
    <p className="font-[500]">{take.status}</p>
    </div>
  </div>
   ))
  return (
    <div className="py-4">
        <div className="grid grid-cols-4 md:grid-cols-6 justify-start items-center gap-4 bg-neutral-200 rounded-lg shadow w-full py-2 px-2">
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
        </div>
        {renderedStakes}
      </div>
  )
}

export default MyStakes