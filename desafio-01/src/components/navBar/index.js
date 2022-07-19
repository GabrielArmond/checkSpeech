import React, { Fragment, useState } from 'react'
import './style.css'
import LogoSite from '../../assets/images/logoSite.png'
import * as Icon from 'react-bootstrap-icons'

const Navigator = () => {
  const [showNavSecond, setShowNavSecond] = useState(false)

  const goToHome = () => {
    window.location.href = '/'
  }

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark align-items-center fixed-top navigator">
        <div className="container-fluid">
          <div className="col-md-2 col-sm-6 col-6 pointer" onClick={goToHome}>
            <img src={LogoSite} alt="logo" height={50} />
            <div className="h6 roboto text-dark">
              <span>
                <strong>CheckSpeech IA</strong>
              </span>
            </div>
          </div>
          <button
            className="navbar-toggler btn bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end roboto ${
              showNavSecond ? 'show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav text-bold">
              <li className="nav-item">
                <strong>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#solutions"
                  >
                    Soluções &nbsp;
                    <Icon.Laptop />
                  </a>
                </strong>
              </li>
              <li className="nav-item">
                <strong>
                  <a className="nav-link" href="#prices">
                    Preços &nbsp; <Icon.CashStack />
                  </a>
                </strong>
              </li>
              <li className="nav-item">
                <strong>
                  <a className="nav-link" href="#customers">
                    Clientes &nbsp;
                    <Icon.Person />
                  </a>
                </strong>
              </li>
              <li className="nav-item">
                <strong>
                  <a className="nav-link" href="#contact">
                    Contato &nbsp;
                    <Icon.Telephone />
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navigator
