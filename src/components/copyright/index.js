import React, { Fragment } from 'react'
import './style.css'

const Copyright = () => {
  const openGithub = () => {
    window.open('https://github.com/GabrielArmond')
  }

  return (
    <Fragment>
      <span
        className="copyright text-secondary text-center pointer"
        onClick={openGithub}
      >
        Copyright © 2022 Gabriel Guerra
      </span>
    </Fragment>
  )
}

export default Copyright
