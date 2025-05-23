import { createContext, useState } from "react";
import { CurrencyStakePg, StakingData, StockStakePg } from "../utils/AppData";

export const StakeContext = createContext<any>(null);

export const StakeProvider = ({ children }: any) => {
  const [allStakings, setAllStakings] = useState([]);
  const [stakeSection, setStakeSection] = useState<any>(0)

  // Staking (Crypto)
  const [inputStkCrypto, setInputStkCrypto] = useState("");
  const handleStkCrypto = (e: any) => {
    setInputStkCrypto(e.target.value);
  };
  const filteredStkCrypto = StakingData.filter(
    (filtCrypto) =>
      filtCrypto.coin
        .toLocaleLowerCase()
        .indexOf(inputStkCrypto.toLocaleLowerCase()) !== -1
  );

  console.log("allstaked", allStakings);

  // Staking (Stock);
  const [inputStkStock, setInputStkStock] = useState("");
  const handleStkStock = (e: any) => {
    setInputStkStock(e.target.value);
  };
  const filteredStkStock = StockStakePg.filter(
    (filtStock) =>
      filtStock.stock
        .toLocaleLowerCase()
        .indexOf(inputStkStock.toLocaleLowerCase()) !== -1
  );

  // Staking (Currency)
  const [inputStkCurrency, setInputStkCurrency] = useState("");
  const handleStkCurrency = (e: any) => {
    setInputStkCurrency(e.target.value);
  };
  const filteredStkCurrency = CurrencyStakePg.filter(
    (filtCurrency) =>
      filtCurrency.name
        .toLocaleLowerCase()
        .indexOf(inputStkCurrency.toLocaleLowerCase()) !== -1
  );

  return (
    <StakeContext.Provider
      value={{
        allStakings,
        setAllStakings,
        stakeSection,
        setStakeSection,
        inputStkCrypto,
        handleStkCrypto,
        filteredStkCrypto,
        inputStkCurrency,
        handleStkCurrency,
        filteredStkCurrency,
        inputStkStock,
        handleStkStock,
        filteredStkStock,
      }}
    >
      {children}
    </StakeContext.Provider>
  );
};
