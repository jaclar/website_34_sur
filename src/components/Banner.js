import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>34° Sur</h1>
      </header>
      <div className="content">
        <p>
          Una pagina con informacion util sobre
          <br />
          navegacion y aspectos tecnicos de veleros.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" name="Get Started" className="button next scrolly">
              Ver Articulos
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
