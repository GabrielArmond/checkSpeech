import React, { Fragment } from 'react'
import { useCookie } from '../../hooks/useCookie'
import './style.css'

const Cookies = () => {
  const { handleAcceptCookie } = useCookie()

  return (
    <>
      <div className="row cookie-bar px-5 py-2 fixed-bottom align-items-center">
        <div className="col-12 col-md-6 col-sm-12">
          <span className="text-start">
            Este website usa cookies necessários para o funcionamento do mesmo.
          </span>
        </div>
        <div className="col-12 col-md-6 col-sm-12">
          <button
            className="btn btn-outline-light m-2"
            onClick={() => handleAcceptCookie(false)}
          >
            Rejeitar cookies
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => handleAcceptCookie(true)}
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </>
  )
}

export default Cookies
