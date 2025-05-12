import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../app/AuthContext";
import { FaLongArrowAltRight } from "react-icons/fa";

const GetStarted = () => {
    const { data } = useContext(AuthContext);
  return (
    <Link to={`${data ? '/user/dashboard': '/login'}/login`}>
        <button className="bg-transparent flex flex-row gap-2 items-center text-sm md:text-md hover:bg-primary hover:text-white text-primary py-1 md:py-2 px-2 md:px-4 border-2 border-primary font-[600] rounded-lg transition-all ease-in-out duration-[1s]">Get Started <FaLongArrowAltRight /></button>
    </Link>
  )
}

export default GetStarted