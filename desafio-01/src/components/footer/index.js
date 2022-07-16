import React, { Fragment } from 'react'
import './style.css'
import * as Icon from 'react-bootstrap-icons'

const Footer = () => {
  const onClickInstagram = () => {
    window.open('https://www.instagram.com/', '_blank')
  }
  const onClickFacebook = () => {
    window.open('https://www.facebook.com/', '_blank')
  }
  const onClickTwitter = () => {
    window.open('https://twitter.com/', '_blank')
  }

  const onClickLinkedin = () => {
    window.open('https://www.linkedin.com/', '_blank')
  }

  return (
    <Fragment>
      <div className="footer">
        <div className="row justify-content-center mb-3">
          <div className="col-12">
            Logo
            <p className="title-footer">CheckSpeech IA</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span className="p-5">
              <a className="text-decoration-none" href="/">
                Soluções
              </a>
            </span>
            <span className="p-5">
              <a className="text-decoration-none" href="/">
                Preços
              </a>
            </span>
            <span className="p-5">
              <a className="text-decoration-none" href="/">
                Customers
              </a>
            </span>
            <span className="p-5">
              <a className="text-decoration-none" href="/">
                Contate-nos
              </a>
            </span>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between">
          <div className="col-6">
            <span className="copyright text-secondary">© - Gabriel Guerra</span>
          </div>
          <div className="col-6">
            <span className="p-2 pointer">
              <Icon.Instagram onClick={onClickInstagram} />
            </span>
            <span className="p-2 pointer">
              <Icon.Twitter onClick={onClickTwitter} />
            </span>
            <span className="p-2 pointer">
              <Icon.Facebook onClick={onClickFacebook} />
            </span>
            <span className="p-2 pointer">
              <Icon.Linkedin onClick={onClickLinkedin} />
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
