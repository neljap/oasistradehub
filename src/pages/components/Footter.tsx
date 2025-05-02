import { Link } from "react-router-dom"
import LogoText from "./LogoText"
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6"

const Footter = () => {
  return (
    <div className="bg-black text-white">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-start items-start pt-12 pb-6">
                <div className="flex flex-col gap-2 items-start justify-start">
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
                  <p className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos totam dolorum iste dolore quidem eveniet animi necessitatibus ab ipsam, doloribus vel qui, expedita sequi voluptas laudantium repudiandae, delectus similique ea sed optio? Ad, facilis facere.</p>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="rounded-full p-1.5 shadow-lg bg-[#222736] duration-[1s] ease-in-out transition-all hover:bg-primary cursor-pointer"><FaFacebook size={24}/></div>
                    <div className="rounded-full p-1.5 shadow-lg bg-[#222736] duration-[1s] ease-in-out transition-all hover:bg-primary cursor-pointer"><FaInstagram size={24} /></div>
                    <div className="rounded-full p-1.5 shadow-lg bg-[#222736] duration-[1s] ease-in-out transition-all hover:bg-primary cursor-pointer"><FaX size={24} /></div>
              
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-[600] text-lg">Quick Links</h3>
                  <ul>
                    <li>About Us</li>
                    <li>Testimonial</li>
                    <li>Packages</li>
                    <li>Trading</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-[600] text-lg">Stay Connected</h4>
                  <p>Subscribe to our newsletter for exclusive deals and updates</p>
                  <div>
                    <input className="py-1.5 rounded-tl-lg rounded-bl-lg outline-none text-black font-[500] px-2" type="email" name="" id="" />
                    <button className="bg-primary text-white font-[500] uppercase px-2 py-1.5 rounded-tr-lg rounded-br-lg">subscribe</button>
                  </div>
                </div>
               
            </div>
            <div className="py-2">
<hr />
<p className="text-center py-1 uppercase">Copyright©oasistradehub2025</p>

            </div>
            
        </div>
    </div>
  )
}

export default Footter