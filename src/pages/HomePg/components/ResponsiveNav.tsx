import { Link } from "react-router-dom"

interface ResponsiveType {
    showMenu: any,
    setShowMenu: any,
    AboutRef: any,
    PackRef: any,
    Testfy: any,
    ContactRef: any,
    TradeRef: any
}
const ResponsiveNav = ({showMenu, setShowMenu, AboutRef, PackRef, Testfy, ContactRef}: ResponsiveType) => {
  return (
    <div>
        <div className={`${showMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`} onClick={() => setShowMenu(!showMenu)}>
                <div className="flex flex-col items-center justify-between gap-16 pt-12">
                    <Link to="/" onClick={AboutRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">About Us</Link>
                    <Link to="/" onClick={Testfy} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Testimonials</Link>
                    <Link to="/"onClick={PackRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Packages</Link>
                    <Link to="/"onClick={Testfy} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Trading</Link>
                    <Link to="/" onClick={ContactRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Contact Us</Link>
                    <Link to="/login">
                <button className="bg-transparent  hover:bg-primary hover:text-white text-primary py-2 px-4 border-2 border-primary font-[600] rounded-xl transition-all ease-in-out duration-[1s]">Get Started</button>    
                    </Link>
                
                </div>
        </div>
    </div>
  )
}

export default ResponsiveNav