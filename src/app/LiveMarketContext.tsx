import { createContext, useState } from "react";
import { MktCryptoData, MktForexData, MktStockData } from "../utils/AppData";

export const LiveMarketContext = createContext<any>(null);

export const LiveMarketProvider = ({ children }: any) => {
  const [allTrades, setAllTrades] = useState<any>([]);
  const [section, setSection] = useState<any>(0);


  // Add to Market
  // const addToMarket = () => {
    // setAllTrades(allTrades.push())
  // }

  console.log("allTrades", allTrades)

  // Live Market (Crypto)
  const [inputMktQuery, setInputMktQuery] = useState("");
  const handleMktCrypto = (e: any) => {
    setInputMktQuery(e.target.value);
  };
  const filteredMktCrypto = MktCryptoData.filter(
    (filtMCypt) =>
      filtMCypt.coin
        .toLocaleLowerCase()
        .indexOf(inputMktQuery.toLocaleLowerCase()) !== -1
  );

  // Live Market (Stock)
  const [inputMktStock, setInputMktStock] = useState("");
  const handleMktStock = (e: any) => {
    setInputMktStock(e.target.value);
  };
  const filteredMktStock = MktStockData.filter(
    (filtMStock) =>
      filtMStock.stock
        .toLocaleLowerCase()
        .indexOf(inputMktStock.toLocaleLowerCase()) !== -1
  );

  // Live Market (Forex)
  const [inputMktForex, setInputMktForex] = useState("");
  const handleMktForex = (e: any) => {
    setInputMktForex(e.target.value);
  };
  const filteredMktForex = MktForexData.filter(
    (filtMForex) =>
      filtMForex.currency
        .toLocaleLowerCase()
        .indexOf(inputMktForex.toLocaleLowerCase()) !== -1
  );

  return (
    <LiveMarketContext.Provider
      value={{
        section,
        setSection,
        allTrades,
        setAllTrades,
        inputMktQuery,
        handleMktCrypto,
        filteredMktCrypto,
        inputMktForex,
        handleMktForex,
        filteredMktForex,
        inputMktStock,
        handleMktStock,
        filteredMktStock
      }}
    >
      {children}
    </LiveMarketContext.Provider>
  );
};
