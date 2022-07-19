import React, { Fragment } from 'react'
import LogoSite from '../../assets/images/logoSite.png'

const Titles = () => {
  const goToHome = () => {
    window.location.href = '/'
  }
  return (
    <Fragment>
      <div className="col-12 py-2 pointer" onClick={goToHome}>
        <img src={LogoSite} alt="logo" height={50} />
        <p className="h6 title-footer roboto">
          <strong>CheckSpeech IA</strong>
        </p>
      </div>
    </Fragment>
  )
}

export default Titles
