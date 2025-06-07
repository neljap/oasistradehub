import { useAppSelector } from "../../../../app/hook"


const MyTradeCompon = () => {
  const {state} = useAppSelector((state: any) => state.market)
  return (
    <div className="pt-6">
        <div className="shadow py-2 rounded w-full">
        {state?.length}
        </div>

    </div>
  )
}

export default MyTradeCompon