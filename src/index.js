import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { CookieContextProvider } from './hooks/useCookie'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-phone-number-input/style.css'
import 'swiper/css/bundle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CookieContextProvider>
    <App />
  </CookieContextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
