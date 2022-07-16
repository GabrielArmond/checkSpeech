import React, { createRef, Fragment } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const Recaptcha = props => {
  const recaptchaRef = createRef()

  const onChange = value => {
    const recaptchaValue = recaptchaRef.current.getValue()
    return recaptchaValue
  }

  const sitekey = '6LceSm4eAAAAAMcvDhlgKyNkqCWgv9DTFZ-u1zfR'

  return (
    <Fragment>
      <div className="col-12 mb-2">
        <ReCAPTCHA ref={recaptchaRef} sitekey={sitekey} onChange={onChange} />
      </div>
    </Fragment>
  )
}

export default Recaptcha
