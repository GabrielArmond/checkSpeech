import React, { Fragment } from 'react'
import './style.css'
import Icons from './icons'
import Titles from './titles'
import Nav from './nav'

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="row justify-content-center mb-3">
          <Titles />
        </div>
        <div className="row">
          <Nav />
        </div>
        <div className="divisor justify-content-center mx-auto my-3"></div>
        <div className="row justify-content-center pb-1">
          <Icons />
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
