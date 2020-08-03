import React from 'react'

const Banner = props => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>34° Sur</h1>
            </header>
            <div className="content">
                <p>
                    es un sitio para documentar proyectos que estamos haciendo en el barco, <br />
                    compartir cosas que aprendimos o que nos interesan.
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
