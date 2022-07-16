import React, { Fragment } from 'react'
import logo from '../../../assets/images/logo.svg'
import logo2 from '../../../assets/images/logo2.svg'
import logo3 from '../../../assets/images/logo3.svg'
import logo4 from '../../../assets/images/logo4.svg'
import logo5 from '../../../assets/images/logo5.svg'
import logo6 from '../../../assets/images/logo6.svg'
import logo7 from '../../../assets/images/logo7.svg'
import logo8 from '../../../assets/images/logo8.svg'

const Customers = () => {
  let images = [logo, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
  return (
    <Fragment>
      <div className="col-12 mb-2">
        <span className="subtitle">ALGUNS DE NOSSOS</span>
        <p className="title">Clientes</p>
      </div>
      {images.map((image, index) => (
        <div key={index} className="col-md-3 col-xs-12 col-sm-12">
          <img src={image} alt="customer" className="img-fluid" />
        </div>
      ))}
    </Fragment>
  )
}

export default Customers
