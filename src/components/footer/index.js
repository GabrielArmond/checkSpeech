import React, { Fragment } from 'react'
import './style.css'
import Icons from './icons'
import Titles from './titles'
import Nav from './nav'
import Copyright from '../copyright'

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="row justify-content-center mb-3">
          <Titles />
        </div>
        <div className="row justify-content-center">
          <Nav />
        </div>
        <div className="divisor justify-content-center mx-auto my-3"></div>
        <div className="row justify-content-center pb-1">
          <Icons />
        </div>
        <div className="row mt-5 mx-5 p-3">
          <div className="col-md-12 col-12 col-sm-12">
            <Copyright />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
