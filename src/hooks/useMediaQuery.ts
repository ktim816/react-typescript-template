import { useEffect, useState } from 'react'
import { screens } from 'tailwindcss/defaultTheme'

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const useMediaQuery = (size: Size): boolean => {
  const getMatches = (size: Size): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(`(min-width: ${screens[size]})`).matches
    }

    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(size))

  function handleChange() {
    setMatches(getMatches(size))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(`(min-width: ${screens[size]})`)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [size])

  return matches
}

export default useMediaQuery
