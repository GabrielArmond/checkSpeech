import React, { Fragment, useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import Recaptcha from '../recaptcha'
import axios from 'axios'
import { useCookie } from '../../../../hooks/useCookie'
import InputPhone from './inputPhone.js'

const getCountrys = async () => {
  let response = axios.get(
    'https://servicodados.ibge.gov.br/api/v1/localidades/paises'
  )
  let data = (await response).data
  return data
}

const InitialState = {
  name: '',
  email: '',
  phone: '',
  country: '',
  term: false
}

const Form = props => {
  const { createCookie } = useCookie()

  const [countrys, setCountrys] = useState([])
  const [fields, setFields] = useState(InitialState)
  const [isValid, setIsValid] = useState(false)
  const [phone, setPhone] = useState()

  const handleFieldsChange = event => {
    setFields({
      ...fields,
      term: isValid,
      phone,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleChangeAcceptTerm = () => {
    setFields({
      ...fields,
      term: !fields.term
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    try {
      props.addContact(fields)
      setFields(InitialState)
      createCookie(fields)
      alert('Dados enviados com sucesso!')
    } catch (e) {
      console.log(e)
    } finally {
      setPhone('')
    }
  }

  useEffect(() => {
    getCountrys().then(
      data => {
        setCountrys(data)
      },
      error => {
        console.log(error)
      }
    )
  }, [])

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener(
      'submit',
      event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      },
      false
    )
  })

  return (
    <Fragment>
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="form-group p-2">
          <label htmlFor="inputName" className="form-label">
            Nome*
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            placeholder="Seu nome"
            value={fields.name}
            required
            onChange={handleFieldsChange}
          />
          <div className="invalid-feedback">
            <strong>* Insira um nome</strong>
          </div>
        </div>
        <div className="form-group p-2">
          <label htmlFor="inputEmail" className="form-label">
            Endereço de email*
          </label>
          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Seu email"
            value={fields.email}
            required
            onChange={handleFieldsChange}
          />
          <div className="invalid-feedback">
            <strong>* Insira um email</strong>
          </div>
        </div>
        <div className="form-group p-2">
          <label htmlFor="inputTel" className="form-label">
            Telefone
          </label>
          <InputPhone
            type="text"
            id="inputTel"
            name="phone"
            placeholder="Seu telefone"
            phone={phone}
            setPhone={setPhone}
            className="form-control"
          />
        </div>
        <div className="form-group p-2">
          <label htmlFor="inputPais" className="form-label">
            País*
          </label>
          <select
            className="form-select"
            required
            onChange={handleFieldsChange}
            value={fields.country}
            name="country"
          >
            <option value="">Selecione um país</option>
            {countrys.map((country, index) => (
              <option key={index} value={country.nome}>
                {country.nome}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">
            <strong>* Você tem que selecionar um país</strong>
          </div>
        </div>
        <div className="form-group form-check p-4">
          <input
            type="checkbox"
            id="inputCheck"
            name="term"
            className="form-check-input p-1"
            checked={fields.term}
            value={fields.term}
            onChange={handleChangeAcceptTerm}
            required
          />
          <label className="form-check-label" htmlFor="inputCheck">
            Eu concordo com a Política de Privacidade.
          </label>
          <div className="invalid-feedback">
            <strong>* Você precisa de aceitar os termos.</strong>
          </div>
        </div>
        <div className="form-group p-2">
          <Recaptcha />
        </div>

        <button type="submit" className="btn btn-card text-light p-2">
          <strong>
            Enviar informações <Icon.SendFill />
          </strong>
        </button>
      </form>
    </Fragment>
  )
}

export default Form
