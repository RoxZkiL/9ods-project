import React from 'react'
import './Styles/Contacto.css';

const Formulario = () => {
  return (
    <div className='fondo'>
    <div className="form-container">
    <div className="info-column">
      <h1 className='texto'>Contacto</h1>
      <p>Dirección: Santiago, Chile</p>
      <p>Redes Sociales:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ display: 'inline', marginRight: 10 }}>
          <a href="https://www.facebook.com" style={{ textDecoration: 'none', color: 'black', fontSize: '24px' }}>
            <img src="https://img.icons8.com/?size=100&id=435&format=png&color=1A1A1A" alt="Facebook" width="24" height="24" />
          </a>
        </li>
        <li style={{ display: 'inline', marginRight: 10 }}>
          <a href="https://x.com/" style={{ textDecoration: 'none', color: 'black', fontSize: '24px' }}>
            <img src="https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=1A1A1A" alt="X" width="24" height="24" />
          </a>
        </li>
        <li style={{ display: 'inline', marginRight: 10 }}>
          <a href="https://www.instagram.com" style={{ textDecoration: 'none', color: 'black', fontSize: '24px' }}>
            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=1A1A1A" alt="Instagram" width="24" height="24" />
          </a>
        </li>
      </ul>
    </div>
    <div className="form-column">
      <h2 className='texto'>Envía tu mensaje</h2>
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