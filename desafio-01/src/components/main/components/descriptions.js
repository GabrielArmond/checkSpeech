import React, { Fragment } from 'react'

const Descriptions = () => {
  return (
    <Fragment>
      <div className="col-md-6 col-12 col-sm-12">
        <div className="card text-center">
          <div className="card-body description">
            <div className="card-text">
              O CheckSpeech AI é um conjunto de APIs de conversão de fala em
              textos, bem como a interpretação do sentimento dominante nos
              dizeres.
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12 col-sm-12">
        <div className="card text-center">
          <div className="card-body description">
            <div className="card-text">
              Nossa solução é treinada em mais de 500.000 horas de áudios,
              transcritos por humanos de uma ampla variedade de idades,
              nacionalidades, sotaques e níveis de instruções A API é
              comercializada no modelo SAAS (software as a service).
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Descriptions
