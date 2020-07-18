import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import { graphql } from 'gatsby'

import pic11 from '../assets/images/pic11.jpg'

export default function Generic ({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
        <Helmet>
            <title>{post.frontmatter.title}</title>
            <meta name="description" content="Articulo" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                      <h1>Articulo {post.frontmatter.title}</h1>
                    </header>
      <span className="image main"><img src={pic11} alt="" /></span>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </section>
        </div>

    </Layout>
  )}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }






`
