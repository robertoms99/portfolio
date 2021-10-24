import { useEffect } from 'react'
import { STORAGE_THEME_VALUES } from '../../../config/contants'

const useTheme = (theme: string) => {
  useEffect(() => {
    const isDark = theme === STORAGE_THEME_VALUES.dark
    document.body.classList.toggle('dark', isDark)
    setLocalStorageThemeVariable(isDark)
  }, [theme])

  const setLocalStorageThemeVariable = (isDark: boolean) => {
    window.localStorage.setItem(
      'theme',
      isDark ? STORAGE_THEME_VALUES.dark : STORAGE_THEME_VALUES.light
    )
  }
}

export default useTheme
