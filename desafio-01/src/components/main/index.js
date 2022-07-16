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
        <div className="row mt-5 justify-content-center" id="#solutions">
          <Solutions />
        </div>
        <hr />
        <div className="row mt-5" id="#prices">
          <Prices />
        </div>
        <hr />
        <div className="row mt-5" id="#customers">
          <Customers />
        </div>
        <hr />
        <div className="row mt-5  justify-content-center" id="#contact">
          <Contact />
        </div>
      </div>
    </Fragment>
  )
}

export default Main
