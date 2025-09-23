import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.tsx'
import {ThemeProvider} from 'next-themes';
import {Provider} from "react-redux";
import { DarkLightProvider } from './app/DarkLightTheme.tsx'
import { AuthProvider } from './app/AuthContext.tsx';
import { StakeProvider } from './app/StakeContext.tsx';
import { store } from './app/Store.ts';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
    <DarkLightProvider>
      <Provider store={store}>
      <AuthProvider>
          <StakeProvider>
            <App />  
          </StakeProvider>
       
      </AuthProvider>   
      </Provider>
     
     
    </DarkLightProvider>  
    </ThemeProvider>
      
  </StrictMode>,
)
