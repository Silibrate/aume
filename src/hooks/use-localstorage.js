import { useState } from "react";

const UseLocalStorage = (key, defaultValue) => {

  const [storeValue, setStoreValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)

      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue))
      }
    } catch (err) {
      return defaultValue;
    }
  })

  const setValue = (newValue => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (err) {
      console.log(err)
    }
    setStoreValue(newValue)
  })

  return [storeValue, setValue]
}

export default UseLocalStorage;