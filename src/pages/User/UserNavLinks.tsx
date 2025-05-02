import { useContext, useEffect, useState } from "react";
import { BiBellPlus, BiPowerOff } from "react-icons/bi";
import {
  FaCommentAlt,
  FaShoppingBag,
  FaTh,
  FaTimes,
  FaUserAlt,
} from "react-icons/fa";
import {
    FaBars,
  FaMarker,
  FaMoon,
  FaPeopleGroup,
  FaSun,
} from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ADACoin,
  BTCoin,
  ETHCoin,
  increasebar,
  moneybar,
  profilebar,
  USDTCoin,
  veraccount,
  walletbar,
  withdrawbar,
} from "../../assets";
import { DarkLightContext } from "../../app/DarkLightTheme";
import LogoText from "../components/LogoText";
import {  HiMiniClipboardDocumentList } from "react-icons/hi2";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosCash } from "react-icons/io";
import { SiBitcoincash } from "react-icons/si";
import { HiCash } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const UserNavLinks = ({ children }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [figModal, setFigModal] = useState(false);
  const [figValue, setFigValue] = useState<any>(null);
  const { setTheme, systemTheme, theme } = useContext(DarkLightContext);
  const [isMobOpen, setIsMobOpen] = useState(false);

  const navigate = useNavigate()

  const themeBox = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <FaSun color="#0052FF" size={18} />;
    } else {
      return <FaMoon color="#0052FF" size={18} />;
    }
  };

  const menuItem = [
    {
      path: "/user/dashboard",
      name: "Dashboard",
      icon: <FaTh size={24} />,
    },
    {
      path: "/user/markets",
      name: "Live Markets",
      icon: <AiOutlineGlobal size={24}  />
    },
    {
      path: "/user/stake",
      name: "Stake",
      icon: <FaShoppingBag size={24} />,
    },
    {
      path: "/user/deposit",
      name: "Deposit",
      icon: <IoIosCash size={24} />
    },
    {
      path: "/user/experts",
      name: "Trading Experts",
      icon: <HiMiniClipboardDocumentList size={24} />
    },
    {
      path: "/user/withdraw",
      name: "Withdraw",
      icon: <HiCash size={24}  />
    },
    {
      path: "/user/subscriptions",
      name: "Subscriptions",
      icon: <FaCommentAlt size={24} />,
    },
    {
      path: "/user/purchase-crypto",
      name: "Purchase Crypto",
      icon: <SiBitcoincash size={24} />
    },
    {
      path: "/user/account",
      name: "Account",
      icon: <FaUserAlt size={24} />,
    },
    {
      path: "/user/verification",
      name: "Verification",
      icon: <MdVerified size={24}  />
    },
    {
      path: "/user/support",
      name: "Support",
      icon: <FaPeopleGroup size={24}  />
    },
  ];

  const probar = [
    {
      id: 1,
      text: "Profile",
      img: profilebar,
    },
    {
      id: 2,
      text: "Deposit",
      img: walletbar,
    },
    {
      id: 3,
      text: "Withdraw",
      img: withdrawbar,
    },
    {
      id: 4,
      text: "Tradings",
      img: increasebar,
    },
    {
      id: 5,
      text: "Subscription",
      img: moneybar,
    },
    {
      id: 6,
      text: "Verification",
      img: veraccount,
    },
  ];

  const logOutFunc = () => {
    try{  
      Cookies.remove("token");
      setLogoutModal(false);
      navigate("/");
      toast.info("Log Out Successfully", {position: "bottom-left"})
    }catch(err: any){
      toast.error(err.code, { position: "bottom-left" });
    }
  }

  useEffect(() => {
    let cookietoken = Cookies.get("token");

    if(!cookietoken){
      navigate("/login")
    }

  }, [])

  const activeLink =
    "flex flex-row gap-3 px-6 py-2 justify-start items-center bg-blue-200 text-[#0052FF] rounded-xl mt-2";

  const normalLink =
    "flex flex-row gap-3 px-6 py-2 justify-start items-center hover:bg-blue-50 rounded-xl text-neutral-500 mt-2";

  return (
    <div className="">
      {/* TopNav */}
      <div className="fixed w-full px-6 md:px-12 h-16 bg-white dark:bg-[#2a3042] dark:text-white shadow-lg flex flex-row items-center justify-between z-30">
        <div>
            
            <div className="">
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
            </div>
           
        </div>
        
        <div className="flex flex-row items-center gap-4">
          <div className="relative group">
            <div
              className="shadow group px-2 md:px-3 py-1 md:py-2 rounded-lg cursor-pointer border border-neutral-500 flex flex-row gap-3"
              onClick={() => setFigModal(!figModal)}
            >
              {figValue == 1 ? (
                <img src={USDTCoin} alt="" />
              ) : figValue == 2 ? (
                <img src={BTCoin} alt="" />
              ) : figValue == 3 ? (
                <img src={ETHCoin} alt="" />
              ) : (
                <img src={ADACoin} alt="" />
              )}

              <p>0</p>
            </div>
                <div
                  className="absolute top-12 hidden group-hover:block max-w-fit rounded-lg border border-neutral-400 shadow-lg z-20 p-2 md:p-4 bg-white dark:bg-black dark:text-white"
                  onClick={() => setFigModal(!figModal)}
                >
                  <button
                    className="flex flex-row gap-1 items-start max-w-fit px-4"
                    onClick={() => setFigValue(1)}
                  >
                    <div>
                      {figValue == 1 ? (
                        <FaMarker color="black" />
                      ) : (
                        <div className="px-2"></div>
                      )}
                    </div>
                    <img src={USDTCoin} alt="" />
                    <p className="font-[500]">0</p>
                  </button>
                  <button
                    className="flex flex-row gap-1 items-start py-1 px-8 hover:bg-neutral-200 rounded-lg w-fit"
                    onClick={() => setFigValue(2)}
                  >
                    <div className="float-left">{figValue == 2 && <FaMarker color="black" />}</div>

                    <img src={BTCoin} alt="" />
                    <p className="font-[500]">0.00000</p>
                  </button>
                  <button
                    className="flex flex-row gap-1 items-start py-1 px-8 hover:bg-neutral-200 rounded-lg w-fit"
                    onClick={() => setFigValue(3)}
                  >
                    <div>{figValue == 3 && <FaMarker color="black" />}</div>
                    <img src={ETHCoin} alt="" />
                    <p className="font-[500]">0.00000</p>
                  </button>
                  <button
                    className="flex flex-row gap-1 items-start py-1 px-8 hover:bg-neutral-200 rounded-lg w-fit"
                    onClick={() => setFigValue(4)}
                  >
                    <div>{figValue == 4 && <FaMarker color="black" />}</div>
                    <img src={ADACoin} alt="" />
                    <p className="font-[500]">0.00000</p>
                  </button>
                </div>
          </div>

          <div className="flex flex-row gap-2 items-center transition-all duration-[1s] ease-in-out   px-2 md:px-3 py-1 md:py-2 shadow rounded-md md:rounded-xl cursor-pointer text-primary bg-primary bg-opacity-5 hover:bg-opacity-95 hover:text-white">
            <BiBellPlus size={22} /> <p className="font-[500] hidden md:block">Notifications</p>
          </div>
          <div
            className="p-2 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer hover:bg-opacity-95 transition-all ease-in-out duration-[1s] hover:text-white"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {themeBox()}
          </div>
          <div
            className="p-2 hidden md:block rounded-full bg-primary dark:bg-slate-400 bg-opacity-5 cursor-pointer shadow"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTh size={20} color="#0052FF" />
          </div>
          <div className="block md:hidden cursor-pointer" onClick={() => setIsMobOpen(!isMobOpen)}>
            {isMobOpen ? (<FaTimes color="#0052FF" size={22}/>): (<FaBars color="#0052FF" size={22}/>)}
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
          <div className="flex gap-4 ps-5 cursor-pointer" onClick={() => setLogoutModal(true)}>
            <IoLogOutSharp size={32} color="black" />
            <p className=" font-[600] font-[Jost] text-neutral-500">Logout</p>
          </div>
        </div>

        <main className="md:pl-56 pl-0 w-full pt-24">{children}</main>
      </div>
      {isNavOpen && (
        <div className="border border-neutral-300 rounded-xl p-4 w-fit absolute top-20 right-10 flex flex-col gap-4 z-50 bg-white">
          <div className="grid grid-cols-3 gap-2 justify-center items-center">
            {probar.map((item) => (
              <div
                className="rounded-xl bg-neutral-50 py-1 flex flex-col items-center gap-1"
                key={item.id}
              >
                <img src={item.img} alt="" className="w-8 h-8" />
                <p className="font-[500] text-sm">{item.text}</p>
              </div>
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
        {/* <div className="z-50 p-5 md:w-auto w-full flex justify-between">
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
          <div className="text-3xl md:hidden" onClick={() => setIsMobOpen(!isMobOpen)}>
            {isMobOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div> */}
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
    </div>
  );
};

export default UserNavLinks;
