import { createContext, useContext, useState, useEffect } from 'react'
import { Theme } from '@radix-ui/themes'

const ThemeContext = createContext({
  appearance: 'light',
  setAppearance: () => {}
})

export function ThemeProvider({ children }) {  // Fixed destructuring of children prop
const [appearance, setAppearance] = useState(() => {
    // Check localStorage on initial render
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', appearance)
  }, [appearance])

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