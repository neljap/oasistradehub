import { AiOutlineGlobal } from "react-icons/ai";
import { FaCommentAlt, FaShoppingBag, FaTh, FaUserAlt } from "react-icons/fa";
import { FaPeopleGroup, FaPowerOff } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { IoIosCash } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { SiBitcoincash } from "react-icons/si";
import { NavLink } from "react-router-dom";

interface navMenuTypes {
    showNavMenu: any,
    setShowNavMenu: any
    setLogoutModal: any
}

const UserRespNav = ({showNavMenu, setShowNavMenu, setLogoutModal}: navMenuTypes) => {

    let activeLink =
    "flex flex-row gap-3 w-full py-3 ps-4 justify-start items-center bg-blue-200 text-[#0052FF] rounded-tl-xl  rounded-bl-xl border-r-4 border-primary mt-2";

  let normalLink =
    "flex flex-row gap-3 w-full py-3 ps-4 justify-start items-center hover:bg-blue-50 rounded-tl-xl rounded-bl-xl text-neutral-500 mt-2";

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

  return (
    <div>
        <div className={`${showNavMenu ? 'left-0' : '-left-[100%]'} fixed bottom-0  top-0 z-50 ps-6 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white  pb-4 pt-4 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`} onClick={() => setShowNavMenu(!showNavMenu)}>
            <nav className="flex flex-col items-center justify-between">
            {menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className={({isActive}) => isActive ? activeLink : normalLink} onClick={() => window.scrollTo(0, 0)}>
                    <div className="icon">{item.icon}</div>
              <span className="font-[600] font-[Jost] dark:text-white text-gray-600">
                {item.name}
              </span>
                </NavLink>
            ))}
            </nav>
            <div className="flex gap-3 ps-3 cursor-pointer" onClick={() => setLogoutModal(true)}>
                        <FaPowerOff size={24} color="black"/>
                        <p className=" font-[600] font-[Jost] text-neutral-500">Logout</p>
                      </div>
        </div>
    </div>
  )
}

export default UserRespNav