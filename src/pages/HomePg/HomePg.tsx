import {
  alogoimg,
  applestoreImg,
  CardAssetsImg,
  expltradecom,
  expltradecpt,
  expltradeetf,
  expltradefx,
  expltradequit,
  gplaystoreImg,
  herobgone,
  herobgtwo,
  heroImg,
  istockman,
  mastercardimg,
  metamaskimg,
  microsoftImg,
  okxlogoimg,
  ourvalueImg,
  paypalimg,
  playstoreImg,
  premiummimg,
  TopAset2Img,
  trustwallimg,
  uniswapimg,
  universalimg,
  wwaImg,
  wwoImg3,
  wwoImg4,
  wwoImg5,
  wwoImg6,
} from "../../assets";
import {Triangle} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
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
import { GetStarted } from "../User/ui";
import { FaAngleDown, FaAngleUp, FaHeart, FaPeopleGroup } from "react-icons/fa6";
import { FcLineChart } from "react-icons/fc";
import { HiSpeakerphone } from "react-icons/hi";
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
  // FAQ TOGGLE
  const [faqTog, setFaqTog] = useState(false);
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
      const res = await axios.post("https://oaserver.onrender.com/api/user/contact", {fullname, email, phone, message, subject});
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
      text: "Explore our Forex trading solutions—real-time data, low spreads, expert tools, and secure platforms for global currency trading.",
      pairs: ["EUR/USD,", "USD/JPY,", "GPB/USD,", "ETC"]
    },
    {
      id: 2,
      title: "Cryptocurrency",
      img: expltradecpt,
      text: "Explore our cryptocurrency trading solutions—secure platforms, real-time data, low fees, and expert tools for digital asset trading.",
      pairs: ["BTC/USDT,", "ETH/USDT,", "LTC/USDT,", "ETC"]
    },
    {
      id: 3,
      title: "Equity",
      img: expltradequit,
      text: "Explore our trading solutions—built on equality, ensuring fair access, opportunities, and tools for every trader to succeed globally.",
      pairs: ["AAPL/EUR,", "TSLA/USD,", "AAPL/USD,", "ETC"]
    },
    {
      id: 4,
      title: "Stock",
      img: "https://res.cloudinary.com/dr6a80sph/image/upload/v1744201969/j4lplfrn8xhkcd7d2ezs.png",
      text: "Explore our stock trading solutions—real-time insights, diverse markets, advanced tools, and secure platforms for smart equity investments.",
      pairs: ["KO/PEP","AAPL/EUR,", "AAPL,", "ETC"]
    },
    {
      id: 5,
      title: "ETF",
      img: expltradeetf,
      text: "Explore our ETF trading solutions—diversified portfolios, low-cost access, real-time tracking, and smart tools for strategic investment growth.",
      pairs: ["SPY/USD,","EWJ/JPY,", "VTI/USD,", "ETC"]
    },
    {
      id: 6,
      title: "Commodity",
      img: expltradecom,
      text: "Explore our commodity trading solutions—gain access to gold, oil, and more with real-time data, low fees, and security.",
      pairs: ["	XAU/USD","XAG/USD,", "BRENT/USD,", "ETC"]
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
        <div className="" id="home">
          <Navbar AboutRef={scrollToAbout} PackRef={scrollToPack} Testfy={scrollToTestfy} ContactRef={scrollToContact} TradeRef={scrollToTrade} />
          {/* Herosection */}
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-black text-white pt-16 bg-center bg-no-repeat bg-cover w-full">
            <div className="flex flex-col gap-6 px-4 md:px-12 text-center md:text-start">
              <h2 className="text-3xl md:text-5xl font-[600]">
              Smart Trading, Secure Investments, Your Wealth Grows Faster
              </h2>
              <p className="font-[500]">
              Join our trusted trading and investment platform designed for beginners and experts. Access real-time market data, secure transactions, and smart tools to grow your portfolio and achieve financial freedom today.
              </p>
              <div className="grid grid-cols-1 md:flex md:flex-row gap-2 md:gap-6 items-center justify-center mx-auto md:ms-0">
                <GetStarted getklass="bg-white border-primary text-primary" />
              </div>
            </div>
            <div className="relative">
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
          {/* TestScroll */}
      <div className="overflow-hidden bg-black flex">
              <ul className="flex gap-10  text-white py-4 animate-infinite-scroll">
                {[...stocks, ...stocks].map((stock) => {
                  const priceIncrease = stock.priceChange > 0 

                  return(
                  <li className="flex gap-2 items-center">
                    <p className="text-gray-300">{stock.ticker}</p>
                    <p className="text-gray-300">{stock.price}</p>
                    <Triangle fill="white" className={`size-3 ${!priceIncrease && "rotate-180"}`}/>
                    <p className={`${priceIncrease ? "text-green-500" : "text-red-500"}`}>{stock.priceChange}</p>
                    <p className={`${priceIncrease ? "text-green-500" : "text-red-500"}`}>{stock.percentChange}</p>
                    
                  </li>
                )})}
              </ul>
      </div>
    
          </div>
        </div>
      </div>
      {/* WHO WE ARE */}
      <div ref={AboutRef} id="about">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 py-12 md:py-24">
            <div className="">
              <div>
                <div className="h-[500px] relative">
                  <img
                    src={wwaImg}
                    alt=""
                    className="w-full rounded-lg h-full object-cover"
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
              <div className="rounded-full md:w-48 w-32 md:h-48 h-32 bg-gradient-to-br from-[#0b7c86] to-[#9440a2] hidden md:flex flex-col gap-2 text-center justify-center items-center">
                    <p className="md:text-4xl text-3xl font-[600] text-white font-[Jost]">
                      14+
                    </p>
                    <p className="text-white md:text-md text-lg font-[500]">
                      Years of Experience
                    </p>
                  </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR VALUE */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center py-24">
          
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
          <div className="relative">
            <img src={CardAssetsImg} alt="" className="absolute -top-10 z-20 w-48 md:w-auto " data-aos="zoom-out-up"/>
            <img src={ourvalueImg} alt="" data-aos="zoom-out-up"/>
            <img src={TopAset2Img} alt="" className="absolute -bottom-10 -right-10 hidden md:block" />
          </div>
        </div>
      </div>
      {/* Trading */}
      <div>
        {/* Start trading */}
      <div className=" relative bg-neutral-900 h-[600px] w-full">
      <img src={istockman} alt="" className="w-full absolute h-full object-cover mix-blend-overlay"/>
        <div className=" flex justify-center items-center pt-28">
<div className="container text-white">
          <div className="flex flex-col gap-4 border border-white text-white py-6 md:py-12 text-center w-full md:w-1/2 rounded-2xl mx-auto justify-center items-center">
            <h3 className="text-3xl">
              Start Trading Today and Unlock Your Financial Potential.
            </h3>
            <p>
            Begin your trading journey now and discover new opportunities for financial growth, independence, and success. Take control of your future by exploring the power of smart investing today.
            </p>
            <div>
              <GetStarted getklass="bg-transparent" />
            </div>
          </div>
        </div>
        </div>
        
      </div>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 shadow-lg">
          <div className="flex flex-col justify-center items-center py-4 md:py-8">
            <div>
              <FcLineChart className="text-5xl" />
            </div>
            <div className="flex flex-row">

              <CountUp
                from={0}
                to={310}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-second md:text-4xl text-lg font-[600]"
              />
              <p className="font-[600] text-second text-4xl">+</p>
            </div>
            <p className="text-center font-[500]">SUCCESSFUL TRADES</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
             <FaPeopleGroup className="text-5xl" /> 
            </div>
            
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
            <p className="text-center font-[500]">HAPPY CLIENT</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <HiSpeakerphone className="text-2xl md:text-4xl" />
            </div>
            <div className="flex flex-row">
              <CountUp
                from={0}
                to={14}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-second text-4xl font-[600]"
              />
              <p className="font-[600] text-second text-4xl">+</p>
            </div>
            <p className="text-center font-[500]">YEARS OF EXPERIENCE</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <FaHeart className="text-4xl" />
            </div>
          <div className="flex flex-row">
            
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-second text-4xl font-[600]"
            />
            <p className="font-[600] text-second text-4xl">%</p>
          </div>
          <p className="text-center font-[500]">CLIENT SATIFASTION</p>  
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

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div id="trading">
        <div className="container py-12">
          <div className="w-full md:w-1/2 text-center flex flex-col gap-4 justify-center items-center mx-auto">
          <h4 className="font-[600] text-4xl">Explore Our Trading Solutions</h4>
          <p>Explore our comprehensive trading solutions tailored for every investor, offering advanced tools, personalized strategies, and expert insights to help you achieve your financial goals with confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-center items-center py-12 px-0 md:px-8">
            {Explotrade.map((item: any) => (
           <ExploreCard key={item.id} title={item.title} img={item.img} text={item.text} pairs={item.pairs}/>   
            ))}
            
          </div>
        </div>
      </div>
            {/* Trusted Section */}
      <div className="shadow-xl bg-neutral-50  py-4" id="partners">
      <div className="container">
    
          <h2 className="text-xl md:text-3xl  text-center font-[600]">
            Trusted by
          </h2>
        <div>
          {window.innerWidth > 767 ? (
            <div className="grid md:grid-cols-8 grid-cols-4 px-8 justify-center items-center gap-8 ">
          <img src={metamaskimg} alt="" />
          <img src={paypalimg} alt="" />
          <img src={trustwallimg} alt="" />
          <img src={universalimg} alt="" />
          <img src={mastercardimg} alt="" />
          <img src={okxlogoimg} alt="" />
          <img src={alogoimg} alt="" />
          <img src={uniswapimg} alt="" />
        </div>
          ): (
            <div className="w-full overflow-hidden flex">
        <div className="flex justify-center items-center gap-4 animate-infinite-scroll-img">
          <img src={metamaskimg} alt="" />
          <img src={paypalimg} alt="" />
          <img src={trustwallimg} alt="" />
          <img src={universalimg} alt="" />
          <img src={mastercardimg} alt="" />
          <img src={okxlogoimg} alt="" />
          <img src={alogoimg} alt="" />
          <img src={uniswapimg} alt="" />
        </div>
        </div>
          )}
        </div>
        
      </div>  
      </div>
      
      {/* Pricing Section */}
      <div className="bg-[#f5f5f5] dark:bg-black" ref={PackRef} id="packages">
        <div className="container py-12">
          <div className="w-full md:w-1/2 text-center mx-auto">
          <h4 className="text-2xl font-[600]">Packages</h4>
          <p>Choose from flexible trading packages designed to fit your goals, risk tolerance, and budget—unlock advanced tools, expert support, and maximize your market potential today</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 justify-center items-center gap-8">
            {/* PricingCard */}
            {SubscribeData.map((item) => (
              <div className={`rounded-lg shadow flex flex-col justify-start items-center py-4 border-t-4 ${item.id == 1 ? "border-primary" : item.id == 2 ? "border-[#000]" : item.id == 3 ? "border-red-700" : "border-yellow-500"} border-t-2 w-full bg-white dark:bg-gray-800 h-[530px]`} key={item.id}>
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
                <p className="text-center font-[600]">${item.amount}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center ps-12 w-full mx-auto">
                <p className="font-[500] text-start">Max Deposit:</p>
                <p className="text-center font-[600]">${item.maxamount}</p>
              </div>
              <div className="grid grid-cols-2 justify-between items-center ps-12 w-full mx-auto">
                <p className="font-[500] text-start">Return of Interest</p>
                <p className="text-center font-[600]">{item.roi}%</p>
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
                            <GetStarted getklass="bg-transparent border-[#7f57f3] text-[#7f57f3]" />
                            {/* <Link to="/user/dashboard">
              <button className="bg-[#7f57f3] transition-all ease-in-out duration-[1s] hover:bg-white border hover:border-primary hover:text-[#7f57f3] px-4 py-2 rounded-full mx-auto text-white font-[600]">Get Started</button>
                            
                            </Link> */}
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
      
      
     {/* Testimontials */}
     <div id="testimonials">
      <TestyCard /> 
     </div>
      
      {/* FAQ */}
      <div className="container" id="faq">
     <div
    className="relative w-full bg-white pt-10 pb-8 mt-4 ">
    <div className="mx-auto w-full px-0 md:px-12">
        <div className="flex flex-col items-center w-full md:w-1/2 mx-auto">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="text-center text-lg md:text-xl font-[500] py-2">Have <span className="text-primary">questions?</span>  We've got the <span className="text-primary">answers</span>  you need.</p>
            {/* <p className="mt-3 text-lg text-neutral-500 md:text-xl text-center">Experience unmatched service excellence with a team devoted to surpassing your expectations. From arrival, enjoy a refined, welcoming atmosphere shaped around your needs and preferences. </p> */}
        </div>
        <div className="mx-auto mt-4 grid gap-4 md:gap-8 justify-start items-center grid-cols-1 md:grid-cols-2">
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How can I get started with your platform?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Getting started is easy—just register on our website and complete the onboarding steps. You’ll then unlock full access to all our platform’s features and tools.

                    </p>
                </details>
            </div>
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> What payment methods do you support?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We support a variety of payment methods, including credit cards, bank transfers, and popular digital wallets such as PayPal and Stripe.
                    </p>
                </details>
            </div>
        </div>
        <div className="mx-auto mt-4 grid gap-4 md:gap-8 justify-start items-center grid-cols-1 md:grid-cols-2">
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Are my funds safe with your platform?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Absolutely. We take security seriously and have implemented robust measures to ensure the safety of your funds. Your account is protected by advanced encryption and authentication protocols.
                    </p>
                </details>
            </div>
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Do you provide customer support?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we offer 24/7 customer support via email, live chat, and phone. Our dedicated support team is ready to assist you with any questions or issues you may have.
                    </p>
                </details>
            </div>
        </div>
        <div className="mx-auto mt-4 grid gap-4 md:gap-8 justify-start items-center grid-cols-1 md:grid-cols-2">
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> How can I withdraw my profits?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Withdrawing your profits is easy. Simply navigate to the withdrawal section in your account dashboard and follow the instructions to initiate a withdrawal. Your funds will be transferred to your designated bank account or payment method.
                    </p>
                </details>
            </div>
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Is there a minimum deposit amount?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, there is a minimum deposit amount required to open an account. The specific minimum deposit requirement will be mentioned during the account registration process.
                    </p>
                </details>
            </div>
        </div>
        {!faqTog && (<div className="mx-auto flex flex-col items-center justify-center pt-4">
          <button className="px-2 flex justify-center items-center gap-2 font-[Jost] font-[600]" onClick={() => setFaqTog(!faqTog)}>See More <FaAngleDown /></button>
        </div>)}
        
        {faqTog && (
        <div >
          <div className="mx-auto mt-4 grid gap-4 md:gap-8 justify-start items-center grid-cols-1 md:grid-cols-2">
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Are there any trading fees?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we charge trading fees based on the specific financial instruments and trading activities. The fee structure is transparent and can be found on our website. We strive to provide competitive and fair pricing for our traders.
                    </p>
                </details>
            </div>
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Can I use automated trading strategies?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes, we support automated trading strategies through the use of API integration. Traders can connect their preferred trading bots or algorithmic trading systems to our platform for seamless automated trading.
                    </p>
                </details>
            </div>
        </div>
        <div className="mx-auto mt-4 grid gap-4 md:gap-8 justify-start items-center grid-cols-1 md:grid-cols-2">
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>What trading tools do you offer?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a comprehensive range of trading tools, including advanced charting, technical analysis indicators, real-time market data, and trade execution features. These tools are designed to assist traders in making informed decisions and maximizing their trading potential.
                    </p>
                </details>
            </div>
            <div className="py-2">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>What should I do if I forgot my password?</span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you forgot your password, you can click on the "Forgot Password" link on the login page. Follow the instructions to reset your password and regain access to your account.
                    </p>
                </details>
            </div>
        </div>
        <div className="mx-auto flex flex-col items-center justify-center pt-4">
          <button className="px-2 flex justify-center items-center gap-2 font-[Jost] font-[600]" onClick={() => setFaqTog(!faqTog)}>See Less <FaAngleUp /></button>
        </div>
        </div>  
        )}
        
    </div>
</div>   
      </div>
      {/* Contact Section */}
      <div className="container py-12" ref={ContactRef} id="contact">
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
            <h2 className="text-center text-white pt-8 text-2xl">Oasis Trade Hub</h2>
            <div className="ps-4">
              <div className="mx-auto pt-24">
                <div className="space-y-8">
                        <div className="flex items-center gap-4 group min-w-fit">
                            <div className="bg-blue-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="w-fit">
                                <p className="text-white font-[600]">Email</p>
                                <p className="text-white text-sm">oasistradehub@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 group">
                            <div className="bg-green-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-[600]">Phone</p>
                                <p className=" text-sm text-white">+1 (585) 612-1730</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4 group">
                            <div className="bg-red-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-white font-[600]">Location</p>
                                <p className="text-white text-sm">109th street. cleveland, ohio. united states</p>
                            </div>
                        </div>
                        
                        {/* <div className="flex items-center gap-4 group">
                            <div className="bg-purple-900 p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-400">Calendly</p>
                                <a href="#" className="text-blue-400 hover:underline">Schedule a meeting with Me</a>
                            </div>
                        </div> */}
                    </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
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
              <h3 className="text-2xl md:text-5xl text-center md:text-start">Trade Seamlessly on Any Device, Anytime</h3>
              <p className="text-md md:text-xl text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="grid grid-cols-3 justify-center items-center gap-4 me-12 ps-6 pb-8 md:pb-0">
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



const stocks = [
  { ticker: "AAPL", price: 191.34, priceChange: 1.56, percentChange: 0.82 },
  { ticker: "MSFT", price: 418.25, priceChange: -2.35, percentChange: -0.56 },
  { ticker: "GOOGL", price: 178.90, priceChange: 0.95, percentChange: 0.53 },
  { ticker: "AMZN", price: 183.70, priceChange: -1.02, percentChange: -0.55 },
  { ticker: "TSLA", price: 174.55, priceChange: 3.20, percentChange: 1.87 },
  { ticker: "NVDA", price: 1124.12, priceChange: -15.62, percentChange: -1.37 },
  { ticker: "META", price: 471.23, priceChange: 4.10, percentChange: 0.88 },
  { ticker: "NFLX", price: 641.50, priceChange: -7.25, percentChange: -1.12 },
  { ticker: "AMD", price: 164.00, priceChange: 2.50, percentChange: 1.55 },
  { ticker: "INTC", price: 30.48, priceChange: -0.74, percentChange: -2.37 },
  { ticker: "BA", price: 178.35, priceChange: 0.65, percentChange: 0.37 },
  { ticker: "JPM", price: 199.10, priceChange: 1.25, percentChange: 0.63 },
  { ticker: "V", price: 275.89, priceChange: -0.40, percentChange: -0.14 },
  { ticker: "MA", price: 454.73, priceChange: 3.12, percentChange: 0.69 },
  { ticker: "DIS", price: 102.23, priceChange: 0.85, percentChange: 0.84 },
  { ticker: "UBER", price: 68.45, priceChange: -1.10, percentChange: -1.58 },
  { ticker: "CRM", price: 261.42, priceChange: 2.60, percentChange: 1.01 },
  { ticker: "ORCL", price: 123.33, priceChange: -0.98, percentChange: -0.79 },
  { ticker: "PYPL", price: 65.20, priceChange: 0.20, percentChange: 0.31 },
  { ticker: "SHOP", price: 63.80, priceChange: -0.60, percentChange: -0.93 }
];

