import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { graphql } from 'gatsby'

export default function Generic ({ data }) {
  const post = data.mdx
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
        <Helmet>
            <title>{post.frontmatter.title}</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                      <h1>{post.frontmatter.title}</h1>
                    </header>
      <span className="image main"><Img fluid={featuredImgFluid} /></span>

      <MDXRenderer>{post.body}</MDXRenderer>
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
