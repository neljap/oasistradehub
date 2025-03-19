import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePg, LoginPage, RegisterPage, UserPg } from "./pages";
// import { useTheme } from "next-themes";
// import { FaMoon, FaSun } from "react-icons/fa6";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

  // const {systemTheme, theme} = useTheme()

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])

  
  function Root() {
    return(
      <div>
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
