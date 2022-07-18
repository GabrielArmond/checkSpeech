import React, { Fragment } from 'react'
import '../style.css'

const Solutions = () => {
  let cards = [
    {
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Transcrição de Áudio Assíncrono (áudio pré-gravado)',
      description:
        'API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma      das melhores engines de reconhecimento de fala do mundo! O recurso      speech-to-text assíncrono é um parceiro estratégico para o seu      negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Transcrição de Áudio em tempo real (streaming)',
      description:
        'O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Identificação de Idiomas em áudios',
      description:
        'Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Análise de sentimento a partir do áudio (áudio pré-gravado):',
      description:
        'Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.'
    }
  ]

  return (
    <Fragment>
      <div className="col-12 mb-2">
        <span className="subtitle">NOSSAS</span>
        <p className="title">Soluções</p>
      </div>
      {cards.map((card, index) => (
        <div key={index} className="col-md-3 col-sm-12 col-12 p-2">
          <div className="card">
            <img
              className="card-img-top"
              src={card.img}
              alt="Imagem de capa do card"
            />
            <div className="card-body">
              <p className="card-title mb-2">{card.title}</p>
              <p className="card-text m-2">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  )
}

export default Solutions
