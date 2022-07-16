import React, { Fragment } from 'react'
import './style.css'
import Descriptions from './components/descriptions'
import Title from './components/title'
import Solutions from './solutions'

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
          <Solutions />
        </div>
      </div>
    </Fragment>
  )
}

export default Main
