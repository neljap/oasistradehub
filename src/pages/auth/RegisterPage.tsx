import { Link, useNavigate } from "react-router-dom"
import { authImg } from "../../assets"
import { useContext, useEffect, useState } from "react"
import { AiFillEyeInvisible } from "react-icons/ai"
import { IoEyeOutline } from "react-icons/io5"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify"
import axios from "axios"
import { FaMoon, FaSun } from "react-icons/fa"
import { DarkLightContext } from "../../app/DarkLightTheme"

const RegisterPage = () => {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullName] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [eyeVisiblePass, setEyeVisiblePass] = useState(false);
    const [eyeVisibleCPass, setEyeVisibleCPass] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const [recapState, setRecapState] = useState(null);

    const navigate = useNavigate();

    const {setTheme, systemTheme, theme} = useContext(DarkLightContext);

  
    useEffect(() => {
        document.title = "Oasis Trade Hub | Register"
      }, [])

      const themeBox = () => {
                      const currentTheme = theme === "system" ? systemTheme : theme;
                  
                      if (currentTheme === "dark") {
                        return <FaSun color="#0052FF" size={18}/>;
                      } else {
                        return <FaMoon color="#0052FF" size={18}/>;
                      }
                };

    const handleRegister = async(e: any) => {
      e.preventDefault()

      try{
        setFormLoading(true);
      if (password !== passwordConfirm) {
        toast.error("Password do not match, Try Again", {
          position: "bottom-left",
        });
        setFormLoading(false);
      }
       else if(recapState == null){
      toast.info("Confirm that you're not a robot", {position: "bottom-left"})
      return;
       }
       else{
        await axios.post("https://oaserver.onrender.com/api/user/register", {email, fullname, password});
        toast.success("Registration Successfully, Login to get started", {position: "bottom-left"});
        navigate("/login");
        setFormLoading(false);
       }
      }catch(error: any){
        toast.error(error.code, {position: "bottom-left"})
      }finally{
        setFormLoading(false)
      }
    }
    
  return (
    <div className="bg-second h-screen px-0 md:px-28 my-auto py-12">
      <div className="container">
        <div className="my-auto rounded bg-white grid grid-cols-1 md:grid-cols-3">
            <div className="py-6 px-10 flex flex-col gap-3">
              <div className="flex flex-row items-center justify-between">
                <p className="text-second font-[600] text-xl">
                  <Link to="/">
                  OasisTradeHub
                  </Link>
                  </p>
                  <div className="p-1.5 shadow rounded-full bg-primary bg-opacity-5 cursor-pointer" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{themeBox()}</div>
                <Link to="/login" className="text-lg font-[500] text-black">Login</Link>
              </div>
              <h3 className="font-[600] text-lg md:text-2xl py-2">Sign Up Now</h3>
              <p className="text-sm font-[500]">Experience the freedom and incredible benefits that come with your new account. It’s quick, easy, and hassle-free!</p>
              <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-1 py-1">
                <label className="font-[500]">Full Name</label>
                <input type="text" className="w-full p-1 outline-none rounded-lg  border-black border" required value={fullname} onChange={(e) => setFullName(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-1 py-1">
                <label className="font-[500]">Email address</label>
                <input type="email" className="w-full p-1 outline-none rounded-lg  border-black border" required value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-1 py-1 relative">
                <label className="font-[500]">Password</label>
                <input type={eyeVisiblePass ? "text":"password"} className="w-full p-1 outline-none rounded-lg  border-black border" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="absolute cursor-pointer right-4 top-8" onClick={() => setEyeVisiblePass(!eyeVisiblePass)}>
                {eyeVisiblePass ? (<div><AiFillEyeInvisible size={28} /></div>) : (<div><IoEyeOutline size={28}/></div>)}  
                </div>
                
              </div>
              <div className="flex flex-col gap-1 py-1 relative">
                <label className="font-[500]">Confirm Password</label>
                <input type={eyeVisibleCPass ? "text":"password"} className="w-full p-1 outline-none rounded-lg  border-black border" required value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                <div className="absolute cursor-pointer right-4 top-8" onClick={() => setEyeVisibleCPass(!eyeVisibleCPass)}>
                {eyeVisibleCPass ? (<div><AiFillEyeInvisible size={28} /></div>) : (<div><IoEyeOutline size={28}/></div>)}  
                </div>
              </div>
              <div>
                <div className="py-2">
              <ReCAPTCHA sitekey="6LfSrWIqAAAAAAl5wjTLViZc_d0cDrHb9_V92smx" onChange={(val : any) => setRecapState(val)} />
                </div>
            </div>
              <button className="bg-primary transition-all ease-in-out duration-[1s] hover:text-primary hover:bg-white  py-2 w-full text-white rounded border-2 font-[500] border-primary">{formLoading ? "Registering..." : "Register"}</button>
              </form>
              
            </div>
            <div className="col-span-2 bg-[#3c39aa] py-12 hidden md:block">
              <div className="w-1/2 mx-auto text-white text-center">
              <p className="font-[500] text-2xl">Welcome to Oasis Trade Hub</p>
              <p className="leading-5 font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque vero natus, laborum quisquam aliquam.</p>
              </div>
              

              <div className="mx-auto py-12">
                <img src={authImg} alt="" className="w-80 mx-auto" />
              </div>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default RegisterPage