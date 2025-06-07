import { Routes, Route, RouterProvider, createBrowserRouter, Link } from "react-router-dom";
import { HomePg, LoginPage, RegisterPage, UserPg } from "./pages";
// import { useTheme } from "next-themes";
// import { FaMoon, FaSun } from "react-icons/fa6";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa6";



function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])

  const WhatsLinkUs = "https://wa.link/p0wwxu";

  
  function Root() {
    return(
      <div>
        <button
      className="fixed bottom-20 w-fit z-50 left-4 md:right-10 text-primary font-[700] bg-[#f5f5f5] dark:bg-[#1e1f24] rounded-full border-2 p-1.5 border-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-[1s]"
      aria-label="Scroll to the top"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}>
      {" "}
      <HiArrowNarrowUp size={20}/>
      {/* <span className="visually-hidden">Scroll to top</span> */}
    </button>
    <div className="fixed bottom-1/3 md:right-10 right-5 bg-green-800 p-2 rounded-full flex justify-center items-center cursor-pointer z-50 shadow-lg">
      <Link to={WhatsLinkUs} target="_blank">
        <FaWhatsapp size={40} color="white"/>
      </Link>
      
    </div>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/*" element={<UserPg />} />
        </Routes>
        <ToastContainer />
      </div>
    )
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
