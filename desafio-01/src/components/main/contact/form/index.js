import React, { Fragment, useEffect, useState } from 'react'
import Recaptcha from '../recaptcha'
import axios from 'axios'
import { useCookies } from 'react-cookie'

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
  tel: '',
  country: '',
  term: ''
}

const Form = props => {
  const [countrys, setCountrys] = useState([])
  const [fields, setFields] = useState(InitialState)
  const [cookies, setCookie] = useCookies(['user'])

  const handle = () => {
    setCookie('name', fields.name, { path: '/' })
    setCookie('email', fields.email, { path: '/' })
    setCookie('tel', fields.tel, { path: '/' })
  }

  const handleFieldsChange = event => {
    setFields({
      ...fields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    try {
      props.addContact(fields)
      setFields(InitialState)
    } catch (e) {
      console.log(e)
    } finally {
      event.preventDefault()
      handle()
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
          <div className="invalid-feedback">Insira um nome</div>
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
          <div className="invalid-feedback">Insira um email</div>
        </div>
        <div className="form-group p-2">
          <label htmlFor="inputTel" className="form-label">
            Telefone
          </label>
          <input
            type="text"
            id="inputTel"
            name="tel"
            className="form-control"
            placeholder="Seu telefone"
            value={fields.tel}
            onChange={handleFieldsChange}
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
          <div className="invalid-feedback">Você tem que elecionar um país</div>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            id="inputCheck"
            name="term"
            className="form-check-input"
            checked={fields.term}
            onChange={handleFieldsChange}
            required
          />
          <label className="form-check-label" htmlFor="inputCheck">
            Eu concordo com a Política de Privacidade.
          </label>
          <div className="invalid-feedback">
            Você precisa de aceitar os termos.
          </div>
        </div>
        <div className="form-group p-2">
          <Recaptcha />
        </div>

        <button type="submit" className="btn btn-success p-2">
          Entrar em contato
        </button>
      </form>
    </Fragment>
  )
}

export default Form
