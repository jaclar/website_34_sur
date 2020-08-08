import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
            <a href="https://www.instagram.com/34_sur" aria-label="Instagram" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/jaclar" aria-label="GitHub" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <div className="copyright">
	  Contenido: <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Licencia de Creative Commons" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><span> </span>
	  <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Reconocimiento 4.0</a> - Lars Jacob & Gisela Cardozo<br />
          Diseño: <a href="https://html5up.net">HTML5 UP</a> con algunos cambios.
      </div>
    </div>
  </footer>
)

export default Footer
