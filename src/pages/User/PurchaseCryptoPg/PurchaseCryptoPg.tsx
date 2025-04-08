import { binancelogo, bitsologo, coinbaselogo, moonpaylogo } from "../../../assets"
import PurCard from "./PurCard"


const PurchaseCryptoPg = () => {

  const PurcryData = [
    {
      id: 1,
      name: "Moonpay",
      link: "https://moonpay.com",
      color: "#7b00ff",
      img: moonpaylogo
    },
    {
      id: 2,
      name: "Binance",
      link: "https://binanace.com",
      color: "#eab62c",
      img: binancelogo
    },
    {
      id: 3,
      name: "Coinbase",
      link: "https://coinbase.com",
      color: "#0052fe",
      img: coinbaselogo
    },
    {
      id: 4,
      name: "Bitso",
      link: "https://bitso.com",
      color: "#000000",
      img: bitsologo
    }
  ]

  return (
    <div>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-center gap-8">
            {PurcryData.map((item) => (
              <PurCard key={item.id} name={item.name} link={item.link} color={item.color} img={item.img}/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default PurchaseCryptoPg