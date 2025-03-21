import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { DarkLightContext } from "../../app/DarkLightTheme";
import { FaMoon, FaSun} from "react-icons/fa";
import LogoText from "./LogoText";
import { AuthContext } from "../../app/AuthContext";
import Cookies from "js-cookie";

const Navbar = () => {
    const [changebg, setChangebg] = useState(false);
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

    const changeBackground = () => {
        if (window.scrollY >= 80) {
          setChangebg(true);
        } else {
          setChangebg(false);
        }
      };
      window.addEventListener("scroll", changeBackground);

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
    <div className={`${changebg ? "bg-white dark:bg-[#222736] dark:text-white fixed w-full z-50 text-white shadow-xl": "bg-transparent"}`}>
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
          <Link to="/" className={`${changebg ? "text-black" : "text-white"}`}>Home</Link>
          <Link to="/register" className={`${changebg ? "text-black" : "text-white"}`}>Register</Link>
          <Link to="/login" className={`${changebg ? "text-black" : "text-white"}`}>Login</Link>
        </nav>
        <div className="flex flex-row gap-2 items-center">
          <div>
          <div className="p-2 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{themeBox()}</div>
          </div>
          <Link to="/user/dashboard">
          <button className="bg-transparent text-primary py-2 px-4 border-2 border-primary font-[600] rounded-xl">Get Started</button>
          </Link>
          
        </div>
      </div>         
        </div>
     
    </div>
    // <nav className={`${changebg ? "bg-[#f1f1f1] dark:bg-[#1f2937] fixed w-full z-50": "bg-transparent"}`}>
    //   <div className="flex items-center font-medium justify-around">
    //     <div className="z-20 p-5 md:w-auto w-full flex justify-between">
    //       <Link to="/">
    //                 <LogoText
    //                   colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    //                   animationSpeed={3}
    //                   showBorder={false}
    //                   className="custom-class"
    //                 >
    //                   OASIS TRADE HUB
    //                 </LogoText>
    //               </Link>  
    //               <div className="flex flex-row gap-1 items-center">
    //               <div className="p-2 rounded-full border border-neutral-200 shadow-md cursor-pointer" >
    //                 {themeBox()}
    //               </div>
    //                 <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
    //         {open ? <FaTimes /> : <FaBars />}
    //       </div>
    //               </div>
          
    //     </div>
    //     <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
    //       <li>
    //         <Link to="/about" className="py-7 px-3 inline-block font-[500]">
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/service" className="py-7 px-3 inline-block font-[500]">
    //            Planning Service
    //         </Link>
    //       </li>
    //       <div className="px-3 text-left md:cursor-pointer group">
    //         <div
    //           className="py-7 flex justify-between font-[500] items-center md:pr-0 pr-5 group"
    //         >

    //           Investment Products
    //           <span className="text-xl md:hidden inline">
    //           </span>
    //           <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
    //             <FaAngleDown />
    //           </span>
    //         </div>
    //         <div>
    //           <div className="absolute z-10 top-10 hidden group-hover:md:block hover:md:block">
    //             <div className="py-3">
    //               <div
    //                 className="w-4 h-4 left-3 absolute 
    //                 mt-1 bg-[#f1f1f1] dark:bg-[#1f2937] rotate-45"
    //               ></div>
    //             </div>
    //             <div className="bg-[#f1f1f1] dark:bg-[#1f2937] p-3 w-48 flex flex-col gap-4 rounded-lg">
    //               <li className="text-lg text-black dark:text-white  my-1">
    //                 <Link to="/stocks" className="hover:text-primary font-[500]">
    //                   Stock
    //                 </Link>
    //               </li>
    //               <li className="text-lg text-black dark:text-white  my-1">
    //                 <Link to="/forex" className="hover:text-primary font-[500]">
    //                   Forex / Crypto
    //                 </Link>
    //               </li>
    //               <li className="text-lg text-black dark:text-white  my-1">
    //                 <Link to="/blockchain" className="hover:text-primary font-[500]">
    //                   Blockchain Technology
    //                 </Link>
    //               </li>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <li>
    //         <Link to="/contact" className="py-7 px-3 inline-block font-[500]">
    //           Contact
    //         </Link>
    //       </li>
    //     </ul>
    //     <div className="md:block hidden">
    //       {checkNav()}
    //     </div>
    //     {/* Mobile nav */}
    //     <ul
    //       className={`
    //     md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
    //     duration-500 ${open ? "left-0" : "left-[-100%]"}
    //     `}
    //     >
    //       <li>
    //         <Link to="/" className="py-1 px-3 inline-block text-xl font-[500]">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/about" className="py-1 px-3 inline-block font-[500]">
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/service" className="py-1 px-3 inline-block font-[500]">
    //            Planning Service
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/stocks" className="py-1 px-3 inline-block font-[500]">
    //            Stocks
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/forex" className="py-1 px-3 inline-block font-[500]">
    //            Forex / Crypto
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/forex" className="py-1 px-3 inline-block font-[500]">
    //           Blockchain Technology
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/contact" className="py-1 px-3 inline-block font-[500]">
    //            Contact
    //         </Link>
    //       </li>
    //       <div className="px-3 text-left md:cursor-pointer group">
    //         <h1 className="py-1 flex justify-between items-center md:pr-0 pr-5 group font-[500]">
    //           Financial
    //           <span className="text-xl md:hidden inline"></span>
    //           <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
    //             <FaAngleDown />
    //           </span>
    //         </h1>
    //         <div>
    //           <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
    //             <div className="py-3">
    //               <div
    //                 className="w-4 h-4 left-3 absolute 
    //                 mt-1 bg-white rotate-45"
    //               ></div>
    //             </div>
    //             <div className="bg-white p-2 flex flex-col gap-10">
    //               <li className="text-sm text-gray-600 my-2.5">
    //                 <Link to="/" className="hover:text-primary font-[500]">
    //                   Stock
    //                 </Link>
    //               </li>
    //               <li className="text-sm text-gray-600 my-2.5">
    //                 <Link to="/" className="hover:text-primary font-[500]">
    //                   Stock
    //                 </Link>
    //               </li>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="py-5">
    //         {checkNav()}
    //       </div>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default Navbar