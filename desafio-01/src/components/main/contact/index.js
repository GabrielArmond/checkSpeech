import React, { Fragment, useState } from 'react'
import Form from './form'

const Contact = () => {
  const [contact, setContact] = useState([])

  const addContact = new_contact => {
    setContact([...contact, new_contact])
  }

  return (
    <Fragment>
      <div className="col-12 mb-2">
        <span className="subtitle">ENTRAR EM</span>
        <p className="title">Contato</p>
      </div>
      <div className="col-md-6 col-12 col-sm-12 text-start">
        <Form addContact={addContact} />
      </div>
    </Fragment>
  )
}

export default Contact
