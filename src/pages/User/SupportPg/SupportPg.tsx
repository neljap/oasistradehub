import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../app/AuthContext";

const SupportPg = () => {
  const [subLoading, setSubLoading] = useState(false);
  // const [catOpen, setCatOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("")

  const catValue = ["select","mywallet", "verification", "others"]
  const {data} = useContext(AuthContext);

  const handleSupport = async(e: any) => {
    e.preventDefault()
    setSubLoading(true);
    let userid = data._id
    try {
      console.log(subject, category, message, userid)

      const res = await axios.post("http://localhost:3030/api/user/support", {userid, subject, category, message})
      if(res){
        toast.success("Received, Our team will get back to you, shortly", {position: "bottom-left"})
      }
    } catch (error) {
      toast.error(`Support Error: ${error}`, {position: "bottom-left"})
    }finally{
      setSubLoading(false);
      setCategory("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="text-center text-xl md:text-4xl py-4 font-[500]">Support</h2>
        <form onSubmit={handleSupport} className="mx-auto w-full md:w-2/3 rounded-lg shadow flex flex-col gap-2 px-4 py-8">
          <p className="font-[500] text-xl">Support Ticket</p>
          <div className="flex flex-col justify-start items-start gap-2">
            <label className="font-[500]">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full outline-none border border-neutral-200 block shadow-sm focus:ring-1 focus:ring-neutral-100  px-3 py-1 rounded-lg"
            />
          </div>
          <div className="w-full">
          <div className="mb-4 ">
            <label className="block text-gray-700 mb-2 font-[500]">Category</label>
            <select id="gender" name="gender"
                className="border cursor-pointer border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-neutral-200" required value={category} onChange={(e: any) => setCategory(e.target.value)}>
                {catValue.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <label className="font-[500]">Message</label>
            <textarea
              className="w-full h-48 outline-none border border-neutral-200 block shadow-sm focus:ring-1 focus:ring-neutral-100  px-3 py-1 rounded-lg"
              name=""
              id=""
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-row justify-between items-center pt-4">
            <div></div>
            <button className="bg-primary text-white text-center rounded-lg shadow px-3 py-2 ">
              {subLoading ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportPg;
