import { useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom"
import { DarkLightContext } from "../../app/DarkLightTheme";
import { FaMoon, FaSun} from "react-icons/fa";
import LogoText from "./LogoText";
import { AuthContext } from "../../app/AuthContext";
import Cookies from "js-cookie";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveNav from "../HomePg/components/ResponsiveNav";

interface NavRefTypes {
  AboutRef: any
  PackRef: any
  Testfy: any
  ContactRef: any
  TradeRef: any
}

const Navbar = ({AboutRef, PackRef, Testfy, ContactRef, TradeRef}: NavRefTypes) => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

    const {data} = useContext(AuthContext);
    const {setTheme, systemTheme, theme} = useContext(DarkLightContext);

    const themeBox = () => {
              const currentTheme = theme === "system" ? systemTheme : theme;
          
              if (currentTheme === "dark") {
                return <FaSun color="#0052FF" size={18}/>;
              } else {
                return <FaMoon color="#0052FF" size={18}/>;
              }
        };

      const checkNav = () => {
        return(
          <div>
            {
            data 
            
            ? (
                <Link to="/user/home">
                  <button>{data?.fullname}</button>
                  {/* <Button btntext={data?.fullname} /> */}
                </Link>
              ): (
                <Link to="/login">
                  <button>Login</button>
                 {/* <Button btntext="login" />    */}
                </Link>
              )}
          </div>
        )
      }
    
      let cookietoken = Cookies.get("token");
    
      useEffect(() => {
        checkNav()
      }, [data, cookietoken])

  return (
    <div>
   <div className="bg-white dark:bg-[#222736] dark:text-white w-full z-50 text-white shadow-xl">
        <div className="container">
      <div className="flex flex-row items-center justify-between py-4">
        <Link to="/">
          <LogoText 
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            
            OASIS TRADE HUB
          </LogoText>
        </Link>
        <nav className="hidden md:flex flex-row gap-6 font-[600]">
          <Link to="/" onClick={AboutRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white">About Us</Link>
          <Link to="/" onClick={Testfy} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white">Testimonials</Link>
          <Link to="/" onClick={PackRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white">Packages</Link>
          <Link to="/" onClick={TradeRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white">Trading</Link>
          <Link to="/" onClick={ContactRef} className="text-black hover:text-primary transition-all ease-in-out duration-[1s] dark:text-white">Contact Us</Link>
        </nav>
        <div className="flex flex-row gap-2 items-center">
          <div>
          <div className="p-2 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{themeBox()}</div>
          </div>
          <div className="hidden md:block">
          <Link to="/user/dashboard">
          <button className="bg-transparent text-sm md:text-md hover:bg-primary hover:text-white text-primary py-1 md:py-2 px-2 md:px-4 border-2 border-primary font-[600] rounded-xl transition-all ease-in-out duration-[1s]">Get Started</button>
          </Link>
          </div>
          {/* Mobile Toggle */}
          <div className="block md:hidden">
            {showMenu ? (
              <HiMenuAlt1  onClick={toggleMenu} className="cursor-pointer transition-all text-black dark:text-white" size={30} />
            ): (
              <HiMenuAlt3  onClick={toggleMenu} className="cursor-pointer transition-all text-black dark:text-white" size={30} />
            )}
          </div>
        </div>
      </div>         
        </div>
     
    </div>
    <ResponsiveNav showMenu={showMenu} setShowMenu={setShowMenu}  />   
    </div>
    
  )
}

export default Navbar