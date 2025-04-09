import {
  aboutusOne,
  aboutusTwo,
  applestoreImg,
  CardAssetsImg,
  // earth20Img,
  expltradecom,
  expltradecpt,
  expltradeetf,
  expltradefx,
  expltradequit,
  // expltradestk,
  // foxhubImg,
  // goldlineImg,
  gplaystoreImg,
  herobgone,
  herobgtwo,
  heroImg,
  ideaaImg,
  kanbaImg,
  microsoftImg,
  muzicaImg,
  nirastateImg,
  ourvalueImg,
  playstoreImg,
  solayticImg,
  TopAset2Img,
  wwaImg,
  // wwoImg1,
  // wwoImg2,
  wwoImg3,
  wwoImg4,
  wwoImg5,
  wwoImg6,
} from "../../assets";
import { FaBaby } from "react-icons/fa6";
import {
  // useContext,
  useState,
} from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { DarkLightContext } from "../../app/DarkLightTheme";
import { ExploreCard, Footer, Navbar } from "../components";
import { SiTransmission } from "react-icons/si";
import Carousel from "../components/TestCarousel";
import axios from "axios";
import { IoCheckmark } from "react-icons/io5";
import CountUp from "./components/CountUpCounter";
const HomePg = () => {
  // const [changebg, setChangebg] = useState(false);

  // Contact Form

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [markSet, setMarkSet] = useState<any>(0);
  const [isFmLoading, setIsFmLoading] = useState(false);

  const storeappImg = [applestoreImg, gplaystoreImg, microsoftImg]

  const handleForm = async (e: any) => {
    e.preventDefault();
    try {
      setIsFmLoading(true);
      // email, fullname, message, subject, phone
      console.log(fullname, email, phone, message, subject);
      const res = await axios.post("http://localhost:3030/api/user/contact", {fullname, email, phone, message, subject});
      console.log("res", res);
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsFmLoading(false);
      setEmail("");
      setFullname("");
      setPhone("");
      setMessage("");
      setSubject("")
    }
  };

  // market
  const CryptSection = () => {
    return (
      <div className="w-full h-full">
        <iframe
          src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22www.account.deepmargins.com%2Foverview%22%7D"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };

  const StockSection = () => {
    return (
      <div className="w-full h-full">
        <iframe
          src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22Apple%22%2C%22AAPL%7C1M%22%5D%2C%5B%22Google%22%2C%22GOOGL%7C1D%22%5D%2C%5B%22Microsoft%22%2C%22MSFT%7C1D%22%5D%2C%5B%22BINANCE%3ARNDRUSDT%7C1D%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22500px%22%2C%22colorTheme%22%3A%22light%22%2C%22gridLineColor%22%3A%22%232A2E39%22%2C%22fontColor%22%3A%22%23787B86%22%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22%231976D2%22%2C%22topColor%22%3A%22rgba(55%2C%20166%2C%20239%2C%200.15)%22%2C%22fontFamily%22%3A%22-apple-system%2C%20BlinkMacSystemFont%2C%20Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22lineWidth%22%3A2%2C%22isTransparent%22%3Atrue%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22page-uri%22%3A%22www.apmbroker.com%2Fdashboard%22%2C%22utm_source%22%3A%22www.apmbroker.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };

  const ForexSection = () => {
    return (
      <div className="w-full h-full">
        <iframe
          src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.account.deepmargins.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };

  const display = {
    0: <CryptSection />,
    1: <StockSection />,
    2: <ForexSection />,
  } as any;

  const Explotrade = [
    {
      id: 1,
      title: "Forex",
      img: expltradefx
    },
    {
      id: 2,
      title: "Cryptocurrency",
      img: expltradecpt
    },
    {
      id: 3,
      title: "Equity",
      img: expltradequit
    },
    {
      id: 4,
      title: "Stock",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201969/j4lplfrn8xhkcd7d2ezs.png"
    },
    {
      id: 5,
      title: "ETF",
      img: expltradeetf
    },
    {
      id: 6,
      title: "Commodity",
      img: expltradecom
    }
  ]

  const wwoData = [
    {
      id: 1,
      title: "Tailored Strategies",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201969/rjlzqyjwx0qixt4tjav1.png",
    },
    {
      id: 2,
      title: "Advanced Trading Tools",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201966/w7jfvdaki6bfzhrhvcmi.png",
    },
    {
      id: 3,
      title: "Expert Financial Advice",
      img: wwoImg3,
    },
    {
      id: 4,
      title: "Robust Risk Management",
      img: wwoImg4,
    },
    {
      id: 5,
      title: "Educational Resources",
      img: wwoImg5,
    },
    {
      id: 6,
      title: "Conprehensive Market Analysis",
      img: wwoImg6,
    },
  ];
  const weAreData = [
    "Deep Assets Details",
    "Dynamic Portfolio Tracking",
    "Smart Notifications",
    "Multi Asset Tracking",
  ];


  return (
    <div>
      <div className="bg-black text-white">
        <div className="">
          <Navbar />
          {/* Herosection */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-black text-white pt-16 bg-herobgone bg-center bg-no-repeat bg-cover">
            <div className="flex flex-col gap-6 px-12 ">
              <h2 className="text-xl md:text-5xl font-[600]">
                Unlock Your Trading Success
              </h2>
              <p className="font-[500]">
                In commodo purus parturient nam sagittis convallis mollis
                dictumst montes vitae pellentesque scelerisque per neque curae
                integer hendrerit congue ad aenean
              </p>
              <div className="grid grid-cols-1 md:flex md:flex-row gap-2 md:gap-6 items-center ">
                <button className="bg-second border hover:border-primary hover:bg-transparent hover:text-primary font-[500] transition-all ease-in-out duration-[1s] rounded py-2 px-4 text-white">
                  Get Started
                </button>
                <button className="bg-transparent rounded py-2 px-4 text-second border border-second font-[500] duration-[1s] transition-all ease-in-out hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              {/* <div className="w-full bg-herobgone bg-left-top"></div>
          <div className="w-full bg-herobgtwo bg-right-bottom"></div> */}
              <img
                src={herobgone}
                alt=""
                data-aos="zoom-in-up"
                className="absolute w-60 md:w-80 top-10 -left-20"
              />
              <img src={heroImg} alt="" className="z-10 h-fit" data-aos="zoom-in-up"/>
              <img
                src={herobgtwo}
                alt=""
                data-aos="zoom-in-up"
                className="absolute w-40 md:w-60 right-0 bottom-16 md:bottom-24 z-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="bg-contain bg-white bg-opacity-50 bg-trustaset bg-center bg-no-repeat py-12">
      <div className="container">
        <div className="mx-auto w-full md:w-1/2 py-12">
          <h2 className="text-xl md:text-3xl  text-center font-[600]">
            Trusted by Over 6 Million Traders Across 175+ Countries
          </h2>
        </div>
        <div className="w-full md:w-2/3 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4 md:gap-8 py-4">
                <img src={muzicaImg} alt="" />
                <img src="https://res.cloudinary.com/dr6a80sph/image/upload/v1744201967/kme2fsx6umap7n7yqjmo.png" alt="" />
                <img src="https://res.cloudinary.com/dr6a80sph/image/upload/v1744201966/dk49qlcppaietu9ajriz.png" alt="" />
                <img src="https://res.cloudinary.com/dr6a80sph/image/upload/v1744201966/spbers12bhnqbodetrar.png" alt="" />

        </div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4 md:gap-8 py-4">
                <img src={ideaaImg} alt="" />
                <img src={kanbaImg} alt="" />
                <img src={nirastateImg} alt="" />
                <img src={solayticImg} alt="" />

        </div>
        </div>
      </div>  
      </div>
      
      {/* WHO WE ARE */}
      <div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 md:py-24">
            <div className="col-span-2">
              <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:flex flex-col gap-4 hidden">
                  <img
                    src={aboutusOne}
                    alt=""
                    className="h-[400px] w-[90%] hidden md:block"
                  />
                  <img
                    src={aboutusTwo}
                    alt=""
                    className="h-[100px] w-[90%] hidden md:block"
                  />
                </div>
                <div className="h-[500px] relative">
                  <div className="rounded-full md:w-48 w-32 md:h-48 h-32 absolute md:-top-24 -top-16 right-0 bg-gradient-to-br from-[#0b7c86] to-[#9440a2] hidden md:flex flex-col gap-2 text-center justify-center items-center">
                    <p className="md:text-6xl text-3xl font-[600] text-white">
                      7+
                    </p>
                    <p className="text-white md:text-lg text-md">
                      Years of Experience
                    </p>
                  </div>
                  <img
                    src={wwaImg}
                    alt=""
                    className="w-full md:w-[80%] rounded-lg h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-second font-[500]">WHO WE ARE</p>
              <h3 className="text-3xl font-[600] text-gray-800">
                Leading the Way in Global Trading
              </h3>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, laborum perferendis earum delectus nisi maiores?
              </p>
              <div className="flex flex-col gap-2">
                {weAreData.map((item, index) => (
                  <div key={index} className="flex flex-row gap-1 items-center">
                    <IoCheckmark />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <button className="bg-second text-white px-4 py-2 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trading */}
      <div>
        <div className="bg-statbg bg-cover bg-center text-white">
          <div className="container">
            <div className="py-24">
              <div className="mx-auto border border=white text-center rounded-lg  bg-transparent w-full md:w-1/3 h-56 flex flex-col justify-evenly items-center px-4">
                <h3 className="text-xl md:text-2xl">
                  Start Trading Today and Unlock Your Financial Potential.
                </h3>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <div>
                  <button className="py-1 px-3 rounded-lg bg-second">
                    START TRADING NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 shadow-lg">
          <div className="flex flex-col justify-center items-center py-4 md:py-8">
            <div className="flex flex-row">
              <CountUp
                from={0}
                to={27}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-second text-5xl font-[600]"
              />
              <p className="font-[600] text-second text-5xl">+</p>
            </div>
            <p className="text-center font-[500]">Years of Experience</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <CountUp
                from={0}
                to={29}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-second text-5xl font-[600]"
              />
              <p className="font-[600] text-second text-5xl">K+</p>
            </div>
            <p className="text-center font-[500]">Expert Team</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <CountUp
                from={0}
                to={279}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-second text-5xl font-[600]"
              />
              <p className="font-[600] text-second text-5xl">+</p>
            </div>
            <p className="text-center font-[500]">Project Done</p>
          </div>
          <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row">
            <CountUp
              from={0}
              to={539}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-second text-5xl font-[600]"
            />
            <p className="font-[600] text-second text-5xl">K+</p>
          </div>
          <p className="text-center font-[500]">Happy Client</p>  
          </div>
        </div>
      </div>
      {/* OUR VALUE */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-24">
          <div className="relative">
            <img src={CardAssetsImg} alt="" className="absolute -top-10 z-20 w-48 md:w-auto " data-aos="zoom-out-up"/>
            <img src={ourvalueImg} alt="" data-aos="zoom-out-up"/>
            <img src={TopAset2Img} alt="" className="absolute -bottom-10 -right-10 hidden md:block" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-second font-[500]">OUR VALUE</p>
            <h2 className="text-3xl font-[600]">
              Your Success is Our Priority
            </h2>
            <p className="text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              impedit earum eum quaerat? Officia hic molestiae repellat sequi
              aliquam? Officia.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 justify-start items-start">
                <div className="bg-second p-4 w-fit rounded-full">
                  <SiTransmission color="white" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-[500]">Our Vision</h3>
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    quos porro molestias adipisci corrupti perferendis eligendi.
                    Magni eos cumque animi?
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-start items-start">
                <div className="bg-second p-4 w-fit rounded-full">
                  <SiTransmission color="white" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-[500]">Our Mission</h3>
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    quos porro molestias adipisci corrupti perferendis eligendi.
                    Magni eos cumque animi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT WE OFFER */}
      <div className="bg-[#ededed] py-24">
        <div className="container">
          <div className="flex flex-col gap-1 md:gap-3 pb-8 w-full md:w-1/2 mx-auto">
            <p className="text-center text-second text-lg font-[500]">
              WHAT WE OFFER
            </p>
            <h3 className="text-xl md:text-3xl font-[600] text-center">
              Unlock Financial Success with Strategic Trading
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-0 md:mx-24">
            {wwoData.map((item) => (
              <div
                className="bg-[#ffffff] shadow-lg rounded-lg p-8 flex flex-col gap-2"
                key={item.id}
                data-aos="zoom-out-up"
              >
                <div>
                  <img src={item.img} alt="" className="w-24" />
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="leading-5 text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur libero aliquam saepe quibusdam dolor voluptatum
                  incidunt, sint minus assumenda quia.
                </p>
                <div>
                  <button className="bg-second text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Start trading */}
      <div className="bg-statbg bg-cover bg-center py-20">
        <div className="container">
          <div className="flex flex-col gap-4 border border-white text-white py-6 text-center w-full md:w-1/2 rounded mx-auto justify-center items-center">
            <h3 className="text-3xl">
              Start Trading Today and Unlock Your Financial Potential.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <button className="bg-second text-white rounded px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 mx-auto py-12">
            <h3 className="text-2xl md:text-4xl">Explore Trading Solutions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              reiciendis magnam ullam aperiam tenetur. Veniam quae consequuntur
              quo reiciendis vitae.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-start">
            <div className="flex flex-col gap-4">
              <div
                className={`rounded p-2 cursor-pointer bg-[#ffffff] ${
                  markSet == 0 ? "bg-primary bg-opacity-15" : "bg-[#ffffff]"
                }`}
                onClick={() => setMarkSet(0)}
              >
                <div className="rounded bg-[#ededed] p-2">
                  <div className="flex flex-row items-center">
                    <FaBaby />
                    <p>Foreign Exchange</p>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt tenetur eligendi qui, ex quod minus obcaecati
                    explicabo voluptate repellendus adipisci.
                  </p>
                  <div>
                    <p>Exchange:</p>
                    <div className="flex flex-row items-center">
                      <p className="text-second font-[600] text-sm">EUR/USD,</p>
                      <p>EUR/USD,</p>
                      <p>EUR/USD,</p>
                      <p>ETC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`rounded p-2 cursor-pointer bg-[#ffffff] ${
                  markSet == 1 ? "bg-primary bg-opacity-15" : "bg-[#ffffff]"
                }`}
                onClick={() => setMarkSet(1)}
              >
                <div className="rounded bg-[#ededed] p-2">
                  <div className="flex flex-row items-center">
                    <FaBaby />
                    <p>Stock Market</p>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt tenetur eligendi qui, ex quod minus obcaecati
                    explicabo voluptate repellendus adipisci.
                  </p>
                  <div>
                    <p>Exchange:</p>
                    <div className="flex flex-row items-center">
                      <p className="text-second font-[600] text-sm">EUR/USD,</p>
                      <p>EUR/USD,</p>
                      <p>EUR/USD,</p>
                      <p>ETC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`rounded p-2 cursor-pointer bg-[#ffffff] ${
                  markSet == 2 ? "bg-primary bg-opacity-15" : "bg-[#ffffff]"
                }`}
                onClick={() => setMarkSet(2)}
              >
                <div className="rounded bg-[#ededed] p-2">
                  <div className="flex flex-row items-center">
                    <FaBaby />
                    <p>Cryptocurrency</p>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt tenetur eligendi qui, ex quod minus obcaecati
                    explicabo voluptate repellendus adipisci.
                  </p>
                  <div>
                    <p>Exchange:</p>
                    <div className="flex flex-row items-center">
                      <p className="text-second font-[600] text-sm">EUR/USD,</p>
                      <p>EUR/USD,</p>
                      <p>EUR/USD,</p>
                      <p>ETC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 h-[300px] md:h-full">
              {display[markSet]}
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 justify-center items-center mx-auto">
          <h4 className="font-[600] text-4xl">Explore Our Trading Solutions</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-center py-12 px-0 md:px-8">
            {Explotrade.map((item: any) => (
           <ExploreCard key={item.id} title={item.title} img={item.img}/>   
            ))}
            
          </div>
        </div>
      </div>
      {/* Play Store */}
      <div>
        <div className="container">
          <div className="px-0 md:px-8 pt-24">
        <div className="grid relative grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 bg-[#2f2f2f] text-white  rounded-xl">
            <div className="pl-8">
              
              {/* absolute -top-32  */}
              <img src={playstoreImg} alt="" className="
              w-[550px] mx-auto" />
            </div>
            <div className="flex flex-col gap-8 justify-start items-start">
              <h3 className="text-3xl md:text-5xl">Trade Seamlessly on Any Device, Anytime</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="grid grid-cols-3 justify-center items-center gap-4 me-12">
                {storeappImg.map((item, index) => (
                  <div key={index} className="w-full">
                    <img src={item} alt="" className="w-full"/>
                  </div>
                ))}
              </div>
            </div>
        </div>      
          </div>
        
        </div>
        
      </div>
      {/* Contact Section */}
      <div className="container py-12">
        <div className="w-full md:w-1/2 mx-auto text-center py-12">
          <h3 className="text-2xl font-[500]">Contact Us</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            natus in nesciunt exercitationem repellendus error numquam nostrum
            cumque, maxime eius laudantium quaerat quibusdam? Inventore,
            recusandae!
          </p>
        </div>
        <div className="w-full md:w-2/3 rounded-xl shadow-xl bg-[#ededed] grid grid-cols-1 md:grid-cols-3 mx-auto">
          <form className="p-4 col-span-2" onSubmit={handleForm}>
            <h3 className="py-4 text-xl font-[600]">Send Us a Message</h3>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-[500]">Full Name</label>
                <input
                  type="text"
                  value={fullname}
                  required
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full p-1 outline-none rounded-lg  border-black border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-[500]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-1 outline-1 outline-primary rounded-lg focus:border-primary border-black border"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-[500]">Subject</label>
                <input
                  type="text"
                  value={subject}
                  required
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-1 outline-1 outline-primary rounded-lg focus:border-primary border-black border"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-lg font-[500]">Phone Number</label>
                <input
                  type="number"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-1 outline-1 outline-primary rounded-lg focus:border-primary border-black border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <label className="text-lg font-[500]">Message</label>
              <textarea
                name=""
                id=""
                className="h-60 w-full rounded p-2"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="pt-6 pb-2 float-end">
              <button className="py-2 px-4 text-white bg-primary rounded-lg ">
                {isFmLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
          <div className="bg-primary rounded-tr-xl rounded-br-xl hidden md:block">
            <h2 className="text-center text-white pt-8">Oasis Trade Hub</h2>
          </div>
        </div>
      </div>
      {/* Pricing Section */}
      <div className="bg-[#f5f5f5]">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-start">
            <div>
              <p className="text-second font-[500]">CHOOSE YOUR PACKAGE</p>
              <p>Tailored Pricing for Your Financial Goals</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                quia sit accusamus tenetur, cum sed praesentium veniam officia
                saepe, eveniet voluptate fugit in harum eligendi.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 py-12">
            <div className="bg-[#ffffff] flex flex-col gap-4 my-12 p-8 text-center">
              <h2 className="text-2xl font-[600]">Starter Package</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                aut saepe illo?
              </p>
              <hr />
              <div className="flex flex-row gap-1 mx-auto">
                <h4 className="text-second text-5xl font-[500]">$49</h4>
                <p>/month</p>
              </div>
              <hr />
              <p>Features</p>
              <ul className="flex flex-col gap-4">
                <li>All Starter Package Features</li>
                <li>Basic Risk Management Tools </li>
                <li>Quarterly Portfolio Review</li>
                <li>24/7 Customer Support</li>
                <li>Monthly Portfolio Review</li>
              </ul>
              <button className="w-full py-2 rounded bg-second text-white">
                Get Started
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#0b7c86] to-[#9440a2] rounded text-white flex flex-col gap-4 px-8 py-16 text-center">
              <h2 className="text-2xl font-[600]">Starter Package</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                aut saepe illo?
              </p>
              <hr />
              <div className="flex flex-row gap-1 mx-auto">
                <h4 className="text-white text-5xl font-[500]">$49</h4>
                <p>/month</p>
              </div>
              <hr />
              <p>Features</p>
              <ul className="flex flex-col gap-4">
                <li>All Starter Package Features</li>
                <li>Basic Risk Management Tools </li>
                <li>Quarterly Portfolio Review</li>
                <li>24/7 Customer Support</li>
                <li>Monthly Portfolio Review</li>
              </ul>
              <button className="w-full py-2 rounded border border-white bg-transparent text-white">
                Get Started
              </button>
            </div>
            <div className="bg-[#ffffff] flex flex-col gap-4 my-12 p-8 text-center">
              <h2 className="text-2xl font-[600]">Starter Package</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                aut saepe illo?
              </p>
              <hr />
              <div className="flex flex-row gap-1 mx-auto">
                <h4 className="text-second text-5xl font-[500]">$49</h4>
                <p>/month</p>
              </div>
              <hr />
              <p>Features</p>
              <ul className="flex flex-col gap-4">
                <li>All Starter Package Features</li>
                <li>Basic Risk Management Tools </li>
                <li>Quarterly Portfolio Review</li>
                <li>24/7 Customer Support</li>
                <li>Monthly Portfolio Review</li>
              </ul>
              <button className="w-full py-2 rounded bg-second text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimontials */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="flex flex-col gap-2">
            <p className="text-primary font-[500]">TESTIMONIALS</p>
            <h3 className="text-3xl font-[600]">Our Clients Reviews</h3>
            <p className="font-[500]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae harum quas exercitationem alias et pariatur nam fuga
              nobis esse vel!
            </p>
            <div>
              <button className="bg-primary py-2 px-6 text-white rounded-xl">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <div className="h-80 relative hidden md:block mx-auto">
              <Carousel
                baseWidth={500}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePg;
