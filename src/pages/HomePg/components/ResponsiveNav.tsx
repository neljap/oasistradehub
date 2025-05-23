import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../app/AuthContext";
import { FaLongArrowAltRight } from "react-icons/fa";

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

  const { data } = useContext(AuthContext);

  const checkNav = () => {
      return (
        <div>
          {data ? (
            <Link to="/user/dashboard">
              <button className="bg-transparent flex flex-row gap-2 items-center text-sm md:text-md hover:bg-primary hover:text-white text-primary py-1 md:py-2 px-1 md:px-3 border-2 border-primary font-[600] rounded-lg transition-all ease-in-out duration-[1s]">{data?.fullname}</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="bg-transparent flex flex-row gap-2 items-center text-sm md:text-md hover:bg-primary hover:text-white text-primary py-1 md:py-2 px-2 md:px-4 border-2 border-primary font-[600] rounded-lg transition-all ease-in-out duration-[1s]">Get Started <FaLongArrowAltRight /></button>
            </Link>
          )}
        </div>
      );
    };
  return (
    <div>
        <div className={`${showMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`} onClick={() => setShowMenu(!showMenu)}>
                <div className="flex flex-col items-center justify-between gap-8 pt-8">
                    <Link to="/" onClick={AboutRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Home</Link>
                    <Link to="/" onClick={AboutRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">About</Link>
                    <Link to="/" onClick={Testfy} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Trading</Link>
                    <Link to="/" onClick={Testfy} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Partners</Link>
                    <Link to="/"onClick={PackRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Packages</Link>
                    <Link to="/"onClick={PackRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Testimonials</Link>
                    <Link to="/"onClick={Testfy} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">FAQ</Link>
                    <Link to="/" onClick={ContactRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white font-[600]">Contact</Link>
                    <div>
                      {checkNav()}
                    </div>
                
                </div>
        </div>
    </div>
  )
}

export default ResponsiveNav