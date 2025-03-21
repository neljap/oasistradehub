import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from 'next-themes';
import { DarkLightProvider } from './app/DarkLightTheme.tsx'
import { AuthProvider } from './app/AuthContext.tsx';
import { LiveMarketProvider } from './app/LiveMarketContext.tsx';
import { StakeProvider } from './app/StakeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
    <DarkLightProvider>
      <AuthProvider>
        <LiveMarketProvider>
          <StakeProvider>
            <App />  
          </StakeProvider>
          
        </LiveMarketProvider>
       
      </AuthProvider>
     
    </DarkLightProvider>  
    </ThemeProvider>
      
  </StrictMode>,
)
