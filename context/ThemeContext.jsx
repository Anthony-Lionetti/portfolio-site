import { createContext, useContext, useState } from 'react'
import { Theme } from '@radix-ui/themes'

const ThemeContext = createContext({
  appearance: 'light',
  setAppearance: () => {}
})

export function ThemeProvider({ children }) {  // Fixed destructuring of children prop
  const [appearance, setAppearance] = useState('dark')

  return (
    <ThemeContext.Provider value={{ appearance, setAppearance }}>
      <Theme appearance={appearance} accentColor='green' grayColor='gray' radioGroup='medium'>
        {children}
      </Theme>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}