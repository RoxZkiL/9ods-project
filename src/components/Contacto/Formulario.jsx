import React from 'react'
import './Styles/Contacto.css';

const Formulario = () => {
  return (
    <div className='fondo'>
    <div className="form-container">
    <div className="info-column">
      <h2>Contacto</h2>
      <p>Dirección: Santiago, Chile</p>
      <p>Redes Sociales:</p>
      <ul>
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.twitter.com">Twitter</a></li>
        <li><a href="https://www.instagram.com">Instagram</a></li>
      </ul>
    </div>
    <div className="form-column">
      <h2>Envía tu mensaje</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Formulario