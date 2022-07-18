import React, { Fragment } from 'react'
import './style.css'
import Descriptions from './components/descriptions'
import Title from './components/title'
import Solutions from './solutions'
import Prices from './prices'
import Customers from './customers'
import Contact from './contact'

const Main = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <Title />
        </div>
        <div className="row mt-5 mb-3">
          <Descriptions />
        </div>
        <hr />
        <div className="row mt-5 justify-content-center">
          <Solutions id="#solutions" />
        </div>
        <hr />
        <div className="row mt-5">
          <Prices id="#prices" />
        </div>
        <hr />
        <div className="row mt-5">
          <Customers id="#customers" />
        </div>
        <hr />
        <div className="row mt-5  justify-content-center">
          <Contact id="#contact" />
        </div>
      </div>
    </Fragment>
  )
}

export default Main
