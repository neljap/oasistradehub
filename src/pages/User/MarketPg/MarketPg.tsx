import { CryptoCompon} from "./components"
import {  useEffect} from "react"

const MarketPg = () => {


  useEffect(() => {
          document.title = "Oasis Trade Home | Live Market"
        }, [])

  

  return (
    <div>
<CryptoCompon />
    </div>
    
  )
}

export default MarketPg