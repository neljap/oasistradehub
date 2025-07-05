import { NavLink } from 'react-router-dom';

const MarketNav = () => {

    const navLinks = [
    {name: "Crypto", link: "/user/markets"},
    {name: "Stock", link: "/user/markets/stock"},
    {name: "Forex", link: "/user/markets/forex"},
    {name: "My Trades", link: "/user/markets/mytrades"}
  ]

  let normalLink = "flex flex-col items-center justify-center text-neutral-600 hover:text-neutral-800 transition-colors py-1 px-3 rounded-lg font-[500] text-sm md:text-base border-2 border-neutral-200 hover:border-neutral-800";
  let activeNormal = "flex flex-col items-center justify-center text-neutral-800 font-[500] hover:text-neutral-800 transition-colors";

  return (
    <div>
        <div className='flex justify-start items-center gap-4 py-4'>
        {navLinks.map((item) => (
          <NavLink key={item.name} to={item.link} className={({isActive}) => (isActive ? activeNormal : normalLink)}>
            <p>{item.name}</p>
          </NavLink>
        ))} 
      </div>
    </div>
  )
}

export default MarketNav