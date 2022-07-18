import React from 'react'
import * as Icon from 'react-bootstrap-icons'

const Icons = () => {
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

  const onClickGithub = () => {
    window.open('https://github.com/', '_blank')
  }

  return (
    <div className="col-12">
      <span className="p-2 pointer icons">
        <Icon.Instagram onClick={onClickInstagram} />
      </span>
      <span className="p-2 pointer icons">
        <Icon.Twitter onClick={onClickTwitter} />
      </span>
      <span className="p-2 pointer icons">
        <Icon.Facebook onClick={onClickFacebook} />
      </span>
      <span className="p-2 pointer icons">
        <Icon.Linkedin onClick={onClickLinkedin} />
      </span>
      <span className="p-2 pointer icons">
        <Icon.Github onClick={onClickGithub} />
      </span>
    </div>
  )
}

export default Icons
