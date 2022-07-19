import React, { Fragment } from 'react'
import './style.css'
import * as Icon from 'react-bootstrap-icons'

const Prices = () => {
  let prices = [
    {
      title: 'Beginner',
      price: 'R$29 por mês ou R$328 para uma compra anual',
      topics: [
        'Transcrição de Áudio Assíncrono  - 120 minutos (R$0,20 / minuto excedente)',
        'Transcrição de Áudio em tempo real  - 90 minutos (R$0,40 / minuto excedente)',
        'Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)',
        'Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)'
      ],
      button: false,
      style: 'begginer-card',
      icon: <Icon.Cash />
    },
    {
      title: 'Business',
      price: 'R$44 por mês ou R$499 para uma compra anual',
      topics: [
        'Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto excedente)',
        'Transcrição de Áudio em tempo real  - 120 minutos (R$0,40 / minuto excedente)',
        'Identificação de Idiomas em áudios - 500 minutos (R$0,03 / minuto excedente)',
        'Análise de sentimento a partir do áudio (áudio pré-gravado) - 200 minutos (R$0,35 / minuto excedente)'
      ],
      button: false,
      style: 'business-card',
      icon: <Icon.CashCoin />
    },
    {
      title: 'Enterprise',
      price: 'Preço sob consulta',
      topics: [
        'Preços especiais para grandes volumes',
        'Prioridade no suporte técnico',
        'Gestor de conta dedicado'
      ],
      button: true,
      style: 'enterprise-card',
      icon: <Icon.CashStack />
    }
  ]

  return (
    <Fragment>
      <div className="col-12 mb-2" id="prices">
        <span className="subtitle">NOSSOS</span>
        <p className="title">Preços</p>
      </div>
      {prices.map((price, index) => (
        <div key={index} className="col-md-4 p-2">
          <div className={`card roboto ${price.style}`}>
            <h5 className="card-header">
              <strong>
                {price.title} {price.icon}
              </strong>
            </h5>
            <div className="card-body">
              <h5 className="card-title">{price.price}</h5>
              {price.topics.map((topic, index) => (
                <ul key={index} className="card-text text-start">
                  <li>{topic}</li>
                </ul>
              ))}
              {price.button ? (
                <a href="#contact" className="btn btn-card text-light">
                  <strong>
                    Consultar <Icon.Person />
                  </strong>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default Prices
