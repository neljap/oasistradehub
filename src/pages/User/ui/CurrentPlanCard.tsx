
import { Link } from 'react-router-dom'
import { emptyboxdash } from '../../../assets'

const CurrentPlanCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-row justify-between items-center bg-neutral-50 border border-neutral-300 p-2 rounded-xl">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p className='font-[Jost] font-[600]'>Current Plan</p>
                    <p>No Plan</p>
                </div>  
                </div>
                
                <div>
                    <Link to="/user/subscriptions">
                    <button className="px-4 py-2 text-primary bg-primary bg-opacity-5 hover:bg-opacity-95 font-[Jost] hover:text-white transition-all ease-in-out duration-[1s] rounded-xl ">Purchase Plan</button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-neutral-50 border border-neutral-300 p-2 rounded-xl">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p>Plan Bonus</p>
                    <p>$0</p>
                </div>  
                </div>
                
                <div>
                   
                </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-neutral-50 border border-neutral-300 p-2 rounded-xl">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p className='font-[Jost] font-[600]'>Copy Trader</p>
                    <p>Julian Hosp</p>
                </div>  
                </div>
                
                <div>
                   
                </div>
            </div>
        </div>
  )
}

export default CurrentPlanCard