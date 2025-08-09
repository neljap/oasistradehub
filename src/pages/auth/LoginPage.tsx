import { Link, useNavigate } from "react-router-dom"
import { authImag, authImg, HomeLogo } from "../../assets"
import { useContext, useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { DarkLightContext } from "../../app/DarkLightTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import LogoText from "../components/LogoText";


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [recapState, setRecapState] = useState(null);
  const [eyeVisiblePass, setEyeVisiblePass] = useState(true);
  const [formLoading, setFormLoading] = useState(false);

  const navigate = useNavigate();
  const {setTheme, systemTheme, theme} = useContext(DarkLightContext);

  useEffect(() => {
    document.title = "Oasis Trade Hub | Login"
  }, [])

  const handleLogin = async(e: any) => {
    e.preventDefault()
    if(recapState == null){
      toast.error("Confirm that you're not a robot", {position: "bottom-left"})
      return;
    }

    const formData = {email, password}

    setFormLoading(true)
    await axios
      .post("https://oaserver.onrender.com/api/user/login", formData)
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 7 });
        navigate("/user/dashboard");
        window.location.reload();
        toast.success("Login Successfully", { position: "bottom-left", className: "font-[Jost]" });
      })
      .catch((err) => {
        toast.error(err.message, { position: "bottom-left", className: "font-[Jost]" });
        setFormLoading(false);
      })
      .finally(() => setFormLoading(false));
  }

  const themeBox = () => {
                const currentTheme = theme === "system" ? systemTheme : theme;
            
                if (currentTheme === "dark") {
                  return <FaSun color="#0052FF" size={18}/>;
                } else {
                  return <FaMoon color="#0052FF" size={18}/>;
                }
          };

  return (
    <div className="bg-second h-screen px-0 md:px-28 my-auto py-16 md:py-12">
      <div className="container">
        <div>

        </div>
       <div className="my-auto rounded bg-white dark:bg-[#222738] grid grid-cols-1 md:grid-cols-3 justify-center items-center shadow-lg">
            <div className="py-6 px-10 flex flex-col gap-3">
              <div className="flex flex-row items-center justify-between">
                <Link to="/" className="flex flex-row items-center gap-1 md:gap-2">
                            <img src={HomeLogo} alt="" className="w-4 md:w-8" />
                              <LogoText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="custom-class"
                              >
                                OASIS TRADE HUB
                              </LogoText>
                            </Link>
                <div className="p-1.5 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{themeBox()}</div>
                <Link to="/register" className="font-[Jost] font-[600]">Register</Link>
              </div>
              <h3 className="font-[600] text-lg md:text-2xl py-2 font-[Jost]">Sign In to Your Account</h3>
              <p className="text-sm font-[500]">Pick up right where you left off — your progress is always saved and ready for you.</p>
              <form onSubmit={handleLogin}>
                      <div className="flex flex-col gap-1 py-2">
                <label className="font-[Jost] text-lg md:text-xl">Email Address</label>
                <input type="email" placeholder="Enter your Email Address" className="w-full py-2 px-3 outline-none shadow appearance-none text-gray-700 dark:text-gray-50 leading-tight focus:outline-none rounded-lg  border" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-1 py-2 relative">
                <label className="font-[Jost] text-lg md:text-xl">Password</label>
                <input type={eyeVisiblePass ? "password": "text"} placeholder="Enter your Password" className="w-full py-2 px-3 outline-none shadow dark:text-gray-50 appearance-none text-gray-700 leading-tight focus:outline-none rounded-lg  border" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <div className="absolute cursor-pointer right-4 top-10" onClick={() => setEyeVisiblePass(!eyeVisiblePass)}>
                                {eyeVisiblePass ? (<div><AiFillEyeInvisible  size={28} /></div>) : (<div><IoEyeOutline size={28}/></div>)}  
                                </div>
              </div>
              {/* <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-1"><input type="checkbox" name="" id="" /> <p>keep me signed in</p></div>
                <Link to="/register">Register</Link>
              </div> */}
              <div className="py-2 mx-auto">
              <ReCAPTCHA sitekey="6Ld0eJ8rAAAAADUUC_gy1tmnwLo6zPVEKMKYhx8K" onChange={(val : any) => setRecapState(val)} />
              </div>
              <button className="bg-primary transition-all ease-in-out duration-[1s] hover:text-primary hover:bg-white  py-2 w-full text-white rounded border-2 font-[500] border-primary">{formLoading ? "Logging...":"Login"}</button>        
              </form>

                <div>
                  <p className="font-[Jost] font-[600] pt-3">
                    <Link to="/forgot-password">
                    Forgot Password
                    </Link>
                    </p>
                </div>
              {/* <div className="flex flex-row items-center">
              <hr /> 
              <p className="text-center text-sm">or, login with your email</p>
              <hr /> 
              </div> */}

              {/* <div>
                <button className="border border-black w-full py-2 rounded">Sign with Google</button>
              </div> */}
              
            </div>
            <div className="col-span-2 bg-[#3c39aa] py-6 hidden md:block">
              <div className="w-1/2 mx-auto text-white text-center flex flex-col gap-3">
              <p className="font-[500] text-2xl">Welcome to Oasis Trade Hub</p>
              <p className="leading-5 font-[500] text-sm">A secure and intuitive platform that provides real-time insights and intelligent tools to support both beginners and professionals in growing their portfolios and reaching financial freedom.</p>
              </div>
              

              <div className="mx-auto pb-12 pt-6">
                <div className="relative w-96 pt-8 mx-auto">
                  
                  <img src={authImg} alt="" className="w-full rounded-xl" />
                  <img src={authImag} alt="" className="w-60 absolute top-20 -left-40 rounded-xl mx-auto" />
                </div>
                
              </div>
            </div>
        </div> 
      </div>
        
    </div>
  )
}

export default LoginPage