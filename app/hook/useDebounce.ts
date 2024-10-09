import { useEffect, useState } from "react"

// Custom hook for debouncing a value
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Set a timeout to update the debounced value after the delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup the timeout if the value changes before the delay is over
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
