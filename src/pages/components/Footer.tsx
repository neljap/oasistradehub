import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope, FaFacebook, FaLocationArrow } from "react-icons/fa6"
import LogoText from "./LogoText"
import { Link } from "react-router-dom"


const Footer = () => {
  const topMenu = [
    {
      id: 1,
      title: "Head Office",
      text: ["Jalan Cempaka Wangi No 22", "Jakarta - Indonesia"],
      icon: FaLocationArrow
    },
    {
      id: 2,
      title: "Email Support",
      text: ["hello@yourdomain.tld", "support@yourdomain.tld"],
      icon: FaEnvelope
    },
    {
      id: 3,
      title: "Phone",
      text: ["Phone: +622122.2002.2012", "Fax: +622122.2002.2012"],
      icon: FaPhoneAlt
    }
  ]

  const prodList = ["Stocks", "Futures & Options", "IPO", "Mutual Funds", "Credits"]
  const comList = ["About Us", "Services", "Vision & Mision", "Leadership", "News & Article"]
  return (
    <div className="bg-black">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-center gap-6 py-6 mx-0 md:mx-16">
              
            <div className="text-white col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 md:py-6">
            {topMenu.map((item)=> (
              <div className="flex flex-row gap-1 md:gap-2" key={item.id}>
                  <div className="bg-black bg-opacity-15 p-1 md:p-2 rounded-full border border-white w-fit h-fit">
                    <FaLocationArrow size={24}/>
                  </div>
                  <div>
                    <h2 className="font-[500] text-md md:text-xl">{item.title}</h2>
                    <div>
                      {item.text.map((ind, index)=> (
                      <p className="text-sm font-[500]" key={index}>{ind}</p>

                    ))}</div>
                    {/* <div>
                       <p className="text-sm font-[500]">Jalan Cempaka Wangi No 22</p>
                       <p className="text-sm font-[500]">Jakarta - Indonesia</p>
                    </div> */}
                   
                  </div>
                </div>
            ))}
                
              </div>
              <hr />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                <div className=" flex flex-col gap-2 col-span-2 justify-start items-start">
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsam quasi modi sequi nam possimus nemo?</p>
                </div>
                <div>
                    <h3 className="font-[500] text-xl ">Product</h3>
                    {prodList.map((item, index) => (
                      <div key={index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-[500] text-xl ">Company</h3>
                    {comList.map((item, index) => (
                      <div key={index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
            <div>
              <div className="px-8 py-12 rounded-xl text-white shadow bg-gradient-to-br from-[#0b7c86] to-[#9440a2]">
                <div className="flex flex-col gap-2 pb-4">
                 <h2 className="text-3xl text-center font-[600]">Newsletter</h2>
                <p className="text-center">Sign up for our newsletter for updates, news, insights, and promotions.</p> 
                </div>
                
                <form className="flex flex-col gap-3">
                  <input type="text" placeholder="Name" value='' className="w-full p-1 rounded"/>
                  <input type="text" placeholder="Email" value='' className="w-full p-1 rounded"/>
                  <div>
                  <button className="w-full bg-second flex flex-row items-center gap-2 py-3 text-center rounded-lg mx-auto">SIGN UP</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="mx-0 md:mx-16">
              <div className="pt-6 pb-2">
                <hr />
              </div>
              
          <div className="py-4 flex flex-row justify-between items-center">
            <div>
              <p className="text-sm font-[500] text-white">Copyright© 2025 Oasis Trade Hub</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="p-1 rounded-full border border-white w-fit">
                <FaFacebook color="white"/>
              </div>
              <div className="p-1 rounded-full border border-white w-fit">
                <FaFacebook color="white"/>
              </div>
              <div className="p-1 rounded-full border border-white w-fit">
                <FaFacebook color="white"/>
              </div>
              <div className="p-1 rounded-full border border-white w-fit">
                <FaFacebook color="white"/>
              </div>
            </div>
          </div>
            </div>
          
        </div>
    </div>
  )
}

export default Footer