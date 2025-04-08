import { useContext, useEffect} from "react";
import { Link } from "react-router-dom"
import { DarkLightContext } from "../../app/DarkLightTheme";
import { FaMoon, FaSun} from "react-icons/fa";
import LogoText from "./LogoText";
import { AuthContext } from "../../app/AuthContext";
import Cookies from "js-cookie";

const Navbar = () => {
    // const [changebg, setChangebg] = useState(false);
    // const [open, setOpen] = useState(false);

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

    // const changeBackground = () => {
    //     if (window.scrollY >= 80) {
    //       setChangebg(true);
    //     } else {
    //       setChangebg(false);
    //     }
    //   };
    //   window.addEventListener("scroll", changeBackground);

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
        <nav className="flex flex-row gap-3 font-[600]">
          <Link to="/" className="text-black">Home</Link>
          <Link to="/register" className= "text-black">Register</Link>
          <Link to="/login" className="text-black">Login</Link>
        </nav>
        <div className="flex flex-row gap-2 items-center">
          <div>
          <div className="p-2 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{themeBox()}</div>
          </div>
          <Link to="/user/dashboard">
          <button className="bg-transparent text-sm md:text-md hover:bg-primary hover:text-white text-primary py-1 md:py-2 px-2 md:px-4 border-2 border-primary font-[600] rounded-xl transition-all ease-in-out duration-[1s]">Get Started</button>
          </Link>
          
        </div>
      </div>         
        </div>
     
    </div>
  )
}

export default Navbar