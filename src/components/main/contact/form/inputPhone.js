import React from 'react'
import PhoneInput from 'react-phone-number-input'

const Input = props => {
  return (
    <PhoneInput
      country="US"
      id={props.id}
      name={props.name}
      className={props.className}
      placeholder={props.placeholder}
      value={props.phone}
      onChange={props.setPhone}
    />
  )
}

export default Input
