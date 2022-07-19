import React, { Fragment } from 'react'
import { useCookie } from '../../hooks/useCookie'
import './style.css'

const Cookies = () => {
  const { handleAcceptCookie } = useCookie()

  return (
    <Fragment>
      <div className="row cookie-bar px-5 py-2 align-items-center">
        <div className="col-12 col-md-8 col-sm-12 pl-5">
          <span className="text-start">
            Usamos cookies necessários para o funcionamento do site.
          </span>
          <p>
            Ao continuar a usar este site, você concorda com nossos cookies.
          </p>
          <p>Leia nossa política para saber mais.</p>
          <a href="/" className="text-light">
            Saber mais
          </a>
        </div>
        <div className="col-12 col-md-4 col-sm-12">
          <button
            className="btn btn-outline-light p-2 m-2"
            onClick={() => handleAcceptCookie(false)}
          >
            Rejeitar cookies
          </button>
          <button
            className="btn btn-primary p-2"
            onClick={() => handleAcceptCookie(true)}
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Cookies
