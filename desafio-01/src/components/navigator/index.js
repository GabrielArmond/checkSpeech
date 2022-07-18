import React from 'react'
import './style.css'
import LogoSite from '../../assets/images/logoSite.png'
import * as Icon from 'react-bootstrap-icons'

const Navigator = () => {
  const goToHome = () => {
    window.location.href = '/'
  }
  return (
    <div className="container fixed-top navigator">
      <div className="row align-items-center">
        <div
          className="col-md-2 col-sm-12 col-12 py-1 pointer"
          onClick={goToHome}
        >
          <img src={LogoSite} alt="logo" height={50} />
          <span>CheckSpeech IA</span>
        </div>

        <div className="col-md-10 col-sm-12 text-end">
          <span className="p-3 pointer nav-item">
            Soluções &nbsp;
            <Icon.Laptop />
          </span>
          <span className="p-3 pointer nav-item">
            Preços &nbsp; <Icon.CashStack />
          </span>
          <span className="p-3 pointer nav-item">
            Clientes &nbsp;
            <Icon.Person />
          </span>
          <span className="p-3 pointer nav-item">
            Contate-nos &nbsp;
            <Icon.Telephone />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navigator
