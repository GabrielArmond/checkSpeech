import React, { Fragment } from 'react'
import '../style.css'

const Solutions = () => {
  let cards = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Transcrição de Áudio Assíncrono (áudio pré-gravado)',
      description:
        'API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma      das melhores engines de reconhecimento de fala do mundo! O recurso      speech-to-text assíncrono é um parceiro estratégico para o seu      negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.'
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Transcrição de Áudio em tempo real (streaming)',
      description:
        'O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.'
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Identificação de Idiomas em áudios',
      description:
        'Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.'
    },
    {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2019/12/04/04/18/camera-4671614__340.jpg',
      title: 'Análise de sentimento a partir do áudio (áudio pré-gravado):',
      description:
        'Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.'
    }
  ]

  return (
    <Fragment>
      <div className="col-12 mb-5">
        <p className="subtitle">NOSSAS</p>
        <p className="title">Soluções</p>
      </div>
      {cards.map(card => (
        <div className="col-5 p-2">
          <div key={card.id} className="card">
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
