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
import {  ForexTdChart, StockTdChart } from './MarketPg/components'

const UserRoutes = () => {
  return (
    <UserNavLinks>
        <Routes>
            <Route path='markets' element={<MarketPg />} />
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
            <Route path='verification' element={<VerificationPg />} />
            <Route path='update-wallet' element={<UpdateWalletPg />} />
            <Route path='markets/trade/crypto/:coin/:obj' element={<TradeChartPg />} />
            <Route path='markets/trade/stock/:coin/:obj' element={<StockTdChart />} />
            <Route path='markets/trade/forex/:currency/:obj' element={<ForexTdChart />} />
        </Routes>
    </UserNavLinks>
  )
}

export default UserRoutes