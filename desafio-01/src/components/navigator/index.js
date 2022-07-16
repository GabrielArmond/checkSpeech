import React from 'react'
import './style.css'

const Navigator = () => {
  return (
    <div className="container fixed-top">
      <div className="row align-items-center ">
        <div className="col-md-12">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Soluções
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Preços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigator
