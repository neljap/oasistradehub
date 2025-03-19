import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from 'next-themes';
import { DarkLightProvider } from './app/DarkLightTheme.tsx'
import { AuthProvider } from './app/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute='class' enableSystem={true}>
    <DarkLightProvider>
      <AuthProvider>
     <App />    
      </AuthProvider>
     
    </DarkLightProvider>  
    </ThemeProvider>
      
  </StrictMode>,
)
