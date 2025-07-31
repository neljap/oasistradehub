
import { Link } from 'react-router-dom'
import { emptyboxdash } from '../../../assets'
import { useContext } from 'react';
import { AuthContext } from '../../../app/AuthContext';

const CurrentPlanCard = () => {
    const {data} = useContext(AuthContext);

    const res = data?.copyTrader.map((item: any) => 
         ( 
        <div key={item.id} className="flex flex-col justify-center items-center px-1 rounded-xl">
            <p className='font-[Jost] font-[600]'>{item.name}</p>
        </div>
    ))
    


  return (

   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex flex-row justify-between items-center dark:border-neutral-700 bg-neutral-100 border border-neutral-300 p-2 rounded-xl dark:bg-[#2a3042]">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p className='font-[Jost] font-[600]'>Current Plan</p>
                    <p>{data?.accountype == "" ? "No Plan" : data?.accountype} Plan</p>
                </div>  
                </div>
                
                <div>
                    <Link to="/user/subscriptions">
                    <button className="px-4 py-2 text-primary bg-primary bg-opacity-5 hover:bg-opacity-95 font-[Jost] hover:text-white transition-all ease-in-out duration-[1s] rounded-xl ">Purchase Plan</button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center dark:border-neutral-700 bg-neutral-100 border border-neutral-300 p-2 rounded-xl dark:bg-[#2a3042]">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                  <img src={emptyboxdash} alt="" className="w-8 h-8"/>  
                </div> 
                <div className="leading-5">
                    <p className='font-[Jost] font-[600]'>Bonus</p>
                    <p>${Number(data?.tBonus)}</p>
                </div>  
                </div>
                
                <div>
                   
                </div>
            </div>
            <div className="flex flex-row justify-between items-center bg-neutral-100  dark:border-neutral-700 border border-neutral-300 p-2 rounded-xl dark:bg-[#2a3042]">
                <div className="flex flex-row items-center gap-2">
                 <div className="rounded-full p-2 bg-primary bg-opacity-5">
                    {data?.copyTrader.length > 0 ? (
                        <div className='relative'>
                        <span className='rounded-full absolute -top-1 -right-1 bg-primary text-white text-xs px-1'>
                            {data?.copyTrader.length}
                        </span>
                        <img src={data?.copyTrader[0].img} alt="" className="w-8 h-8 rounded-full" />
                        </div>
                    ): (
                        <div>
                        <img src={emptyboxdash} alt="" className="w-8 h-8"/>
                        </div>
                    )}
                    
                </div> 
                <div className="leading-5">
                    <p className='font-[Jost] font-[600]'>Copy Trader</p>
                    {data?.copyTrader.length > 0 ? (
       
                        <div className='flex items-center gap-1'>
                            {res}
                        </div>
                        // <p className='text-sm text-gray-500'>{data?.copyTrader.description}</p>
                    ) : (
                        <p className='text-sm text-gray-500'>No Copy Trader</p>
                    )}
                    {/* <p className='text-green-500'>Active</p>  <p className='text-red-500'>Inactive</p>   */}
                </div>  
                </div>
                
                <div>
                   
                </div>
            </div>
        </div>
  )
}

export default CurrentPlanCard