import { useTheme } from 'next-themes'
import { createContext } from 'react'

export const DarkLightContext = createContext<any>(null)
export const DarkLightProvider = ({children}: any) => {

    const {setTheme, systemTheme, theme} = useTheme()

    

  return (
    <DarkLightContext.Provider value={{setTheme, systemTheme, theme}}>
        {children}
    </DarkLightContext.Provider>
  )
}
