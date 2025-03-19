import { Link, useNavigate } from "react-router-dom"
import { authImag, authImg } from "../../assets"
import { useEffect, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [recapState, setRecapState] = useState(null);
  const [eyeVisiblePass, setEyeVisiblePass] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Oasis Trade Hub | Login"
  }, [])

  const handleLogin = async(e: any) => {
    e.preventDefault()

    if(recapState == null){
      toast.info("Confirm that you're not a robot", {position: "bottom-left"})
      return;
    }

    if(recapState == null){
      toast.info("Confirm that you're not a robot", {position: "bottom-left"})
      return;
    }

    const formData = {email, password}


    await axios
      .post("https://oaserver.onrender.com/api/user/login", formData)
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 7 });
        navigate("/user/dashboard");
        window.location.reload();
        toast.success("Login Successfully", { position: "bottom-left" });
      })
      .catch((err) => {
        toast.error(err.message, { position: "bottom-left" });
        setFormLoading(false);
      })
      .finally(() => setFormLoading(false));
  }

  return (
    <div className="bg-second h-screen px-28 my-auto py-12">
        <div className="my-auto rounded bg-white grid grid-cols-1 md:grid-cols-3">
            <div className="py-6 px-10 flex flex-col gap-3">
              <div className="flex flex-row items-center justify-between">
                <Link to="/" className="text-second font-[600] text-xl">OasisTradeHub</Link>
                <Link to="/register">Register</Link>
              </div>
              <h3 className="font-[600] text-2xl py-2">Hi, Welcome Back</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, a!</p>
              <form onSubmit={handleLogin}>
                      <div className="flex flex-col gap-1 py-2">
                <label>Email address</label>
                <input type="email" className="w-full p-1 rounded" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="flex flex-col gap-1 py-2 relative">
                <label>Password</label>
                <input type={eyeVisiblePass ? "text": "password"} className="w-full p-1 rounded border border-neutral-200" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <div className="absolute cursor-pointer right-4 top-10" onClick={() => setEyeVisiblePass(!eyeVisiblePass)}>
                                {eyeVisiblePass ? (<div>< IoEyeOutline size={28} /></div>) : (<div><AiFillEyeInvisible size={28}/></div>)}  
                                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-1"><input type="checkbox" name="" id="" /> <p>keep me signed in</p></div>
                <Link to="/register">Register</Link>
              </div>
              <div className="py-2">
              <ReCAPTCHA sitekey="6LfSrWIqAAAAAAl5wjTLViZc_d0cDrHb9_V92smx" onChange={(val : any) => setRecapState(val)} />
              </div>
              <button className="bg-second text-white py-2 w-full rounded border border-black ">{formLoading ? "Submitting...":"Submit"}</button>        
              </form>

              {/* <div className="flex flex-row items-center">
              <hr /> 
              <p className="text-center text-sm">or, login with your email</p>
              <hr /> 
              </div> */}

              <div>
                <button className="border border-black w-full py-2 rounded">Sign with Google</button>
              </div>
              
            </div>
            <div className="col-span-2 bg-[#3c39aa] py-6">
              <div className="w-1/2 mx-auto text-white text-center">
              <p className="font-[500] text-2xl">Welcome to Oasis Trade Hub</p>
              <p className="leading-5 font-[500]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque vero natus, laborum quisquam aliquam.</p>
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
  )
}

export default LoginPage