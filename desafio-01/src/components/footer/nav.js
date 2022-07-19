import React, { Fragment } from 'react'
import * as Icon from 'react-bootstrap-icons'

const Nav = () => {
  return (
    <Fragment>
      <div className="col-12 col-md-3 col-sm-12">
        <a className="anchor pointer px-5" href="#solutions">
          <strong>
            Soluções &nbsp;
            <Icon.Laptop />
          </strong>
        </a>
      </div>
      <div className="col-12 col-md-3 col-sm-12">
        <a className="anchor pointer px-5" href="#prices">
          <strong>
            Preços &nbsp; <Icon.CashStack />
          </strong>
        </a>
      </div>
      <div className="col-12 col-md-3 col-sm-12">
        <a className="anchor  pointer px-5" href="#customers">
          <strong>
            Clientes &nbsp;
            <Icon.Person />
          </strong>
        </a>
      </div>
      <div className="col-12 col-md-3 col-sm-12">
        <a className="anchor p-5 pointer px-5" href="#contact">
          <strong>
            Contato &nbsp;
            <Icon.Telephone />
          </strong>
        </a>
      </div>
    </Fragment>
  )
}

export default Nav
