import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import picSamurai from '../assets/images/landing/samurai.jpg'
import picNosotros from '../assets/images/landing/nosotros.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="34 Sur"
          meta={[
            { name: 'description', content: 'Una fuente de información sobre veleros, navegación y otras boludeces' },

            { name: 'keywords', content: 'sailing, velero, sailboat, navegación, nautica' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${picSamurai})` }}>
              <Link
                aria-label="Vinculo a descripción del velero"
                to="/velero"
                className="link primary"
              >
                <header className="major">
                <h3>Samurai</h3>
                <p>El Velero - 侍</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${picNosotros})` }}>
              <Link
                aria-label="Vinculo a la pagina sobre nosotros"
                to="/nosotros"
                className="link primary"
              >
                <header className="major">
                  <h3>Nosotros</h3>
                  <p>La tripulación</p>
                </header>
              </Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
