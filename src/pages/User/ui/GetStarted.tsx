import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../app/AuthContext";
import { FaLongArrowAltRight } from "react-icons/fa";

interface getypes{
    getklass: string
}

const GetStarted = ({getklass}:getypes) => {
    const { data } = useContext(AuthContext);
  return (
    <Link to={`${data ? '/user/dashboard': '/login'}`} onClick={() => window.scrollTo(0, 0)}>
        <button className={`${getklass} flex flex-row gap-2 items-center text-sm md:text-md hover:bg-primary hover:text-white  py-1 md:py-2 px-2 md:px-4 border-2  font-[600] rounded-lg transition-all ease-in-out duration-[1s]`}>Get Started <FaLongArrowAltRight /></button>
    </Link>
  )
}

export default GetStarted