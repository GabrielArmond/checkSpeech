import React, { createContext, useContext, useEffect, useState } from 'react'
import { useCookies, CookiesProvider } from 'react-cookie'

export const CookieContext = createContext({})

export function CookieContextProvider({ children }) {
  const [isAcceptCookie, setIsAcceptCookie] = useState(true)
  const [cookies, setCookie] = useCookies(['user'])
  const [showCookie, setShowCookie] = useState(true)

  useEffect(() => {
    if (cookies['@checkSpeech:acceptCookie']) {
      setShowCookie(false)
    }
  }, [cookies])

  const createCookie = fields => {
    if (isAcceptCookie) {
      setCookie('@checkSpeech:lead', JSON.stringify(fields), { path: '/' })
    }
  }

  const handleAcceptCookie = boolean => {
    setIsAcceptCookie(boolean)
    setCookie('@checkSpeech:acceptCookie', isAcceptCookie, { path: '/' })
    setShowCookie(false)
  }

  return (
    <CookieContext.Provider
      value={{ handleAcceptCookie, createCookie, showCookie }}
    >
      <CookiesProvider>{children}</CookiesProvider>
    </CookieContext.Provider>
  )
}

export function useCookie() {
  return useContext(CookieContext)
}
