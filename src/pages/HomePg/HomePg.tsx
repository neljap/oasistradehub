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
  premiummimg,
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

import {
  useEffect,
  useRef,
  // useContext,
  useState,
} from "react";
// import { FaMoon, FaSun } from "react-icons/fa";
// import { DarkLightContext } from "../../app/DarkLightTheme";
import { ExploreCard, Navbar } from "../components";
import { SiTransmission } from "react-icons/si";
// import Carousel from "../components/TestCarousel";
import axios from "axios";
import { IoCheckmark } from "react-icons/io5";
import CountUp from "./components/CountUpCounter";
import { TestyCard } from "../components/TestyCard";
import Footter from "../components/Footter";
import { SubscribeData } from "../../utils/SubscriptData";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
const HomePg = () => {
  // const [changebg, setChangebg] = useState(false);

  // Contact Form

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  // const [markSet, setMarkSet] = useState<any>(0);
  const [isFmLoading, setIsFmLoading] = useState(false);

  const storeappImg = [applestoreImg, gplaystoreImg, microsoftImg]

  const AboutRef = useRef<any>(null)

  const scrollToAbout = () => {
    AboutRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  // Package
  const PackRef = useRef<any>(null)

  const scrollToPack = () => {
    PackRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const TestfyRef = useRef<any>(null)

  const scrollToTestfy = () => {
    TestfyRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const ContactRef = useRef<any>(null)

  const scrollToContact = () => {
    ContactRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const TradeRef = useRef<any>(null)

  const scrollToTrade = () => {
    TradeRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(() => {
          document.title = "Oasis Trade Hub"
  }, [])

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


  const Explotrade = [
    {
      id: 1,
      title: "Forex",
      img: expltradefx,
      text: "Explore our Forex trading solutions—real-time data, low spreads, expert tools, and secure platforms for global currency trading."
    },
    {
      id: 2,
      title: "Cryptocurrency",
      img: expltradecpt,
      text: "Explore our cryptocurrency trading solutions—secure platforms, real-time data, low fees, and expert tools for digital asset trading."
    },
    {
      id: 3,
      title: "Equity",
      img: expltradequit,
      text: "Explore our trading solutions—built on equality, ensuring fair access, opportunities, and tools for every trader to succeed globally."

    },
    {
      id: 4,
      title: "Stock",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201969/j4lplfrn8xhkcd7d2ezs.png",
      text: "Explore our stock trading solutions—real-time insights, diverse markets, advanced tools, and secure platforms for smart equity investments."
    },
    {
      id: 5,
      title: "ETF",
      img: expltradeetf,
      text: "Explore our ETF trading solutions—diversified portfolios, low-cost access, real-time tracking, and smart tools for strategic investment growth."
    },
    {
      id: 6,
      title: "Commodity",
      img: expltradecom,
      text: "Explore our commodity trading solutions—gain access to gold, oil, and more with real-time data, low fees, and security."
    }
  ]

  const wwoData = [
    {
      id: 1,
      title: "Tailored Strategies",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201969/rjlzqyjwx0qixt4tjav1.png",
      text: "We provide personalized trading and investment strategies, designed to meet your unique financial goals and risk tolerance."
    },
    {
      id: 2,
      title: "Advanced Trading Tools",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201966/w7jfvdaki6bfzhrhvcmi.png",
      text: "Our advanced trading tools offer real-time analysis, automation, and customization to enhance your strategic trading decisions and maximize profits."
    },
    {
      id: 3,
      title: "Expert Financial Advice",
      img: wwoImg3,
      text: "Our expert financial advisors provide personalized insights and strategies to help you navigate markets and grow wealth confidently."
    },
    {
      id: 4,
      title: "Robust Risk Management",
      img: wwoImg4,
      text: "We implement robust risk management strategies, protecting your investments through advanced tools and proactive market analysis."
    },
    {
      id: 5,
      title: "Educational Resources",
      img: wwoImg5,
      text: "Our educational resources empower traders with knowledge, helping them develop strategic trading skills for informed decision-making and success."
    },
    {
      id: 6,
      title: "Conprehensive Market Analysis",
      img: wwoImg6,
      text: "Our comprehensive market analysis provides in-depth insights, helping you make informed, strategic decisions in dynamic trading environments."
    },
  ];
  const weAreData = [
    "Experienced Professionals",
    "Client-Focused",
    "Innovative Solutions",
    "Trustworthy & Transparent",
  ];


  return (
    <div>
      <div className="bg-black text-white">
        <div className="">
          <Navbar AboutRef={scrollToAbout} PackRef={scrollToPack} Testfy={scrollToTestfy} ContactRef={scrollToContact} TradeRef={scrollToTrade} />
          {/* Herosection */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-black text-white pt-16 bg-center bg-no-repeat bg-cover">
            <div className="flex flex-col gap-6 px-12 text-center md:text-start">
              <h2 className="text-3xl md:text-5xl font-[600]">
              Smart Trading, Secure Investments, Your Wealth Grows Faster
              </h2>
              <p className="font-[500]">
              Join our trusted trading and investment platform designed for beginners and experts. Access real-time market data, secure transactions, and smart tools to grow your portfolio and achieve financial freedom today.
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
          <div>

    
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
      <div ref={AboutRef}>
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
              <h3 className="text-3xl font-[600] text-gray-800 dark:text-white">
              Passionate Experts Driving Financial Growth Forward
              </h3>
              <p className="text-gray-800 dark:text-white">
              We are a team of passionate financial experts dedicated to empowering individuals through smart trading, investing, and wealth management solutions.
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
        {/* Start trading */}
      <div className="bg-statbg bg-cover bg-center py-20">
        <div className="container">
          <div className="flex flex-col gap-4 border border-white text-white py-6 md:py-12 text-center w-full md:w-1/2 rounded-2xl mx-auto justify-center items-center">
            <h3 className="text-3xl">
              Start Trading Today and Unlock Your Financial Potential.
            </h3>
            <p>
            Begin your trading journey now and discover new opportunities for financial growth, independence, and success. Take control of your future by exploring the power of smart investing today.
            </p>
            <div>
              <button className="bg-second text-white rounded px-4 py-2">
                Get Started
              </button>
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
            <p className="text-gray-800 dark:text-white">
            Our values drive everything we do—integrity, innovation, trust, excellence, growth, and commitment to your financial success.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 justify-start items-start">
                <div className="bg-second p-4 w-fit rounded-full">
                  <SiTransmission color="white" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-[500]">Our Vision</h3>
                  <p className="text-gray-800 dark:text-white">
                  To become the leading platform empowering individuals worldwide to achieve financial freedom through smart trading and investment solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-start items-start">
                <div className="bg-second p-4 w-fit rounded-full">
                  <SiTransmission color="white" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-[500]">Our Mission</h3>
                  <p className="text-gray-800 dark:text-white">
                  Our mission is to deliver secure, innovative, and accessible trading and investment solutions that empower individuals to build lasting wealth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT WE OFFER */}
      <div className="bg-[#ededed] dark:bg-black py-24" ref={TradeRef}>
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
                className="bg-[#ffffff] dark:bg-[#1e1f24] shadow-lg rounded-lg p-8 flex flex-col gap-2"
                key={item.id}
                data-aos="zoom-out-up"
              >
                <div>
                  <img src={item.img} alt="" className="w-24" />
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="leading-5 text-md">
                 {item.text}
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
      
      <div>
        {/* <div className="container">
          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 mx-auto py-12">
            <h3 className="text-2xl md:text-4xl">Explore Trading Solutions</h3>
            <p>
            Explore our comprehensive trading solutions tailored for every investor, offering advanced tools, personalized strategies, and expert insights to help you achieve your financial goals with confidence.
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
                <div className="rounded bg-[#ededed] p-2 flex flex-col gap-2">
                  <div className="flex flex-row items-center">
                    <FaBaby />
                    <p className="font-[500] text-lg md:text-2xl">Foreign Exchange</p>
                  </div>
                  <p className="text-sm">
                  Our foreign exchange services offer real-time market data, advanced tools, and expert insights to help you navigate global currency trading effectively.
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
                <div className="rounded bg-[#ededed] p-2 flex flex-col gap-2">
                  <div className="flex flex-row items-center">
                    <FaBaby />
                    <p className="font-[500] text-lg md:text-2xl">Stock Market</p>
                  </div>
                  <p className="text-sm">
                  Our stock market services provide real-time data, expert analysis, and strategic insights to help you make informed investment decisions.
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
                <div className="rounded bg-[#ededed] p-2 flex flex-col gap-2">
                  <div className="flex flex-row items-center">
                    <FaBaby />
                    <p className="font-[500] text-lg md:text-2xl">Cryptocurrency</p>
                  </div>
                  <p className="text-sm">
                  Our cryptocurrency services offer secure trading, real-time market insights, and expert guidance to help you navigate the digital currency landscape confidently.
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
        </div> */}
        <div className="container py-12">
          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 justify-center items-center mx-auto">
          <h4 className="font-[600] text-4xl">Explore Our Trading Solutions</h4>
          <p>Explore our comprehensive trading solutions tailored for every investor, offering advanced tools, personalized strategies, and expert insights to help you achieve your financial goals with confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-center py-12 px-0 md:px-8">
            {Explotrade.map((item: any) => (
           <ExploreCard key={item.id} title={item.title} img={item.img} text={item.text}/>   
            ))}
            
          </div>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="bg-[#f5f5f5] dark:bg-black" ref={PackRef}>
        <div className="container py-12">
          <div className="w-full md:w-1/2 text-center mx-auto">
          <h4 className="text-2xl font-[600]">Packages</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam a eum doloribus alias, deserunt aspernatur ex fuga labore inventore!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 justify-center items-center gap-8">
            {/* PricingCard */}
            {SubscribeData.map((item) => (
              <div className="rounded-lg shadow flex flex-col justify-start items-center py-4 border-[#7f57f3] border-t-2 w-full bg-white dark:bg-gray-800 h-[530px]" key={item.id}>
              <div className="flex flex-row items-center gap-1">
               <img src={premiummimg} className="w-8" alt="" />
               <p className="font-[500] text-lg md:text-xl">{item.name} Plan</p> 

              </div>
              <div className="mx-auto text-center flex flex-row items-center py-4">
                <span className="font-[600] text-2xl">${item.amount}</span>
                <span>/{item.days}days</span>
              </div>
              <hr />
              <div className="grid grid-cols-2 justify-between items-center ps-12 w-full mx-auto">
                <p className="font-[500] text-start">Min Deposit:</p>
                <p className="text-center font-[600]">{item.amount}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center ps-12 w-full mx-auto">
                <p className="font-[500] text-start">Max Deposit:</p>
                <p className="text-center font-[600]">${item.maxamount}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center ps-12 w-full mx-auto">
                <p className="font-[500] text-start">Return of Interest</p>
                <p className="text-center font-[600]">40%</p>
              </div>
               <div className="flex flex-col gap-3 justify-start items-start py-4">

              {item.list.map((yap: any, index: any) => (
                <div className="flex flex-row items-center gap-2" key={index}>
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">{yap}</p>
                            </div>
              ))}
                          </div>
                          <div className="flex flex-row justify-center items-center">
                            <Link to="/user/dashboard">
              <button className="bg-[#7f57f3] transition-all ease-in-out duration-[1s] hover:bg-white border hover:border-primary hover:text-[#7f57f3] px-4 py-2 rounded-full mx-auto text-white font-[600]">Get Started</button>
                            
                            </Link>
            </div>
            </div>
              // <PricingCard key={item.id} title={item.name} lists={item.list} days="" amount={item.amount} maxamount={item.amount} roi={40}/>
            ))}
            {/* <PricingCard title="Diamond" days="28" amount={30000} maxamount={50000} roi={40}/>
            <PricingCard title="Gold" days="21" amount={15000} maxamount={29999} roi={40}/>
            <PricingCard title="Silver" days="14" amount={5000} maxamount={14999} roi={40}/>
            <PricingCard title="Bronze" days="7" amount={1000} maxamount={4999} roi={40}/> */}
            {/* <div className="rounded-lg shadow flex flex-col justify-center items-center py-4 border-[#7f57f3] border-t-2 w-full">
              <div className="flex flex-row items-center gap-1">
               <img src={premiummimg} className="w-8" alt="" />
               <p className="font-[500] text-lg md:text-xl">Premium Plan</p> 

              </div>
              <div className="mx-auto text-center flex flex-row items-center py-4">
                <span className="font-[600] text-2xl">$10,000</span>
                <span>/14days</span>
              </div>
              <hr />
               <div className="flex flex-col gap-3 justify-start items-start py-4">

              <div className="flex flex-row items-start gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <VscVerifiedFilled />
                              <p className="font-[500] text-sm">99.5% AI accuracy24/7</p>
                            </div>

                          </div>
                          <div className="flex flex-row justify-center items-center">
              <button className="bg-[#7f57f3] transition-all ease-in-out duration-[1s] hover:bg-opacity-20 border hover:border-primary hover:text-[#7f57f3] px-4 py-2 rounded-full mx-auto text-white font-[600]">Get Started</button>
            </div>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="container py-12" ref={ContactRef}>
        <div className="w-full md:w-1/2 mx-auto text-center py-12">
          <h3 className="text-2xl font-[500]">Contact Us</h3>
          <p className="text">
          Our support team is ready to assist you with trading inquiries, solutions, and personalized guidance anytime.
          </p>
        </div>
        <div className="w-full md:w-2/3 rounded-xl shadow-xl bg-[#ededed] dark:bg-[#222736] grid grid-cols-1 md:grid-cols-3 mx-auto">
          <form className="p-4 col-span-2" onSubmit={handleForm}>
            <h3 className="py-4 text-xl font-[600]">Send Us a Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 pt-1 md:pt-2">
              <div className="flex flex-col gap-0 md:gap-1">
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
                  className="w-full p-1 outline-1 shadow outline-none rounded-lg border-black border"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 pt-1 md:pt-2">
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
                  className="w-full p-1 outline-none rounded-lg border-black border shadow"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <label className="text-lg font-[500]">Message</label>
              <textarea
                name=""
                id=""
                className="h-60 w-full rounded-lg p-2 shadow outline-none border-black border"
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
     {/* Testimontials */}
      <TestyCard /> 
      {/* Play Store */}
      <div>
        <div className="container">
          <div className="px-0 md:px-8 py-24">
        <div className="grid relative  grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-8 bg-[#2f2f2f] text-white  rounded-xl">
            <div className="pl-8">
              
              {/* absolute -top-32  */}
              <img src={playstoreImg} alt="" className="
              w-[550px] mx-auto" />
            </div>
            <div className="flex flex-col gap-2 md:gap-8 justify-start items-start">
              <h3 className="text-3xl md:text-5xl text-center md:text-start">Trade Seamlessly on Any Device, Anytime</h3>
              <p className="text-md md:text-xl text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="grid grid-cols-3 justify-center items-center gap-4 me-12 mx-auto ps-6">
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

      
      {/* <div className="container py-12" ref={TestfyRef}>
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
      </div> */}
      <Footter />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePg;
