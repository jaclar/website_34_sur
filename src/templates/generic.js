import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import Img from "gatsby-image"
import { Link } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql } from 'gatsby'

const shortcodes = { Link } // Provide common components here



export default function Generic ({ data: { mdx } }) {
  let FeaturedImage = () => (<span />)

  if (mdx.frontmatter.featuredImage) {
    FeaturedImage = () => (<span className="image main">
                           <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
                           </span>);
  }

  return (
    <Layout>
      <Helmet>
        <title>{mdx.frontmatter.title}</title>
        <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{mdx.frontmatter.title}</h1>
            </header>
            <FeaturedImage />
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>

          </div>
        </section>
      </div>

    </Layout>
  )}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
