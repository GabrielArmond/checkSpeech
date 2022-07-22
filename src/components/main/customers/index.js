import React, { Fragment } from 'react'
import Slides from './slides'
import * as Icon from 'react-bootstrap-icons'

const Customers = () => {
  return (
    <Fragment>
      <div className="col-12 col-md-12 col-sm-12 mb-2" id="customers">
        <span className="subtitle">ALGUNS DE NOSSOS</span>
        <p className="title">Clientes</p>
        <div className="row justify-content-center">
          <Slides />
        </div>
      </div>
      <div className="col-12 col-md-12 col-sm-12 mb-5">
        <span className="roboto fw-bold">
          Arraste para ver mais <Icon.ArrowRightCircle />
        </span>
      </div>
    </Fragment>
  )
}

export default Customers
