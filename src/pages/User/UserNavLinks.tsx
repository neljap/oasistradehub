import { useContext, useEffect, useState } from "react";
import {BiBellPlus, BiPowerOff, BiSolidDashboard } from "react-icons/bi";
import {
  FaCommentAlt,
  FaTh,
} from "react-icons/fa";
import {
  FaMoon,
  FaPeopleGroup,
  FaPowerOff,
  FaSun,
} from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  HomeLogo,
  increasebar,
  moneybar,
  profilebar,
  veraccount,
  walletbar,
  withdrawbar,
} from "../../assets";
import { DarkLightContext } from "../../app/DarkLightTheme";
import LogoText from "../components/LogoText";
import {  HiMiniClipboardDocumentList } from "react-icons/hi2";
import { GrMoney } from "react-icons/gr";
import { IoIosCash } from "react-icons/io";
import { SiBitcoincash, SiMarketo } from "react-icons/si";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { MdAccountBalanceWallet, MdOutlineSupervisorAccount, MdVerified } from "react-icons/md";
import Cookies from 'js-cookie';
import { toast } from "react-hot-toast";
import UserRespNav from "./UserRespNav";
import { AuthContext } from "../../app/AuthContext";
import { RiExchangeBoxLine } from "react-icons/ri";

const UserNavLinks = ({ children }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const { setTheme, systemTheme, theme } = useContext(DarkLightContext);
  const [isMobOpen, setIsMobOpen] = useState(false);

  const [showNavMenu, setShowNavMenu] = useState(false);

  const navigate = useNavigate()

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="text-[#0052FF] hover:text-white"><FaSun color="" size={18} /></div>
      
      );
    } else {
      return (
      <div className="text-[#0052FF] hover:text-white ">
       <FaMoon color="" size={18} /> 
      </div>
      );
    }
  };

  const togNavMenu = () => {
    setShowNavMenu(!showNavMenu)
  }

  const menuItem = [
    {
      path: "/user/dashboard",
      name: "Dashboard",
      icon: <BiSolidDashboard size={24} color="#0252ff"/>,
    },
    {
      path: "/user/markets/crypto",
      name: "Live Markets",
      icon: <SiMarketo size={24} color="#097031" />
    },
    {
      path: "/user/stake",
      name: "Stake",
      icon: <RiExchangeBoxLine size={24} color="#3c39aa" />,
    },
    {
      path: "/user/deposit",
      name: "Deposit",
      icon: <IoIosCash size={24} color="#f49419"/>
    },
    {
      path: "/user/experts",
      name: "Trading Experts",
      icon: <HiMiniClipboardDocumentList size={24}  color="#e84242"/>
    },
    {
      path: "/user/withdraw",
      name: "Withdraw",
      icon: <GrMoney size={24}  color="#86b144"/>
    },
    {
      path: "/user/subscriptions",
      name: "Subscriptions",
      icon: <FaCommentAlt size={24} color="#fcdeff"/>,
    },
    {
      path: "/user/purchase-crypto",
      name: "Purchase Crypto",
      icon: <SiBitcoincash size={24} color="#ffdc08"/>
    },
    {
      path: "/user/account",
      name: "Account",
      icon: <MdOutlineSupervisorAccount size={24} color="#0252ff"/>,
    },
    {
      path: "/user/verification",
      name: "Verification",
      icon: <MdVerified size={24} color="#007f02" />
    },
    {
      path: "/user/support",
      name: "Support",
      icon: <FaPeopleGroup size={24} color="#f16719" />
    },
  ];

  const probar = [
    {
      id: 1,
      text: "Profile",
      img: profilebar,
      path: "/user/account"
    },
    {
      id: 2,
      text: "Deposit",
      img: walletbar,
      path: "/user/deposit"
    },
    {
      id: 3,
      text: "Withdraw",
      img: withdrawbar,
      path: "/user/withdraw"
    },
    {
      id: 4,
      text: "Tradings",
      img: increasebar,
      path: "/user/markets/crypto"
    },
    {
      id: 5,
      text: "Subscription",
      img: moneybar,
      path: "/user/subscriptions"
    },
    {
      id: 6,
      text: "Verification",
      img: veraccount,
      path: "/user/verification"
    },
  ];

  const logOutFunc = () => {
    try{  
      Cookies.remove("token");
      setLogoutModal(false);
      navigate("/");
      toast.success("Log Out Successfully", {position: "bottom-left", className: "font-[Jost]"});
    }catch(err: any){
      toast.error(err.code, { position: "bottom-left", className: "font-[Jost]" });
    }
  }

  const {data} = useContext(AuthContext);

  useEffect(() => {
    let cookietoken = Cookies.get("token");

    if(!cookietoken){
      navigate("/login")
    }

  }, [])


  const activeLink =
    "flex flex-row gap-3 font-[Jost] px-6 py-2 justify-start items-center bg-[#5ca453] bg-opacity-20 text-[#5ca453] rounded-xl mt-2";

  const normalLink =
    "flex flex-row gap-3 font-[Jost] px-6 py-2 justify-start items-center hover:bg-blue-50 rounded-xl text-neutral-500 mt-2";

  return (
    <div className="">
      {/* TopNav */}
      <div className="fixed w-full px-6 md:px-12 h-16 bg-white dark:bg-[#2a3042] dark:text-white shadow-lg flex flex-row items-center justify-between z-30">
        <div>
            
            <div className="">
          <Link to="/" className="flex flex-row gap-0.5 md:gap-2 items-center">
          <img src={HomeLogo} alt="" className="w-6 md:w-8"/>
          <div className="hidden md:block">
           <LogoText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            OASIS TRADE HUB
          </LogoText> 
          </div>
          
        </Link>       
            </div>
           
        </div>
        
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <div className="text-primary bg-primary bg-opacity-5 dark:bg-neutral-400 rounded-full p-2">
              <MdAccountBalanceWallet size={24}/>
            </div>
            <p className="font-[600] font-[Jost] flex items-center gap-1"><span className="hidden md:block">Account Balance:</span> ${data ? Number(data?.tAmount).toLocaleString() : 0}</p>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-0">
              <span className="relative flex size-3">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-[#0052FF]"></span>
</span>
            </div>
          <div className="flex flex-row gap-2 items-center transition-all duration-[1s] ease-in-out   px-2 md:px-3 py-1 md:py-2 shadow rounded-md md:rounded-xl cursor-pointer text-primary bg-primary bg-opacity-5 dark:bg-neutral-400 hover:bg-opacity-95 hover:text-white">
            <BiBellPlus size={22} /> <p className="font-[500] hidden md:block">Notifications</p>
          </div>  
          </div>
          
          <div
            className="p-2 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer hover:bg-opacity-95 transition-all ease-in-out duration-[1s] hover:text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {themeBox()}
          </div>
          <div
            className="p-2 hidden md:block rounded-full bg-primary dark:bg-neutral-400  bg-opacity-5 cursor-pointer shadow"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTh size={20} color="#0052FF" />
          </div>
          {/* Mobile Toggle */}
                        <div className="block md:hidden">
                          {showNavMenu ? (
                            <HiMenuAlt1
                              onClick={togNavMenu}
                              className={`cursor-pointer transition-all text-primary`}
                              size={30}
                            /> 
                          ) : (
                            <HiMenuAlt3
                              onClick={togNavMenu}
                              className={`cursor-pointer transition-all text-primary`}
                              size={30}
                            />
                          )}
                        </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className=" border border-neutral-500 h-screen w-0 md:w-56 p-2 dark:bg-[#2a3042] text-white fixed hidden md:block pt-24">
          {menuItem.map((item, index) => (
            //  <NavLink to={item.path} key={index} className="flex flex-row gap-5 px-6 py-2 justify-start items-center">
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="icon">{item.icon}</div>
              <span className="font-[600] font-[Jost] dark:text-white text-gray-600">
                {item.name}
              </span>
            </NavLink>
          ))}
          <div className="flex gap-4 ps-5 pt-6 cursor-pointer" onClick={() => setLogoutModal(true)}>
            <FaPowerOff size={24} color="red"/>
            <p className=" font-[600] font-[Jost] text-neutral-500">Logout</p>
          </div>
        </div>

        <main className="md:pl-56 pl-0 w-full pt-24 min-h-screen dark:bg-[#1a1d2c] flex flex-col justify-between">
          {children}
          <footer className="bg-gray-600 text-white font-[Jost]">
            <div className="container">
            <div className="border-t border-gray-800 md:py-6 py-2 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white font-[Jost] text-sm mb-4 md:mb-0">© 2010 Oasis Trade Hub. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-500 text-white text-sm transition">Privacy Policy</a>
        <a href="#" className="hover:text-gray-500 text-white text-sm transition">Terms of Service</a>
        <a href="#" className="hover:text-gray-500 text-white text-sm transition">Cookies</a>
      </div>  
            </div>
            
    </div>
          </footer>
        </main>
      </div>
      {isNavOpen && (
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 w-fit  fixed top-20 right-10 flex flex-col gap-4 z-50 bg-white dark:bg-[#2a2f42]">
          <div className="grid grid-cols-3 gap-2 justify-center items-center" onClick={() => setIsNavOpen(!isNavOpen)}>
            {probar.map((item) => (
              <Link to={item.path}
                className="rounded-xl bg-neutral-100 dark:bg-neutral-800 py-1 flex flex-col items-center gap-1 "
                key={item.id}

              >

                <img src={item.img} alt="" className="w-8 h-8" />
                <p className="font-[500] text-sm">{item.text}</p>
              </Link>
            ))}
          </div>
          <button
            className="text-red-600 bg-red-100 w-full rounded-xl flex flex-row items-center p-2 gap-3 font-[500]"
            onClick={() => setLogoutModal(!logoutModal)}
          >
            <BiPowerOff size={20} /> Logout
          </button>
        </div>
      )}

      {logoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="w-80 rounded-xl h-40 bg-[#f1f1f1] dark:bg-[#1f2937] flex flex-col justify-center items-center gap-8">
            <p>Are you sure you want to Log Out?</p>
            <div className="flex justify-between items-center px-8 gap-4">
              <button
                className="bg-primary px-4 py-2 rounded-xl"
                onClick={logOutFunc}
              >
                Yes
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded-xl"
                onClick={() => setLogoutModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Nav */}
      <div className="flex  md:hidden items-center font-medium justify-around">
        <div
          className={`
        md:hidden bg-[#f1f1f1] dark:bg-[#1f2937] fixed z-10 w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${isMobOpen ? "left-0" : "left-[-100%]"}
        `}
        onClick={() => setIsMobOpen(false)}
        >
            {menuItem.map((item, index) => (
               <p key={index} onClick={() => setIsMobOpen(false)}>
            <Link to={item.path} className="py-1 px-3 inline-block font-[Jost] font-[600]">
              {item.name}
            </Link>
          </p> 
            ))}
            <div className='ps-3 cursor-pointer' onClick={() => setLogoutModal(true)}>   
                <p className=' font-[600] font-[Jost]' >Logout</p>
               </div>
        </div>
        </div>
    <UserRespNav showNavMenu={showNavMenu} setShowNavMenu={setShowNavMenu} setLogoutModal={setLogoutModal}/>
    </div>
  );
};

export default UserNavLinks;

// under src/pages/auth, create two pages for forgot password and reset password, alongside with a nice ui and login