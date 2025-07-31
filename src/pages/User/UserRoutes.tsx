import { Route, Routes } from 'react-router-dom'
import StakePg from './StakePg/StakePg'
import MarketPg from './MarketPg/MarketPg'
import UserNavLinks from './UserNavLinks'
import AccountPg from './AccountPg/AccountPg'
import DashbaordPg from './DashboardPg/DashbaordPg'
import DepositPg from './DepositPg/DepositPg'
import HistoryPg from './HistoryPg/HistoryPg'
import PurchaseCryptoPg from './PurchaseCryptoPg/PurchaseCryptoPg'
import SubscriptionPg from './SubscriptionPg/SubscriptionPg'
import SupportPg from './SupportPg/SupportPg'
import TradExpertPg from './TradExpertPg/TradExpertPg'
import WithdrawPg from './WithdrawPg/WithdrawPg'
import VerificationPg from './VerificationPg/VerificationPg'
import TradeChartPg from './MarketPg/components/TradeChartPg'
import UpdateWalletPg from './WithdrawPg/UpdateWalletPg'
import {  ForexCompon, ForexTdChart, MyTradeCompon, StockCompon, StockTdChart } from './MarketPg/components'
import WithdrawBankTransfer from './WithdrawPg/WithdrawBankTransfer'
import WithdrawCrypto from './WithdrawPg/WithdrawCrypto'
import WithdrawPaid from './WithdrawPg/WithdrawProcessing'

const UserRoutes = () => {

  return (
    <div>


      <UserNavLinks>
        <Routes>
            <Route path='markets/crypto' element={<MarketPg />} />
            <Route path='markets/stock' element={<StockCompon />} />
            <Route path='markets/forex' element={<ForexCompon />} />
            <Route path='markets/mytrades' element={<MyTradeCompon />} />
            <Route path='stake' element={<StakePg />} />
            <Route path='account' element={<AccountPg />} />
            <Route path='dashboard' element={<DashbaordPg />} />
            <Route path='deposit' element={<DepositPg />} />
            <Route path='history' element={<HistoryPg />} />
            <Route path='purchase-crypto' element={<PurchaseCryptoPg />} />
            <Route path='subscriptions' element={<SubscriptionPg />} />
            <Route path='support' element={<SupportPg />} />
            <Route path='experts' element={<TradExpertPg />} />
            <Route path='withdraw' element={<WithdrawPg />} />
            <Route path='withdraw-banktf' element={<WithdrawBankTransfer />} />
            <Route path='withdraw-crypto' element={<WithdrawCrypto />} />
            <Route path='withdraw-processing' element={<WithdrawPaid />} />
            <Route path='verification' element={<VerificationPg />} />
            <Route path='update-wallet' element={<UpdateWalletPg />} />
            <Route path='markets/trade/crypto/:coin/:obj' element={<TradeChartPg />} />
            <Route path='markets/trade/stock/:coin/:obj' element={<StockTdChart />} />
            <Route path='markets/trade/forex/:currency/:obj' element={<ForexTdChart />} />
        </Routes>
    </UserNavLinks>
    </div>
    
  )
}

export default UserRoutes