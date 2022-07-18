import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Nav = () => {
  return (
    <div className="col-md-12 col-sm-12 col-12">
      <span className="transition-anchor pointer px-5" href="#solutions">
        Soluções &nbsp;
        <Icon.Laptop />
      </span>
      <span className="transition-anchor pointer px-5" href="#prices">
        Preços &nbsp; <Icon.CashStack />
      </span>
      <span className="transition-anchor pointer px-5" href="#customers">
        Clientes &nbsp;
        <Icon.Person />
      </span>
      <span
        className="p-5 transition-anchor pointer px-5"
        onClick={() => window.location.href('#contact')}
      >
        Contate-nos &nbsp;
        <Icon.Telephone />
      </span>
    </div>
  )
}

export default Nav
