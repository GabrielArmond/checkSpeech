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
      <div className="container mt-5 full-width">
        <div className="row">
          <Title />
        </div>
        <div className="row m-5 mb-3">
          <Descriptions />
        </div>

        <div className="row mt-5 justify-content-center">
          <Solutions />
        </div>

        <div className="row mt-5">
          <Prices />
        </div>

        <div className="row mt-5">
          <Customers />
        </div>

        <div className="row mt-5  justify-content-center">
          <Contact />
        </div>
      </div>
    </Fragment>
  )
}

export default Main
